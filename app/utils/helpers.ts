export function formatToTwoDecimals(value: number | null | undefined): string {
  if (typeof value !== "number" || isNaN(value)) return "0.00";
  return value.toFixed(2);
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Modern clipboard API
    if (!text) return false;
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback for older browsers
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed"; // avoid scrolling
    textarea.style.left = "-9999px";
    textarea.style.top = "0";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    const success = document.execCommand("copy");
    document.body.removeChild(textarea);

    return success;
  } catch {
    return false;
  }
}

type CryptoValue = {
  [key: string]: number; // key is crypto symbol, value is its rate in NGN
};

// Example static rates in Naira (replace with real-time values if needed)
const cryptoRatesInNaira: CryptoValue = {
  BTC: 142_000_000,
  ETH: 11_500_000,
  USDT: 780, // 1 USDT ≈ 780 NGN
  USDC: 780,
  BNB: 70_000,
  SOL: 8_500,
  XRP: 320,
  LTC: 5_500,
  DOGE: 25,
  "USDT - CELO": 780,
  "USDT - TON": 780,
  "USDT - BNB": 780,
};

/**
 * Converts a crypto amount to Naira
 * @param cryptoSymbol - the symbol of the cryptocurrency (e.g., BTC)
 * @param amount - the amount of crypto to convert
 * @returns equivalent value in Naira
 */
export function convertCryptoToNaira(
  cryptoSymbol: string,
  amount: number
): number {
  const rate = cryptoRatesInNaira[cryptoSymbol];
  if (!rate) {
    return 0;
    // throw new Error(`Exchange rate for ${cryptoSymbol} not found.`);
  }
  return amount * rate;
}

export function formatNumberWithCommas(value: number): string {
  return new Intl.NumberFormat("en-NG").format(value);
}

import BnbIcon from "../assets/icons/BnbIcon";
import Ethereum from "../assets/icons/Ethereum";
import MetaMask from "../assets/icons/MetaMask";
import NGN from "../assets/icons/NGN";
import Rainbow from "../assets/icons/Rainbow";
import Ton from "../assets/icons/Ton";
import UsdtCelo from "../assets/icons/UsdtCelo";
import WalletConnect from "../assets/icons/WalletConnect";
import WalletIcon from "../assets/icons/WalletIcon";
import {
  CryptoToCashTypes,
  Option,
  RecepientBankDetailsFormValues,
  RecepientContactDetailsFormValues,
  TabsProps,
} from "../types";
import { FaBitcoin } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import {
  SiTether,
  SiKucoin,
  SiBinance,
  SiSolana,
  SiRipple,
  SiLitecoin,
  SiDogecoin,
} from "react-icons/si";

export const currencySwapTabs: TabsProps["tabNames"] = [
  "Crypto to cash",
  "Cash to crypto",
  "Crypto to fiat loan",
];

export const initialCryptoToCashValues: CryptoToCashTypes = {
  amountPaid: 0,
  amountReceived: 0,
  walletPaidFrom: "",
  walletPaidTo: "",
  cryptoCurrency: "",
  fiatCurrency: "",
};

export const walletOptions: Array<Option> = [
  {
    label: "Metamask",
    value: "Metamask",
    icon: MetaMask,
  },
  {
    label: "Rainbow",
    value: "Rainbow",
    icon: Rainbow,
  },
  {
    label: "WalletConnect",
    value: "WalletConnect",
    icon: WalletConnect,
  },
  {
    label: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    value: "Others",
    icon: WalletIcon,
  },
];

export const fiatOptions: Array<Option> = [
  {
    label: "NGN",
    value: "NGN",
    icon: NGN,
  },
];

export const cryptoCurrencies: Option[] = [
  {
    label: "Bitcoin",
    value: "BTC",
    icon: FaBitcoin,
  },
  {
    label: "Ethereum",
    value: "ETH",
    icon: Ethereum,
  },
  {
    label: "Tether (USDT)",
    value: "USDT",
    icon: SiTether,
  },
  {
    label: "USD Coin",
    value: "USDC",
    icon: FaCoins,
  },
  {
    label: "Binance Coin",
    value: "BNB",
    icon: SiBinance,
  },
  {
    label: "Solana",
    value: "SOL",
    icon: SiSolana,
  },
  {
    label: "Ripple",
    value: "XRP",
    icon: SiRipple,
  },
  {
    label: "Litecoin",
    value: "LTC",
    icon: SiLitecoin,
  },
  {
    label: "Dogecoin",
    value: "DOGE",
    icon: SiDogecoin,
  },
  {
    label: "USDT - CELO",
    value: "USDT - CELO",
    icon: UsdtCelo,
  },
  {
    label: "USDT - TON",
    value: "USDT - TON",
    icon: Ton,
  },
  {
    label: "USDT - BNB",
    value: "USDT - BNB",
    icon: BnbIcon,
  },
].sort((a, b) => a.label.localeCompare(b.label));

export const initialRecepientDetails: RecepientBankDetailsFormValues = {
  bank: "",
  accountNumber: "",
  accountName: "",
};

export const nigerianBanks: Option[] = [
  { label: "Access Bank", value: "Access Bank" },
  { label: "Citibank Nigeria", value: "Citibank Nigeria" },
  { label: "Ecobank Nigeria", value: "Ecobank Nigeria" },
  { label: "Fidelity Bank", value: "Fidelity Bank" },
  { label: "First Bank of Nigeria", value: "First Bank of Nigeria" },
  { label: "First City Monument Bank (FCMB)", value: "FCMB" },
  { label: "Globus Bank", value: "Globus Bank" },
  { label: "Guaranty Trust Bank (GTBank)", value: "GTBank" },
  { label: "Heritage Bank", value: "Heritage Bank" },
  { label: "Keystone Bank", value: "Keystone Bank" },
  { label: "Lotus Bank", value: "Lotus Bank" },
  { label: "Optimus Bank", value: "Optimus Bank" },
  { label: "Polaris Bank", value: "Polaris Bank" },
  { label: "Providus Bank", value: "Providus Bank" },
  { label: "Stanbic IBTC Bank", value: "Stanbic IBTC Bank" },
  {
    label: "Standard Chartered Bank Nigeria",
    value: "Standard Chartered Bank Nigeria",
  },
  { label: "Sterling Bank", value: "Sterling Bank" },
  { label: "SunTrust Bank Nigeria", value: "SunTrust Bank Nigeria" },
  { label: "Titan Trust Bank", value: "Titan Trust Bank" },
  { label: "Union Bank of Nigeria", value: "Union Bank of Nigeria" },
  { label: "United Bank for Africa (UBA)", value: "UBA" },
  { label: "Unity Bank", value: "Unity Bank" },
  { label: "Wema Bank", value: "Wema Bank" },
  { label: "Zenith Bank", value: "Zenith Bank" },
];

export const initialContactDetails: RecepientContactDetailsFormValues = {
  email: "",
  phoneNumber: "",
};

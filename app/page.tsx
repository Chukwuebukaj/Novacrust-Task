import styles from "./page.module.css";
import CurrencySwap from "./ui/CurrencySwap";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CurrencySwap />
      </main>
    </div>
  );
}

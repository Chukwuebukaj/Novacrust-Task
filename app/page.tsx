import styles from "./page.module.css";
import CurrencySwap from "./ui/CurrencySwap";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <CurrencySwap />
        </Suspense>
      </main>
    </div>
  );
}

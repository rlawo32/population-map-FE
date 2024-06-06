import Image from "next/image";
import styles from "./page.module.css";

import Nationwide from "./map/nationwide";

export default function Home() {
  return (
    <main className={styles.main}>
      <Nationwide />
    </main>
  );
}

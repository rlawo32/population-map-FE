import Image from "next/image";
import styles from "./page.module.css";

import TempView from "./reference/tempView";

export default function Home() {
  return (
    <main className={styles.main}>
      <TempView />
    </main>
  );
}

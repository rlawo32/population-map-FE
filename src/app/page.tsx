import Image from "next/image";
import styles from "./page.module.css";

import Nationwide from "./map/nationwide";
import ReactKakaoMap from "./reference/reactKakaoMap";
import TempView from "./reference/tempView";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Nationwide /> */}
      <ReactKakaoMap />
      {/* <TempView /> */}
    </main>
  );
}

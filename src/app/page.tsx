import styles from "./page.module.css";
import { Noto_Sans_KR } from "next/font/google";

import ViewMain from "./view/view-main/page";

const noto = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['600']
});

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={noto.className}>
        <ViewMain />
      </div>
    </div>
  );
}

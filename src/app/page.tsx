import styles from "./page.module.css";

import View from "./view/page";
import ViewMain from "./view/view-main/page";
import Naionwide from "./map/nationwide";

export default function Home() {
  return (
    <div className={styles.main}>
      <ViewMain />
    </div>
  );
}

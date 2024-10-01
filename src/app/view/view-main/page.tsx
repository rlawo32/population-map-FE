import styles from "../../page.module.css";

import Nationwide from "@/app/map/nationwide";

const ViewMain = () => {

    return (
        <div className={styles.view}>
            <div className={styles.popLeft}>
            </div>
            <div className={styles.popRight}>
                <div className={styles.popRightTop}>
                    <Nationwide />
                </div>
                <div className={styles.popRightBottom}>
                    TEST
                </div>
            </div>
        </div>
    )
}

export default ViewMain;

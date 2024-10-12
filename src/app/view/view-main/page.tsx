import styles from "../../page.module.css";

import Nationwide from "@/app/map/nationwide";
import ViewSub1 from "../view-sub1/page";
import ViewSub2 from "../view-sub2/page";

const ViewMain = () => {

    return (
        <div className={styles.view}>
            <div className={styles.popLeft}>
                <ViewSub2 />
            </div>
            <div className={styles.popRight}>
                <div className={styles.popRightTop}>
                    <Nationwide />
                </div>
                <div className={styles.popRightBottom}>
                    <ViewSub1 />
                </div>
            </div>
        </div>
    )
}

export default ViewMain;

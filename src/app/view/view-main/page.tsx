import styles from "../../page.module.css";

import Map from "@/app/map/page";
import ViewSub1 from "../view-sub1/page";
import ViewSub2 from "../view-sub2/page";

import useLocationDataStore from "@/app/stores/useLocationDataStore";

const ViewMain = () => {

    return (
        <div className={styles.view}>
            <div className={styles.popLeft}>
                <ViewSub2 />
            </div>
            <div className={styles.popRight}>
                <div className={styles.popRightTop}>
                    <Map />
                </div>
                <div className={styles.popRightBottom}>
                    <ViewSub1 />
                </div>
            </div>
        </div>
    )
}

export default ViewMain;

'use client';

import styles from "../../page.module.css";

import Nationwide from "@/app/map/nationwide";
import SeoulMain from "@/app/map/seoul/seoul-main/page";
import ViewSub1 from "../view-sub1/page";
import ViewSub2 from "../view-sub2/page";

import useLocationDataStore from "@/app/stores/useLocationDataStore";

const ViewMain = () => {

    const {location, setMonth, column, setColumn} = useLocationDataStore();

    return (
        <div className={styles.view}>
            <div className={styles.popLeft}>
                <ViewSub2 />
            </div>
            <div className={styles.popRight}>
                <div className={styles.popRightTop}>
                    {
                        location === 'seoul' ? <SeoulMain /> : <Nationwide />
                    }
                </div>
                <div className={styles.popRightBottom}>
                    <ViewSub1 />
                </div>
            </div>
        </div>
    )
}

export default ViewMain;

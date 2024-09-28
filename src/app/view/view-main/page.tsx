'use client';

import * as Styles from "./page.style"
import Nationwide from "@/app/map/nationwide";

const ViewMain = () => {

    return (
        <Styles.ViewMain>
            <div className="pop-left">
            </div>
            <div className="pop-right">
                <div className="pop-right-top">
                    <Nationwide />
                </div>
                <div className="pop-right-bottom">
                    TEST
                </div>
            </div>
        </Styles.ViewMain>
    )
}

export default ViewMain;

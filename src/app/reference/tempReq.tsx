'use client';

import React from "react";
import TempApi from "./tempApi";

const resource = TempApi(1, 1000);

const TempReq = () => {
    const data = resource.read();

    // let person = {
    //     test1: 1,
    //     test2: 2,
    //     get plus() {
    //         return `${this.test1}` + `${this.test2}`
    //     }
    // }

    return (
        <div>
            {data && <div>{data}</div>}
        </div>
    )
}

export default TempReq;

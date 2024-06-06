'use client';

import React from "react";
import { Suspense } from "react";

import TempReq from "./tempReq";

const TempView = () => {
    return (
        <div>
          <Suspense fallback={<div style={{color: "red"}}>Loading...</div>}>
            <TempReq />
          </Suspense>
        </div>
    )
}

export default TempView;

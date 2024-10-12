'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import useLocationDataStore from "@/app/stores/useLocationDataStore";
import { Bar, Chart, Line, Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

import * as Styled from "./page.style";

const ViewSub2 = () => {
    const client:any = supabase();

    const {month, setMonth, column, setColumn} = useLocationDataStore();
    const [viewSub1Data, setViewSub1Data] = useState<number>(0);

    const [locationData, setLocationData] = useState<string>("");
    const [totalData, setTotalData] = useState<number>(0);
    const [mTotalData, setMTotalData] = useState<number>(0);
    const [wTotalData, setWTotalData] = useState<number>(0);
    
    useEffect(() => {
        const frameRate = 1000/60;
        let currentNumber = 0;
        let totalFrame = 80;
        let num = 0;

        const test = async():Promise<any> => {
            let {data:population_jul_total, error} = await client
                .from("population_jul_total")
                .select("pop_total")
                .eq("pop_place", "전체")

            return population_jul_total;
        }

        test().then((data) => {
            num = Math.round(data[0].pop_total);
        });
        
        const counter = setInterval(() => {
            const progressRate = ++currentNumber / totalFrame;
            setViewSub1Data(Math.round(num * progressRate));

            if (progressRate === 1) {
                clearInterval(counter);
            }
        }, frameRate);
    }, [])

    return (
        // ViewSub = vs
        <Styled.ViewSub2>
            <div className="vs_top">
                <div className="vs_location">
                    <div className="vs_title">
                        현재 지역
                    </div>
                    <div className="vs_content">
                        {locationData}
                    </div>
                </div>
                <div className="vs_total_default">
                    <div className="vs_title">
                        전체
                    </div>
                    <div className="vs_content">
                        {totalData}
                    </div>
                </div>
                <div className="vs_total_gender">
                    <div className="vs_total_m">
                        <div className="vs_title">
                            남
                        </div>
                        <div className="vs_content">
                            {mTotalData}
                        </div>
                    </div>
                    <div className="vs_total_w">
                        <div className="vs_title">
                            여
                        </div>
                        <div className="vs_content">
                            {wTotalData}
                        </div>
                    </div>
                </div>
            </div>
            <div className="vs_mid">

            </div>
            <div className="vs_bot">

            </div>
        </Styled.ViewSub2>
    )
}

export default ViewSub2;

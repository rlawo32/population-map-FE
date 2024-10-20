'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import useLocationDataStore from "@/app/stores/useLocationDataStore";
import { Bar, Chart, Line, Doughnut } from "react-chartjs-2";
import 'chart.js/auto';

import * as Styled from "./page.style";
import Counting from "../Counting";

const ViewSub2 = () => {
    const client:any = supabase();

    const {month, setMonth, column, setColumn} = useLocationDataStore();
    const [viewSub1Data, setViewSub1Data] = useState<number>(0);

    const [locationData, setLocationData] = useState<string>("");
    const [totalData, setTotalData] = useState<number>(0);
    const [mTotalData, setMTotalData] = useState<number>(0);
    const [wTotalData, setWTotalData] = useState<number>(0);
    
    useEffect(() => {
        const popTotal = async():Promise<any> => {
            let {data:population_jul_total, error} = await client
                .from("population_jul_total")
                .select("pop_total")
                .eq("pop_place", "전체")

            return population_jul_total;
        }

        popTotal().then((data) => {
            setTotalData(data[0].pop_total);
        });

        const popMTotal = async():Promise<any> => {
            let {data:population_jul_total, error} = await client
                .from("population_jul_total")
                .select("pop_total_m")
                .eq("pop_place", "전체")

            return population_jul_total;
        }

        popMTotal().then((data) => {
            setMTotalData(data[0].pop_total_m);
        });

        const popWTotal = async():Promise<any> => {
            let {data:population_jul_total, error} = await client
                .from("population_jul_total")
                .select("pop_total_w")
                .eq("pop_place", "전체")

            return population_jul_total;
        }

        popWTotal().then((data) => {
            setWTotalData(data[0].pop_total_w);
        });
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
                        <Counting num={200000} />
                    </div>
                </div>
                <div className="vs_total_default">
                    <div className="vs_title">
                        전체
                    </div>
                    <div className="vs_content">
                        {totalData > 0 ? <Counting num={totalData} /> : <></>}
                    </div>
                </div>
                <div className="vs_total_gender">
                    <div className="vs_total_m">
                        <div className="vs_title">
                            남
                        </div>
                        <div className="vs_content">
                            {mTotalData > 0 ? <Counting num={mTotalData} /> : <></>}
                        </div>
                    </div>
                    <div className="vs_total_w">
                        <div className="vs_title">
                            여
                        </div>
                        <div className="vs_content">
                            {wTotalData > 0 ? <Counting num={wTotalData} /> : <></>}
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

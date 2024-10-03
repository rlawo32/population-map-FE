'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/app/supabase";
import useLocationDataStore from "@/app/stores/useLocationDataStore";

const ViewSub1 = () => {
    const client:any = supabase();

    const {month, setMonth, column, setColumn} = useLocationDataStore();
    const [viewSub1Data, setViewSub1Data] = useState<number>(0);
    const [count, setCount] = useState<number>(0)
    
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
            setViewSub1Data(data[0].pop_total);
            console.log(data[0].pop_total);
            num = Math.round(data[0].pop_total);
        });
        // setInterval로 setCount
        const counter = setInterval(() => {
            const progressRate = ++currentNumber / totalFrame;
            setCount(Math.round(num * progressRate));

            // 진행 완료시 interval 해제
            if (progressRate === 1) {
                clearInterval(counter);
            }
        }, frameRate);
    }, [])

    return (
        <div>
            {count}
        </div>
    )
}

export default ViewSub1;

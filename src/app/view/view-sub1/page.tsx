'use client';

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import supabase from "@/app/supabase";
import useLocationDataStore from "@/app/stores/useLocationDataStore";

const ViewSub1 = () => {
    const client:any = supabase();

    const {month, setMonth, column, setColumn} = useLocationDataStore();
    const [viewSub1Data, setViewSub1Data] = useState<number>(0);
    
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
        <div>
            {viewSub1Data}
        </div>
    )
}

export default ViewSub1;

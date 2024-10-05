'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import useLocationDataStore from "@/app/stores/useLocationDataStore";
import { Bar, Chart, Line } from "react-chartjs-2";
import 'chart.js/auto';

import * as Styled from "./page.style";

const ViewSub1 = () => {
    const client:any = supabase();

    const {month, setMonth, column, setColumn} = useLocationDataStore();
    const [viewSub1Data, setViewSub1Data] = useState<number>(0);

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [15, 10, 5, 15, 10, 5],
            backgroundColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange',
            ],
            borderColor: [
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange',
            ],
            borderWidth: 1,
        }],
    };

    const options = {
        responsive: true,
        scales: {
            y: {
                min: 0,
                max: 15,
                ticks:{ 
                    fontSize: 24,
                    stepSize: 5
                }
            },
        },
    };
    
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
        <Styled.ViewSub1>
            <Bar data={data} options={options} /> 
        </Styled.ViewSub1>
    )
}

export default ViewSub1;

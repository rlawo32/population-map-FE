'use client';

import { useEffect, useRef, useState } from "react";
import supabase from "@/app/supabase";
import useLocationDataStore from "@/app/stores/useLocationDataStore";
import { Bar, Chart, Line, Doughnut } from "react-chartjs-2";
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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        }],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
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
            <Doughnut data={data} options={options} /> 
        </Styled.ViewSub1>
    )
}

export default ViewSub1;

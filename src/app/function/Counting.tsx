'use client';

import { useEffect, useState } from "react";

const Counting = (props:{num:number;}) => {
    const [resultData, setResultData] = useState<number>(0);

    useEffect(() => {
        const frameRate:number = 1000/60;
        let currentNumber:number = 0;
        let totalFrame:number = 150;
        let roundNum:number = Math.round(props.num);
        
        const counter = setInterval(() => {
            const progressRate = ++currentNumber / totalFrame;
            setResultData(Math.round(roundNum * progressRate));
    
            if (progressRate === 1) {
                clearInterval(counter);
            }
        }, frameRate);
    }, [])

    return (
        <div>
            {resultData.toLocaleString('ko-KR')}
        </div>
    )
}

export default Counting;
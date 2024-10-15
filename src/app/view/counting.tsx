'use client';

const counting = (num:number) => {
    const frameRate:number = 1000/60;
    let currentNumber:number = 0;
    let totalFrame:number = 80;
    let roundNum:number = Math.round(num);;
    let result:number = 0;
        
    const counter = setInterval(() => {
        const progressRate = ++currentNumber / totalFrame;
        result = Math.round(roundNum * progressRate);

        if (progressRate === 1) {
            clearInterval(counter);
        }
    }, frameRate);
}

export default counting;
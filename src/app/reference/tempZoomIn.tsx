'use client';

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styled from "styled-components";

const BtnSection = styled('div')<{$x:number, $y:number, $size:number}>`
    position: relative;
    height: 500px;
    width: 500px;
    background-color: grey;

    transform-origin: ${({$x}) => $x}px ${({$y}) => $y}px;
    transform: scale(${({$size}) => $size}, ${({$size}) => $size});
    transition: all 0.5s ease-in;
    

    .btn_up {
        position: absolute;
        top: 0;
        left: 250px;
        background-color: red;
        cursor: pointer;
    }

    .btn_left {
        position: absolute;
        top: 250px;
        left: 0;
        background-color: red;
        cursor: pointer;
    }

    .btn_right {
        position: absolute;
        top: 250px;
        right: 0;
        background-color: red;
        cursor: pointer;
    }

    .btn_down {
        position: absolute;
        bottom: 0;
        left: 250px;
        background-color: red;
        cursor: pointer;
    }
`;

const TempZoomIn = () => {
    const router = useRouter();
    const [x, setX] = useState<number>(0);
    const [y, setY] = useState<number>(0);
    const [size, setSize] = useState<number>(1);

    console.log(x);    
    console.log(y);

    return (
        <BtnSection $x={x} $y={y} $size={size}>
            <div className="btn_up" onClick={(e) => {setX(e.currentTarget.getBoundingClientRect().x + e.currentTarget.scrollLeft -200), 
                                                     setY(e.currentTarget.getBoundingClientRect().y + e.currentTarget.scrollTop), 
                                                     setSize(1.5), console.log(e.currentTarget.getBoundingClientRect())}}>up</div>
            <div className="btn_left" onClick={(e) => {setX(e.clientX), setY(e.clientY), setSize(1.5)}}>left</div>
            <div className="btn_right" onClick={(e) => {setX(e.clientX), setY(e.clientY), setSize(1.5)}}>right</div>
            <div className="btn_down" onClick={(e) => {setX(e.clientX), setY(e.clientY), setSize(1.5)}}>down</div>
        </BtnSection>
    )
}

export default TempZoomIn;

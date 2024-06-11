'use client';
import React, { useRef } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const BtnSection = styled('div')`
    position: relative;
    height: 500px;
    width: 500px;
    background-color: grey;

    .parent {
        position: relative;
        height: 500px;
        width: 500px;
        background-color: grey;

        .btn_up {
            position: absolute;
            top: 0;
            left: 250px;
            background-color: black;
            cursor: pointer;
        }

        .btn_left {
            position: absolute;
            top: 250px;
            left: 0;
            background-color: black;
            cursor: pointer;
        }

        .btn_right {
            position: absolute;
            top: 250px;
            right: 0;
            background-color: black;
            cursor: pointer;
        }

        .btn_down {
            position: absolute;
            bottom: 0;
            left: 250px;
            background-color: black;
            cursor: pointer;
        }
    }

    .box_test {

        .box_child {
            display: none;
            height: 100px;
            width: 100px;
            background-color: purple;
        }

        &:hover {
        
            .box_child {
                display: block;
            }
        }
    }

    .parent1 {
        position: absolute;
        top: 0;
        left: 0;
        height: 50px;
        width: 50px;
        background-color: red;
    }

    .parent2 {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 50px;
        width: 50px;
        background-color: orange;
    }

    .parent53 {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 50px;
        width: 50px;
        background-color: yellow;
    }

    .parent4 {
        position: absolute;
        top: 250px;
        left: 150px;
        height: 50px;
        width: 50px;
        background-color: green;
    }

    .parent5 {
        position: absolute;
        top: 150px;
        left: 350px;
        height: 50px;
        width: 50px;
        background-color: blue;
    }
`;

const TestView1 = () => {
    const [count, setCount] = useState<number>(0);

    const onClickHandler = (action:string) => {
        setCount(0);
        let max:number = 100;

        const handle = setInterval(() => {
            setCount(Math.ceil(100 - max));

            if (max < 1) {
              clearInterval(handle);
            }
            
            let step:number = max / 10;
            
            max -= step;
        }, 1000 / 60);

        if(action === 'off') {
            clearInterval(handle);
            setCount(0);
        }

    }

    return (
        <BtnSection>
            <div className="box_test parent1">
                <div className="box_child" onMouseOver={() => onClickHandler('on')} onMouseOut={() => onClickHandler('off')}>{count}</div>
            </div>
            <div className="box_test parent2">
                <div className="box_child" onMouseOver={() => onClickHandler('on')} onMouseOut={() => onClickHandler('off')}>{count}</div>
            </div>
            <div className="box_test parent3">
                <div className="box_child" onMouseOver={() => onClickHandler('on')} onMouseOut={() => onClickHandler('off')}>{count}</div>
            </div>
            <div className="box_test parent4">
                <div className="box_child" onMouseOver={() => onClickHandler('on')} onMouseOut={() => onClickHandler('off')}>{count}</div>
            </div>
            <div className="box_test parent5">
                <div className="box_child" onMouseOver={() => onClickHandler('on')} onMouseOut={() => onClickHandler('off')}>{count}</div>
            </div>
        </BtnSection>
    )
}

export default TestView1;

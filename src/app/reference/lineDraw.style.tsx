import styled from "styled-components";

export const moveLocation = styled('div')<{$fade:boolean}>`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100vh;
    width: 100%;

    animation: ${({$fade}) => $fade ? "fadeout .8s" : "fadein .5s"} ease-in;
    
    // transition-property, transition duration, transition-timing-function, transition delay
    // transition-property: transform, opacity; 타겟
    // transition-duration: 0.5s, 0.5s; 동작시간
    // transition-timing-function: ease-in, ease-in; 동작방식
    // transition-delay: 0s, 0.5s; 딜레이
    
    transition: opacity .5s ease-in 0s;

    .pop-left {
        position: relative;
        height: 100%;
        width: 30%;
        border: 2px solid red;

        .tt-test {
            position: absolute;
            right: 200px;
            bottom: 500px;
            height: 50px;
            width: 50px;
            background-color: white;

            &::before {
                position: absolute;
                top: 0;
                left: 0;
                content: '';
                background-color: red;
                height: 0;
                width: 0;
                transform-origin: 0 0;
                transform: rotate(-115deg);
                transition: width .4s ease;
            }

            &:hover {

                &::before {
                    height: 1px;
                    width: 150px;
                }
            }
            
        }
    }

    .pop-right {
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 70%;
        border: 1px solid red;
    
        .pop-right-top {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 600px;
            padding: 20px 0 0 25px;
            border: 1px solid red;
        }

        .pop-right-bottom {
            height: 350px;
            border: 1px solid red;
        }
    }

    svg {

        .child_map {
            fill: gray;
            transition: fill .5s ease;
        }

        .parent_map:hover > .child_map {
            fill: white;
            cursor: pointer;
        }
    }

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

export const Tooltip1 = styled('div')<{$x:number, $y:number, $z:number}>`
    &::before {
        content: '';
        position: absolute;
        top: ${({$y}) => $y}px;
        left: ${({$x}) => $x}px;
        background-color: red;
        height: ${({$z}) => $z % 3 == 0 ? "1px" : "0"};
        width: ${({$z}) => $z % 3 == 0 ? "70px" : "0"};
        transform-origin: 0 0;
        transform: rotate(-115deg);
        transition: width 1s ease;
    }

    .tt_box {
        position: absolute;
        top: ${({$y}) => $y-84}px;
        left: ${({$x}) => $x-77}px;
        color: red;
        font-weight: light;

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            height: ${({$z}) => $z % 3 == 0 ? "1px" : "0"};
            width: ${({$z}) => $z % 3 == 0 ? "50px" : "0"};
            background-color: red;
            transition: width .6s ease ${({$z}) => $z % 3 == 0 ? ".9s" : ""};
        }
    }
`;

export const Tooltip2 = styled('div')<{$x:number, $y:number, $t:number}>`
    &::before {
        content: '';
        position: absolute;
        top: ${({$y}) => $y}px;
        left: ${({$x}) => $x}px;
        background-color: red;
        height: ${({$t}) => $t % 3 == 1 ? "1px" : "0"};
        width: ${({$t}) => $t % 3 == 1 ? "70px" : "0"};
        transform-origin: 0 0;
        transform: rotate(-115deg);
        transition: width 1s ease;
    }

    .tt_box {
        position: absolute;
        top: ${({$y}) => $y-84}px;
        left: ${({$x}) => $x-77}px;
        color: red;
        font-weight: light;

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            height: ${({$t}) => $t % 3 == 1 ? "1px" : "0"};
            width: ${({$t}) => $t % 3 == 1 ? "50px" : "0"};
            background-color: red;
            transition: width .6s ease ${({$t}) => $t % 3 == 1 ? ".9s" : ""};
        }
    }
`;

export const Tooltip3 = styled('div')<{$x:number, $y:number, $v:number}>`
    &::before {
        content: '';
        position: absolute;
        top: ${({$y}) => $y}px;
        left: ${({$x}) => $x}px;
        height: ${({$v}) => $v % 3 == 2 ? "20px" : "0"};
        width: ${({$v}) => $v % 3 == 2 ? "70px" : "0"};
        border-top: 1px solid red;
        border-right: 1px solid red;
        transform-origin: 0 0;
        transform: skewX(20deg) scaleX(-1) rotate(-90deg);
        transition-property: height, width; 
        transition-duration: .3s, .3s;
        transition-timing-function: ease-in, ease-in; 
        transition-delay: ${({$v}) => $v % 3 == 2 ? ".15s, 0s" : "0s, .25s"}; 
    }

    .tt_box {
        position: absolute;
        top: ${({$y}) => $y-80}px;
        left: ${({$x}) => $x-95}px;
        color: red;
        animation: ${({$v}) => $v % 3 == 2 ? "fadeUp 2s" : "fade_down 2s"};
    }

    @keyframes fadeUp {
        0% { opacity: 0; transform: translateX(100%); }
        to { opacity: 1; transform: translateX(0); }
    }

    @keyframes fadeDown {
        0% { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(100%); }
    }
`;

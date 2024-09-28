import styled from "styled-components";

export const moveLocation = styled('div')<{$fade:boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    width: 100%;
    padding: 20px 0 0 25px;
    border: 1px solid red;
    box-sizing: border-box;

    animation: ${({$fade}) => $fade ? "fadeout .8s" : "fadein .5s"} ease-in;
    
    // transition-property, transition duration, transition-timing-function, transition delay
    // transition-property: transform, opacity; 타겟
    // transition-duration: 0.5s, 0.5s; 동작시간
    // transition-timing-function: ease-in, ease-in; 동작방식
    // transition-delay: 0s, 0.5s; 딜레이
    
    transition: opacity .5s ease-in 0s;

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

export const Tooltip = styled('div')<{$x:number, $y:number, $w:number, $h:number, $t:boolean, $r:boolean}>`
    pointer-events: none;
    &::before {
        content: '';
        content: '';
        position: absolute;
        top: ${({$y}) => $y}px;
        left: ${({$x}) => $x}px;
        height: ${({$t, $h}) => $t ? 20+$h : 0}px;
        width: ${({$t, $w}) => $t ? 70+$w : 0}px;
        border-top: ${({$t}) => $t ? "1px solid red" : ""};
        border-right: ${({$t}) => $t ? "1px solid red" : ""};
        transform-origin: 0 0;
        transform: ${({$r}) => $r ? "skewX(-20deg) scaleX(1)" : "skewX(20deg) scaleX(-1)"} rotate(-90deg);
    }

    .tt_box {
        position: absolute;
        top: ${({$y, $w}) => ($y-82)-$w}px;
        left: ${({$x, $r, $w, $h}) => $r ? ($x+50)+($w/2)+$h : ($x-140)-($w/2)-$h}px;
        color: red;
        text-align: ${({$r}) => $r ? "left" : "right"};
        width: 90px;
    }
`;


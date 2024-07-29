import styled from "styled-components";

export const moveLocation = styled('div')`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    animation: fadein .3s ease-in;
    border: 2px solid red;
    
    // transition-property, transition duration, transition-timing-function, transition delay
    // transition-property: transform, opacity; 타겟
    // transition-duration: 0.5s, 0.5s; 동작시간
    // transition-timing-function: ease-in, ease-in; 동작방식
    // transition-delay: 0s, 0.5s; 딜레이
    
    transition: opacity .5s ease-in 0s;

    svg {

        .svg_map {
            fill: grey;
            transition: fill .5s ease;

            &:hover {
                fill: white;
                cursor: pointer;
            }
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
`;

export const Tooltip = styled('div')<{$x:number, $y:number, $z:boolean}>`
    position: fixed;
    font-size: 11px;
    font-weight: bold;
    color: red;
    
    top: ${({$y}) => $y}px;
    left: ${({$x}) => $x}px;
    transform: translate(-50%, -50%) ${({$z}) => $z ? "scale(1)" : "scale(0)"};
    transition: .3s transform;
    pointer-events: none;
`;

import styled from "styled-components";

export const moveAction = styled('div')<{$x:number, $y:number, $size:number}>`
    transform-origin: ${({$x}) => $x}px ${({$y}) => $y}px;
    transform: scale(${({$size}) => $size}, ${({$size}) => $size});
    
    // transition-property, transition duration, transition-timing-function, transition delay
    // transition-property: transform, opacity; 타겟
    // transition-duration: 0.5s, 0.5s; 동작시간
    // transition-timing-function: ease-in, ease-in; 동작방식
    // transition-delay: 0s, 0.5s; 딜레이
    
    transition: transform .9s ease-in 0s, opacity .5s ease-in .8s;
    
    opacity: ${({$size}) => $size > 1 ? 0 : 1};
`;
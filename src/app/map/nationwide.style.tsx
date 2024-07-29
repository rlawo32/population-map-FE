import styled from "styled-components";

export const moveLocation = styled('div')<{$move:boolean, $top:number, $left:number}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({$top}) => $top}rem;
    margin-left: ${({$left}) => $left}rem;
    animation: fadein .3s ease-in;
    border: 2px solid red;
    
    // transition-property, transition duration, transition-timing-function, transition delay
    // transition-property: transform, opacity; 타겟
    // transition-duration: 0.5s, 0.5s; 동작시간
    // transition-timing-function: ease-in, ease-in; 동작방식
    // transition-delay: 0s, 0.5s; 딜레이
    
    transition: opacity .5s ease-in 0s;
    
    opacity: ${({$move}) => $move ? 0 : 1};

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

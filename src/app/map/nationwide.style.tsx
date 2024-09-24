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

export const Tooltip1 = styled('div')<{$x:number, $y:number, $z:boolean}>`

    &::before {
        position: absolute;
        top: ${({$y}) => $y}px;
        left: ${({$x}) => $x}px;
        content: '';
        background-color: red;
        ${({$z}) => $z ? "height: 1px;" : "height: 0;"};
        ${({$z}) => $z ? "width: 150px;" : "width: 0;"};
        transform-origin: 0 0;
        transform: rotate(-115deg);
        transition: width .7s ease;
    }
`;

export const Tooltip2 = styled('div')<{$x:number, $y:number, $z:boolean}>`

    &::before {
        position: absolute;
        top: ${({$y}) => $y}px;
        left: ${({$x}) => $x}px;
        content: '';
        background-color: red;
        ${({$z}) => $z ? "height: 1px;" : "height: 0;"};
        ${({$z}) => $z ? "width: 150px;" : "width: 0;"};
        transform-origin: 0 0;
        transform: rotate(-115deg);
        transition: width .7s ease;
    }
`;

import styled from "styled-components";

export const ViewMain = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    padding: 0;
    margin: 0;
    
    .pop-left {
        height: 100%;
        width: 30%;
    }

    .pop-right {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 70%;
    
        .pop-right-top {
            background-color: rgba(0, 127, 255, .3);
        }

        .pop-right-bottom {
            height: 350px;
        }
    }
`;
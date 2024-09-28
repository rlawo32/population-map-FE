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
        border: 2px solid red;
    }

    .pop-right {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 70%;
        border: 1px solid red;
    
        .pop-right-top {
        }

        .pop-right-bottom {
            height: 350px;
            border: 1px solid red;
        }
    }
`;
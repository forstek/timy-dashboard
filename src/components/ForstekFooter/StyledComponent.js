import styled from "styled-components";

const Forstek = styled.p `
    color: #FC6F20 !important;

    display: inline-block;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
`;

const ForstekFooter = styled.p`
    width: 153px;
    height: 14px;

    position: fixed;
    bottom: 15%;
    left:50%;
    transform: translate(-50%, -50%);

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height, or 117% */

    align-items: center;
    text-align: center;

    color: #807777;
`;

const Heart = styled.div`
    fill: red;
    position: relative;
    width: 10px;

    display: inline-block;

    animation: pulse 1s ease infinite;
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.3); }
        100% { transform: scale(1); }
    }
`;

export default {
    Forstek,
    ForstekFooter,
    Heart
}
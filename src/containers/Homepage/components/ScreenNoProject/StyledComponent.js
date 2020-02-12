import styled from 'styled-components'

const screen = styled.div`
    position: absolute;

    width: 100%;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);

    /* avoid overlap with toolbar */
    margin-top: 80px;

    text-align: center;
`;

const welcomeText1 = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 30px;
    /* or 125% */

    color: #000000;
`;

const emoji = styled.img`
    margin-top: 40px;
    margin-bottom: 14px;
`;

const welcomeText2 = styled.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    /* or 140% */

    margin-top: 14px;
    margin-bottom: 42px;

    color: #000000;
`;

const Button = styled.button`
    background: #FC6F20;
    border-radius: 4px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    padding: 11px 25px;
    /* identical to box height, or 100% */

    align-items: center;

    color: #FFFFFF;

    :focus {
        outline: none;
    }
`;

export default {
    screen,
    welcomeText1,
    emoji,
    welcomeText2,
    Button
}
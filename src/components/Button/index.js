import styled from 'styled-components';

const Button = styled.button`
    width: 295px;
    height: 60px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    /* or 167% */
    align-items: center;
    text-align: center;

    color: #FFFFFF;

    background: #FC6F20;
    border-radius: 32px;

    :focus {
        outline: none;
    }
`;

export default Button;
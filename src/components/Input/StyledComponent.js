import styled from 'styled-components'

const Input = styled.input`
    width: 295px;
    height: 48px;

    background: #FFFFFF;
    border: 1px solid #FC6F20;
    border-radius: 24px;
    box-sizing: border-box;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 40px;
    /* identical to box height, or 222% */
    display: flex;
    align-items: center;

    padding: 20px;

    :focus {
        outline: none;
    }
`

export default { Input }

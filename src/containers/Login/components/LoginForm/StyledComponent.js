import styled from 'styled-components'

export const Form = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export const FormHeader = styled.div`
    display: grid;

    justify-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    text-align: center;

    color: #807777;
`

export const FormBody = styled.form`
    display: grid;
    grid-row-gap: 16px;

    margin: 10px 0px 30px 0px;

    justify-items: center;
`

export const FormFooter = styled.div`
    display: grid;
    grid-row-gap: 17px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 12px;

    justify-items: center;

    a {
        color: #807777;
    }
`

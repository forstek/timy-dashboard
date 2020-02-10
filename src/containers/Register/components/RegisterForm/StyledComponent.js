import styled from 'styled-components'

const Form = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

const FormHeader = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    justify-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    text-align: center;

    color: #807777;
`

const FormBody = styled.form`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 16px;

    margin: 10px 0px 30px 0px;

    justify-items: center;
`

const FormFooter = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 24px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;

    justify-items: center;

    a {
        color: #807777;
    }
`

export default {
  Form,
  FormHeader,
  FormBody,
  FormFooter
}

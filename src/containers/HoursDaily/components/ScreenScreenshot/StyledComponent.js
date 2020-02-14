import styled from 'styled-components'

const ScreenScreenshotGrid = styled.div`
    display: grid;
    grid-template-areas:
        'hours screenshot';
    width: fit-content;
    padding: 20px 0px 25px;
    grid-gap: 50px;
`

const Hours = styled.p`
    grid-area: hours;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 28px;
    /* identical to box height, or 100% */

    color: #000000;
`

const Screenshot = styled.div`
    grid-area: screenshot;

    width: 115px;
    height: 65px;

    background: #C4C4C4;
`

export default {
  ScreenScreenshotGrid,
  Hours,
  Screenshot
}

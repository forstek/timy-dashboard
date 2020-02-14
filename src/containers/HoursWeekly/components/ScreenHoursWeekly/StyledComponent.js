import styled from 'styled-components'

const ScreenWeeklyHoursGrid = styled.div`
    display: grid;
    grid-template-areas:
        'menu menu'
        'title-year daily-link'
        'chart chart';
    width: 75%;
    padding: 20px 50px 25px;
    margin-top: 60px;
    margin-left: 320px;
`

const Menu = styled.p`
    grid-area: menu;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    a {
        color: #FC6F20;
        text-decoration: none;
        margin-right: 15px;
    }
`

const Title = styled.div`
    grid-area: title-year;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    color: #000000;
`

const Year = styled.div`
    display: inline-block;

    margin-left: 25px;
`

const DailyLink = styled.a`
    grid-area: daily-link;
    text-align: right;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-decoration: none;

    // margin-top: 30px;

    /* identical to box height, or 100% */

    color: #3E72B0;
`

const Chart = styled.div`
    grid-area: chart;

    width: 100%;
    height: 305px;
    margin-top: 30px;

    background: #C4C4C4;
`

export default {
  ScreenWeeklyHoursGrid,
  Menu,
  Title,
  Year,
  DailyLink,
  Chart
}

import styled from 'styled-components'

const Sidenav = styled.div`
    position: absolute;
    height: auto;
    width: 320px;
    left: 0px;
    top: 60px;

`;

const Navmenu = styled.a`
    background: #F8F8F8;
    box-shadow: 0px 1px 0px #E0D7D7;
    display: block;
    padding: 24px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;

    color: #000000;

    :hover {
        background: #CCCCCC
    }

    :active {
        background:  #FFC3A2;
    }
`;

export default {
    Sidenav,
    Navmenu
}
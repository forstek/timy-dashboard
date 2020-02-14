import styled from 'styled-components'

const Sidenav = styled.div`
    position: fixed;
    height: 100vh;
    width: 320px;
    left: 0;
    top: 60px;
    bottom: 0;

    background: #F8F8F8;
    z-index: 1;
    overflow-x: hidden;
    overflow-y: auto;
`

const Navmenu = styled.a`
    background: #F8F8F8;
    box-shadow: 0px 1px 0px #E0D7D7;
    border-bottom: 1px solid #E0D7D7;
    padding: 24px;
    display: block;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;

    color: #000000;

    :hover {
        background: #CCCCCC
    }

    :active {
        background:  #FFC3A2
    }
`

export default {
  Sidenav,
  Navmenu
}

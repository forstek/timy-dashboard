import styled from 'styled-components'

const Toolbar = styled.div`
    position: fixed;
    z-index:1;

    height: 60px;
    width: 100%;
    left: 0px;
    top: 0px;

    background: #FC6F20;
`

const Logo = styled.img`  
    position: fixed;
    width: 100px;
    height: 36px;
    left: 25px;
    top: 12px;
`

const Add = styled.button`
    position: fixed;

    width: 40px;
    height: 40px;
    top: 10px;
    right: 75px;

    border: none;
    border-radius: 50%;
    background-color: transparent;
    padding: 10px;
    color: white;

    :focus {
        outline: none;
    }

    :active {
        box-shadow: 0 0 2px 0 #00823F;
        top: 9px;
    }
`

const ButtonIcon = styled.img`
    width: 20px;
    height: 20px;
`

const Profile = styled.button`
    position: fixed;
    
    width: 40x;
    height: 40px;    
    top: 10px;
    right: 25px;

    border: none;
    border-radius: 50%;
    background: #C4C4C4;
    padding: 10px;

    :focus {
        outline: none;
    }

    :active {
        box-shadow: 0 0 2px 0 #00823F;
        top: 9px;
    }
`

const Tooltip = styled.div`
    position: relative;
    display: inline-block;

    span {
        visibility: hidden;
        width: 155px;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        
        /* Position the tooltip */
        position: fixed;
        z-index: 1;
        top: 20px;
        right: 120px;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 14px;
    }

    :hover span {
        visibility: visible;
    }
`

export default {
  Toolbar,
  Logo,
  Add,
  Profile,
  ButtonIcon,
  Tooltip
}

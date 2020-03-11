import styled from 'styled-components'

export const Toolbar = styled.div`
    position: fixed;
    z-index:1;

    height: 60px;
    width: 100%;
    left: 0px;
    top: 0px;

    background: #FC6F20;
`

export const Logo = styled.img`  
    position: fixed;
    width: 100px;
    height: 36px;
    left: 25px;
    top: 12px;
`

export const Add = styled.div`
    position: fixed;

    width: 40px;
    height: 40px;
    top: 0;
    right: 90px;
    padding: 10px;
`

export const ButtonIcon = styled.img`
    width: 20px;
    height: 20px;
`

export const Profile = styled.div`
    position: fixed;
    
    width: 40x;
    height: 40px;    
    top: 0;
    right: 25px;
    padding: 10px;

`

export const Tooltip = styled.div`
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
        right: 130px;

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

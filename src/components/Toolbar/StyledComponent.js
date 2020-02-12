import styled from 'styled-components'

const Toolbar = styled.div`
    position: fixed;

    height: 60px;
    width: 100%;
    left: 0px;
    top: 0px;

    background: #FC6F20;
`;

const Logo = styled.img`  
    position: fixed;
    width: 100px;
    height: 36px;
    left: 25px;
    top: 12px;
`;

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
`;

const ButtonIcon = styled.img`
    width: 20px;
    height: 20px;
`;

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
`;

export default { 
    Toolbar,
    Logo,
    Add,
    Profile,
    ButtonIcon,
}
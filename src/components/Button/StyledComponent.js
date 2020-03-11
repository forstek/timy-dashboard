import styled from 'styled-components'

export const Button = styled.button`
    width: 295px;
    height: 60px;

    background: ${
        props =>
            props.background ||
            '#FC6F20'
    };
    border-radius: 32px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 40px;
    /* or 167% */
    display: ${
        props =>
            props.src ? 'block'
            : 'flex'
    };
    align-items: center;
    text-align: center;

    color: ${
        props =>
            props.color ||
            '#FFFFFF'
    };

    :focus {
        outline: none;
    }
`

export const Icon = styled.img`
    width: 27px;
    margin-left: 20px;
    margin-right: 60px;
`

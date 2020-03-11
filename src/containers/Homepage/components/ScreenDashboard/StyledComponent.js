import styled from 'styled-components'

export const ScreenDashboardGrid = styled.div`
    display: grid;
    grid-template-areas:
        'menu menu'
        'title title'
        'chart chart'
        'members categories'
        'member-list category-list';
    grid-gap: 3px;
    padding: 20px 50px 25px;
    margin-top: 60px;
    margin-left: 320px;
`

export const Menu = styled.p`
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

export const Title = styled.p`
    grid-area: title;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    color: #000000;
`

export const Chart = styled.div`
    grid-area: chart;

    width: 100%;
    height: 229px;
    background: #F0F0F0;
`

export const Members = styled.div`
    grid-area: members;
    margin-top: 80px;
    margin-bottom: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 10px;
    /* identical to box height, or 100% */

    color: #000000;
`

export const Categories = styled.div`
    grid-area: categories;
    margin-top: 80px;
    margin-bottom: 20px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 10px;
    /* identical to box height, or 100% */

    color: #000000;
`

export const MemberList = styled.p`
    grid-area: member-list;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: ${
        props =>
            props.color ||
            '#000000'
    };
`

export const CategoryList = styled.p`
    grid-area: category-list;
    // display: inline-block;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

export const Add = styled.div`
    width: 25px;
    height: 25px;
    margin-left: 120px;
    padding: 5px;
`

export const AddIcon = styled.img`
    width: 15px;
    height: 15px;
`

export const Delete = styled.button`
    width: 15px;
    height: 15px;
    margin-left: 15px;
    display: inline-block;

    border: none;
    border-radius: 50%;
    background-color: transparent;
    padding: 1px;
    color: white;
    visibility: visible;

    :hover {
        visibility: visible;
    }

    :focus {
        outline: none;
        visibility: visible;
    }

    :active {
        box-shadow: 0 0 2px 0 #FC6F20;
        top: 9px;
    }
`

export const DeleteIcon = styled.img`
    width: 6px;
    height: 6px;
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
        position: absolute;
        z-index: 1;
        bottom: 100%;
        left: 50%;
        margin-left: -20px;

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

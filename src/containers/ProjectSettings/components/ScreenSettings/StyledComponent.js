import styled from 'styled-components'

const ScreenSettingsGrid = styled.div`
    display: grid;
    grid-template-areas:
        'menu menu'
        'title title'
        'project-name-label project-name'
        'project-owner-label project-owner'
        'project-admins-label project-admins'
        'delete-button delete-button';
    width: fit-content;
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

const Title = styled.p`
    grid-area: title;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    color: #000000;
`
const ProjectNameLabel = styled.p`
    grid-area: project-name-label;
    width: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

const ProjectName = styled.input`
    grid-area: project-name;
    width: 226px;
    height: 35px;

    border: 1px solid #3DB703;
    box-sizing: border-box;
    border-radius: 4px;
    padding-left: 10px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

const ProjectOwnerLabel = styled.p`
    grid-area: project-owner-label;
    width: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

const ProjectOwner = styled.p`
    grid-area: project-owner;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

const ProjectAdminsLabel = styled.p`
    grid-area: project-admins-label;
    width: 150px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

const ProjectAdmins = styled.p`
    grid-area: project-admins;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #000000;
`

const DeleteButton = styled.button`
    grid-area: delete-button;

    width: 136px;
    height: 36px;
    margin-top: 50px;

    background: #FFFFFF;
    border: 1px solid #FC6F20;
    box-sizing: border-box;
    border-radius: 4px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    /* identical to box height, or 100% */

    color: #FC6F20;

    :focus {
        outline: none;
    }

    :active {
        box-shadow: 0 0 2px 0 #FC6F20;
        top: 9px;
    }
`

export default {
  ScreenSettingsGrid,
  Menu,
  Title,
  ProjectNameLabel,
  ProjectName,
  ProjectOwnerLabel,
  ProjectOwner,
  ProjectAdminsLabel,
  ProjectAdmins,
  DeleteButton
}

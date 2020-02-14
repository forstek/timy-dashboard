import React, { PureComponent } from 'react'
import Styled from './StyledComponent'

export default class ScreenSettings extends PureComponent {
  render () {
    const {
      projectName,
      projectOwner,
      projectAdmins,
      onChangeProjectName,
      onDeleteProject
    } = this.props

    return (
      <Styled.ScreenSettingsGrid>
        <Styled.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </Styled.Menu>
        <Styled.Title>
                  Project settings
        </Styled.Title>
        <Styled.ProjectNameLabel>
                  Project name
        </Styled.ProjectNameLabel>
        <Styled.ProjectName
          type='text'
          name='projectName'
          value={projectName}
          onChange={onChangeProjectName}
        />
        <Styled.ProjectOwnerLabel>
                    Owner
        </Styled.ProjectOwnerLabel>
        <Styled.ProjectOwner>
          {projectOwner}
        </Styled.ProjectOwner>
        <Styled.ProjectAdminsLabel>
                    Admins
        </Styled.ProjectAdminsLabel>
        <div>
          {projectAdmins.map(({
            label,
            name
          }) => (
            <Styled.ProjectAdmins key={name}>
              {label}
            </Styled.ProjectAdmins>
          ))}
        </div>
        <Styled.DeleteButton
          onClick={onDeleteProject}
        >
                    Delete project
        </Styled.DeleteButton>
      </Styled.ScreenSettingsGrid>
    )
  }
}

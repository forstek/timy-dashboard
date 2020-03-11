import React, { PureComponent } from 'react'
import * as s from './StyledComponent'

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
      <s.ScreenSettingsGrid>
        <s.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </s.Menu>
        <s.Title>
                  Project settings
        </s.Title>
        <s.ProjectNameLabel>
                  Project name
        </s.ProjectNameLabel>
        <s.ProjectName
          type='text'
          name='projectName'
          value={projectName}
          onChange={onChangeProjectName}
        />
        <s.ProjectOwnerLabel>
                    Owner
        </s.ProjectOwnerLabel>
        <s.ProjectOwner>
          {projectOwner}
        </s.ProjectOwner>
        <s.ProjectAdminsLabel>
                    Admins
        </s.ProjectAdminsLabel>
        <div>
          {projectAdmins.map(({
            label,
            name
          }) => (
            <s.ProjectAdmins key={name}>
              {label}
            </s.ProjectAdmins>
          ))}
        </div>
        <s.DeleteButton
          onClick={onDeleteProject}
        >
                    Delete project
        </s.DeleteButton>
      </s.ScreenSettingsGrid>
    )
  }
}

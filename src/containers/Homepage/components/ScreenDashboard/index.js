import React, { PureComponent } from 'react'
import Styled from './StyledComponent'

import AddIcon from 'assets/images/add-icon-black.png'
// import DeleteIcon from 'assets/images/delete-icon-black.png'

export default class ScreenDashboard extends PureComponent {
  render () {
    const {
      projectTitle,
      members,
      categories,
      onMembersAdd,
      onCategoriesAdd
    //   onCategoriesDelete
    } = this.props

    return (
        <Styled.ScreenDashboardGrid>
          <Styled.Menu>
            <a href='/home'>Dashboard</a>
            <a href='/home'>Settings</a>
          </Styled.Menu>
          <Styled.Title>
            {projectTitle} - Dashboard
          </Styled.Title>
          <Styled.Chart />
          <Styled.Members>
                  Members
            <Styled.Tooltip>
              <span>Add new member</span>
              <Styled.Add
                onClick={onMembersAdd}
              >
                <Styled.AddIcon
                  src={AddIcon}
                />
              </Styled.Add>
            </Styled.Tooltip>
          </Styled.Members>
          <Styled.Categories>
                  Categories
            <Styled.Tooltip>
              <span>Add new category</span>
              <Styled.Add
                onClick={onCategoriesAdd}
              >
                <Styled.AddIcon
                  src={AddIcon}
                />
              </Styled.Add>
            </Styled.Tooltip>
          </Styled.Categories>
          <div>
            {members.map(({
              label,
              name
            }) => (
              <Styled.MemberList key={name}>
                {label}
              </Styled.MemberList>
            ))}
          </div>
          <div>
            {categories.map(({
              label,
              name
            }) => (
              <Styled.CategoryList key={name}>
                {label}
              </Styled.CategoryList>
            ))}
          </div>
        </Styled.ScreenDashboardGrid>
    )
  }
}

import React, { PureComponent } from 'react'
import { Button } from 'antd'

import Styled from './StyledComponent'

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
          <a href='/settings'>Settings</a>
        </Styled.Menu>
        <Styled.Title>
          {projectTitle} - Dashboard
        </Styled.Title>
        <Styled.Chart />
        <Styled.Members>
                  Members
          <Styled.Tooltip>
            <span>Add new member</span>
            <Styled.Add>
              <Button
                type='primary'
                shape='circle'
                icon='plus'
                size='large'
                onClick={onMembersAdd}
                style={{
                  background: '#FFFFFF',
                  border: 'none',
                  color: '#000000'
                }}
              />
            </Styled.Add>
          </Styled.Tooltip>
        </Styled.Members>
        <Styled.Categories>
                  Categories
          <Styled.Tooltip>
            <span>Add new category</span>
            <Styled.Add>
              <Button
                type='primary'
                shape='circle'
                icon='plus'
                size='large'
                onClick={onCategoriesAdd}
                style={{
                  background: '#FFFFFF',
                  border: 'none',
                  color: '#000000'
                }}
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

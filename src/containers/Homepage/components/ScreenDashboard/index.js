import React, { PureComponent } from 'react'
import { Button } from 'antd'

import * as s from './StyledComponent'

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
      <s.ScreenDashboardGrid>
        <s.Menu>
          <a href='/home'>Dashboard</a>
          <a href='/settings'>Settings</a>
        </s.Menu>
        <s.Title>
          {projectTitle} - Dashboard
        </s.Title>
        <s.Chart />
        <s.Members>
                  Members
          <s.Tooltip>
            <span>Add new member</span>
            <s.Add>
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
            </s.Add>
          </s.Tooltip>
        </s.Members>
        <s.Categories>
                  Categories
          <s.Tooltip>
            <span>Add new category</span>
            <s.Add>
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
            </s.Add>
          </s.Tooltip>
        </s.Categories>
        <div>
          {members.map(({
            label,
            name
          }) => (
            <s.MemberList key={name}>
              {label}
            </s.MemberList>
          ))}
        </div>
        <div>
          {categories.map(({
            label,
            name
          }) => (
            <s.CategoryList key={name}>
              {label}
            </s.CategoryList>
          ))}
        </div>
      </s.ScreenDashboardGrid>
    )
  }
}

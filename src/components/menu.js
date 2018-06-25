import React, { Component } from 'react'
import List from '../menuConfig'
import { Menu } from 'antd'
import MenuItem from '_antd@3.6.3@antd/lib/menu/MenuItem';

const SubMenu = Menu.SubMenu

export default class MenuComponent extends Component {
  constructor (props) {
      super(props)
      this.state = {
          collapsed: true,
          list:List
      }
  }
  show (obj) {
    let component = null
    let child = obj.children
    if ( child && child.length > 0) {
        component = child.map( item => {
            return this.show(item)
        })
        return <SubMenu title={obj.title}>{component}</SubMenu>
    } else {
        return <Menu.Item>{obj.title}</Menu.Item>
    }
  }
  render() {
    let listmenu = this.state.list
    console.log(listmenu)
    let html = listmenu.map(obj => {
        if(obj.children && obj.children.length > 0) {
            return this.show(obj)
        } else {
            return <Menu.Item>{obj.title}</Menu.Item>
        }
    })
    return (
      <div>
        <Menu
          mode="inline"
          theme="dark"
        >
        {html}
        </Menu>
      </div>
    )
  }
}

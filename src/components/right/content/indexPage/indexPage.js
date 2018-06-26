import React, { Component } from 'react'
import Content from './content'
import HeaderComponent from './header'
import FooterComponent from './footer'

export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>
        <Content></Content>
        <FooterComponent></FooterComponent>
      </div>
    )
  }
}

import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import HeaderLogin from './headerLogin'
import IndexPage from './content/indexPage/indexPage'
import '../../App.css'

export class RightComponent extends Component {
  render() {
    return (
      <div className="rightContent">
        <HeaderLogin></HeaderLogin>
        <Route path='/' component={IndexPage}></Route>
      </div>
    )
  }
}

export default RightComponent

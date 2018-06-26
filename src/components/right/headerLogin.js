import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

export default class HeaderLogin extends Component {
  render() {
    return (
      <div className="headerLogin">
        <div className="login">
          <span>hello</span>
          <Link to='/login'>登录</Link>
        </div>
      </div>
    )
  }
}

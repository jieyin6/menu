import React, { Component } from 'react';
import logo from '../logo-ant.svg'
import Menu from './menu'
import '../App.css'

export default class LeftComponent extends Component {
    render () {
        return (
            <div className="left-container">
                <div className="left-top">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <Menu></Menu>
            </div>
        )
    }
}
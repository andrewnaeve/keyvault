import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'

import AllAbleton from './all_ableton'
import Csv from './csv'
import AbletonVault from './ableton_vault'

const helpers = require('./utils/helpers')

const Navbar = React.createClass({


  render() {


    return (
      <div className="navbar">
        <nav className="navbar navbar-fixed-top" id="navbar-example">
          <a className="nav-link">
            <h1 className="name">FNI Code Vault</h1>
          </a>
          <ul className="nav navbar-nav float-xs-right ">
            <li className="nav-item ">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#techs">View All</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#about">Reload</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})

module.exports = Radium(Navbar)
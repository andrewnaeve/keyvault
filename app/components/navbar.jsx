import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'


import Csv from './ableton/csv'
import ShowAllAbleton from './ableton/show_all_ableton'
import Vault from './vault'

const helpers = require('./utils/helpers')

const Navbar = React.createClass({


  render() {


    return (
      <div>
        <div className="navbar">
          <nav className="navbar navbar-fixed-top" id="navbar-example">
            <a className="nav-link">
              <h1 className="name">FNI Code Vault</h1>
            </a>
            <ul className="nav navbar-nav float-xs-right ">
              <li className="nav-item ">
                <Link to="/" className="nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/abletoncodes" className="nav-link">View All</Link>
              </li>
              <li className="nav-item ">
                <Link to="/reload" className="nav-link" >Reload</Link>
              </li>
            </ul>
          </nav>


        </div>
        <Match exactly pattern="/" component={Vault} />
        <Match pattern="/abletoncodes" component={ShowAllAbleton} />
        <Match pattern="/reload" component={Csv} />
      </div>
    )
  }
})

module.exports = Radium(Navbar)
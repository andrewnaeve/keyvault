import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'


const Vault = React.createClass({
  render () {
    return (
      <div className="compFlex">
        <Link to="/ableton">
          <div className="abletonDoor compFlex">
            <h1 className="display-3">Ableton</h1>
          </div>
        </Link>
      </div>
    )
  }
})

module.exports = Vault
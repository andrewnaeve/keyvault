import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import AbletonCodes from './ableton_vault'

const helpers = require('./utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const CodeObject = React.createClass({

  render () {
    let codeOutline = {
      border: '1px solid red',
      color: 'red'
    }
    return (

      <div>
        <h5 style={codeOutline}>{this.props.code}</h5>
      </div>

    )
  }
})

module.exports = Radium(CodeObject)
import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import AbletonCodes from './ableton_vault'
import Styles from './styles'
const helpers = require('./utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const CodeObject = React.createClass({

  render () {

    return (

      <div className='coderow'>
        <h5 style={Styles.block} key={this.props.index}>{this.props.code}</h5>
        <button style={Styles.base} key={this.props.index+1}>Use!</button>
      </div>

    )
  }
})

module.exports = Radium(CodeObject)
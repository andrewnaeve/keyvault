import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'

const helpers = require('../utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const CodeObject = React.createClass({

  render () {
    let codeOutline = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid red',
      color: 'red',
      width: '350px',
      height: '50px'
    }
    return (

      <div>
        <h5 style={codeOutline}>{this.props.code}</h5>
      </div>


    )
  }
})

module.exports = Radium(CodeObject)
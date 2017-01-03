import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import ShowAllAbleton from './show_all_ableton'

const helpers = require('../utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const CodeTable = React.createClass({
  render () {
    
    let codeCell = {
      display: 'inline-block',
      marginLeft: '20px',
      lineHeight: '50px',
      width: '350px',
      borderRight: '1px solid black'
    }
    let emailCell = {
      display: 'inline-block',
      borderRight: '1px solid black',
      marginLeft: '20px',
      lineHeight: '50px',
      width: '300px'
    }
    let usedCell = {
      marginLeft: '20px',
      display: 'inline-block',
      lineHeight: '50px',
    }

    let styles={
      even: {
        height: '50px',
        backgroundColor: '#fff'
      },
      odd: {
        height: '50px',
        backgroundColor: '#eaf0f2'
      }
    }
    
    return (
      <div>
        <div style={this.props.index === 0 || this.props.index % 2 === 0 ? styles.even : styles.odd }>
          { this.props.used ? <span style="text-decoration: line-through;"><h6 style={codeCell}>{this.props.code}</h6></span> : <h6 style={codeCell}>{this.props.code}</h6> }
          { this.props.email ? <h6 style={emailCell}>{this.props.email}</h6> : <h6 style={emailCell}>N/A</h6> }
          { this.props.used ? <h6 style={usedCell}>USED</h6> : <h6 style={usedCell}>UNUSED</h6> }
        </div>
      </div>

    )
  }
})

module.exports = Radium(CodeTable)
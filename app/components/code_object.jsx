import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import AbletonCodes from './ableton_vault'
const helpers = require('./utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const CodeObject = React.createClass({

  render () {
    var styles = {
      base: {
        display: 'inline-block',
        backgroundColor: 'blue',
        border: 0,
        borderRadius: 4,
        color: 'white',
        padding: '1.5em',

        ':hover': {
          backgroundColor: 'red'
        },

        ':focus': {
          backgroundColor: 'green'
        },

        ':active': {
          backgroundColor: 'yellow'
        },
      },

      block: {
        display: 'inline-block',

        ':hover': {
          boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
        }
      }
    }

    return (
      <div className='coderow'>
        <h5 style={styles.block} key={this.props.index}>{this.props.code}</h5>
        <button style={styles.base} key={this.props.index+1}>Use!</button>
      </div>
    )
  }
})

module.exports = Radium(CodeObject)
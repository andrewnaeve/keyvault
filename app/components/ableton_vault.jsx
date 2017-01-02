import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import CodeObject from './code_object'
const helpers = require('./utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const AbletonVault = React.createClass({

// propTypes: {
//   savedCodes: arrayOf(shape({
//     code: string,
//     email: string,
//     used: boolean
//   }))
// },
  getInitialState() {
    return {
      results: '',
    }
  },

  loadCodesFromServer() {

    helpers.getCodes()
    .then(function(results) {
      console.log("in jsx results ", results.data)
      this.setState({
        results: results.data
      })
      console.log('after setting state: ' + this.state.results[0].code)
    }.bind(this))
  },

  componentDidMount() {
    this.loadCodesFromServer()
  },

  render () {

    if (this.state.results === '') {
      return (
        <h1>...loading</h1>
      )
    } else {
      let abletonCodes = this.state.results
      return (
        <div>
          <h1>codes go here</h1>
          {
            Object.keys(abletonCodes)
            .filter((key) => abletonCodes[key].used === false)
            .map((key, index) => {
              return (

                  <CodeObject {...abletonCodes[key]} key={index} index={index}/>

              )
            })
          }

        </div>
      )
    }
  }
})

module.exports =  Radium(AbletonVault)
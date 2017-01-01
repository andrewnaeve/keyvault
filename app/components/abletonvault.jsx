import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
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
      results: [],
    }
  },

  loadCodesFromServer() {
    helpers.getCodes()
    .then(function(results) {
      console.log("in jsx results ", results)
      this.setState({
        results: results
      })
    })
  },

  componentWillMount() {
    this.loadCodesFromServer()
  },




  render () {
    return (
      <div>
        <div className='abletonCodes'>

        </div>
      </div>
    )
  }
})

export default AbletonVault
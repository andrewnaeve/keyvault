import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import CodeObject from './code_object'
import CodeTable from './code_table'


const helpers = require('../utils/helpers')
const { shape, arrayOf, string, boolean } = React.PropTypes

const ShowAllAbleton = React.createClass({

  propTypes: {
    savedCodes: arrayOf(shape({
      code: string,
      email: string,
      used: boolean
    }))
  },
  
  getInitialState() {
    return {
      results: '',
    }
  },

  componentWillMount() {
    helpers.allAbleton()
    .then(function(results) {
      this.setState({
        results: results.data
      })
    }.bind(this))
  },



  render () {

    let qflex = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }

    let heading =  {
      
    }
    if (this.state.results === '') {
      return (
        <h1>...loading</h1>
      )
    }
    else {
      let abletonCodes = this.state.results
      return (
        <div className="showAllPage" style={qflex}>
          <h1 className="abletonTitle">Ableton Codes</h1>
          <div className="codeBorder">
            {
              Object.keys(abletonCodes)
              .map((key, index) => {
                return (
                  <div key={index}>
                    <CodeTable {...abletonCodes[key]} index={index}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
  }
})
  

module.exports =  Radium(ShowAllAbleton)

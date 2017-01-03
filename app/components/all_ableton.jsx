import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import CodeObject from './code_object'
import CodeTable from './code_table'


const helpers = require('./utils/helpers')
const { shape, arrayOf, string } = React.PropTypes

const AllAbleton = React.createClass({

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
    let border = {
      display: 'flex',

      flexDirection: 'column',
      border: '1px solid black',
      width: '800px'
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
        <div style={qflex}>
          <h1>Ableton Codes</h1>
          <div style={border}>
            <div style={heading}></div>
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
  

module.exports =  Radium(AllAbleton)

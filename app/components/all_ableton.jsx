import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
import CodeObject from './code_object'


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
    
  }
  loadAll() {
    helpers.allAbleton()
    .then(function(results) {
      this.setState({
        results: results.data
      })
    }.bind(this))
  },


  render () {
    if (this.state.results === '') {
      return (
        <h1>...loading</h1>
      )
    }
    else {
      let abletonCodes = this.state.results
      return (
        <div>
          <h1>Ableton Codes</h1>
          {
            Object.keys(abletonCodes)
            .map((key, index) => {
              return (
                  <CodeObject {...abletonCodes[key]} key={index} index={index}/>
              )
            })
          }
        </div>
      )
    
  }
})

module.exports =  Radium(AllAbleton)





    // } else {
    //   let abletonCodes = this.state.results
    //   return (
    //     <div>
    //       <h1>Ableton Codes</h1>
    //       {
    //         Object.keys(abletonCodes)
    //         .map((key, index) => {
    //           return (
    //               <CodeObject {...abletonCodes[key]} key={index} index={index}/>
    //           )
    //         })
    //       }
    //     </div>
    //   )
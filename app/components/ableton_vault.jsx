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
      email: '',
      results: '',
      showResults: false
    }
  },

  handleSubmit(e) {
    e.preventDefault()
    let email = this.refs.email.value
    console.log('this tha email: ', email)
    helpers.getCodes(email)
    .then(function(results) {
      this.setState({
        email: email,
        results: results.data,
        showResults: true
      })
    }.bind(this))
  },


  render () {

    let mainDiv = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '30vh'
    }
    let flexxing = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }
    let codeButton = {
      marginTop: '20px',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100px',
      width: '300px',
      border: '1px solid black',
      borderRadius: '10px 10px 10px 10px',
      outline: 0,
      ':hover': {
        backgroundColor: 'blue',
        color: 'white'
      },
      ':active': {
        backgroundColor: 'yellow',
        color: 'black'
      }
    }

      return (
        <div style={flexxing}>
          <div style={mainDiv}>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="term">Please enter the user's email</label>
              <input type="email" className="form-control" id="email" name="email" ref="email" placeholder="old_man_sonar@hotmail.com" required aria-required="true"/>
              <button type="submit" style={codeButton}><h4>Retrieve Ableton Code</h4></button>
            </form>
          </div>

          { this.state.showResults ? <CodeObject code={this.state.results.code} key={this.state.results._id}/> : null }
          
        </div>
      )
    
  }
})

module.exports =  Radium(AbletonVault)





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
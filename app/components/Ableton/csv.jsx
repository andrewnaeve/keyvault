import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
const Dropzone = require('react-dropzone')
const helpers = require('../utils/helpers')

var Csv = React.createClass({

  onDrop: function(acceptedFiles, rejectedFiles) {

    console.log('acceptedFiles: ', acceptedFiles[0])
    console.log('rejectedFiles: ', rejectedFiles)

    acceptedFiles ? alert("Additional codes have been added") : alert("Error")

    let file = acceptedFiles[0]

    helpers.readFile(file)
      .then(function(results) {
        console.log("results: " + results)
      }.bind(this))

  },


  render() {
    return (
      <div className="reloadMe container">
        <h1>Reload Ableton Codes</h1>
        <p className="top">To reload, drag a csv file into the drop-zone</p>
        <Dropzone onDrop={this.onDrop} className="dropBorder compFlex">
          <div className="text-xs-center display-4"><h1>Reload!</h1></div>
        </Dropzone>
      </div>
    )
  }
})

module.exports = Csv
import React from 'react'
import Radium from 'radium'
import { Match, Miss, Link, Router } from 'react-router'
const Dropzone = require('react-dropzone')
const helpers = require('../utils/helpers')

var Csv = React.createClass({

  onDrop: function(acceptedFiles, rejectedFiles) {

    console.log('acceptedFiles: ', acceptedFiles[0])
    console.log('rejectedFiles: ', rejectedFiles)
    let file = acceptedFiles[0]

    helpers.readFile(file)
      .then(function(results) {
        console.log("results: " + results)
      }.bind(this))

  },


  render() {
    return (
      <div>
        <Dropzone onDrop={this.onDrop}>
          <div>Drop a CSV file here to reload Ableton codes to the database.</div>
        </Dropzone>
      </div>
    )
  }
})

module.exports = Radium(Csv)
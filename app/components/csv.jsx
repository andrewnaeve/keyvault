import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'
const Dropzone = require('react-dropzone')
const helpers = require('./utils/helpers')

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
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }
})

export default Csv
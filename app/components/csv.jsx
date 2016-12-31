import React from 'react'
import { Match, Miss, Link, Router } from 'react-router'

const helpers = require('./utils/helpers')

var Csv = React.createClass({

  getInitialState: function() {
    return {
      uploaded: false
    }
  },

  handleUpload: function(e) {
    e.preventDefault()
    let csvFile = this.refs.file.getDOMNode().files[0]
    helpers.fileRead(csvFile)
      .then(function(results) {
        console.log("results: " + results)
      }.bind(this))

  },


  render() {
    return (
      <div>
        <form onSubmit={this.handleUpload} >
          <input type="file" name="file" ref="file" />
          <button type="submit">Upload!</button>
        </form>
      </div>
    )
  }
})

export default Csv
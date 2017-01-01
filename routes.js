const express = require('express')
const fs = require('fs')

module.exports = function(server) {
  server.post('/upload', (req, res) => {
    let codeArray = []
    let codes= req.body
    for (var prop in codes) {
      codeArray.push(prop.split(',,\r\n'))
    }
    let parsedArray = codeArray[0]
    console.log(codeArray[0])
  })
  
}


const express = require('express')

module.exports = function(server) {
  server.post('/upload', (req, res) => {
    var file = req.body.file

      fs.readFile(file, "utf8", function(error, data) {
        if(error) { return console.log(error) }
        let codes = data.split(',')
        console.log(codes)
    })
  })
  
}
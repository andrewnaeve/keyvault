const express = require('express')
const fs = require('fs')
const Code = require('./app/models/codes')

module.exports = function(server) {
  server.post('/upload', (req, res) => {
    let codeArray = []
    let codes= req.body
    let codeCollection = []

    for (var prop in codes) {
      codeArray.push(prop.split(',,\r\n'))
    }

    let parsedArray = codeArray[0]
    for (var i = 0; i < parsedArray.length; i++) {
        // codeCollection.push(new Code(parsedArray[i]))
        let codeObject = new Code({code: parsedArray[i]})
        codeCollection.push(codeObject)

    }

    Code.insertMany(codeCollection)
      .then(function(mongooseDocs) {
        console.log('success')
        res.send(mongooseDocs)
      })
      .catch(function(err) {
        console.log(err)
      })

  })

  server.get('/retrieve', (req, res) => {
    Code.find({}).limit(50)
    .exec(function(err, doc) {
      if (err) { console.log(err)}
      else { res.send(doc) }
    })
  })

}

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

  server.post('/retrieve', (req, res) => {
    let email = req.body.email

    console.log('hi', req.body.email)
    Code.findOneAndUpdate({used: false}, {used: true, email: req.body.email})
    .exec(function(err, doc) {
      if (err) { console.log(err)}
      else { res.send(doc) }
    })
  })

  server.get('/api/ableton', (req, res) => {
    Code.find({})
    .exec(function(err, doc) {
      if (err) { console.log(err) }
      else { res.send(doc) }
    })
  })

}

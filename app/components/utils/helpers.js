var axios = require('axios');

var helpers = {

  readFile: function(file) {
    var file = file
    return axios.post('/upload', file)
      .then(function(results) {
        console.log("fresh back from axios: " + results)
        return results
      })
    },
  getCodes: function() {
    return axios.get('/retrieve')
      .then(function(results) {
        console.log("got them codes for ya " + results)
        return results
      })
  }
}

// We export the helpers function 
module.exports = helpers;


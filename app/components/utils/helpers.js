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
  getCodes: function(email) {
    let userEmail = {"email": email}
    return axios.post('/retrieve', userEmail)
      .then(function(results) {
        return results
      })
  }
}

// We export the helpers function 
module.exports = helpers;


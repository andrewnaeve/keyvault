var axios = require('axios');

var helpers = {

  readFile: function(file) {
      var file = file
      return axios.post('/upload', file)
        .then(function(results) {
          console.log("still in axios sending results: " + results)
          return results
        })
    }
}

// We export the helpers function 
module.exports = helpers;


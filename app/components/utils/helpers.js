var axios = require('axios');

var helpers = {

	getSaved: function(searchTerm) {
		var searchTerm = {"term" : searchTerm};
		return axios.post('/retrieve', searchTerm)
			.then(function(results) {
				return results
			})	
	},
  readFile: function(file) {
      var file = {"file" : file}
      return axios.post('/upload', file)
        .then(function(results) {
          console.log("still in axios sending results: " + results)
          return results
        })
    }
}

// We export the helpers function 
module.exports = helpers;


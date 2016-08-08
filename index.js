var got = require('got')
var Promise = require('promise')

module.exports = function(username, cb) {
	var url = 'https://api.github.com/users/' + username + '/repos'
	var options = {
		per_page: 50,
		page: 0
	}

	get(options)

	function get(recursiveOptions, dataSoFar) {
		var dataSoFar = dataSoFar || []

		got(url, { query: recursiveOptions })
			.then(response => {
				var repos = JSON.parse(response.body)
				var totalData = dataSoFar.concat(repos)

				if (repos.length === options.per_page) {
					options.page++
					get(options, totalData)
				} else {
					cb(false, totalData)
				}
			})
			.catch(error => {
				cb(error.message)
			})
	}
}

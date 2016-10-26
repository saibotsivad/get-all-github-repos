var test = require('tape')
var getAllGithubRepos = require('../index.js')
var expectedRepos = require('./saibotsivad-repos.json')

test('Gets all repositories for a user', function (t) {
	getAllGithubRepos('saibotsivad', function (err, repos) {
		t.ifError(err, 'No error')
		var repoNames = repos.map(function (repoObject) {
			return repoObject.name
		})
		expectedRepos.forEach(function (repoName) {
			t.notEqual(repoNames.indexOf(repoName), -1, 'saibotsivad should have a repo named ' + repoName)
		})
		t.end()
	})
})

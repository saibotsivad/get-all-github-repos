# get-all-github-repos

Get a list of all Github repos for a username.

## install

The normal npm way:

```sh
npm install get-all-github-repos
```

## use it

Just pass in the username:

```js
var getAllRepos = require('get-all-github-repos')

getAllRepos('saibotsivad', function(err, repos) {
	if (err) {
		console.log(err)
	} else {
		console.log(repos)
	}
})
```

## api: getAllRepos(username, callback)

### `username`

The username to grab the repos from.

### `callback`

A traditional error-first callback function.

## license

[VOL](http://veryopenlicense.com)

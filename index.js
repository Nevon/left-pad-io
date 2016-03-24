var SDK = require('sdk')

var APIs = {
  read: {
    url: '/'
  }
}
var rules = {}
var api = new SDK('https://api.left-pad.io', APIs, rules);

function leftpad(str, len, ch, cb) {
  var query = {qs: {str, len, ch}}
  api.read({
  	qs: {
	  str,
	  len,
	  ch
	}
  }).then(function (resp) {
    cb(resp.body.str)
  })
}

module.exports = leftpad

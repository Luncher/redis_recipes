var client = require('./connect');
var assert = require('assert');

client.watch('k1');

client.multi().set('k1', 'v1').get('k1').get('k1').execAsync().then(function(ret) {
	client.unwatch();
  assert(ret[0] === 'OK');
  assert(ret[1] === 'v1');
  assert(ret[2] === 'v1');
});

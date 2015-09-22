var q = require('q')
var defer = q.defer()

defer.promise.catch(console.log)
setTimeout(defer.reject("REJECTED!"),300)

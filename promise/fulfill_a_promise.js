var q = require('q')
var defer = q.defer()

setTimeout(function(){
    defer.resolve("RESOLVED!")
  }, 300)

defer.promise.then(console.log)

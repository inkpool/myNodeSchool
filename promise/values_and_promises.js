var q = require('q')
var defer = q.defer()

function attachTitle(name)
{
  return "DR. "+name
  }

defer.promise.then(function(res){
    return attachTitle(res)
  }).then(function(res){
    return console.log(res)
    })

defer.resolve("MANHATTAN")

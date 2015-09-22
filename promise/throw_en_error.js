var q = require('q')
var defer = q.defer()
var input = process.argv[2]

function parsePromised(input){
  try{
      var json = JSON.parse(input)
      }catch(e){
      defer.reject(e)
      }
  defer.resolve(json)
  return defer.promise
}

parsePromised(input).then(null, console.log)

var http = require('http')
var url = process.argv[2]
var bl = require('bl')



http.get(url, function(response){
  response.pipe(bl(function(error, data){
      if(error)
        console.log(error)
      else
      {
        console.log(data.toString().length)
        console.log(data.toString())

      }
  }))  
})

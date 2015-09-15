var url = process.argv[2]
var http = require('http')
http.get(url, function(response){
  response.on('error', function(error){
    console.log(error) 
  })

  response.setEncoding('utf8').on("data", function(data){
    console.log(data)  
  })  
})

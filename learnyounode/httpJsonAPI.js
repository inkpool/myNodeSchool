var port = process.argv[2]
var http = require('http')
var url = require('url')

var server = http.createServer(function(request, response){
  var parsed = url.parse(request.url, true)
  if(parsed.pathname == "/api/parsetime"){
    var time = new Date(parsed.query.iso)
    var hour = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({'hour':hour,'minute':minute,'second':second}))
  }

  if(parsed.pathname == "/api/unixtime"){
    var timestamp = Date.parse(parsed.query.iso)
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify({ 'unixtime': timestamp }))
  }
})

server.listen(port)

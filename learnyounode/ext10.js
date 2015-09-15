var net = require('net')
var port = process.argv[2]
var date = new Date()

var server = net.createServer(function (socket){
  if(date.getMonth()+1<10){
    var value = 1+date.getMonth()
    var month = "0"+value
  }
  else{
    var month = date.getMonth()+1 
  }

  if(date.getDate()<10)
    var day = "0"+date.getDate()
  else{
    var day = date.getDate()
  }

  if(date.getHours()<10)
    var hour = "0"+date.getHours()
  else{
    var hour = date.getHours()
  }

  if(date.getMinutes()<10)
    var min = "0"+date.getMinutes()
  else{
    var min = date.getMinutes()
  }

  var data = date.getFullYear()+"-"+ month +"-"+day+" "+hour+":"+min+"\n"
  socket.write(data)
  socket.end()
})
server.listen(port)

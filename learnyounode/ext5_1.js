var dir = process.argv[2]
var ext = process.argv[3]
var fs = require('fs')

function filterFile(list, ext){
  for(var i = 0;i < list.length;i++){
    fileInfo = list[i].split('.')
    if(fileInfo[1] == ext)
      console.log(list[i])
    }  
}

fs.readdir(dir,function(error, function(list){
   for(var i = 0;i < list.length;i++){
    fileInfo = list[i].split('.')
    if(fileInfo[1] == ext)
      console.log(list[i])
    }  
  }){
  if(error)
    console.log(error) 
})

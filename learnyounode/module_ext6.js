var fs = require('fs')

function filterFile(list, ext){
  for(var i = 0;i < list.length;i++){
    fileInfo = list[i].split('.')
    if(fileInfo[1] == ext)
      console.log(list[i])
    }  
}

module.exports = function (dir, ext, callback){
  var out = []
  fs.readdir(dir,function(error, list){
    if(error)
       return callback(error)
    else{
      for(var i = 0; i < list.length; i++){
          fileInfo = list[i].split('.')
          if(fileInfo[1] == ext)
            out.push(list[i])
      }
      return callback(null, out)
    } 
  })
}

var fs = require('fs')
var path = process.argv[2]

function getLines(path,callback){
  fs.readFile(path,function (error,fileContent){
      if(error)
        output(error)
      else
        output(fileContent.toString().split('\n').length-1)
    })  
}

function output(res){
  console.log(res)
}

getLines(path,output)


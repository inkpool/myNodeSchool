var my_module = require('./module_ext6.js')

my_module(process.argv[2], process.argv[3], function (error, list){
  if(error)
    console.log(error)
  else{
    for(var i = 0; i < list.length; i++)
      console.log(list[i])
  }
  
})


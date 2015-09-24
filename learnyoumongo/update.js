var mongo = require('mongodb').MongoClient
var dbName = process.argv[2]
var url = 'mongodb://localhost:27017/'+dbName

mongo.connect(url, function(err, db){
  if(err)
    return console.log(err)
  db.collection('users').update({"username":"tinatime"},{$set:{
    "age": 40
    }}, function(err, data)
    {
      db.close()
      }
 )   
     
})
  

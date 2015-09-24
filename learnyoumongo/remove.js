var mongo = require('mongodb').MongoClient
var dbName = process.argv[2]
var collectionName = process.argv[3]
var id = process.argv[4]
var url = 'mongodb://localhost:27017/'+dbName

mongo.connect(url, function(err, db){
  if(err)
    return console.log(err)
  db.collection(collectionName).remove({"_id":id}, function(err, data)
    {
      db.close()
      }
 )   
     
})
  

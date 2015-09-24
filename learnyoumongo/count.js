var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = parseInt(process.argv[2], 10)

mongo.connect(url, function(err, db){
  if(err)
    return console.log(err)
  db.collection('parrots').count({"age":{$gt:age}}, function(err, count)
    {
      console.log(count)
      db.close()
      }
 )   
     
})
  

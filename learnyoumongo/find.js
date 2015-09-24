var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var keyword = parseInt(process.argv[2],10)

mongo.connect(url, function(err, db){
  db.collection('parrots')
  .find({
    age: {
      $gt: keyword
      }
    })
  .toArray(function(err, documents){
      console.log(documents)
      db.close()
    })
  //db.close()
})
  

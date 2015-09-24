var mongo = require('mongodb').MongoClient
var size = process.argv[2]
var url = 'mongodb://localhost:27017/learnyoumongo'

mongo.connect(url, function(err, db){
  if(err)
    return console.log(err)
  db.collection('prices').aggregate([
  {$match:{'size':size}},
  {
    $group:{
      _id:'avg',
      avg:{
        $avg:'$price'
        }
      }
    }
  ]).toArray(function(err, result){
    if(err)
      return console.log(err)
    console.log(result[0]['avg'].toFixed(2))
    db.close()
    
    }) 
})
  

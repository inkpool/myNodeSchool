var mongo = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var firstName = process.argv[2]
var lastName = process.argv[3]
var doc = {
  'firstName': firstName,
  'lastName': lastName
  }


mongo.connect(url, function(err, db){
  if(err)
    return console.log(err)
  db.collection('docs').insert(doc, function(err, data){
    if(err)
      return console.log(err)
    console.log(JSON.stringify(doc))
    db.close() 
    })

})
  

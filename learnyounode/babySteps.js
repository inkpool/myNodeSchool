var size = process.argv.length;
var sum = 0;
for(var i = 2;i < size;i++){
  sum += Number(process.argv[i]);  
}



console.log(sum);

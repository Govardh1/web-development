const express = require('express');
const app = express();
const port = 5000;

function sumofall(counter){
    var sum=0;
    for(var i=1;i<counter;i++){
        sum+=i;
    }
    return sum;
}
function rest(req, res){
    var counter=req.query.counter;
    var calculatedsum=sumofall(counter);
    var answer="the sum is :"+calculatedsum;
    res.send(answer)
  }
app.put('/handle', rest)
function calledfn(){
    console.log(`Example app listening on port ${port}`)
}
app.listen(port,calledfn);





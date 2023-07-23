const express = require('express')
const app = express()
const port = 3000
  
function sum(counter){ 
    var sum=0;
    for(var i=0;i<counter;i++){
            sum+=i;
        }
        return sum;
    }
    
function handelFirstRequest(req, res){
    // res.send('Hello World!')
    const counter=req.query.counter;
    var calculatedsum="the sum is "+sum(counter);
    console.log(calculatedsum);
    res.send(calculatedsum);
}
app.get('/handle', handelFirstRequest)
// app.post('/createuser',createuser) 

function started(){
    console.log(`Example app listening on port ${port}`)  
}
app.listen(port, started) 

// console.log(calculatedsum) 
// const fs=require('fs');
// const express=require('express');
// function callbackfn(err,data){
//     console.log(data);
// }
// fs.readFile("a.txt","utf-8",callbackfn)
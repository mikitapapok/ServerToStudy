const express = require('express')
const app = express()
const port = process.env.PORT||80
const bodyParser=require('body-parser')
const jsonParser=bodyParser.json();

let users=[
    {"email":"alexandr@gmail.com","firstName":"Alexandr","lastName":"Alexandrov","dateOfBirth":"1988-12-12","password":"111"},
    {"email":"pavel@gmail.com","firstName":"Pavel","lastName":"Petrov","dateOfBirth":"1998-12-12","password":"222"},
    {"email":"maksim@gmail.com","firstName":"Maksim","lastName":"Ivanov","dateOfBirth":"1928-10-10","password":"333"}]

JSON.stringify(users)

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','*');
    res.header('Access-Control-Allow-Methods','GET,POST,PUT');
    res.header('Access-Control-Allow-Credentials','true');
    next();
})
app.get('/users', (req, res) => {
    res.send(users)
})

app.put('/users',jsonParser,function(req,res){
    if(req.body){
        console.log(req.body)
        users=req.body;
        res.send(users)
    }


})
app.post('/users',jsonParser,function(req,res){
    if(req.body){
        console.log(req.body)
        users=[...users,req.body];
        res.send(users)
    }


})

app.listen(port, () => {
console.log(port)
})

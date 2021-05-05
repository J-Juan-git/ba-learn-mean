const express = require("express");
const app = express()
const port = process.env.PORT;
const path = __dirname
app.use(express.static(__dirname+'/frontend'))
app.get('/',(req,res)=>{
    res.send("Home Page");
})
app.get('/google-home-page',(req,res)=>{
    res.sendFile(path+"/frontend/html/google.html");
})
app.get('/apple-home-page',(req,res)=>{
    res.sendFile(path+"/frontend/html/apple.html");
})
app.listen(port || 5000, ()=>{
    console.log("Server is up and running");
})
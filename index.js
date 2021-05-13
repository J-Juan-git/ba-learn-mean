const express = require("express");
const app = express()
const port = process.env.PORT;
const path = __dirname
app.use(express.static(__dirname+'/frontend'))
app.get('/',(req,res)=>{
    res.sendFile(path+"/rontend/html/index.html")
})
app.get('/google-home-page',(req,res)=>{
    res.sendFile(path+"/frontend/html/google.html")
})
app.get('/apple-home-page',(req,res)=>{
    res.sendFile(path+"/frontend/html/apple.html")
})
app.get('/rgb-generator',(req,res)=>{
    res.sendFile(path+"/frontend/html/rgb-gen.html")
})
app.get('/login',(req,res)=>{
    res.sendFile(path+"/frontend/html/login.html")
})
app.get('/signup',(req,res)=>{
    res.sendFile(path+"/frontend/html/signup.html")
})
app.get('/todo',(req,res)=>{
    res.sendFile(path+"/frontend/html/todo.html")
})
app.listen(port || 5000, ()=>{
    console.log("Server is up and running");
})
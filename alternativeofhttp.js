//Routing using PUBLIC folder(static files)
const express = require('express')
const app = express()
app.use(express.static('./public'))
// app.get('/',(req,res) => {
//     res.status(200).send("Welcome to Homepage");
// })
app.get('/about',(req,res) => {
    res.status(200).send("Welcome to Aboutpage");
})
app.get('/contact',(req,res) => {
    res.status(200).send("Welcome to Contact page");
})
app.get('*',(req,res) => {
    res.status(404).send("<h1>Resource Not Found</h1>");
})
app.listen(8000, ()=>{
    console.log("Server is listening at 8000");
})
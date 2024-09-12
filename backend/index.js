
const express = require("express");

const app = express();
const PORT = 8001;
app.get("/",(req,res)=>{
    res.send("Request succefull!!");
})

app.listen(PORT,() => {console.log("Server start")});
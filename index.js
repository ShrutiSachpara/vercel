const express = require('express');

const app = express();


app.use("/",(req,res)=>{
    res.send("Hello vercel please approve............");
})

const port = 9000;

app.listen(port,()=>{
    console.log(`listen server on ${port}`) 
})
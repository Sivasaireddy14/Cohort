const express=require('express')
const port=4000

const app=express()

app.get('/',(req,res)=>{
res.send("Hello Buddy")
})



app.listen(port,()=>{
    console.log('http://localhost:4000/');
})
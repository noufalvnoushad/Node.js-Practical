// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });
var a=0;
const express = require("express");
const app=express();
// app.use("/",(req,res)=>
// {
//     res.send("Hello Backslash");
// });
app.use("/test",(req,res)=>
{
    res.send("Hello Test");
});
app.use("/hello",(req,res)=>
{
    res.send("Hello Hello");
});
// app.use((req,res)=>
// {
//     res.send("Hello user,How are you!!!");
//     console.log(a);
//     a++;
//     console.log("Helloooooooooooooooooooooo!!!");   
// });
app.listen(3000,()=>
{
    console.log("The server is listening port 3000...");
    
});
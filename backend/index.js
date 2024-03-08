const express=require("express")
const mongoDB=require('./db');

const app=express();

app.use((req , res , next)=>{
    res.setHeader("Access-Control-Allow-Origin" , "http://localhost:3000")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin , X-Requested-With , Content-Type , Accept"
    );
    next();
})

const port=5000;



app.get('/' , (req , res)=>{
    res.send("hello");
})
app.use(express.json());
app.use('/api' , require("./Routes/CreateUser"));
app.use('/api' , require("./Routes/DisplayData"));
app.use('/api' , require("./Routes/Order_data"));

app.listen(port , ()=>{
    console.log("server is running");
})
mongoDB();
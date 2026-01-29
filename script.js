const mongoose=require("mongoose")

const User=require("./userModel")   // import

mongoose.connect("mongodb://127.0.0.1:27017/mongoosedemo").then(()=>{
    console.log("connection success using mongoose lib")
}).catch(()=>{
    console.log("Error connection")
})

const myinp=new User({
    sname:"Mango",
    age:55,
    addr:"23/w jkhfsakjhf kalaww"
})
myinp.save().then(()=>{
    console.log("success")
}).catch((err)=>{
    console.log("error:",err)
})	
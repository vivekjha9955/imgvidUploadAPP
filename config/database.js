const mongoose=require("mongoose")
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(console.log("DB connection sucessfull"))
    .catch((error)=>{
        console.log("db connection issues")
        console.log(error);
        process.exit(1);
    })
    
}
const {defaul:mongoose}=require("mongoose ")
const { type } = require("os")
const userSchema =new mongoose.Schema({
name:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true,
},
image:{
    type:String,
    
}
})
module.exports=mongoose.mode('user',userSchema)
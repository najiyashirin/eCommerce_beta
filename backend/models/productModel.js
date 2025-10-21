const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    productDesc:{
        type:String
    },
    productPrice:{
        type:String,
        required:true,
        trim:true
    },
    productStock:{
        type:String,
        required:true,
        trim:true
    },
    productCategory:{
        type:String
    } 
})

const products=mongoose.model('Products',productSchema)
module.exports=products
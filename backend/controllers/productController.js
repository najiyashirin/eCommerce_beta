const Products=require('../models/productModel')

const addProduct=async (req,res)=>{
    try{
        const { productName, productDesc, productPrice,productStock,productCategory}=req.body;
        const product=new Products({productName, productDesc, productPrice,productStock,productCategory})
        await product.save()
        console.log("Product added:", req.body);
        res.status(201).json("Product added successfully");
    }catch (err) {
    console.error("Error during product adding:", err);
    res.status(500).json("Error product adding");
  }
};
const getProdAllProducts=async (req,res)=>{
    try{
        const products=await Products.find()
        res.status(200).json(products)
    }catch (err) {
    res.status(500).json("Error fetching products");
  }
};

const getProductDetails=async (req,res)=>{
    try{
        const {id}=req.params
        
module.exports={
  addProduct,
  getProdAllProducts
}
const express=require('express')
const productRoutes=express.Router()
const productController=require('../controllers/productController')

productRoutes.post('/addproduct',productController.addProduct)

productRoutes.get('/allproducts',productController.getProdAllProducts)

productRoutes.get('/productDetails/:id',productController.getProductDetails)

module.exports=productRoutes
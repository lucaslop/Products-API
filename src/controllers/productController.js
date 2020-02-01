const mongoose = require('mongoose');
require('../models/product');
const modelProduct = mongoose.model('product');

module.exports ={
    async newProduct (req,res){
        const product = await modelProduct.create(req.body);
        return res.json(product);
    },
    async listAllProduct(req,res){
        const products = await modelProduct.find();
        return res.json(products);
    },
    async deleteProduct (req,res){
        const id =  await req.params.id;
        await modelProduct.findOneAndDelete(id);
        return res.json('sucess');
    },

    async aProduct (req,res){
        const aProduct = await modelProduct.findById(req.params.id);
        return res.json(aProduct);
    }
}
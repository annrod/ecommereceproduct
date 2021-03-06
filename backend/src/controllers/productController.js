import asyncHandler from "express-async-handler";
import generateToken from '../common/generateToken.js';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';

// @desc Fetch all products
// GET /api/products
// @access Public 
export const getProducts = asyncHandler(async(req,res)=>{
    const pageSize=10;
    const page=Number(req.query.pageNumber)||1;
    const keyword=req.query.keyword
        ? {
            name:{
                $regex:req.query.keyword,
                $options:'i',
            },
           }
        :{};
    
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
           .limit(pageSize)
           .skip(pageSize * (page - 1));
    return res.json({ products, page,pages:Math.ceil(count / pageSize) });
});

// @desc Create a product
// POST /api/products
// @access Private/Admin
export const createProduct = asyncHandler(async (req,res)=>{
    const product = new Product ({
        name: 'Sample name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample brand',
        category: 'Sample category',
        countInStock: 0,
        numReviews: 0,
        description:'Sample description',
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
});

// @desc Creat new review
// POST /api/products/:id/reviews
// @access Private
export const createProductReview = asyncHandler(async(req,res)=>{
    const  {rating,comment}=req.body;
    const product=await Product.findById(req.params.id);
    if(product){
        const alreadyReviewed=product.reviews.find(
            (r)=>r.user.toString()===req.user._id.toString()
        );
        if(alreadyReviewed){
            res.status(400);
            throw new Error('Product already reviewed');
        }
        const review ={
            name: req.user.name,
            rating: Number(rating),
            comment,
            user:req.user._id,
        };
        product.reviews.push(review);
        product.numReviews=product.reviews.length;
        product.rating=
            product.reviews.reduce((acc,item)=>item.rating+acc,0) /
            product.reviews.length;
        await product.save();
        res.status(201).json({ message: 'Review added'});
    }else{
        res.status(404);
        throw new Error('Product not found');
    }
});


// @desc Delete a product
// GET DELETE /api/products/:id
// @access Private/Admin
export const deleteProduct = asyncHandler(async (req, res)=>{

    const product = await Product.findById(req.params.id);
 
    if (!product) {
        res.status(404);
        throw new Error('Product not found');          
    }

    product.remove();
    res.status(200).json({ success: true, data: {name: product.name,description: product.description} , error: 'Product removed'});
});

// @desc Fetch single product
// GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id);
    if(!product){
        res.status(404);
        throw new Error ('Product not Found');
               
    }else{
        res.json({
            //user: req.user.id,
            name: product.name,
            price: product.price,
        });   
    }
});


// @desc Update product
// PUT /api/products/:id
// @access Private/Admin
export const updateProduct = asyncHandler(async(req,res)=>{
    const { _id } = req.user;    
    //const {  name, description, brand,category,price } = req.product;  

    const user = await User.findById({_id});  

    const product = await Product.findById(req.params.id);
     
    if (product){
        product.name = req.body.name || product.name;
        product.description=req.body.description || product.description;
        product.brand=req.body.brand || product.brand;
        product.category=req.body.category || product.category;
        product.price=req.body.price || product.price;
    
        const updateProduct = await product.save();
        res.status(200).json({ success: true, data: {name: product.name,description: product.description, category:product.category} , error: 'Product modified'});
    } else {
        res.status(400);
        throw new Error('Product not found');
    }
});

// @desc Get top rated products
// GET /api/products/top
// @access Public
export const getTopProducts = asyncHandler(async(req,res)=>{

   const products = await Product.find({}).limit(3).sort({rating:'-1'});
         
    return res.json({ products});
})
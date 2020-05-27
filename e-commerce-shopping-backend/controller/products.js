const Product = require('../model/Product');
const ErrorHandling = require('../model/ErrorHandling');

exports.GET_ALL_PRODUCTS = async (req,res,next)=> {
    let products;
    try {
        products = await Product.find();
    }catch(err){
        return next(new ErrorHandling('Products not fetched', 500));
    } 
    if(!products || products.length === 0){
        return next(new ErrorHandling('No Products found.', 404));
    }

    res.status(200).json({products: products.map((product)=> {
        return {
            _id: product._id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image
        }
    })});
}

exports.CREATE_PRODUCT = async (req,res,next)=> {
    const {name, brand, description, price, quantityInStock, image} = req.body;
    const product = new Product({
        name,
        brand,
        description,
        price,
        quantityInStock,
        image
    })

    try {
        await product.save();
    } catch(err) {
        return next(new ErrorHandling('Product not created', 500))
    }
    res.status(201).json({message: 'Product created successfully.'});
}
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import users from './src/data/user.js';
import products from './src/data/product.js';
import User from './src/models/userModel.js';
import Product from './src/models/productModel.js';
import Order from './src/models/orderModel.js';
import connectDB from './src/config/db.js';

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) =>{
            return { ...product, user: adminUser};
        });

        await Product.insertMany(sampleProducts);
        console.log('Data imported!'.green.inverse);
        process.exit();
    }catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};

const destroyData = async () => {
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();
        console.log('Data destroyed!');
        process.exit();
    }catch (error){
        console.error(`${error}`,red.inverse);
        process.exit(1);
    }
};

if (process.argv[2] === 'd'){
    destroyData();
}else {
    importData();
}
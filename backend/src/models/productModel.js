import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema({
    name:{type: String, required: true},
    rating:{type: Number,required:true},
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    comment:{type: String, required: true},
},
{
    timestamps: true,
}
);

const productSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        name:{
            type: String,
            required: true,
           // unique: true,
        },
        image:{
            type: String,
            required: true,
            //unique: true,
        },
        brand:{
            type: String,
            required: true,
        },
        category:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        reviews:[reviewSchema],
        rating:{
            type: Number,
            required: true,
            default:true,
        },
        numReviews:{
            type: Number,
            required: true,
            default:true,
        },
        price:{
            type: Number,
            required: true,
            default:true,
        },
        countInStock:{
            type: Number,
            required: true,
            default:true,
        },
    },
    {
        timestamps:true,
    }
);

const Product = mongoose.model('Product',productSchema);
export default Product;
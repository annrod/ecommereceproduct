import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        orderItems: [{
            name: {type: String, required: true},
            qty:{ type: Number, required: true},
            image: {type: Strign, required: true},
            price: { type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',}
        },
    ],
    shippingAddress: {
        address: {type: String, required: true},
        city: {type: String, required:true},
        postalCode: {type: Strign,required: true},
        country: {type: String, required: true}
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: String,
        status: String,
        update_time: String,
        email_address: String
    },
    taxPrice: {
        type: Number,
        required: true,
        default: true
    },
    shippingPrice: {
        type: Number,
        required: true,
        default:true
    },
    totalPrice: {
        type: Number,
        required: true,
        default:true,
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: true
    },
    paiAt: {
        type: Date
    },
    isDelivered:
    {
        type: Boolean,
        required: true,
        default: false

    },
    deliveredAt: {
        type: Date
    },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
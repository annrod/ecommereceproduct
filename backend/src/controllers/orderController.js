import asyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';

// @desc    Add new order
// @route   POST /api/orders
// @access  Private
export const addOrderItems = asyncHandler(async (req, res) =>{
    const {
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;
    if (orderItems && orderItems.length === 0){
        res.status(400);
        throw new Error('No order items');
    } else {
        const order = new Order({
            user: req.user._id,
            orderItems,
            shippingAddress,
            paymentMethod,
            itemsPrice,
            taxPrice,
            shippingPrice,
            totalPrice,
        });
        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } 
});
//  @desc   Get order by ID
//  @route  GET /api/orders/:id
//  @access Private
export const getOrderById = asyncHandler(async (req, res) =>{
    //Usar findById y populate para obtener del user el name y email
    //Si existe  la orden  y el user que realiza la request es admin
    //o es el usuario que realizó la orden, retornar
    //res.json() con la orden encontrada 
    // Sino  retornar status 404
    // Y arrojar el error: 'Order not found
    //order.user._id === req.user._id metodo equals
    const order=await Order.findById(req.params.id).populate('user', 'name email');
    if(order && req.user.isAdmin || order.user._id.equals(req.user._id)){
        res.json({
            name: req.user.name,
            email: req.user.email
        });

    }else {
        res.status(404);
        throw new Error('Order not found');
    }

});

// @desc    Update order to paid
// @route   PUT /api/orders/:id/pay
// @access  Private
export const updateOrderToPaid = asyncHandler(async (req, res) =>{
    //Usar findById
    //Si existe la orden y el user que realiza la request es admin
    //o es el usuario que realizo la orden,
    //Asignar a isPaid true  y a paidAt la fecha actual
    //Luego a al orden encontrada asignar el objeto paymentResult:
    //order.paymentResult = {
        //id: req.body.id,
        //status: req.body.status,
        //update_time: req.body.update_time,
        //email_address:req.body.payer.email_address,
        //};
    //Realizar un .save() y retornar la orden actualizada
    // Sino retornar status 404 y arrojar el error: 'Order not found'    
    const order=await Order.findById(req.params.id);
    const idaux = order.id;
    
    console.log(req.body.email_address) ;
    console.log('Enserio', order.paymentResult.id);
    if(order && req.user.isAdmin || order.user._id.equals(req.user._id)){

        order.isPaid = true;
        order.paiAt = new Date();          
        order.paymentResult = {
            id: idaux,
            status: req.body.status,
            update_time:  req.body.update_time,
            email_address: req.body.email_address,
        };
        const updateOrderToPaid = await order.save();
        
        res.json({
            id: order.paymentResult.id,  
            status: order.paymentResult.status,
            update_time: order.paymentResult.update_time,
            email_address: order.paymentResult.email_address,
        });

    }else {
        res.status(404);
        throw new Error('Order not found');
    }
});

// @desc    Update order to delivered
// @route   PUT /api/orders/:id/deliver
// @access  Private
export const updateOrderToDelivered = asyncHandler(async (req,res) => {
    //Usar findById
    //Si existe la orden y el user que realiza la request es admin
    // o es el usuario que realizó la orden,
    //Asignar a isDelivered true y a deliveredAt la fecha actual
    // Realizar un .save() y retornar la orden actualizada
    //Si no retornar status 404 y arrojar el error: 'Order not found'
    const { isDelivered , deliveredAt} = req.body;
    const order=await Order.findById(req.params.id);
    if(order && req.user.isAdmin && order.user._id.equals(req.user._id)){
        order.isDelivered = isDelivered ?? order.isDelivered;
        order.deliveredAt = deliveredAt ?? order.deliveredAt;

        const updateOrderToDelivered = await order.save();

        res.json ({
            isDelivered: order.isDelivered,
            deliveredAt: order.deliveredAt,
            
        });
    }else {
        res.status(404);
        throw new Error('Order not found');
    }

});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = asyncHandler(async (req, res) =>{
    //Usar find y en el parametro enviar la propiedad user con 
    // el id que viene del req.user
    //Retornar un json() con las ordenes
   const {name} = req.body;
   const order = await Order.find({user: req.user._id});
   
    return res.json({    
        //paymentMethod: order.paymentMethod,
        //totalPrice: order.totalPrice,
        name:req.user.name,
        order
    });
});

//@desc     Get all orders
//@route    GET /api/orders
//@access   Private/Admin
export const getOrders = asyncHandler(async (req, res) =>{
    //Usar find y popular con los datos del user: id y name
    //Retornar un json() con las ordenes
    const {name , email} = req.body;
    const order=await Order.find({user: req.user.id}).populate('user', 'name');
         return res.json({
            name:req.user.name,
            order
        });
});
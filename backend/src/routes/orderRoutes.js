import { Router } from 'express';
import { addOrderItems, getOrderById, updateOrderToPaid,updateOrderToDelivered,getMyOrders,getOrders } from '../controllers/orderController.js';
import { admin,protect } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', protect, addOrderItems);
router.get('/', protect,admin,getOrders);
router.get('/myorders',protect,getMyOrders);
router.get('/:id', protect, getOrderById);
router.put('/:id/pay',protect,updateOrderToPaid);
router.put('/:id/deliver',protect,updateOrderToDelivered);
router.get('/myorders',protect,getMyOrders);
router.get('/:id', protect,getOrders);

export default router;
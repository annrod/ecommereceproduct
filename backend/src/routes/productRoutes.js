import { Router } from 'express';
import { createProduct, deleteProduct, getProducts,createProductReview,getProductById,updateProduct,getTopProducts } from '../controllers/productController.js';
import { admin,protect } from '../middlewares/authMiddlewares.js';

const router = Router();

router.post('/', protect,admin,createProduct);
router.get('/', getProducts);
router.get('/top',getTopProducts);
router.delete('/:id',protect,admin,deleteProduct);
router.post('/:id/reviews',protect,createProductReview);
router.get('/:id', getProductById);
router.put('/:id', protect,admin,updateProduct);

export default router;
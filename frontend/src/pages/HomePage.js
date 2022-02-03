import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarouselSlider from '../components/CarouselSlider';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { listProducts } from '../redux/actions/productActions';


//import Paginate from '../components/Paginate';


const HomePage = () => {
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;

    const params = useParams();
    const { keyword } = params;
    const pageNumber = params.pageNumber || 1;

    useEffect(()=>{
        dispatch(listProducts(keyword, pageNumber));
    }, [dispatch, keyword, pageNumber]);

return(
    <>
    <h1>Últimos Productos</h1>
    {loading ? (
        <Loader />
    ) : error ? (
        <Message variant='danger'>{error}</Message>
    ) : (
        <>
            <Row className="justify-content-md-center">
                < CarouselSlider />
                {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                   {<Product product={product}/> }
                </Col>
                ))}
            </Row> 
        </>
    )}
    </>
)
};

export default HomePage;
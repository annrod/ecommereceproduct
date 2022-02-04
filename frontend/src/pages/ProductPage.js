import React, {useEffect} from 'react';
import {  CardGroup, Card, Row, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {  useParams} from "react-router-dom";
import { listProductsId } from '../redux/actions/productActions';
import Rating from '../components/Rating';


const ProductPage = () => {
    const dispatch = useDispatch();

    const productListId = useSelector((state) => state.productListId);
    const { loading, error, product } = productListId;

    const params = useParams();
    const { id } = params;
    useEffect(() => {
        dispatch(listProductsId(id));
    }, [dispatch, id]);
    console.log("PRODUCTO",product);
    
    return (
        <>
        <button className="btn btn-outline-dark" type="button">Atras</button>
        <Row>
        <CardGroup>
               
               <img className="col-4"  src={product.image}/>
               <Card className="my-3 p-3 rounded">
                   <Card.Body>
                       <Card.Title as="div">
                           <strong>{product.name}</strong>
                       </Card.Title>
                       <Card.Text as='h3'>Precio: {product.price}</Card.Text>
                       <Card.Text as='div'>
                           <Rating
                               placeholderRating={product.rating}
                               readonly={true}
                               emptySybol={
                                   <svg
                                   xmlns="http://www.w3.org/2000/svg"
                                   width="16"
                                   height="16"
                                   fill="currentColor"
                                   class="bi bi-star"
                                   viewBox="0 0 16 16"
                                 >
                                   <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                 </svg>
                               }
                               fullSymbol={
                                   <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="16"
                                     height="16"
                                     fill="currentColor"
                                     class="bi bi-star-fill"
                                     viewBox="0 0 16 16"
                                   >
                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                   </svg>
                                 }
                                 placeholderSymbol={
                                   <svg
                                     xmlns="http://www.w3.org/2000/svg"
                                     width="16"
                                     height="16"
                                     fill="currentColor"
                                     class="bi bi-star-fill"
                                     viewBox="0 0 16 16"
                                   >
                                     <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                   </svg>
                                 }
                                 />
                       </Card.Text>
                       <Card.Text>
                           <p>Descripcion: {product.description} </p>
                       </Card.Text>
                   </Card.Body>                    
               </Card>
               <Card className="my-3 p-3 rounded">
                 <Card.Body>
                   <Card.Text >Precio: {product.price}</Card.Text>
                   <Card.Text >Stock: {product.countInStock}</Card.Text>
                   <Card.Text >Qty: <Form.Select size="sm">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                    </Form.Select>
                                          
                   </Card.Text>
                   <button className="btn btn-outline-dark" type="button">Agregar al carrito</button> 
                 </Card.Body>
               </Card>
               
           </CardGroup>

        </Row>
        <Row>
        <h1>Reviews</h1>
        <CardGroup>
            <Card>
              <Card.Text>{product.name}</Card.Text>
              <Rating
                placeholderRating={product.rating}
                readonly={true}
                emptySybol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star"
                  viewBox="0 0 16 16"
                >
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                </svg>
                }
                 fullSymbol={
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                  >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                }
                placeholderSymbol={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                }
                />
            <Card.Text>{}</Card.Text>
            <Form.Group className="mb-3">
              <Form.Label>Rating</Form.Label>
              <Form.Select size="sm">
                <option>Seleccionar...</option>
                <option>1_Malo</option>
                <option>2_Regular</option>
                <option>3_Bueno</option>
                <option>4_Muy Bueno</option>
                <option>5_Excelente</option>
              </Form.Select>
              <Form.Label>Comentario</Form.Label>
              <Form.Control as="textarea" rows={3}></Form.Control>
              <button className="btn btn-outline-dark">Enviar</button>
            </Form.Group>


            </Card>

            </CardGroup>

        </Row>
             
            
            
        </>        
    )

};
export default ProductPage;
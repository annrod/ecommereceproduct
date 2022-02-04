import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import NewUser from '../pages/NewUser';
import ProductPage from '../pages/ProductPage';

const AppRouter = () => {
    return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/Login' element={<Login />} />
              <Route path='/product/:id' element={<ProductPage />} />
              <Route path='/' element={<HomePage />} />
              <Route path='/NewUser' element={<NewUser />} />
            </Routes>
          </Container>
        </main>
      </Router>
    );
  };
  
  export default AppRouter;
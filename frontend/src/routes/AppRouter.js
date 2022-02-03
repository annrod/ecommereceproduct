import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../components/Header';
import Login from '../pages/Login';
import HomePage from '../pages/HomePage';
import CarouselSlider from '../components/CarouselSlider';

const AppRouter = () => {
    return (
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/Login' element={<Login />} />
              <Route path='/' element={<HomePage />} />

              <Route path='/CS'element={<CarouselSlider />}/>
            </Routes>
          </Container>
        </main>
      </Router>
    );
  };
  
  export default AppRouter;
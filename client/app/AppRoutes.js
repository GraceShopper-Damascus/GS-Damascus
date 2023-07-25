import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthForm from '../features/auth/AuthForm';
import Home from '../features/home/Home';
import { me } from './store';
import AllProducts from '../features/products/AllProducts';
import SingleProduct from '../features/products/SingleProduct';
import Cart from '../features/cart/Cart';

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const loggedInRoutes = <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/products" element={<AllProducts />} />
    <Route path="/products/:id" element={<SingleProduct />} />
    <Route path="/users/:userId/cart" element={<Cart />} />
    <Route path="/*" element={<Home />} />
  </Routes>

  const guestRoutes = <Routes>
    <Route path="/login" element={<AuthForm />} />
    <Route path="/home" element={<Home />} />
    <Route path="/products" element={<AllProducts />} />
    <Route path="/products/:id" element={<SingleProduct />} />
    <Route path="/users/cart" element={<Cart />} />
    <Route path="/*" element={<AuthForm name="login" displayName="Login" />} />
  </Routes>


  return (
    <div>
      {isLoggedIn ? loggedInRoutes : guestRoutes }
    </div>
  );
};

export default AppRoutes;

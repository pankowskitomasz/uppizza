import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AboutView from './views/aboutView';
import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import BlogView from './views/blogView';
import BlogDetailsView from './views/blog/blogDetailsView';
import BlogListView from './views/blog/blogListView';
import CartView from './views/cartView';
import CartCheckoutView from './views/cart/cartCheckoutView';
import CartListView from './views/cart/cartListView';
import CartPaymentView from './views/cart/cartPaymentView';
import ContactView from './views/contactView';
import DashboardView from './views/dashboardView';
import FoodView from './views/foodView';
import FoodDetailsView from './views/food/foodDetailsView';
import FoodListView from './views/food/foodListView';
import GalleryView from './views/galleryView';
import GalleryImageView from './views/gallery/galleryImageView';
import GalleryListView from './views/gallery/galleryListView';
import OrderView from './views/orderView';
import OrderDetailsView from './views/order/orderDetailsView';
import OrderListView from './views/order/orderListView';
import PasswordUpdateView from './views/passwordUpdateView';
import ProductView from './views/productView';
import ProductDetailsView from './views/product/productDetailsView';
import ProductListView from './views/product/productListView';
import RestorePasswordView from './views/restorePasswordView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/about" element={<AboutView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/blog" element={<BlogView/>}/>
            <Route exact path="/blog/details/*">
              <Route path=":id" element={<BlogDetailsView/>}/>
            </Route>
            <Route exact path="/blog/list" element={<BlogListView/>}/>
            <Route exact path="/cart" element={<CartView/>}/>
            <Route exact path="/cart/checkout" element={<CartCheckoutView/>}/>
            <Route exact path="/cart/list" element={<CartListView/>}/>
            <Route exact path="/cart/payment" element={<CartPaymentView/>}/>
            <Route exact path="/contact" element={<ContactView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/food" element={<FoodView/>}/>
            <Route exact path="/food/details/*">
              <Route path=":id" element={<FoodDetailsView/>}/>
            </Route>
            <Route exact path="/food/list" element={<FoodListView/>}/>
            <Route exact path="/gallery" element={<GalleryView/>}/>
            <Route exact path="/gallery/image/*">
              <Route path=":id" element={<GalleryImageView/>}/>
            </Route>
            <Route exact path="/gallery/list" element={<GalleryListView/>}/>
            <Route exact path="/order" element={<OrderView/>}/>
            <Route exact path="/order/details/*">
              <Route path=":id" element={<OrderDetailsView/>}/>
            </Route>
            <Route exact path="/order/list" element={<OrderListView/>}/>
            <Route exact path="/product" element={<ProductView/>}/>
            <Route exact path="/product/details/*">
              <Route path=":id" element={<ProductDetailsView/>}/>
            </Route>
            <Route exact path="/product/list" element={<ProductListView/>}/>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
        </Routes>
    </Router>
  );
}

export default App;

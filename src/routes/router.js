/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from '../auth/login';
import Register from '../auth/register';
import NavBar from '../header_footer/header';
import Footer from '../header_footer/footer';
import HowItWorks from '../pages/howitworks';
import Homepage from '../pages/homepage';
import Vendor from '../pages/vendorpages/vendorform';
import VendorDisp from '../pages/vendorpages/vendorlist';
import VendorInfo from '../pages/vendorpages/vendorinfo';
import CategoryList from '../pages/vendorpages/vendorcategory';
import CategoryInfo from '../pages/vendorpages/vendorcategoryinfo';
import Auth from './auth';
import Search from '../header_footer/search';
import Payment from '../pages/vendorpages/payment';
import Result from '../header_footer/results';

const RouterFile = () => <Router>
    <div>
    <NavBar />
    <Route path='/results' component={Result}></Route>
    <Route path='/payment' component={Payment}></Route>
    <Route path='/vendor' component={Auth(Vendor)}></Route>
    <Route exact path='/vendorlist' component={VendorDisp}></Route>
    <Route path='/search' component={Search}></Route>
    <Route path='/vendorlist/:VendorId' component={VendorInfo}></Route>
    <Route exact path='/vendorcategory' component={CategoryList}></Route>
    <Route path='/vendorcategory/:Category' component={Auth(CategoryInfo)}></Route>
    <Route path='/howitworks' component={HowItWorks}></Route>
    <Route path='/register' component={Register}></Route>
    <Route path='/login' component={Login}></Route>
    <Route exact path='/' component={Homepage}></Route>
    <Footer />
    </div>
    </Router>;

export default RouterFile;

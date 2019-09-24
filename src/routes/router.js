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

// TODO: Switch API call handlers to the service directory
const RouterFile = () => <Router>
    <div>
    <NavBar />
    <Route path='/vendor' component={Vendor}></Route>
    <Route exact path='/vendorlist' component={VendorDisp}></Route>
    <Route path='/vendorlist/:VendorId' component={VendorInfo}></Route>
    <Route path='/howitworks' component={HowItWorks}></Route>
    <Route path='/register' component={Register}></Route>
    <Route path='/login' component={Login}></Route>
    <Route exact path='/' component={Homepage}></Route>
    <Footer />
    </div>
    </Router>;

export default RouterFile;
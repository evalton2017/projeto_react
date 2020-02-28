import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './template/style.css'

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Routes from './main/routes'
import Menu from './template/menu'

export default props=>(
  <div className='container'>
    <Menu></Menu>
    <Routes></Routes>
  </div>
)

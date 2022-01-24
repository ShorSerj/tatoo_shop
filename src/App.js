import React, { useEffect, useState } from 'react';
import {Route, Routes} from "react-router-dom";
import './styles/reset.css'
import './styles/fonts.css'
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import Catalog from './components/Catalog/Catalog.jsx';
import Page404 from "./components/Page404/Page404";
import { compose } from 'redux';
import { connect } from 'react-redux';
import { initializedSuccessAC } from './redux/app-reducer.js';


function App(prop) {
  useEffect( () => {
    prop.initializedSuccessAC()
  })

  if(!prop.initialized) {
    return <h1>Aome</h1>//<Preloader/>
}
  return (
    <>
      <Header/>
      <button onClick={() => console.log(Hi)}>HI</button>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/catalog/*" element={<Catalog/> } />
          <Route path="/catalog/tatoomachine" element={<Catalog/> } />
          <Route path='/404' element={<Page404/>} />
        </Routes>
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose(
  connect(mapStateToProps, 
    {initializedSuccessAC}
    ))(App)


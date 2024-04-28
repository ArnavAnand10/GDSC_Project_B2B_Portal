import React from 'react';
import './App.css';
import Login from './Components/Importer/ImporterLogin';
import ImporterSignup from './Components/Importer/ImporterSignup';
import { FormProvider } from './Components/Contexts/FormContext';
import { Routes, Route } from "react-router-dom";
import ExporterHome from './Components/Exporter/ExporterHome';
import ProductDetails from './Components/Importer/ProductDetails/ProductDetails';
import ImporterCheckout from './Components/Importer/ImporterCheckout';
import ImporterOrderHistory from './Components/Importer/ImporterOrderHistory';
import CommonLoginOptions from './Components/Importer/CommonLoginOptions';
import Navbar from './Components/Contexts/Navbar';
import Footer from './Components/Contexts/Footer';


function App() {
  return (
    
    <FormProvider>
    <Routes>
      <Route path='/details' element={ <ProductDetails/> } />
      <Route path='/' element={ <CommonLoginOptions/> } />
      <Route path='/importer/signup' element={ <ImporterSignup/> } />
      <Route path='/exporter' element={<ExporterHome />} />
      <Route path='/importer/checkout' element={<ImporterCheckout />}/>
      <Route path='/importer/orderHistory' element={<ImporterOrderHistory />}/>
      <Route path='/importer/login' element={<Login />}/>
      <Route path='/navbar' element={<Navbar />}/>
      <Route path='/footer' element={<Footer />}/>
    </Routes>
  </FormProvider>

  );
}

export default App;

import React from 'react';
import './App.css';
import Login from './Components/Importer/ImporterLogin';
import ImporterSignup from './Components/Importer/ImporterSignup';
import { FormProvider } from './Components/Contexts/FormContext';
import { Routes, Route } from "react-router-dom";
import ExporterHome from './Components/Exporter/ExporterHome';
import ImporterCheckout from './Components/Importer/ImporterCheckout';
import ImporterOrderHistory from './Components/Importer/ImporterOrderHistory';
import CommonLoginOptions from './Components/Importer/CommonLoginOptions';

function App() {
  return (
    
    <FormProvider>
    <Routes>
      <Route path='/' element={ <Login/> } />
      <Route path='/importer/signup' element={ <ImporterSignup/> } />
      <Route path='/exporter' element={<ExporterHome />} />
      <Route path='importer/checkout' element={<ImporterCheckout />}/>
      <Route path='importer/orderHistory' element={<ImporterOrderHistory />}/>
      <Route path='importer/loginOptions' element={<CommonLoginOptions />}/>
    </Routes>
  </FormProvider>

  );
}

export default App;

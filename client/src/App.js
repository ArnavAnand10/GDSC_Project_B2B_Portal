import React from 'react';
import './App.css';
import Login from './Components/Importer/ImporterLogin';
import ImporterSignup from './Components/Importer/ImporterSignup';
import { FormProvider } from './Components/Contexts/FormContext';
import { Routes, Route } from "react-router-dom";
import ExporterHome from './Components/Exporter/ExporterHome';
import ProductDetails from './Components/Importer/ProductDetails/ProductDetails';


function App() {
  return (
    
    <FormProvider>
    <Routes>
      <Route path='/details' element={ <ProductDetails/> } />
      <Route path='/importer/signup' element={ <ImporterSignup/> } />
      <Route path='/exporter' element={<ExporterHome />} />
    </Routes>
  </FormProvider>

  );
}

export default App;

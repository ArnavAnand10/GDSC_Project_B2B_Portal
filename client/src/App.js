import React from 'react';
import './App.css';
import Login from './Components/Importer/ImporterLogin';
import ImporterSignup from './Components/ImporterSignup';
import { FormProvider } from './Components/Contexts/FormContext';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    
    <FormProvider>
    <Routes>
      <Route path='/' element={ <Login/> } />
      <Route path='/importer/signup' element={ <ImporterSignup/> } />
    </Routes>
  </FormProvider>

  );
}

export default App;

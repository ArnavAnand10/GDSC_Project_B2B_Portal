import React from 'react';
import './App.css';
import Login from './Components/Importer/ImporterLogin';
import ImporterSignup from './Components/ImporterSignup';
import { FormProvider } from './Components/Contexts/FormContext';



function App() {
  return (
    
    <FormProvider>
    <div className="App">
      <ImporterSignup />
    </div>
  </FormProvider>

  );
}

export default App;

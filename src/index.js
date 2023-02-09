import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Importing react-bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './contexts/globalContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>

  </React.StrictMode>
);



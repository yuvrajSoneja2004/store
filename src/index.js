import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



// Importing react-bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './contexts/globalContext';
import { Auth0Provider } from '@auth0/auth0-react';
import BackgroundMusic from './components/Backgroundmusic';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
      <Auth0Provider
    domain="dev-v8jrao5e6b41otbz.us.auth0.com"
    clientId="1ADK726LhyjjILxUmf7OND4befkZpl31"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BackgroundMusic />
        <App />
        </Auth0Provider>
      </BrowserRouter>
    </GlobalProvider>

  </React.StrictMode>
);



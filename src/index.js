import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router,RouterProvider } from 'react-router-dom';
import { approuter } from './App';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <Auth0Provider
    domain="dev-rxqhjjpz67tfx1l5.us.auth0.com"
    clientId="9eF0xFXWlyfwMsiMOFTyJNMRnuQRjdbo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  ><RouterProvider  router={approuter}/>  </Auth0Provider> );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

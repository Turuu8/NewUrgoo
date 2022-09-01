import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { MoviesContextProvider } from './context/MoviesContext';
import { Demo } from './Demo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Demo/>
  </React.StrictMode>
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <MoviesContextProvider>
  //       <App />
  //     </MoviesContextProvider>
  //   </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();

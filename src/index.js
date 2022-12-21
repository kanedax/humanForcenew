import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App'
import EditPersonalContainer from './Context/EditPersonelContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <EditPersonalContainer>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </EditPersonalContainer>
  </BrowserRouter>
);

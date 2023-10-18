import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import bootstarp from 'bootstrap/dist/css/bootstrap.min.css';
import { AppProvider } from './context';


ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



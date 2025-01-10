import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

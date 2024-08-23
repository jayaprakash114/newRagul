import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import global CSS if you have any

// Create a root element and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
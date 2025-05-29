
import React from 'react';
import { createRoot } from 'react-dom/client'; // Changed from 'import ReactDOM from ...'
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = createRoot(rootElement); // Changed from ReactDOM.createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
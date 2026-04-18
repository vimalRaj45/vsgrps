import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/* PrimeReact */
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

/* Swiper */
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

/* Global Styles */
import './index.css';

console.log('App initialization started...');

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes() && !window.__PRERENDER_INJECTED) {
  console.log('Hydrating existing content...');
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log('Creating new root for rendering...');
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// No extra event dispatch needed as we use renderAfterTime in vite.config.js

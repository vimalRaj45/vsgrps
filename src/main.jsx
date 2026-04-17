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

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Dispatch event for pre-renderer
setTimeout(() => {
  document.dispatchEvent(new Event('render-event'));
}, 1000);

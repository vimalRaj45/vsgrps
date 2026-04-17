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

// Use hydrateRoot if the page was pre-rendered (contains children)
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    rootElement,
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// Notify pre-renderer that the page is ready
// Using a slightly longer timeout to ensure GSAP and PrimeReact are initialized
if (window.__PRERENDER_INJECTED) {
  setTimeout(() => {
    document.dispatchEvent(new Event('render-event'));
  }, 1500);
} else {
  // In normal browser mode, still dispatch just in case, but usually not needed
  setTimeout(() => {
    document.dispatchEvent(new Event('render-event'));
  }, 1000);
}

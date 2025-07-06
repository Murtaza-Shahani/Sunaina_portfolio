import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// 🔥 AOS Imports
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS animations
AOS.init({
  duration: 1000,   // animation duration (ms)
  once: true        // only animate once on scroll
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


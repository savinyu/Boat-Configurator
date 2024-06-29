
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.scss';
import React, { Suspense } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={null}>
    <App />
    </Suspense>
  </React.StrictMode>
);

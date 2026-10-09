import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fontsource-variable/bricolage-grotesque/wdth.css';
import '@fontsource-variable/instrument-sans/index.css';
import '@fontsource/instrument-serif/400-italic.css';
import '@fontsource-variable/geist-mono/index.css';
import App from './App';
import { PageTransitionProvider } from './motion/PageTransition';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageTransitionProvider>
        <App />
      </PageTransitionProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

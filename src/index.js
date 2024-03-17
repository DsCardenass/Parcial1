import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import localEsMessage from './Components/es.json';
import localEnMessage from './Components/en.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IntlProvider locale='en' messages={localEnMessage}>
      <App />
    </IntlProvider>
  </React.StrictMode>
);

reportWebVitals();

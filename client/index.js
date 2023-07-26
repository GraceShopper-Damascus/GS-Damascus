import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// import store from './app/store.js';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './app/store.js';



const root = createRoot(document.getElementById('app'));

root.render(
  <Router>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </Router>
);

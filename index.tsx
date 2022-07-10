import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './Redux/reducer';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(reducer);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

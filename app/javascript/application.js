// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { createRoot } from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import Greeting from './components/greeting';

const root = document.getElementById('root');
const reactRoot = createRoot(root);

reactRoot.render(
  <Provider store={store}>
    <Greeting />
  </Provider>
);

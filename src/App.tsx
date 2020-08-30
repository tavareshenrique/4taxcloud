import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import store from './store';

import Routes from './routes';

import Header from '~/components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <ToastProvider>
      <Header />
      <Provider store={store}>
        <Routes />
      </Provider>
    </ToastProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;

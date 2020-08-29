import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

import Routes from './routes';
import Header from '~/components/Header';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <BrowserRouter>
    <ToastProvider>
      <Header />
      <Routes />
    </ToastProvider>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;

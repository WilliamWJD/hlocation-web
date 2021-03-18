import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

import AppProvider from './hooks';

import 'react-toastify/dist/ReactToastify.css';

const src: React.FC = () => (
  <>
    <AppProvider>
      <ToastContainer />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AppProvider>
    <GlobalStyle />
  </>
);

export default src;

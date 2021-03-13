import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Routes from './routes';
import GlobalStyle from './styles/globalStyles';

import 'react-toastify/dist/ReactToastify.css';

const src: React.FC = () => (
  <>
    <ToastContainer />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default src;

/* eslint-disable no-unused-vars */
import * as React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import Relatorios from './pages/relatorios';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <Relatorios />
  </ChakraProvider>
);

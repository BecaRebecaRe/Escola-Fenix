import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import RegistroPresenca from './pages/registroPresenca';
import Relatorios from './pages/relatorios';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <Router>
        <RegistroPresenca />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

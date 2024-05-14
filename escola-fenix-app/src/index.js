import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import RegistroPresenca from "./pages/registroPresenca";
import Relatorios from "./pages/relatorios";
import ListaAlunos from "./pages/listaAlunos";
import { ChakraProvider } from '@chakra-ui/react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="/registroPresenca" element={<RegistroPresenca />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/listaAlunos" element={<ListaAlunos />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

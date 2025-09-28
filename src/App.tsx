import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.css';
import { Layout } from './components/layout';
import { ConectaReab } from './pages/conecta';
import { Integrantes } from './pages/integrantes';
import { Faq } from './pages/faq';
import { NotFound } from './pages/notfound';
import { Contatos } from './pages/contatos';
import { Solution } from './pages/solution';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<ConectaReab/>}/>
          <Route path="*" element={<NotFound />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/solution" element={<Solution />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
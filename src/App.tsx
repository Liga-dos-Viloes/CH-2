import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './index.css';
import { Layout } from './components/layout';
import { ConectaReab } from './pages/conecta';
import { Integrantes } from './pages/integrantes';
import { Faq } from './pages/faq';

const Contato = () => (
    <main className="p-8">
        <h1 className="text-2xl font-bold">Contato</h1>
        <p className="mt-4">Entre em contato conosco.</p>
    </main>
);

const Solucao = () => (
    <main className="p-8">
        <h1 className="text-2xl font-bold">Nossa Solução</h1>
        <p className="mt-4">Veja como nossa aplicação funciona.</p>
    </main>
);


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<ConectaReab />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/solucao" element={<Solucao />} />
        
        {/* page n encontrada */}
        <Route path="*" element={
          <main className="p-8 text-center">
            <h1 className="text-4xl font-bold">404 - Página Não Encontrada</h1>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
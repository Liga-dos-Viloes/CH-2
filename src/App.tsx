import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 1. Importe o seu CSS principal e o componente Navbar
import './index.css'; // Ou o caminho para seu arquivo CSS principal com as definições do Tailwind
import { Navbar } from './components/layout';

// 2. Crie componentes simples para representar cada página.
//    (Em um projeto maior, cada um estaria em seu próprio arquivo, ex: src/pages/Home.tsx)
const Home = () => (
    <main className="p-8">
        <h1 className="text-2xl font-bold">Página Inicial</h1>
        <p className="mt-4">Bem-vindo ao AlertAI!</p>
    </main>
);

const Integrantes = () => (
    <main className="p-8">
        <h1 className="text-2xl font-bold">Nossa Equipe</h1>
        <p className="mt-4">Conheça os integrantes do projeto.</p>
    </main>
);

const FAQ = () => (
    <main className="p-8">
        <h1 className="text-2xl font-bold">Perguntas Frequentes (FAQ)</h1>
        <p className="mt-4">Tire suas dúvidas aqui.</p>
    </main>
);

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<FAQ />} />
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
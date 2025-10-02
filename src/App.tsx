import { HashRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import { Layout } from './components/layout';
import { ConectaReab } from './pages/conecta';
import { Faq } from './pages/faq';
import { NotFound } from './pages/notfound';
import { Contatos } from './pages/contatos';
import { Solution } from './pages/solution';
import { Integrantes } from './pages/integrantes';
import IntegranteDetailPage from './pages/integrantesDetailPage';

import kaikyImg from './assets/kaiky.png';
import solanoImg from './assets/solano.png';
import leandroImg from './assets/leandro.png';
import type { Member } from './types/types';

function App() {
  const membersData: Member[] = [
    {
      name: "Kaiky Pereira", rm: "564578", 
      description: "Apaixonado por tecnologia com foco em soluções que realmente façam a diferença...",
      quote: "Percebi que uma ferramenta que conectasse diretamente a Defesa Civil aos cidadãos...",
      image: kaikyImg, linkedin: "https://www.linkedin.com/in/kaikypereira/", 
      github: "https://github.com/rodrigueszkkk", layout: "image-left"
    },
    {
      name: "Gabriel Solano", rm: "562325", 
      description: "Focado em detalhes e na experiência do usuário...",
      quote: "Sempre penso em como o usuário vai interagir com cada elemento...",
      image: solanoImg, linkedin: "https://www.linkedin.com/in/gabriel-solano-165290363/", 
      github: "https://github.com/GabSolano", layout: "image-right" 
    },
    {
      name: "Leandro Guarido", rm: "561760", 
      description: "Especialista em lógica de programação e resolução de problemas...",
      quote: "Acredito que a tecnologia deve ser clara, funcional e acessível...",
      image: leandroImg, linkedin: "https://www.linkedin.com/in/leandroguaridooliveira/", 
      github: "https://github.com/LeandroGuaridoOliveira", layout: "image-left"
    }
  ];

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          
          <Route index element={<ConectaReab />} />

          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contatos" element={<Contatos />} />
          <Route path="/solution" element={<Solution />} />

          <Route 
            path="/integrantes/:rm" 
            element={<IntegranteDetailPage membersData={membersData} />} 
          />
          
          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
import { Link } from 'react-router-dom';
import logo from '../assets/AlertaAI-icon-bgpng.png'; // Reutilizando o logo

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f0f0f0] border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div className="col-span-2 md:col-span-1">
            <h3 className="text-xl font-bold">ConectaReab</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-[#0071e3] transition-colors">Início</Link></li>
              <li><Link to="/solution" className="hover:text-[#0071e3] transition-colors">A Solução</Link></li>
              <li><Link to="/faq" className="hover:text-[#0071e3] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Sobre</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/integrantes" className="hover:text-[#0071e3] transition-colors">Quem Somos</Link></li>
              <li><a href="#" className="hover:text-[#0071e3] transition-colors">Nossa Missão</a></li>
              <li><a href="#" className="hover:text-[#0071e3] transition-colors">Carreiras</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold">Suporte</h4>
            <ul className="mt-4 space-y-2">
              <li><Link to="/contact" className="hover:text-[#0071e3] transition-colors">Contato</Link></li>
              <li><a href="#" className="hover:text-[#0071e3] transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-[#0071e3] transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © {currentYear} ConectaReab. Todos os Direitos Reservados.
          </p>
          <a href="https://github.com/Liga-dos-Viloes" target="_blank" rel="noopener noreferrer" className="mt-4 md:mt-0">
            <img src={logo} alt="Logo ConectaReab" className="w-10 h-10 opacity-70 hover:opacity-100 transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
}
import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/ConectaReab.png'
import nosIcon from '../assets/nos.png';
import githubIcon from '../assets/icons8-github.svg';
import codeIcon from '../assets/icons8-source-code-100.png';
import appIcon from '../assets/icons8-iphone-16-pro-100.png';

interface FormData {
  name: string;
  email: string;
  message: string;
}


export function Contatos() {

const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    alert("Mensagem enviada com sucesso!");
    setFormData({ name: '', email: '', message: '' });
  };


    return(
        <>
        <header className="pt-48 pb-48 w-full text-5xl semibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex place-content-center">
                <h1 className='self-center'>Receba ajuda com <br /> tecnologias e fale <br /> com especialistas.</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-88 place-content-center' />
            </div>
            </header>
        <main className="py-8 px-4 md:px-16 lg:px-32">
        <section className="max-w-7xl mx-auto flex flex-col items-center gap-4">
          
          {/* Card de Contato */}
          <div className="bg-[#f0f0f0] rounded-2xl flex flex-col md:flex-row w-full max-w-5xl shadow-sm">
            <div className="flex flex-col justify-around p-8 md:p-12">
              <h2 className="text-2xl font-bold">Entre em contato conosco</h2>
              <p className="text-texto-secundario my-4">Se você tiver alguma dúvida, sugestão ou feedback, não hesite em nos contatar. Estamos aqui para ajudar!</p>
              <a href="#form" className="text-[#0071e3] hover:text-[#0050b3] font-semibold">
                Clique aqui para enviar um feedback &gt;
              </a>
            </div>
            <div className="hidden md:block">
              <img src={nosIcon} alt="Imagem dos integrantes" className="h-full object-cover rounded-r-2xl" />
            </div>
          </div>

          <section className=" grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-5xl mt-4">
            <InfoCard
              icon={githubIcon} 
              title="Org Github" 
              description="Receba atualizações em primeira mão no nosso Github oficial" 
              link="https://github.com/Liga-dos-Viloes" 
              linkText="Clique Aqui >"
            />
            <InfoCard 
              icon={codeIcon} 
              title="Fale com os Devs" 
              description="Tenha acesso às redes sociais de trabalho de cada um" 
              link="/integrantes" 
              linkText="Integrantes >"
            />
            <InfoCard 
              icon={appIcon} 
              title="O que fazemos?" 
              description="Veja nossa aplicação que salva vidas" 
              link="/solucao" 
              linkText="AlertAI >"
            />
          </section>

          <section id="form" className="bg-[#f0f0f0] rounded-2xl w-full max-w-5xl p-8 md:p-12 mt-4 shadow-sm">
            <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
              <h2 className="text-3xl font-bold text-center">Formulário de Contato</h2>
              <p className="text-texto-secundario text-center">Sua resposta será enviada para o seu E-mail o quanto antes</p>
              
              <input
                placeholder="Nome completo" 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-white w-full max-w-md p-3 rounded-lg border border-gray-300 focus:border-[#0071e3] focus:outline-none transition"
                required 
              />
              <input 
                placeholder="Email de contato" 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white w-full max-w-md p-3 rounded-lg border border-gray-300 focus:border-[#0071e3] focus:outline-none transition"
                required 
              />
              <textarea 
                placeholder="Sua mensagem" 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                rows={6} 
                className="bg-white w-full max-w-md p-3 rounded-lg border border-gray-300 resize-none focus:border-[#0071e3] focus:outline-none transition"
                required
              ></textarea>
              
              <button type="submit" className="bg-[#0071e3] text-white font-bold py-3 px-8 rounded-full hover:bg-[#0050b3] transition-colors">
                Enviar
              </button>
            </form>
          </section>
        </section>
      </main>
        </>
    
)
}

interface InfoCardProps {
    icon: string;
    title: string;
    description: string;
    link: string;
    linkText: string;
}

function InfoCard({ icon, title, description, link, linkText }: InfoCardProps) {
  const isExternal = link.startsWith('http');
  const className = "text-[#0071e3] hover:text-[#0050b3] font-semibold mt-4";

  return (
    <div className="bg-[#f0f0f0] p-8 rounded-2xl flex flex-col justify-around text-center md:text-left">
      <img src={icon} alt={`${title} icon`} className="w-16 h-16 mx-auto md:mx-0" />
      <h3 className="font-bold text-xl my-3">{title}</h3>
      <p className="text-texto-secundario">{description}</p>
      
      {isExternal ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className={className}>
          {linkText}
        </a>
      ) : (
        <Link to={link} className={className}>
          {linkText}
        </Link>
      )}
    </div>
  );
}

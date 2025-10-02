import { MemberCard } from '../components/MemberCard';

import logo from '../assets/dev_.png';
import kaikyImg from '../assets/kaiky.png';
import solanoImg from '../assets/solano.png';
import leandroImg from '../assets/leandro.png';
import type { Member } from '../types/types';


const membersData: Member= [
  {
    name: "Kaiky Pereira",
    rm: "564578",
    description: "Apaixonado por tecnologia com foco em soluções que realmente façam a diferença. A ideia do AlertaAI nasceu da necessidade de otimizar a comunicação em momentos críticos de desastre.",
    quote: "Percebi que uma ferramenta que conectasse diretamente a Defesa Civil aos cidadãos, de forma ágil e visual, seria fundamental para salvar vidas e garantir a segurança.",
    image: kaikyImg,
    linkedin: "https://www.linkedin.com/in/kaikypereira/",
    github: "https://github.com/rodrigueszkkk",
    layout: "image-left"
  },
  {
    name: "Gabriel Solano",
    rm: "562325",
    description: "Focado em detalhes e na experiência do usuário, Gabriel foi responsável por trazer vida à interface do AlertAI. Desde o design até a usabilidade, buscou criar uma aplicação intuitiva e agradável.",
    quote: "Sempre penso em como o usuário vai interagir com cada elemento. Uma boa experiência pode ser a diferença entre ignorar ou confiar em um alerta importante.",
    image: solanoImg,
    linkedin: "https://www.linkedin.com/in/gabriel-solano-165290363/",
    github: "https://github.com/GabSolano",
    layout: "image-right" 
  },
  {
    name: "Leandro Guarido",
    rm: "561760",
    description: "Especialista em lógica de programação e resolução de problemas, Leandro foi essencial para transformar ideias em funcionalidades reais. Com um olhar crítico e voltado à eficiência, contribuiu diretamente na construção da arquitetura do AlertAI.",
    quote: "Acredito que a tecnologia deve ser clara, funcional e acessível. Meu papel foi garantir que o sistema funcionasse da forma mais direta e segura possível para o usuário.",
    image: leandroImg,
    linkedin: "https://www.linkedin.com/in/leandroguaridooliveira/",
    github: "https://github.com/LeandroGuaridoOliveira",
    layout: "image-left"
  }
];


export function Integrantes() {

    return(
        <>
        <header className="pt-8 pb-8 w-full text-5xl  shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex-colum text-center place-items-center">
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-152 place-content-center '/>
                <h2 className='text-gray-500 font-thin'>A junção de ideas num projeto só</h2>
            </div>
        </header>
          <main className="py-16 px-4">
        <section className="max-w-5xl mx-auto flex flex-col items-center gap-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Componentes Principais</h2>
            <p className="text-texto-secundario text-lg mt-4 max-w-2xl">
              O AlertAI é um projeto desenvolvido por três integrantes, cada um com habilidades únicas que se complementam para criar uma solução inovadora e eficaz.
            </p>
          </div>

          {membersData.map((Member) => (
            <MemberCard key={Member.rm} member={Member} />
          ))}
        </section>
      </main>
        </>
    
)
}
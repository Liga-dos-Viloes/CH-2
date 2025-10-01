import logo from '../assets/ConectaReab.png'
import { InfoCard } from '../components/InfoCard'


import desafioBg from '../assets/conecta-desafio.png';
import missaoBg from '../assets/conecta-missao.jpg';
import feature1Bg from '../assets/conecta-feature1.png'; 
import feature2Bg from '../assets/conecta-feature2.png';
import feature3Bg from '../assets/conecta-feature3.png'; 
import feature4Bg from '../assets/conecta-feature4.png';

export function ConectaReab() {

    return(
        <>
        <header className="pt-8 pb-8 w-full text-5xl font-smibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex-colum text-center place-items-center">
                <h1>ConectaReab</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-180 place-content-center' />
                <h2>Acessível para quem precisa</h2>
            </div>
        </header>
        <main className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <InfoCard
            title="O Desafio da Reabilitação"
            description="Deslocamento, custos e a dificuldade de manter a consistência são as maiores barreiras para uma recuperação eficaz."
            backgroundImage={desafioBg}
          />

          <InfoCard
            title="Nossa Missão"
            description="Tornar a reabilitação acessível e contínua, usando a tecnologia para levar o cuidado até você."
            backgroundImage={missaoBg}
          />
          
          <div className="md:col-span-2 text-center my-8">
            <h2 className="text-4xl font-bold">A Solução é ConectaReab</h2>
            <p className="text-texto-secundario text-lg mt-4 max-w-3xl mx-auto">
              Uma plataforma digital que integra o cuidado profissional à sua rotina através de ferramentas que você já conhece e confia.
            </p>
          </div>

          <InfoCard
            title="Sessões via WhatsApp"
            description="Realize suas sessões de reabilitação por vídeo com segurança e sem a necessidade de baixar novos aplicativos."
            backgroundImage={feature1Bg}
          />

          <InfoCard
            title="Lembretes Automáticos"
            description="Receba notificações de suas consultas e orientações diretamente no seu celular, garantindo que você nunca perca uma sessão."
            backgroundImage={feature2Bg}
          />

          <InfoCard
            title="Acessibilidade Simplificada"
            description="Desenvolvido para todos, nosso sistema é compatível com celulares antigos e conexões de internet lentas."
            backgroundImage={feature3Bg}
          />
          
          <InfoCard
            title="Monitoramento Contínuo"
            description="Sua evolução é acompanhada de perto, permitindo que os profissionais ajustem seu plano de reabilitação com base em dados."
            backgroundImage={feature4Bg}
          />

        </div>
      </main>
        </>
)
}
import logo from '../assets/ConectaReab.png'
import { FeatureCard } from '../components/FeatureCard';

const featuresData = [
  {
    number: "1.",
    title: "Integração e Acesso",
    description: "Integração com os sistemas existentes do hospital para envio automático de mensagens e cadastro rápido de contatos."
  },
  {
    number: "2.",
    title: "Interface Amigável",
    description: "Linguagem simples e humanizada com opções de áudio e imagens para melhor acessibilidade."
  },
  {
    number: "3.",
    title: "Funcionalidades",
    description: "Agendamento de consultas, lembretes automáticos, orientações detalhadas e transferência para atendentes humanos."
  },
  {
    number: "4.",
    title: "Suporte Multicanal",
    description: "Facilidade de uso exclusivo pelo WhatsApp ou integração com outras plataformas conforme preferência do paciente."
  },
  {
    number: "5.",
    title: "Benefícios Esperados",
    description: "Redução de desistências, aumento da acessibilidade e eficiência operacional, promovendo maior satisfação do paciente."
  },
  {
    number: "6.",
    title: "Coleta e Análise de Dados",
    description: "Monitoramento de indicadores como adesão, desistências e feedback dos pacientes, permitindo melhorias baseadas em dados."
  }
];


export function Solution() {
    return(
        <>
        <header className="pt-48 pb-48 w-full text-5xl semibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex place-content-center">
                <h1 className='self-center'>Inovação e Inteligência <br /> a Serviço da Sua Saúde</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-88 place-content-center' />
            </div>
            </header>
        <main className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuresData.map((feature) => (
              <FeatureCard 
                key={feature.number}
                number={feature.number}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </main>
        </>
    )
}
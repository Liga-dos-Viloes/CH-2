import logo from '../assets/dialog.png'
import { FaqItem } from '../components/FaqItem';

const faqData = [
  {
    question: "O que é o ConectaReab?",
    answer: "É uma solução digital criada para facilitar o acesso de pacientes em reabilitação às suas sessões por vídeo, usando o WhatsApp com assistente virtual integrado."
  },
  {
    question: "Preciso saber mexer em celular para usar?",
    answer: "Não! O aplicativo foi feito especialmente para quem tem pouca familiaridade com tecnologia. Com apenas uma mensagem, você já inicia a sessão."
  },
  {
    question: "Como recebo os lembretes das consultas?",
    answer: "Você pode escolher receber por WhatsApp, SMS ou até ligação automática. O sistema se adapta à sua preferência."
  },
  {
    question: "É seguro usar o ConectaReab?",
    answer: "Sim. Seguimos todas as diretrizes de segurança e privacidade de dados da área da saúde, conforme as normas do Hospital das Clínicas e da LGPD."
  },
  {
    question: "Posso usar em qualquer celular?",
    answer: "Sim. O app é leve e compatível com celulares antigos e internet lenta."
  }
];


export function Faq() {

    return(
        <>
        <header className="pt-48 pb-48 w-full text-5xl semibold shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
            <div className="w-full flex place-content-center">
                <h1 className='self-center'>Perguntas Frequentes</h1>
                <img src={logo} alt="Celular com simbolos de medicina" className='flex w-88 place-content-center' />
            </div>
            </header>
        <main className="py-12 px-4">
        <div className=" max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">FAQ - ConectaReab</h2>
            <p className="text-texto-secundario mt-2">
              Tire suas dúvidas sobre como nossa solução facilita a sua reabilitação.
            </p>
          </div>


          {faqData.map((item, index) => (
            <FaqItem 
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </main>
        </>
    
)
}
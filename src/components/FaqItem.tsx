import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f0f0f0] rounded-lg shadow-sm w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 font-semibold text-lg text-texto-principal focus:outline-none"
      >
        {question}
      </button>
      <div
        className={` overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-6 text-texto-secundario">
          {answer}
        </p>
      </div>
    </div>
  );
}
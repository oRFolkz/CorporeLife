
import React, { useState } from 'react';
import { useReveal } from '../hooks/useReveal';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const reveal = useReveal();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: FAQItem[] = [
    { question: 'INGREDIENTES', answer: 'True Skin contém microesferas de semente de damasco, blend de hidroxiácidos (PHA e BHA), e agentes de limpeza suaves derivados de fontes vegetais.' },
    { question: 'GLUCONOLACTONA', answer: 'Um PHA (polihidroxiácido) que atua na renovação celular de forma extremamente gentil, ideal para peles sensíveis, além de ter propriedades hidratantes.' },
    { question: 'ÁCIDO SALICÍLICO', answer: 'Um BHA (beta-hidroxiácido) que penetra nos poros, ajudando a controlar a oleosidade e prevenir o aparecimento de cravos e espinhas.' },
    { question: 'SEMENTES DE DAMASCO', answer: 'Microesferas naturais e biodegradáveis que realizam a esfoliação física mecânica, removendo células mortas sem agredir o meio ambiente.' },
    { question: 'ATIVO DE LIMPEZA BIODEGRADÁVEL', answer: 'Utilizamos agentes de limpeza de fonte vegetal (milho), que limpam profundamente respeitando a barreira cutânea e a biodiversidade marinha.' },
    { question: 'ARTIGOS', answer: 'Acesse nosso blog para ler estudos científicos sobre os benefícios da esfoliação e da clean beauty na rotina de skincare.' }
  ];

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-voyage mb-4 text-gray-900 uppercase tracking-widest">CADA DETALHE É ESSENCIAL</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Todos os nossos produtos levam o propósito de oferecer as melhores matérias-primas do mundo em soluções inteligentes. Isso significa pensar em todos os detalhes, desde o que tem e também o que não tem em cada produto.
          </p>
        </div>

        <div ref={reveal.ref} className={`space-y-4 animeTexto ${reveal.className}`}>
          {items.map((item, idx) => (
            <div key={idx} className="border-b border-gray-100">
              <button 
                className="w-full py-6 flex justify-between items-center text-left hover:text-rose-900 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold tracking-widest text-sm uppercase">{item.question}</span>
                <i className={`fa-solid ${openIndex === idx ? 'fa-minus' : 'fa-plus'} text-xs text-gray-400`}></i>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

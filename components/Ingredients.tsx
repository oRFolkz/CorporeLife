
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Ingredients: React.FC = () => {
  const reveal = useReveal();
  const items = [
    {
      icon: "https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/icone-car-01.svg",
      title: "Hydroxy acids blend",
      description: "Combinação de poderosos hidroxiácidos que eliminam profundamente as impurezas e devolvem vitalidade à pele, acelerando o processo de renovação celular.",
      detail: "Feito com: Ácido Salicílico (BHA) e Gluconolactona (PHA)."
    },
    {
      icon: "https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/icone-car-02.svg",
      title: "Apricot seeds",
      description: "As sementes de damasco para esfoliar a pele são microesferas naturais e biodegradáveis que atuam na renovação celular para uma textura mais macia e luminosa.",
      detail: "Feito com: microesferas de semente de damasco."
    },
    {
      icon: "https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/icone-car-03.svg",
      title: "Smart cleanse",
      description: "Para uma limpeza inteligente que respeita as características naturais da pele e mantém a integridade da barreira cutânea.",
      detail: "Feito com: agente de limpeza suave de fonte vegetal derivado do milho."
    }
  ];

  return (
    <div id="ingredientes" ref={reveal.ref} className="grid grid-cols-1 md:grid-cols-3 gap-1 shadow-2xl rounded-none overflow-hidden">
      {items.map((item, idx) => (
        <div 
          key={idx} 
          className={`bg-[#063326] p-10 text-white min-h-[380px] flex flex-col justify-between animeTexto rounded-none ${reveal.className}`}
          style={{ transitionDelay: `${idx * 150}ms` }}
        >
          <div>
            <div className="mb-6 w-12 h-12 brightness-0 invert opacity-90">
              <img src={item.icon} alt={item.title} className="w-full h-full object-contain rounded-none" />
            </div>
            <h4 className="text-xl font-medium mb-4 uppercase tracking-widest font-serif">{item.title}</h4>
            <p className="text-[14px] leading-relaxed mb-6 opacity-90 font-sans font-light">
              {item.description}
            </p>
          </div>
          <p className="text-[12px] font-medium italic opacity-70 font-sans">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
};

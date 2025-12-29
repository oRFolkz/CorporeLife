
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const UsageMode: React.FC = () => {
  const reveal = useReveal();
  
  const steps = [
    {
      step: "01",
      title: "Preparar",
      description: "Sobre a pele limpa e ainda úmida, aplique uma pequena quantidade. Sinta a textura leve preparando o seu momento.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 2.25c-4.5 6-7.5 9.75-7.5 12.75 0 4.14 3.36 7.5 7.5 7.5s7.5-3.36 7.5-7.5c0-3-3-6.75-7.5-12.75z" />
          <path d="M12 17.25v-3.75" strokeLinecap="round" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Massagear",
      description: "Com movimentos circulares e suaves, percorra o rosto, pescoço e colo. Desfrute da renovação acontecendo em cada detalhe.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M16.035 15.603a6.75 6.75 0 10-8.07 0m8.07 0A6.745 6.745 0 0112 17.25c-1.397 0-2.677-.425-3.735-1.153m8.07 0L19.5 19.5m-11.235-3.897L4.5 19.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Revelar",
      description: "Enxágue com água em abundância e sinta imediatamente a maciez sedosa e a luminosidade natural da sua nova pele.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
          <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M3 12h2.25m.386-6.364l1.591 1.591M12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-voyage mb-6 text-gray-900 uppercase tracking-widest">Ritual de Uso</h2>
          <div className="w-24 h-px bg-[#063326] mx-auto opacity-30"></div>
        </div>

        <div ref={reveal.ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {steps.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center animeTexto ${reveal.className}`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="relative mb-10 text-[#063326]">
                <div className="absolute -top-4 -right-4 text-xs font-bold font-sans opacity-20 tracking-tighter">
                  STEP {item.step}
                </div>
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif font-medium mb-6 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed font-sans font-light max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#063326]/40">
            Frequência recomendada: até 2 vezes por semana
          </p>
        </div>
      </div>
    </section>
  );
};
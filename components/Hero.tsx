
import React, { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  const reveal = useReveal();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fator de movimento para o efeito de descida (parallax)
  const translateY = scrollY * 0.2;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-white pt-20 pb-12">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Texto à Esquerda (60%) */}
          <div className="w-full lg:w-7/12 px-4 mb-12 lg:mb-0">
            <div ref={reveal.ref} className={`animeTexto ${reveal.className}`}>
              <span className="text-16 font-bold tracking-[0.3em] text-[#deb357] uppercase mb-6 block">
                Bem-estar que se sente na pele
              </span>
              <h1 className="text-4xl md:text-[56px] font-bold text-[#063326] mb-6 leading-[1.1] tracking-tight">
                O Poder da Ozonização <br className="hidden md:block" />
                no Cuidado <span className="font-normal italic">Corporal Diário</span>
              </h1>
              
              <p className="text-[#555] text-lg md:text-xl mb-8 leading-relaxed max-w-2xl font-light">
                AEROZON foi criado para quem busca conforto imediato, frescor e praticidade no cuidado corporal. Sua fórmula com óleo ozonizado estabilizado é aplicada em spray, formando uma névoa leve que não pesa, não deixa resíduos e não suja as mãos.
              </p>

              <div className="bg-[#F8F9FA] p-8 border-l-4 border-[#deb357] rounded-r-xl mb-10 max-w-xl shadow-sm">
                <p className="text-[#3D3935] text-16 leading-relaxed font-light">
                  A experiência é simples e agradável: aplicação rápida, absorção confortável e uma sensação refrescante que acompanha sua rotina de autocuidado com leveza.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="w-full sm:w-auto bg-[#063326] text-white px-10 py-5 text-16 font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl hover:-translate-y-1 rounded-xl">
                  Conhecer a experiência AEROZON
                </button>
                <div className="flex items-center gap-2">
                  <span className="text-16 text-gray-400 font-bold uppercase tracking-wider">
                    Dermatologicamente Testado
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem à Direita (40%) */}
          <div className="w-full lg:w-5/12 px-4">
            <div className={`relative w-full max-w-[500px] mx-auto lg:ml-auto ${reveal.className}`}>
              <div className="shadow-[0_40px_80px_rgba(0,0,0,0.15)] overflow-hidden rounded-2xl aspect-[4/5] relative z-0">
                <img 
                  src="https://acdn-us.mitiendanube.com/stores/005/950/195/products/oleo-ozonizado-para-cicatricacao-aerosol-1164a9fbb6c6f4dc8917621752886565-1024-1024.webp" 
                  alt="Aerozon Lifestyle" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Elemento flutuante de design - Movido para o Topo Esquerdo com efeito de descida */}
              <div 
                className="absolute -top-12 -left-12 bg-white p-6 shadow-2xl rounded-2xl hidden md:block max-w-[220px] border border-gray-50 z-20 transition-transform duration-75 ease-out"
                style={{ transform: `translateY(${translateY}px)` }}
              >
                <p className="text-[#deb357] font-bold text-16 uppercase tracking-widest mb-2">Toque Seco</p>
                <p className="text-gray-400 text-16 leading-tight font-light">
                  Fórmula de rápida absorção para o seu dia a dia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

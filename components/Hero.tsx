
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const Hero: React.FC = () => {
  const reveal = useReveal();

  const checklist = [
    "94% de alívio em dores nas pernas e articulações.",
    "Potência Ozonizada: Arnica + Cânfora + Menta.",
    "Dermatologicamente testado e seguro para uso diário."
  ];

  return (
    <section id="beneficios" className="pt-24 pb-48 bg-white overflow-visible">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 items-center">
          {/* Coluna de Texto - Bootstrap-like Grid */}
          <div className="w-full lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div ref={reveal.ref} className={`animeTexto ${reveal.className}`}>
              <h1 className="text-[38px] md:text-[54px] font-voyage text-gray-900 mb-8 leading-[1.1] uppercase tracking-wider">
                Liberdade de movimento: <br />
                <span className="text-[#063326]">O único Blend Ozonizado</span> <br />
                que trata sua dor e modela seu corpo.
              </h1>
              
              <h2 className="text-gray-500 text-lg md:text-xl mb-12 leading-relaxed max-w-xl font-sans font-light">
                Não escolha entre saúde e estética. O N2 Recupera Blend utiliza a tecnologia do ozônio ativo para eliminar dores articulares, potencializar seu treino e reduzir medidas simultaneamente.
              </h2>

              {/* Checklist Vertical */}
              <div className="space-y-6 mb-12">
                {checklist.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#063326]/10 flex items-center justify-center">
                      <i className="fa-solid fa-check text-[#063326] text-[10px]"></i>
                    </div>
                    <span className="text-gray-700 font-medium font-sans text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <button className="w-full sm:w-auto bg-[#063326] text-white px-12 py-5 text-sm font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl hover:-translate-y-1">
                  EXPERIMENTAR TECNOLOGIA OZONIZADA
                </button>
              </div>
            </div>
          </div>

          {/* Coluna de Imagens - Estrutura de Invasão da Referência */}
          <div className="w-full lg:w-6/12 px-4 relative flex justify-end">
            <div className={`relative w-full max-w-[580px] ${reveal.className}`}>
              {/* Imagem Principal (Superior Direita) */}
              <div className="w-[90%] ml-auto animeZoom shadow-lg">
                <img 
                  src="https://i.postimg.cc/DZzVNs9Z/Google-AI-Studio-2025-12-29T20-28-50-438Z.png" 
                  alt="Aplicação N2 Recupera" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Imagem Sobreposta (Inferior Esquerda) */}
              <div className="absolute -bottom-20 left-0 w-[55%] z-10">
                <div className={`transition-all duration-[1500ms] cubic-bezier(0.2, 0, 0.2, 1) shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[10px] border-white ${reveal.className === 'active' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <img 
                    src="https://i.postimg.cc/MHN8VTrj/Google-AI-Studio-2025-12-29T20-28-24-082Z.png" 
                    alt="Wellness" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
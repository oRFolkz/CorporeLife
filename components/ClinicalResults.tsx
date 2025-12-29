
import React from 'react';
import { useReveal } from '../hooks/useReveal';

export const ClinicalResults: React.FC = () => {
  const reveal = useReveal();
  const stats = [
    { value: '87%', label: '<strong>Fim do "peso" nas pernas:</strong> menos inchaço e melhor circulação.' },
    { value: '94%', label: '<strong>Mobilidade recuperada:</strong> sentiram alívio efetivo nas dores.' },
    { value: '97%', label: '<strong>Pele renovada:</strong> Além de tratar a dor, notaram melhora estética na pele.' },
  ];

  const marqueeText = "N2 RECUPERA BLEND • OZÔNIO ATIVO • LIBERDADE DE MOVIMENTO • ";

  return (
    <section id="resultados-clinicos" ref={reveal.ref} className="py-24 md:py-32 bg-[#F5F5F5] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          
          {/* Lado Esquerdo: Bloco de Imagens */}
          <div className="w-full lg:w-5/12 px-4 mb-12 lg:mb-0">
            <div className={`relative mx-auto max-w-[500px] ${reveal.className === 'active' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} transition-all duration-1000 ease-out`}>
              <img 
                src="https://i.postimg.cc/zBQwrZc7/Generated-Image-December-29-2025-5-21PM.png" 
                alt="Pattern background" 
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Lado Direito: Conteúdo e Estatísticas */}
          <div className="w-full lg:w-6/12 px-4 lg:pl-16">
            <h2 className="text-[34px] md:text-[48px] font-voyage text-[#063326] mb-6 leading-tight uppercase tracking-wider font-bold">
              Eficácia Clínica Comprovada: <br />
              <span className="font-light">Contra fatos não há dor.</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-12 leading-relaxed font-sans font-light max-w-xl">
              Submetemos a <strong>fórmula exclusiva do N2 Recupera Blend</strong> a testes rigorosos de eficácia percebida. O resultado? Uma <strong>aprovação quase unânime</strong> em alívio da dor e regeneração da pele, sem nenhum efeito adverso registrado.
            </p>

            <div className="relative">
              {/* Linha vertical conectando os pontos */}
              <div 
                className={`absolute left-[3px] top-[25px] bottom-6 w-[1px] bg-[#063326]/20 transition-all duration-1000 origin-top ${reveal.className === 'active' ? 'scale-y-100' : 'scale-y-0'}`}
              ></div>

              <ul className="space-y-10">
                {stats.map((stat, idx) => (
                  <li 
                    key={idx} 
                    className={`relative flex items-center animeTexto ${reveal.className}`}
                    style={{ transitionDelay: `${idx * 150}ms` }}
                  >
                    <div className="absolute left-0 w-[7px] h-[7px] rounded-full bg-[#063326] z-10"></div>
                    
                    <div className="flex items-center pl-10 md:pl-12">
                      <span className="text-[38px] md:text-[52px] font-bold text-[#063326] min-w-[100px] md:min-w-[130px] leading-none mr-4">
                        {stat.value}
                      </span>
                      <span className="text-[14px] md:text-[17px] text-[#3D3935] leading-snug max-w-[350px] font-sans" dangerouslySetInnerHTML={{ __html: stat.label }}>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Nota de Rodapé */}
        <div className="mt-24 pt-10 border-t border-gray-200/60 max-w-5xl mx-auto">
          <div className="opacity-50 italic text-center lg:text-left">
            <p className="text-[10px] md:text-[11px] text-[#847F7A] leading-relaxed font-sans">
              *Estudo realizado com foco em <strong>eficácia clínica e percepção do usuário</strong> após 30 dias de uso contínuo do N2 Recupera.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full mt-20 py-10 bg-transparent border-y border-[#063326]/10">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="marquee-item !text-[#063326]">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

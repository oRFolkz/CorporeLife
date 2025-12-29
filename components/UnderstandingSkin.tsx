
import React from 'react';
import { useReveal } from '../hooks/useReveal';
import { Ingredients } from './Ingredients';

export const UnderstandingSkin: React.FC = () => {
  const reveal = useReveal();

  return (
    <section className="relative overflow-visible bg-[#3D3935]">
      {/* Imagem de Fundo - Ocupa toda a seção */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.postimg.cc/tgQWDNVh/Google-AI-Studio-2025-12-29T20-36-18-596Z.png" 
          alt="Background True Skin" 
          className="w-full h-full object-cover object-right lg:object-center"
        />
        {/* Overlay para melhorar leitura */}
        <div className="absolute inset-0 bg-black/30 lg:bg-transparent"></div>
      </div>

      {/* Conteúdo de Texto */}
      <div className="relative z-10 container mx-auto px-4 py-24 lg:py-40 lg:pb-0">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div ref={reveal.ref} className={`max-w-xl animeTexto ${reveal.className}`}>
              <h2 className="text-white text-4xl md:text-[54px] font-medium leading-tight mb-10 font-serif drop-shadow-md">
                Como True Skin <br /> entende a sua pele
              </h2>
              
              <div className="space-y-6 text-white text-[15px] md:text-base font-light leading-relaxed opacity-95 font-sans drop-shadow-md">
                <p>
                  O ato de esfoliar o rosto estimula a renovação celular. Retirar a camada de células mortas é fundamental para que uma pele mais jovem possa surgir. A esfoliação também ajuda a desobstruir os poros e evita o aparecimento de acne, além de contribuir em longo prazo para o aumento da produção de colágeno e firmeza da pele.
                </p>
                <p>
                  True Skin é um gel esfoliante facial que combina a esfoliação física com microesferas naturais de sementes de damasco com um blend de hidroxiácidos.
                </p>
                <p>
                  O blend de hidroxiácidos é ideal inclusive para peles mais sensíveis e a escolha pelas microesferas de semente de damasco, ao invés de microesferas de plástico, é uma gentileza com a sua pele e com a natureza.
                </p>
                <p>
                  Isso porque, microesferas de plástico podem conter contaminantes quando em contato com a sua pele e depois de utilizadas terminam em rios e oceanos, criando um ciclo que prejudica a vida marinha e todo um ecossistema.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards de Ingredientes: Efeito de "Invasão" - Centralizado e sobreposto */}
      <div className="container mx-auto px-4 relative z-30 translate-y-1/2 -mb-24 md:-mb-0">
        <Ingredients />
      </div>
    </section>
  );
};

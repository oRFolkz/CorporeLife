
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClinicalResults } from './components/ClinicalResults';
import { Certifications } from './components/Certifications';
import { UnderstandingSkin } from './components/UnderstandingSkin';
import { UsageMode } from './components/UsageMode';
import { ToxicLoad } from './components/ToxicLoad';
import { ParallaxSection } from './components/ParallaxSection';
import { FAQ } from './components/FAQ';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Parallax Damasco */}
        <ParallaxSection image="https://i.postimg.cc/GpmrWZDZ/Google-AI-Studio-2025-12-29T20-31-43-563Z.png">
          <div className="container mx-auto px-4 text-center">
             <h2 className="text-white text-3xl md:text-5xl font-light max-w-4xl mx-auto leading-tight">
              Você não precisa <strong>normalizar o desconforto</strong> ou limitar sua rotina por causa da dor. Com <strong>94% de eficácia clínica comprovada</strong>, o N2 Blend permite que seu corpo se recupere com a <strong>velocidade que você precisa</strong>.
            </h2>
          </div>
        </ParallaxSection>

        {/* Section 3: Clinical Results */}
        <ClinicalResults />

        {/* Section 4: Certifications */}
        <Certifications />

        {/* Section 6: Como True Skin entende a sua pele + Ingredientes */}
        <UnderstandingSkin />

        {/* Section 7: Mindful Application */}
        <section id="ritual" className="pt-48 md:pt-64 pb-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap -mx-4 items-center">
              <div className="w-full lg:w-5/12 px-4 mb-16 lg:mb-0">
                <div className="max-w-xl">
                  <h2 className="text-4xl md:text-5xl font-voyage mb-8 text-gray-900 uppercase tracking-wider font-bold">Mindful Application</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-12 font-sans">
                    O corpo é um órgão de <strong>percepção e conexão</strong>. Queremos que você se conecte consigo mesmo durante a rotina de autocuidado e torne esse momento <strong>mais consciente</strong>. Mindful application é a intenção de colocar <strong>atenção plena</strong> em si como uma forma de carinho e cuidado.
                  </p>
                  <h3 className="text-xl font-bold mb-6 text-[#063326] uppercase tracking-widest font-sans">Transforme sua rotina em <strong>rituais com significados</strong></h3>
                  <div className="space-y-6 text-gray-600 leading-relaxed font-sans font-light">
                    <p>Com o <strong>amor e a gentileza</strong> que você merece, massageie o N2 Recupera na sua pele. Com calma, percorra com movimentos circulares a região desejada. Lembre-se que o seu corpo é um meio de comunicação e <strong>conexão entre você e o seu bem-estar</strong>.</p>
                    <p>Observe e perceba com <strong>atenção plena</strong> como surge um sentimento de renovação que esse momento proporciona. Trazendo mais atenção para esse instante, você traz <strong>mais vida</strong>. Sua pele vai manifestar-se com <strong>maciez, luminosidade e beleza essencial</strong>.</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-7/12 px-4 lg:pl-20">
                <div className="shadow-2xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[800px] relative">
                  <ParallaxSection 
                    image="https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/img05-true-skin.jpg" 
                    height="100%" 
                    showOverlay={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: Modo de uso */}
        <UsageMode />

        {/* Section 9: Toxic Load */}
        <ToxicLoad />

        {/* Section 11: FAQ / Detalhes */}
        <FAQ />
      </main>
    </div>
  );
};

export default App;

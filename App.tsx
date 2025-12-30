
import React from 'react';
import { Hero } from './components/Hero';
import { ValueSection } from './components/ValueSection';
import { BenefitsSection } from './components/BenefitsSection';
import { TechnologySection } from './components/TechnologySection';
import { UsageSteps } from './components/UsageSteps';
import { RitualSection } from './components/RitualSection';
import { FAQ } from './components/FAQ';
import { FooterCTA } from './components/FooterCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-[#3D3935]">
      <main className="flex-grow">
        {/* Section 1: Hero Impacto Inicial */}
        <Hero />

        {/* Section 2: Cards Modulares de Valor */}
        <ValueSection />

        {/* Section 2.5: Benefícios e Indicações de Uso */}
        <BenefitsSection />

        {/* Section 3: Tecnologia e Conceito (Com Tabela Comparativa) */}
        <TechnologySection />

        {/* Section 4: Experiência de Uso (Passo a Passo) */}
        <UsageSteps />

        {/* Section 5: Ritual / Mindful Application */}
        <RitualSection />

        {/* Section 6: Confiança e FAQ */}
        <FAQ />

        {/* Section 7: CTA Final */}
        <FooterCTA />
      </main>
    </div>
  );
};

export default App;


import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-3xl font-voyage tracking-[0.2em] text-gray-900">NOORSKIN</span>
        </div>
        <nav className="hidden lg:flex space-x-8 text-[13px] font-semibold uppercase tracking-wider text-gray-600">
          <a href="#beneficios" className="hover:text-[#063326] transition-colors">Benefícios</a>
          <a href="#resultados-clinicos" className="hover:text-[#063326] transition-colors">Resultados Clínicos</a>
          <a href="#ingredientes" className="hover:text-[#063326] transition-colors">Ingredientes</a>
          <a href="#ritual" className="hover:text-[#063326] transition-colors">Ritual</a>
          <a href="#faq" className="hover:text-[#063326] transition-colors">Avaliações e Dúvidas</a>
        </nav>
        <button className="bg-[#063326] text-white px-8 py-2.5 rounded-none text-xs font-bold uppercase tracking-widest hover:bg-black transition-colors shadow-lg">
          Comprar Agora
        </button>
      </div>
    </header>
  );
};
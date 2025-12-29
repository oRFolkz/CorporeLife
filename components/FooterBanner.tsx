
import React from 'react';

export const FooterBanner: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center bg-parallax" style={{ backgroundImage: `url('https://d3eomlzmsu8e9b.cloudfront.net/media/wysiwyg/produtos/noorskin/true-skin/parallax-agua.jpg')` }}>
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <h2 className="text-5xl md:text-7xl font-voyage mb-6 drop-shadow-xl">Reconnect your light</h2>
        <p className="text-xl md:text-2xl font-light mb-12 max-w-3xl mx-auto opacity-90">
          Nós somos luz. Existimos para nutrir cada célula com amor e manifestarmos nossa beleza.
        </p>
        <a 
          href="https://www.noorskin.com.br/nossa-essencia" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-white text-rose-950 px-10 py-4 rounded-full font-bold text-lg hover:bg-rose-50 transition-all transform hover:scale-105 shadow-2xl"
        >
          Conheça a Noorskin
        </a>
      </div>
    </section>
  );
};

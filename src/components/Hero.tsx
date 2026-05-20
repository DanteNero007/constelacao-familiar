import React from "react";

export default function Hero() {
  return (
    <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 md:px-20 max-w-4xl pointer-events-none">
      <div className="space-y-8 pointer-events-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight leading-tight text-white drop-shadow-lg">
          Quando um único vínculo permanece em desordem,
          <br className="hidden md:block" /> negócios, relacionamentos e decisões começam a travar.
        </h1>
        
        <p className="font-sans text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light">
          Ordem, clareza e resolução para os padrões invisíveis que afetam sua vida.
          Identifique o bloqueio central através de uma abordagem sistêmica premium e profunda.
        </p>

        <div className="pt-8">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 font-sans text-sm tracking-widest uppercase text-[#121214] bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-colors"></div>
            <span className="relative font-medium">Agendar Análise</span>
          </button>
        </div>
      </div>
    </div>
  );
}

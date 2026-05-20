export default function Home() {
  return (
    <>
      
      
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-margin-desktop py-3 md:py-4 max-w-full mx-auto bg-surface/80 backdrop-blur-md shadow-sm">
        <div className="font-display-lg text-sm md:text-body-lg font-bold text-primary">Sidineia Danetti</div>
        <div className="hidden md:flex items-center gap-8">
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#bloqueios">O Peso</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#metodo">O Método</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#depoimentos">Depoimentos</a>
          <a className="font-body-md text-on-surface-variant hover:text-primary transition-colors" href="#faq">Dúvidas</a>
        </div>
        <a className="luxury-gradient px-4 md:px-6 py-2 md:py-2.5 rounded-full text-primary font-bold text-[11px] md:text-label-sm uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all" href="#oferta">
          Falar com Sidineia
        </a>
      </nav>

      <main className="relative z-10">
        <section className="relative pt-24 md:pt-28 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop overflow-hidden bg-pattern min-h-[90vh] flex flex-col justify-center">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url(/images/bg_sketch_1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'multiply' }}></div>
          <div className="max-w-container-max mx-auto flex flex-col items-center text-center relative z-10 mt-8 md:mt-0">
            <span className="inline-block px-3 md:px-4 py-1 mb-2 md:mb-4 border border-secondary text-secondary rounded-full text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] animate-pulse bg-white/50 backdrop-blur-sm">
              Retome o Controle da sua Vida
            </span>
            
            <h1 className="font-headline-lg text-[22px] md:text-[38px] lg:text-[44px] font-bold leading-[1.2] text-primary mb-3 md:mb-6 max-w-4xl tracking-tight">
              Quer descobrir a <span className="italic font-serif text-secondary font-normal">raiz invisível</span> que te bloqueia?
            </h1>
            
            {/* Video Placeholder */}
            <div className="w-full max-w-2xl lg:max-w-3xl aspect-video bg-primary rounded-3xl overflow-hidden shadow-2xl relative group border border-secondary/20 mb-6 mx-auto" style={{ maxHeight: '45vh' }}>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzGEFJX55BQ7LqqFyr9o0ztjSgsSuitP-Dpiyu-X-PyWOhybMAMGlrT4Udp1uffG45LVM_ZSByIjnfsHe9Ns0oI1c9eH76pzVOLcx9bAYhgutxLAF2Ok6HWGBd90yz2Tm2ExXDjXodVWY6YpmT1r69vpxvJNLetBpnLepoWNrKunhtFKCL6KbDEL8fZwJnvuDwqXRC9EXIE-PZLNIPvIkDpb7Gd5ybEpo715kKAEriB-IAAHQmZ8QRwNkMvBMIxZmdqW-Gdl9g9cwP" alt="Ambiente acolhedor e profissional" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 md:w-20 md:h-20 bg-surface/10 backdrop-blur-md border border-secondary/50 rounded-full flex items-center justify-center text-secondary hover:scale-110 hover:bg-secondary/20 transition-all duration-300">
                  <span className="material-symbols-outlined text-3xl md:text-4xl ml-1 md:ml-2">play_arrow</span>
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <a href="#oferta" className="luxury-gradient px-6 md:px-8 py-2.5 md:py-3 rounded-full text-primary font-bold text-sm md:text-body-lg uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-secondary/20 mb-4 md:mb-6 w-full md:w-auto text-center">
              Quero enxergar o problema
            </a>

            {/* Copy */}
            <p className="text-sm md:text-base text-on-surface-variant max-w-2xl leading-relaxed">
              Você não erra de propósito, só repete uma história que não é sua.
            </p>
          </div>
        </section>

        {/* The 3 Main Pain Points */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low/90 backdrop-blur-sm relative" id="bloqueios">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url(/images/bg_sketch_3.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'multiply' }}></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="font-headline-lg text-[24px] md:text-[48px] font-semibold leading-[1.2] text-primary mb-3 md:mb-4">Onde a sua vida está paralisada?</h2>
              <p className="text-on-surface-variant text-sm md:text-base">Identifique os sinais de que seu sistema está em desordem</p>
            </div>
            <div className="grid md:grid-cols-3 gap-gutter">
              <div className="bg-white/70 backdrop-blur-md p-5 md:p-8 rounded-2xl shadow-sm border border-surface-variant hover:border-secondary transition-colors group">
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary-container flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">family_history</span>
                </div>
                <h4 className="font-headline-md text-[20px] md:text-[32px] font-medium leading-[1.3] mb-3 md:mb-4 text-primary">Vivendo a vida dos pais</h4>
                <p className="text-on-surface-variant text-sm md:text-base">Você tem a sensação de estar repetindo um roteiro que não foi escrito por você?</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md p-5 md:p-8 rounded-2xl shadow-sm border border-surface-variant hover:border-secondary transition-colors group">
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary-container flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">sync_problem</span>
                </div>
                <h4 className="font-headline-md text-[20px] md:text-[32px] font-medium leading-[1.3] mb-3 md:mb-4 text-primary">Conflitos Cicatrizados</h4>
                <p className="text-on-surface-variant text-sm md:text-base">A gente briga sempre pelo mesmo motivo e nunca sai do lugar.</p>
              </div>
              <div className="bg-white/70 backdrop-blur-md p-5 md:p-8 rounded-2xl shadow-sm border border-surface-variant hover:border-secondary transition-colors group">
                <div className="w-12 md:w-16 h-12 md:h-16 rounded-full bg-primary-container flex items-center justify-center text-secondary mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">lock_open</span>
                </div>
                <h4 className="font-headline-md text-[20px] md:text-[32px] font-medium leading-[1.3] mb-3 md:mb-4 text-primary">Vida Travada</h4>
                <p className="text-on-surface-variant text-sm md:text-base">A vida mudou, as pessoas mudaram e você continua parado no mesmo caminho.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The "Confusion" Solution / Why Section */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-white overflow-hidden relative" id="metodo">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url(/images/bg_sketch_1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'multiply' }}></div>
          <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
            <div className="order-2 md:order-1">
              <h2 className="font-headline-lg text-[22px] md:text-[48px] font-semibold leading-[1.2] text-primary mb-4 md:mb-8">
                O que é, de fato, a <span className="text-secondary italic">Terapia Sistêmica</span>?
              </h2>
              <div className="space-y-6 text-on-surface-variant">
                <p className="text-sm md:text-base leading-relaxed">
                  Não é mágica, é olhar para a estrutura. A Terapia Sistêmica é a ferramenta que analisa você e todo o sistema construído ao seu redor: sua família, seu trabalho e sua criação.
                </p>
                <p className="text-sm md:text-base leading-relaxed">
                  Entendemos que você não é uma ilha. O sistema criado ao seu redor é o que está realmente bloqueando sua vida. A Constelação Familiar funciona como a chave para destravar esses nós, permitindo que a energia e o sucesso voltem a fluir.
                </p>
                <div className="border-l-4 border-secondary pl-4 md:pl-6">
                  <p className="font-serif italic text-primary text-[16px] md:text-[20px] leading-relaxed">
                    "Sidineia Danetti, terapeuta sistêmica há mais de 5 anos."
                  </p>
                </div>
              </div>
            </div>
            <div className="relative order-1 md:order-2">
              <img alt="Retrato de uma terapeuta empática e acolhedora" className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000" src="/images/terapeuta.png"/>
            </div>
          </div>
        </section>

        {/* The 3 Orders of Love */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/20 skew-x-12 transform translate-x-1/2"></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="font-headline-lg text-[24px] md:text-[48px] font-semibold leading-[1.2] text-on-primary-container mb-3 md:mb-4">A Ciência por trás da Cura</h2>
              <p className="text-sm md:text-base text-primary-fixed-dim">Baseamos nosso trabalho nas 3 Ordens do Amor para remover qualquer confusão mística.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-5 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary mb-3 md:mb-4">
                  <span className="material-symbols-outlined">join_inner</span>
                </div>
                <h5 className="text-[20px] md:text-[32px] font-headline-md mb-2">Pertencimento</h5>
                <p className="text-primary-fixed-dim/80 text-sm md:text-base">Todos no sistema têm o direito de pertencer. Exclusões geram desequilíbrios que você sente hoje.</p>
              </div>
              <div className="p-5 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary mb-3 md:mb-4">
                  <span className="material-symbols-outlined">account_tree</span>
                </div>
                <h5 className="text-[20px] md:text-[32px] font-headline-md mb-2">Hierarquia (Ordem)</h5>
                <p className="text-primary-fixed-dim/80 text-sm md:text-base">Quem veio antes tem precedência. Quando você tenta ocupar o lugar dos pais, sua vida trava.</p>
              </div>
              <div className="p-5 md:p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-secondary/50 transition-all">
                <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary mb-3 md:mb-4">
                  <span className="material-symbols-outlined">balance</span>
                </div>
                <h5 className="text-[20px] md:text-[32px] font-headline-md mb-2">Equilíbrio</h5>
                <p className="text-primary-fixed-dim/80 text-sm md:text-base">A troca entre dar e receber precisa ser justa para que os relacionamentos e negócios prosperem.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface relative" id="depoimentos">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url(/images/bg_sketch_2.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'multiply' }}></div>
          <div className="max-w-container-max mx-auto relative z-10">
            <div className="text-center mb-8 md:mb-16">
              <h2 className="font-headline-lg text-[24px] md:text-[48px] font-semibold leading-[1.2] text-primary">Vidas transformadas pela Ordem</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white/70 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-sm border border-secondary/10 italic relative">
                <span className="absolute -top-6 left-10 text-6xl text-secondary opacity-20">"</span>
                <p className="text-sm md:text-base text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
                  "Eu vou te dizer esses 20 anos que estou na igreja eu nunca soltei, igual soltei hoje o choro, a raiva, o ódio tudo junto, vários sentimentos ali no mesmo momento. Por fora estamos bem mas por dentro estamos quebrados."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary">A</div>
                  <div>
                    <div className="font-bold text-primary">Cliente Anônimo</div>
                    <div className="text-label-sm text-on-surface-variant">Constelação Familiar</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/70 backdrop-blur-md p-6 md:p-12 rounded-3xl shadow-sm border border-secondary/10 italic relative">
                <span className="absolute -top-6 left-10 text-6xl text-secondary opacity-20">"</span>
                <p className="text-sm md:text-base text-on-surface-variant mb-6 md:mb-8 leading-relaxed">
                  "Foi uma experiência única, onde conseguimos enxergar o que não queremos ver. E falo que cada dia aprendo mais e só acrescento ao meu processo. Gratidão pela doação de vcs, que este grupo cresça a cada dia mais com propósito de vida e da cura interna... Tenham uma boa noite e muita luz."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center font-bold text-secondary">F</div>
                  <div>
                    <div className="font-bold text-primary">Fabiana Souza</div>
                    <div className="text-label-sm text-on-surface-variant">Sessão em Grupo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Oferta */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-highest/90 backdrop-blur-sm relative" id="oferta">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url(/images/bg_sketch_2.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'multiply' }}></div>
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-secondary/20 relative z-10">
            <div className="luxury-gradient h-4"></div>
            <div className="p-6 md:p-12 text-center">
              <h2 className="font-headline-lg text-[24px] md:text-[48px] font-semibold leading-[1.2] text-primary mb-2">Sessão de Constelação Familiar</h2>
              <p className="text-on-surface-variant text-sm md:text-base mb-6 md:mb-8">O passo definitivo para reorganizar o seu sistema e destravar sua vida</p>
              <div className="flex flex-col items-center mb-10">
                <span className="text-on-surface-variant line-through text-body-md opacity-60">Investimento Regular: R$ 5.997</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-secondary font-bold text-2xl">12x</span>
                  <span className="text-primary font-bold text-3xl md:text-5xl lg:text-7xl">R$ 397,00</span>
                </div>
                <span className="text-on-surface-variant text-body-md mt-2">ou R$ 3.997 à vista</span>
              </div>
              <button className="w-full luxury-gradient py-4 md:py-6 rounded-xl text-primary font-extrabold text-base md:text-xl shadow-lg hover:scale-[1.02] transition-transform mb-6 md:mb-8 uppercase tracking-wider md:tracking-widest">
                Quero enxergar o problema
              </button>
              <div className="flex items-center justify-center gap-8 border-t border-surface-variant pt-8">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">spa</span>
                  <span className="text-[10px] uppercase tracking-tighter font-bold">Respeito Sistêmico</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-secondary text-4xl mb-2">favorite</span>
                  <span className="text-[10px] uppercase tracking-tighter font-bold">Acolhimento Real</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface relative" id="faq">
          <div className="absolute inset-0 z-0 opacity-50 pointer-events-none" style={{ backgroundImage: 'url(/images/bg_sketch_1.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', mixBlendMode: 'multiply' }}></div>
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="font-headline-lg text-[24px] md:text-[48px] font-semibold leading-[1.2] text-primary text-center mb-8 md:mb-16">Clareza para sua decisão</h2>
            <div className="space-y-4">
              <details className="group bg-white border border-surface-variant rounded-xl overflow-hidden" open>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-primary">Preciso expor toda minha vida pessoal?</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  Não. Trabalhamos com os fatos do sistema e sua percepção interna. A Terapia Sistêmica é direta e focada na solução, respeitando seus limites e sua privacidade.
                </div>
              </details>
              <details className="group bg-white border border-surface-variant rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-primary">Como sei que meu problema é sistêmico?</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  Se você sente que "nada dá certo" apesar do esforço, se repete conflitos familiares ou se sente um peso que não parece pertencer a você, há um emaranhamento no seu sistema.
                </div>
              </details>
              <details className="group bg-white border border-surface-variant rounded-xl overflow-hidden">
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-bold text-primary">Quanto tempo leva para ver resultados?</span>
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant">
                  Diferente da terapia convencional, a abordagem sistêmica busca movimentos rápidos. Muitos clientes sentem um alívio imediato e mudanças práticas logo após a primeira constelação.
                </div>
              </details>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 w-full py-8 md:py-section-gap px-4 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-4 md:gap-gutter bg-surface-container-highest text-on-surface border-t border-surface-variant/30">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="font-display-lg text-body-md font-semibold text-secondary">Sidineia Danetti</div>
          <p className="font-label-sm text-on-surface-variant max-w-xs">
            © 2024 Sidineia Danetti - Terapeuta Sistêmica & Constelação Familiar. Todos os direitos reservados.
          </p>
        </div>
        <div className="flex gap-8">
          <a className="font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Termos</a>
          <a className="font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Privacidade</a>
          <a className="font-label-sm text-on-surface-variant hover:text-secondary transition-colors" href="#">Contato</a>
        </div>
        <div className="flex gap-4">
          <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary-fixed transition-colors border border-secondary/10" href="#">
            <span className="material-symbols-outlined text-secondary">share</span>
          </a>
          <a className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-secondary-fixed transition-colors border border-secondary/10" href="#">
            <span className="material-symbols-outlined text-secondary">mail</span>
          </a>
        </div>
      </footer>
    </>
  );
}

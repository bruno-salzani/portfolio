
import React from 'react';

const SERVICES = [
  {
    title: "Sites Institucionais",
    description: "Criação de sites profissionais que transmitem confiança para sua empresa, funcionando perfeitamente em celulares e computadores.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    benefit: "Ideal para: Médicos, Advogados, Clínicas e Pequenas Empresas."
  },
  {
    title: "Landing Pages",
    description: "Páginas de alto impacto projetadas para apresentar seu negócio ao público de forma clara e profissional, destacando seus diferenciais e autoridade.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    benefit: "Ideal para: Apresentação de serviços, lançamentos e marketing direto."
  },
  {
    title: "Lojas Virtuais",
    description: "Sua vitrine aberta 24 horas por dia. Sistemas de vendas online seguros, fáceis de gerenciar e preparados para receber pagamentos.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    benefit: "Ideal para: Comércio local e empreendedores digitais."
  },
  {
    title: "Otimização e SEO",
    description: "Melhoria da velocidade do seu site atual e configuração para que ele apareça nas primeiras páginas das buscas do Google.",
    icon: (
      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    benefit: "Ideal para: Quem já tem site mas não recebe visitas ou vendas."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-24 bg-slate-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Como posso ajudar o seu negócio?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Transformo sua ideia em uma ferramenta de vendas e apresentação eficiente. Tecnologia de ponta com foco em resultados reais.</p>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-4">
                  {service.benefit}
                </p>
                <a 
                  href="https://wa.me/5519987096082" 
                  target="_blank"
                  className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  Saiba mais <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Precisa de um projeto personalizado?</h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Vamos conversar sobre sua ideia e eu te apresento o melhor caminho técnico para realizá-la.</p>
          <a 
            href="https://wa.me/5519987096082" 
            target="_blank"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold hover:bg-slate-100 transition-all shadow-xl"
          >
            Falar com Bruno no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;

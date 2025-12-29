
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="pt-20 pb-[33px] md:pt-24 md:pb-[41px] px-4 sm:px-6 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vamos Conversar?</h2>
          <p className="text-slate-400 max-w-lg mx-auto">Sinta-se à vontade para entrar em contato. Estou disponível para novos projetos e trocas de conhecimento.</p>
        </div>

        {/* Container principal com Grid para colocar lado a lado */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Seção de Canais Diretos */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-blue-600 pl-4">Canais Diretos</h3>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:brunosalzani@hotmail.com" className="flex items-center gap-4 group bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-blue-500/50 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email Profissional</p>
                  <p className="font-medium text-sm md:text-base group-hover:text-blue-400 transition-colors truncate">brunosalzani@hotmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/5519987096082" target="_blank" className="flex items-center gap-4 group bg-white/5 p-5 rounded-2xl border border-white/5 hover:border-green-500/50 transition-all">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.996-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.197 1.441 4.866 1.442 5.429 0 9.849-4.42 9.852-9.849 0-2.631-1.025-5.105-2.887-6.967-1.862-1.861-4.335-2.886-6.968-2.887-5.431 0-9.851 4.42-9.854 9.849 0 2.115.639 4.113 1.848 5.806l-1.103 4.032 4.094-1.076zm9.638-7.077c-.273-.137-1.62-.8-1.871-.892-.252-.092-.435-.137-.618.137-.183.273-.708.892-.868 1.074-.16.183-.32.205-.594.068-.273-.137-1.156-.426-2.202-1.359-.815-.726-1.365-1.623-1.525-1.897-.16-.273-.017-.42.12-.556.123-.122.273-.32.411-.479.137-.16.183-.273.274-.456.091-.183.045-.343-.023-.479-.068-.137-.618-1.486-.846-2.033-.223-.545-.447-.471-.618-.479-.158-.007-.342-.009-.526-.009-.183 0-.479.068-.731.343-.252.273-.96.938-.96 2.285s.983 2.648 1.12 2.831c.137.183 1.935 2.954 4.686 4.141.654.282 1.165.451 1.562.577.658.209 1.257.179 1.73.109.527-.078 1.62-.662 1.848-1.299.229-.638.229-1.186.16-1.299-.069-.113-.252-.183-.526-.32z"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">WhatsApp</p>
                  <p className="font-medium text-sm md:text-base group-hover:text-green-400 transition-colors">(19) 98709-6082</p>
                </div>
              </a>
            </div>
          </div>

          {/* Seção de Presença Digital (Lado a Lado no Desktop) */}
          <div className="h-full">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-blue-600 lg:border-none pl-4 lg:pl-0">Presença Digital</h3>
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 h-[calc(100%-3rem)]">
              <div className="grid grid-cols-2 gap-4 h-full">
                <a href="https://github.com/bruno-salzani/" target="_blank" className="bg-white/10 hover:bg-white text-white hover:text-slate-900 p-6 rounded-2xl transition-all flex flex-col items-center justify-center gap-3 group">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">GitHub</span>
                </a>
                <a href="https://www.linkedin.com/in/brunosalzani/" target="_blank" className="bg-white/10 hover:bg-[#0077b5] text-white p-6 rounded-2xl transition-all flex flex-col items-center justify-center gap-3 group">
                  <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-xs font-bold uppercase tracking-wider">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-500 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Bruno Salzani. Todos os direitos reservados.
        </div>
      </div>
    </section>
  );
};

export default Contact;

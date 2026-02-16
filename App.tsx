
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { Users, Atom, Sun, Moon, Github, Twitter, Mail, MessageSquare, Film, Info, Youtube, ExternalLink, Shield, Zap, Code, Heart, Target, Briefcase } from 'lucide-react';
import CrewList from './components/CrewList';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showCrew, setShowCrew] = useState(false);
  const [activeModal, setActiveModal] = useState<'about' | 'chat' | 'video' | null>(null);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const Modal = ({ type, onClose }: { type: 'about' | 'chat' | 'video', onClose: () => void }) => {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300">
        <div className="bg-white dark:bg-slate-900 w-full max-w-4xl h-[85vh] rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl relative flex flex-col">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-red-500 transition-colors z-50">
            <Atom className="w-5 h-5 rotate-45" />
          </button>

          {type === 'about' && (
            <div className="p-8 md:p-12 overflow-y-auto">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="relative shrink-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-[2.5rem] bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-500/40 relative z-10">
                    <Users className="w-16 h-16" />
                  </div>
                  <div className="absolute -inset-4 bg-indigo-500/20 blur-2xl rounded-full"></div>
                </div>
                
                <div className="space-y-6">
                  <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white tracking-tight">Perkenalkan, Haze.</h2>
                  
                  <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-light">
                    <p>
                      Aku bergabung di Youtube pada tahun 2020 setidaknya sebelum pandemi di indonesia. Youtube sudah berjalan sekitar 5 tahun, banyak yang aku rubah di Youtube dan akhirnya secara resmi aku menamakan Youtube ku <strong>KabutCraft</strong>.
                    </p>
                    <p>
                      Soo Aku sudah menyampaikan nama ku di Beranda utama Namun sepertinya aku harus kenalan lagi. Perkenalkan Im <strong>MistHaze</strong> memanggil aku <strong>Haze</strong>, Aku adalah seorang animator dan menjadi pengembang suatu aplikasi dan web.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4">
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3">
                        <Shield className="w-5 h-5 text-indigo-500" />
                        <span className="text-sm font-bold">Cita-cita Polisi</span>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3">
                        <Briefcase className="w-5 h-5 text-purple-500" />
                        <span className="text-sm font-bold">Pembisnis Besar</span>
                      </div>
                      <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-white/5 flex items-center gap-3">
                        <Code className="w-5 h-5 text-cyan-500" />
                        <span className="text-sm font-bold">Developer</span>
                      </div>
                    </div>

                    <p>
                      Jika kalian ingin mengenal tipe ku, jujur saja aku adalah tipe orang yang tidak terlalu aktif bicara di media sosial, namun kuharap aku bisa menghibur kalian semua. 
                    </p>
                    
                    <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 rounded-3xl border border-indigo-100 dark:border-indigo-500/10">
                      <p className="text-indigo-900 dark:text-indigo-300 font-medium">
                        Oh iya Channel ini tidak sendirian, ada teman studio ku juga ikut di kabutcraft:
                        <span className="block mt-2 font-bold text-indigo-600 dark:text-indigo-400">
                          (MistHaze, Lopli, Hanzen, Keshi, Rain, Nia, Renmaru, Hanzen, Asep)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'chat' && (
            <div className="flex-1 w-full h-full bg-white relative">
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <Atom className="w-12 h-12 text-slate-200 animate-spin-slow" />
              </div>
              <iframe 
                src="https://go.crisp.chat/chat/embed/?website_id=9bab5eee-525e-4069-aeaf-abc734a170eb" 
                className="w-full h-full border-none"
                title="Crisp Chat Integration"
              />
            </div>
          )}

          {type === 'video' && (
            <div className="flex-1 w-full h-full flex flex-col bg-slate-950">
              <div className="p-4 bg-slate-900 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-bold text-white text-sm">KabutCraft - Official Channel</span>
                </div>
                <a href="https://youtube.com/@kabutcraft?si=ozj2ESiM0dZxtQIj" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-1">
                  Buka di YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="flex-1 relative">
                {/* Integration Strategy: YouTube doesn't allow full channel iframes easily, 
                    so we provide a clean, integrated experience with a redirect button and an embedded recent video feel. */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-24 h-24 rounded-full bg-red-600/10 flex items-center justify-center text-red-600 mb-6 group cursor-pointer hover:scale-110 transition-transform">
                    <Film className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">Eksplorasi Video Kami</h3>
                  <p className="text-slate-400 max-w-md mb-10 leading-relaxed">
                    Lihat tutorial, animasi, dan karya terbaru dari MistHaze & Studio Crew langsung melalui portal YouTube terintegrasi.
                  </p>
                  <a 
                    href="https://youtube.com/@kabutcraft?si=ozj2ESiM0dZxtQIj" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-10 py-4 bg-red-600 text-white rounded-2xl font-bold hover:bg-red-500 transition-all flex items-center gap-3 shadow-2xl shadow-red-600/20 active:scale-95"
                  >
                    <Youtube className="w-5 h-5" />
                    Buka Channel KabutCraft
                  </a>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950 pointer-events-none"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-500 relative overflow-hidden">
      
      {/* Modals */}
      {showCrew && <CrewList onClose={() => setShowCrew(false)} />}
      {activeModal && <Modal type={activeModal} onClose={() => setActiveModal(null)} />}

      {/* Background Decor */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-slate-50 to-white dark:from-indigo-950/40 dark:via-slate-950 dark:to-black z-0"></div>
      <div className="fixed inset-0 opacity-5 dark:opacity-10 z-0 pointer-events-none" style={{ backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>

      <header className="border-b border-slate-200 dark:border-white/10 sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/60 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4 group cursor-default">
            <div className="bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 relative z-10 shadow-sm transition-transform group-hover:scale-105">
               <Atom className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tight text-slate-900 dark:text-white">
                  KabutCraft <span className="text-indigo-600 dark:text-indigo-400">Project</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400 font-medium">Digital Innovation Hub</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowCrew(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">List My Crew</span>
              </button>

              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 transition-colors border border-slate-200 dark:border-white/10"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="max-w-3xl animate-in slide-in-from-left duration-700">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 dark:text-white tracking-tight leading-[0.9] mb-8">
            Building the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-cyan-400">Future of Web.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-12">
            KabutCraft adalah kolektif pengembang dan desainer yang berdedikasi untuk menciptakan pengalaman digital yang intuitif dan estetik.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setActiveModal('about')}
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-xl active:scale-95"
            >
              Kenalan Yuk!
            </button>
            <div className="flex items-center gap-6 px-4">
              <a href="https://github.com/kabutcraft" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-500 transition-colors"><Github className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><Twitter className="w-6 h-6" /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-500 transition-colors"><Mail className="w-6 h-6" /></a>
            </div>
          </div>
        </div>

        {/* Updated Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 animate-in fade-in slide-in-from-bottom-10 duration-1000">
          <button 
            onClick={() => setActiveModal('about')}
            className="group p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-indigo-500/50 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
              <Info className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">About me</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Kisah perjalanan Haze dari 2020 hingga mendirikan KabutCraft Studio.</p>
          </button>

          <button 
            onClick={() => setActiveModal('chat')}
            className="group p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-cyan-500/50 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">Chat dengan Kabut Craft</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Layanan bantuan langsung terintegrasi dengan Crisp Chat System.</p>
          </button>

          <button 
            onClick={() => setActiveModal('video')}
            className="group p-8 bg-white dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm hover:border-red-500/50 transition-all text-left relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl rounded-full -mr-16 -mt-16"></div>
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <Film className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2 dark:text-white">My vidio</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Eksplorasi channel YouTube KabutCraft langsung dari portal kami.</p>
          </button>
        </div>
      </main>

      <footer className="absolute bottom-0 w-full py-8 border-t border-slate-200 dark:border-white/5 text-center text-xs text-slate-400 uppercase tracking-widest font-bold">
        &copy; 2025 KabutCraft Digital. All Rights Reserved.
      </footer>
    </div>
  );
};

export default App;

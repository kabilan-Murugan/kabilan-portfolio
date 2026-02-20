import { resumeData } from "@/data/resume";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-[#030712] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-6">
          I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">{resumeData.name}</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Modernizing Infrastructure & Cloud Systems. 
          Specialized in <span className="text-white border-b border-blue-500/50 underline-offset-4">Azure Cloud</span>, 
          <span className="text-white border-b border-blue-500/50 underline-offset-4"> IIS</span>, and 
          <span className="text-white border-b border-blue-500/50 underline-offset-4"> Security Audits</span>.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#experience" className="bg-white text-black px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-white/5 text-center">
            View Experience
          </a>
          <a href="/KABILAN-M-Resume-2026.pdf" download className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all text-center">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
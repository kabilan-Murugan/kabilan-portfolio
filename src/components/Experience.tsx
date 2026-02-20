import { resumeData } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-[#030712] relative">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16 uppercase tracking-tighter">
          Career <span className="text-blue-500 underline decoration-blue-500/30">Journey</span>
        </h2>
        
        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l border-white/10 group">
              {/* Animated Node */}
              <div className="absolute w-3 h-3 bg-blue-500 rounded-full -left-[6.5px] top-2 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-150 transition-transform" />
              
              <div className="mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs font-black text-blue-400 bg-blue-500/10 px-4 py-1.5 rounded-full border border-blue-500/20 uppercase tracking-widest">
                  {exp.period}
                </span>
              </div>
              
              <p className="text-lg font-medium text-slate-400 mb-6 italic">
                {exp.company}
              </p>
              
              <ul className="space-y-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 font-light leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 bg-blue-500/40 rounded-full shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
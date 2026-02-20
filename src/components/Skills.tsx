import { resumeData } from "@/data/resume";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#030712]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight uppercase">Technical <span className="text-blue-500">Stack</span></h2>
          <p className="text-slate-500 font-mono text-sm tracking-widest uppercase italic">// System Monitoring Active</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resumeData.detailedSkills.map((skill) => (
            <div key={skill.title} className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-[2.5rem] hover:border-blue-500/50 transition-all duration-500">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-left">{skill.icon}</div>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{skill.category}</p>
              <h3 className="text-white font-bold text-2xl mb-3">{skill.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
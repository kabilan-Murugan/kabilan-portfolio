import { resumeData } from "@/data/resume";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 bg-[#030712] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-black text-white mb-10 tracking-tight uppercase">Education</h2>
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-blue-600/20 to-transparent border border-blue-500/20 rounded-[2.5rem]">
              <h3 className="text-white font-bold text-xl mb-1">{resumeData.coursework.title}</h3>
              <p className="text-blue-400 text-sm mb-4">{resumeData.coursework.institution}</p>
              <div className="flex flex-wrap gap-2">
                {resumeData.coursework.skills.map((skill: string) => (
                  <span key={skill} className="text-[10px] uppercase tracking-widest font-bold bg-white/5 text-slate-300 px-3 py-1 rounded-full border border-white/10">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            {resumeData.education.map((edu, i: number) => (
              <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-[2.5rem]">
                <h3 className="text-white font-bold text-xl">{edu.degree}</h3>
                <p className="text-slate-500 mt-2">{edu.institution} | {edu.year}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600 blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity"></div>
          <div className="relative p-10 bg-blue-600 rounded-[3rem] text-white h-full flex flex-col">
            <span className="text-blue-200 text-xs font-black uppercase tracking-[0.3em] mb-4">Featured Project</span>
            <h3 className="text-4xl font-black mb-4 leading-tight">{resumeData.project.title}</h3>
            <p className="text-blue-100 text-lg mb-8 font-light">{resumeData.project.description}</p>
            <div className="mt-auto p-6 bg-blue-700/50 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Key Impact</p>
              <p className="text-2xl font-light italic">"{resumeData.project.impact}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { resumeData } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-white font-bold text-xl">{resumeData.name}</h2>
          <p className="text-sm">{resumeData.role}</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-2">
          <a href={`mailto:${resumeData.email}`} className="text-blue-400 hover:underline">
            {resumeData.email}
          </a>
          <p className="text-xs uppercase tracking-widest">Available for Opportunities in Chennai</p>
        </div>
      </div>
      <div className="mt-8 text-center text-xs opacity-50">
        © {new Date().getFullYear()} | Built with Next.js & Tailwind CSS
      </div>
    </footer>
  );
}
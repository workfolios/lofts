import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-noir pt-8 pb-6 border-t border-[#A92F62]/50 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-5">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="text-[22px] md:text-[26px] font-display text-clean-white leading-[1] tracking-tight mb-0.5">Caroline Lofts</h2>
            <h3 className="text-[16px] md:text-[18px] font-display text-clean-white">Songs. <span className="text-accent">Stories.</span> Spaces.</h3>
            <p className="text-silver/85 tracking-wider uppercase text-[11px] md:text-[12px] mt-2 leading-relaxed">
              <span>Songwriter. </span>
              <span>Storyteller. </span>
              <span className="whitespace-nowrap">Startup Space Builder.</span>
            </p>
          </div>
          <div className="flex flex-col gap-2 md:items-end pt-1">
            <Link to="/contact#media-inquiries" className="text-[15px] lg:text-[16px] font-display text-clean-white hover:text-accent transition-colors border-b border-[#A92F62]/60 hover:border-accent pb-1 focus:outline-none focus-visible:outline-none">Media Inquiries</Link>
            <Link to="/contact#collaboration" className="text-[15px] lg:text-[16px] font-display text-clean-white hover:text-accent transition-colors border-b border-[#A92F62]/60 hover:border-accent pb-1 focus:outline-none focus-visible:outline-none">Collaboration</Link>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="w-full h-px bg-graphite"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-silver/40 gap-4">
            <p>&copy; {new Date().getFullYear()} Caroline Lofts. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

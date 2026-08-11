import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex-1 flex flex-col w-full">
      {/* Cinematic Hero - Two-Zone Protected Layout */}
      <section className="w-full bg-noir flex flex-col lg:flex-row relative min-h-[100vh] lg:min-h-[85vh] overflow-hidden">
        
        {/* Mobile/Tablet Image Zone (Top) */}
        <div className="w-full h-[55vh] md:h-[50vh] lg:hidden relative z-0 shrink-0">
          <img 
            src={`${import.meta.env.BASE_URL}caroline-lofts-headshot-clean.png`} 
            alt="Caroline Lofts" 
            className="w-full h-full object-cover object-[50%_15%] md:object-[50%_20%]"
          />
          {/* Neutralizing overlay to remove any purple/lavender wash */}
          <div className="absolute inset-0 bg-noir/40"></div>
          {/* Bottom gradient to blend into text */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-noir via-noir/80 to-transparent"></div>
        </div>

        {/* Desktop Image Zone (Right) */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[55vw] xl:w-[58vw] z-0">
          <img 
            src={`${import.meta.env.BASE_URL}caroline-lofts-headshot-clean.png`} 
            alt="Caroline Lofts" 
            className="w-full h-full object-cover object-[70%_20%]"
          />
          {/* Neutralizing overlay to remove any purple/lavender wash */}
          <div className="absolute inset-0 bg-noir/30"></div>
          {/* Left gradient bridge to protect text zone */}
          <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-noir via-noir/90 to-transparent"></div>
          {/* Bottom gradient to blend into next section */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-noir to-transparent"></div>
        </div>
        
        {/* Text Content Zone */}
        <div className="relative z-10 w-full px-6 md:px-8 lg:px-12 flex-1 -mt-24 md:-mt-16 lg:mt-0 flex flex-col justify-end lg:justify-center">
          <div className="max-w-7xl mx-auto w-full flex flex-col justify-end lg:justify-center pb-16 pt-0 lg:py-0 flex-1">
            <div className="w-full lg:w-[50%] xl:w-[55%] flex flex-col gap-5 max-w-[640px] xl:max-w-[720px] drop-shadow-2xl lg:drop-shadow-none">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-clean-white leading-tight tracking-tighter mb-2">
                <span className="block">Songs.</span>
                <span className="block text-accent">Stories.</span>
                <span className="block">Spaces.</span>
              </h1>
              <p className="text-[18px] md:text-[20px] text-silver leading-relaxed max-w-lg lg:max-w-none mb-8 lg:mb-2">
                Music, language, and <span className="text-accent/90">emotionally intelligent storytelling</span> across songs, screen, publications, and creative communities.
              </p>
              <div className="flex flex-wrap gap-10 items-center">
                <Link to="/music" className="text-clean-white border-b border-clean-white pb-1 text-[13px] tracking-wider uppercase font-medium hover:text-accent hover:border-accent transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  Listen / Watch
                </Link>
                <Link to="/music#selected-credits" className="text-silver border-b border-transparent pb-1 text-[13px] tracking-wider uppercase font-medium hover:text-clean-white transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  View Music Credits
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Thread & Explanatory Rows */}
      <section id="thread" className="w-full bg-noir py-10 md:py-12 lg:py-16 px-6 md:px-8 lg:px-12 scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight">The Thread</h2>
            <div className="w-12 h-[1px] bg-accent mb-2"></div>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                Caroline Lofts is a songwriter, singer-songwriter, recording artist, and creative professional whose work has moved through music, publishing, and community-building with one consistent thread: language that helps people feel, gather, and understand.
              </p>
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                Songs carry the current work. Stories connect the editorial and lyrical instinct. Spaces hold the chapter of building rooms, communities, and founder gatherings through WorkAbility, Entrepreneur SOS, Mile High Pitch, and Startup Grind Denver.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-2 mt-2 lg:mt-0">
            <div className="flex flex-col border-b border-graphite py-5 gap-2">
              <h3 className="text-[18px] md:text-[20px] font-display text-clean-white leading-none">Songs</h3>
              <p className="text-[16px] md:text-[17px] text-silver leading-relaxed">
                Songwriting, singing, recording, co-writing, and music for screen.
              </p>
            </div>
            <div className="flex flex-col border-b border-graphite py-5 gap-2">
              <h3 className="text-[18px] md:text-[20px] font-display text-accent leading-none">Stories</h3>
              <p className="text-[16px] md:text-[17px] text-silver leading-relaxed">
                Lyrics, editorial judgment, publication-making, and cultural fluency.
              </p>
            </div>
            <div className="flex flex-col border-b border-graphite py-5 gap-2">
              <h3 className="text-[18px] md:text-[20px] font-display text-clean-white leading-none">Spaces</h3>
              <p className="text-[16px] md:text-[17px] text-silver leading-relaxed">
                WorkAbility leadership, founder support, and Denver startup gatherings — rooms where people could connect, build, and belong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Creative Arc */}
      <section id="creative-arc" className="w-full bg-noir py-10 md:py-12 lg:py-16 px-6 md:px-8 lg:px-12 border-t border-graphite scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 lg:gap-10">
          <div className="flex flex-col gap-6 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight">The Creative Arc</h2>
            <div className="w-12 h-[1px] bg-accent mb-2"></div>
            <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
              A path through songs, stories, and spaces — from music and publication-making to founder rooms, coworking communities, and a return to song.
            </p>
          </div>
          
          <div className="relative">
            {/* Mobile vertical line - only visible under md */}
            <div className="md:hidden absolute top-2 bottom-2 left-[11.5px] w-[1px] bg-graphite z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 lg:gap-y-12 md:gap-x-10 lg:gap-x-12">
              {[
                { date: '2000–2009', title: 'Songs', desc: 'Songwriting, co-writing, recording, and music-industry work, including Caroline’s Universal Music Group chapter.' },
                { date: '2007–2016', title: 'Stories', desc: 'The Notebook, The Court, and The View — publication-making, editorial judgment, and place-based communications.' },
                { date: 'WorkAbility Chapter', title: 'Spaces', desc: 'COO and later CEO leadership at WorkAbility CoWorking, supporting coworking operations, community-building, and creative-professional space-making before the coworking space closed after the Covid-19 lockdown.' },
                { date: '2019', title: 'Spaces', desc: 'Mile High Pitch and Entrepreneurial SOS — founder support, startup visibility, and local entrepreneurial community response.' },
                { date: '2021–2023', title: 'Spaces', desc: 'Startup Grind Denver chapter co-leadership, gathering founders, innovators, creators, and startup-community participants across the Denver ecosystem.' },
                { date: 'Now', title: 'Songs + Stories', desc: 'Return to music through songs, music for screen, and selected creative collaborations.' }
              ].map((node, i) => (
                <div key={i} className="flex gap-6 md:flex-col md:gap-0 relative z-10 pl-2 md:pl-0 md:border-t md:border-graphite/40 md:pt-5 pb-4 md:pb-0">
                  <div className="w-[8px] h-[8px] rounded-full bg-accent shrink-0 mt-[6px] md:mt-0 md:mb-4 relative z-10"></div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-accent text-[11px] uppercase tracking-wider font-medium">{node.date}</span>
                      <h3 className="text-clean-white text-[15px] md:text-[16px] font-display leading-tight">{node.title}</h3>
                    </div>
                    <p className="text-silver text-[13px] md:text-[14px] leading-relaxed">
                      {node.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section id="current-music" className="w-full bg-noir py-8 md:py-10 lg:py-12 px-6 md:px-8 lg:px-12 border-y border-graphite scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full relative">
            <div className="hidden md:block absolute left-[-24px] top-1 bottom-1 w-[2px] bg-[#A92F62]/70"></div>
            <p className="text-accent text-[12px] md:text-[13px] tracking-widest uppercase font-medium mb-3">Current Music</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight mb-2">
              “Stand Beside Us” — My Brother The Minotaur
            </h2>
            <p className="text-[16px] md:text-[18px] text-silver mb-6">Live & Unboxed</p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8">
              <Link to="/music" className="text-clean-white border-b border-[#A92F62]/60 pb-1 text-[13px] tracking-wider uppercase font-medium hover:text-accent hover:border-accent transition-all duration-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                Listen / Watch
              </Link>
              <Link to="/music#selected-credits" className="text-silver border-b border-transparent pb-1 text-[13px] tracking-wider uppercase font-medium hover:text-clean-white transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                View Music Credits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Preview */}
      <section id="editorial-preview" className="w-full bg-noir py-10 md:py-12 lg:py-16 px-6 md:px-8 lg:px-12 scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          <div className="flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight mb-5">Editorial</h2>
            <p className="text-[19px] md:text-[22px] text-silver max-w-xl mb-8 leading-relaxed">
              A curated view of publication-making, editorial judgment, visual rhythm, and place-based storytelling.
            </p>
            <Link to="/editorial" className="text-accent text-[13px] tracking-wider uppercase hover:text-clean-white transition-colors inline-flex items-center gap-4 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
              Explore Editorial <span className="w-12 h-[1px] bg-current"></span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 items-end justify-center lg:justify-end w-full py-4">
            <div className="w-full sm:w-[52%] max-w-[340px] shadow-2xl flex flex-col items-center">
              <div className="w-full aspect-[4/3] bg-noir/50 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}the-view-issue-one-map.jpg`} alt="The View Issue One Map" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <p className="text-silver/70 text-[11px] uppercase tracking-widest mt-3 text-center">The View</p>
            </div>
            <div className="w-full sm:w-[44%] max-w-[280px] shadow-2xl flex flex-col items-center">
              <div className="w-full aspect-[4/5] bg-noir/50 flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}notebook-cover-03-on-the-run.jpg`} alt="The Notebook Cover" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <p className="text-silver/70 text-[11px] uppercase tracking-widest mt-3 text-center">The Notebook</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

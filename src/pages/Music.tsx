import { Link } from 'react-router-dom';

export default function Music() {
  return (
    <div className="flex-1 flex flex-col w-full bg-noir">
      <section className="w-full pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 px-6 md:px-8 lg:px-12 border-b border-graphite">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1 className="text-[clamp(34px,3.4vw,52px)] font-display font-semibold text-clean-white leading-[0.9] tracking-tighter mb-4">Music</h1>
          <div className="w-12 h-[2px] bg-accent mb-6"></div>
          <p className="text-[18px] md:text-[20px] text-silver max-w-3xl leading-relaxed">
            Songwriting, co-writing, and music for screen, driven by emotionally intelligent storytelling.
          </p>
        </div>
      </section>

      <section id="stand-beside-us" className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-noir scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <div className="flex flex-col gap-2 md:items-center md:text-center mb-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight">“Stand Beside Us”</h2>
            <p className="text-[16px] md:text-[18px] text-accent font-medium">My Brother The Minotaur — Live & Unboxed</p>
          </div>
          
          <div className="w-full max-w-5xl mx-auto aspect-video bg-noir relative shadow-2xl overflow-hidden border border-graphite/50">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/Cu4jUykMlHQ" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Selected Credits Section */}
      <section id="selected-credits" className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-noir border-t border-graphite scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight">Selected Credits</h2>
          <div className="flex flex-col">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between border-t border-graphite py-6 lg:py-8 gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] lg:text-[24px] font-display text-clean-white leading-[1]">My Brother The Minotaur</h3>
                <p className="text-[16px] text-silver">"Stand Beside Us"</p>
              </div>
              <div className="flex flex-col lg:items-end gap-1">
                <p className="text-accent text-[13px] tracking-wider uppercase font-medium">Artist / Co-Writer</p>
                <p className="text-silver/60 text-xs tracking-wider uppercase">Current Public Media Example</p>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-center justify-between border-t border-graphite py-6 lg:py-8 gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] lg:text-[24px] font-display text-clean-white leading-[1]">Hanna Pakarinen</h3>
                <p className="text-[16px] text-silver">"Go Go"</p>
              </div>
              <div className="flex flex-col lg:items-end gap-1">
                <p className="text-accent text-[13px] tracking-wider uppercase font-medium">Co-Writer</p>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between border-t border-graphite border-b py-6 lg:py-8 gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-[20px] lg:text-[24px] font-display text-clean-white leading-[1]">Natalie Bassingthwaighte</h3>
                <p className="text-[16px] text-silver">"1000 Stars"</p>
              </div>
              <div className="flex flex-col lg:items-end gap-1">
                <p className="text-accent text-[13px] tracking-wider uppercase font-medium">Co-Writer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="emotional-storytelling" className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 border-t border-graphite bg-noir scroll-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-display text-clean-white leading-tight mb-8 tracking-tight">Emotionally Intelligent Storytelling</h3>
            <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
              Whether writing for screen, co-writing for artists, or crafting original songs, the focus remains on language that helps people feel and understand. 
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4 border-t border-graphite pt-6">
              <h4 className="text-[20px] md:text-[24px] font-display text-clean-white leading-none">Songwriting</h4>
              <p className="text-[16px] text-silver leading-relaxed">Crafting narrative-driven songs with strong lyrical focus.</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-graphite pt-6">
              <h4 className="text-[20px] md:text-[24px] font-display text-clean-white leading-none">Co-writing</h4>
              <p className="text-[16px] text-silver leading-relaxed">Collaborating to find the authentic voice and emotional core of a track.</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-graphite pt-6">
              <h4 className="text-[20px] md:text-[24px] font-display text-clean-white leading-none">Music for Screen</h4>
              <p className="text-[16px] text-silver leading-relaxed">Creating evocative, cinematic pieces that support visual narratives.</p>
            </div>
            <div className="flex flex-col gap-4 border-t border-graphite pt-6">
              <h4 className="text-[20px] md:text-[24px] font-display text-clean-white leading-none">Story-driven Songs</h4>
              <p className="text-[16px] text-silver leading-relaxed">Connecting music, language, and editorial instinct into cohesive art.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

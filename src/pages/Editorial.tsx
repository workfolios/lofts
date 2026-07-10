export default function Editorial() {
  const archiveItems = [
    { 
      src: import.meta.env.BASE_URL + 'notebook-cover-03-on-the-run.jpg', 
      title: 'The Notebook',
      description: 'Kensington & Chelsea publication archive.',
      orientation: 'portrait'
    },
    { 
      src: import.meta.env.BASE_URL + 'the-court-cover-01-shaftesbury.jpg', 
      title: 'The Court',
      description: 'Editorial publication sample.',
      orientation: 'portrait'
    },
    { 
      src: import.meta.env.BASE_URL + 'notebook-cover-04-wine-issue.jpg', 
      title: 'The Notebook',
      description: 'Kensington & Chelsea publication archive.',
      orientation: 'portrait'
    },
    { 
      src: import.meta.env.BASE_URL + 'the-view-issue-three-cover.jpg', 
      title: 'The View',
      description: 'Earls Court redevelopment communications.',
      orientation: 'portrait'
    },
  ];

  return (
    <div className="flex-1 flex flex-col w-full bg-noir">
      <section className="w-full pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 px-6 md:px-8 lg:px-12 border-b border-graphite">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1 className="text-[clamp(34px,3.4vw,52px)] font-display font-semibold text-clean-white leading-[0.9] tracking-tighter mb-4">Editorial</h1>
          <div className="w-12 h-[2px] bg-accent mb-6"></div>
          <p className="text-[18px] md:text-[20px] text-silver max-w-4xl leading-relaxed">
            Publication-making, editorial judgment, visual rhythm, and place-based storytelling across cultural and community-facing projects.
          </p>
        </div>
      </section>

      <section id="editorial-work" className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-noir overflow-hidden scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-5 lg:pr-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-clean-white leading-tight tracking-tight">The Notebook</h2>
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                Kensington & Chelsea publication work, editorial judgment, and publication-making.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-end w-full">
              <div className="w-1/2 max-w-[220px] lg:max-w-[280px] aspect-[4/5] bg-noir/30 p-2 shadow-2xl flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}notebook-cover-04-wine-issue.jpg`} alt="The Notebook - Cover" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div className="w-1/2 max-w-[220px] lg:max-w-[280px] aspect-[4/5] bg-noir/30 p-2 shadow-2xl flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}notebook-cover-02-matt-damon.jpg`} alt="The Notebook - Feature Page" className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-5 lg:pl-12 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-clean-white leading-tight tracking-tight">The Court</h2>
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                Editorial publication sample and community-facing cultural storytelling.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-start w-full lg:order-1">
              <div className="w-1/2 max-w-[220px] lg:max-w-[280px] aspect-[4/5] bg-noir/30 p-2 shadow-2xl flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}the-court-cover-03-art-crawl.jpg`} alt="The Court Cover - Art Crawl" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div className="w-1/2 max-w-[220px] lg:max-w-[280px] aspect-[4/5] bg-noir/30 p-2 shadow-2xl flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}the-court-cover-01-shaftesbury.jpg`} alt="The Court Cover - Shaftesbury" className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="flex flex-col gap-5 lg:pr-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-clean-white leading-tight tracking-tight">The View</h2>
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                Earls Court redevelopment communications and place-based editorial work.
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 justify-center lg:justify-end w-full">
              <div className="w-[45%] max-w-[200px] lg:max-w-[250px] aspect-[4/5] bg-noir/30 p-2 shadow-2xl flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}the-view-issue-three-cover.jpg`} alt="The View Cover" className="w-full h-full object-contain" loading="lazy" />
              </div>
              <div className="w-[55%] max-w-[260px] lg:max-w-[320px] aspect-[4/3] bg-noir/30 p-2 shadow-2xl flex items-center justify-center">
                <img src={`${import.meta.env.BASE_URL}the-view-issue-one-map.jpg`} alt="The View - Map" className="w-full h-full object-contain" loading="lazy" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="gallery" className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-noir border-t border-graphite scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-clean-white leading-tight tracking-tight">Curated Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {archiveItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <div className={`w-full ${item.orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]'} relative overflow-hidden bg-noir/30 p-4 lg:p-6 flex items-center justify-center shadow-2xl`}>
                  <img src={item.src} alt={item.title} className="w-full h-full object-contain" loading="lazy" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] md:text-[20px] font-display text-clean-white leading-[1]">{item.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-silver/80 tracking-wide">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

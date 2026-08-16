import { useEffect, useRef, useState, type MouseEvent } from 'react';

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

export default function Editorial() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);
  const selectedItem = selectedIndex === null ? null : archiveItems[selectedIndex];

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog || !selectedItem) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (!dialog.open) {
      dialog.showModal();
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [selectedItem]);

  const openArtifact = (index: number, trigger: HTMLButtonElement) => {
    lastTriggerRef.current = trigger;
    setSelectedIndex(index);
  };

  const closeArtifact = () => {
    if (dialogRef.current?.open) {
      dialogRef.current.close();
    }
  };

  const handleDialogClosed = () => {
    setSelectedIndex(null);
    window.requestAnimationFrame(() => lastTriggerRef.current?.focus());
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeArtifact();
    }
  };

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
              <div key={`${item.src}-${index}`} className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={(event) => openArtifact(index, event.currentTarget)}
                  aria-haspopup="dialog"
                  aria-label={`View ${item.title} artifact`}
                  className={`w-full ${item.orientation === 'portrait' ? 'aspect-[4/5]' : 'aspect-[4/3]'} relative overflow-hidden bg-noir/30 p-4 lg:p-6 flex items-center justify-center shadow-2xl border border-transparent cursor-zoom-in hover:border-silver/40 focus:outline-none focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent`}
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-contain" loading="lazy" />
                </button>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[18px] md:text-[20px] font-display text-clean-white leading-[1]">{item.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-silver/80 tracking-wide">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <dialog
        ref={dialogRef}
        className="artifact-dialog w-[calc(100%-2rem)] max-w-6xl max-h-[calc(100dvh-2rem)] overflow-hidden border border-graphite bg-midnight p-0 text-clean-white shadow-2xl"
        aria-labelledby={selectedIndex === null ? undefined : `artifact-dialog-title-${selectedIndex}`}
        aria-describedby={selectedIndex === null ? undefined : `artifact-dialog-description-${selectedIndex}`}
        onClose={handleDialogClosed}
        onClick={handleBackdropClick}
      >
        {selectedItem && selectedIndex !== null && (
          <div className="flex max-h-[calc(100dvh-2rem)] flex-col">
            <div className="flex items-start justify-between gap-6 border-b border-graphite px-5 py-4 md:px-6 md:py-5">
              <div className="flex min-w-0 flex-col gap-1">
                <h2 id={`artifact-dialog-title-${selectedIndex}`} className="text-xl md:text-2xl font-display text-clean-white leading-tight">
                  {selectedItem.title}
                </h2>
                <p id={`artifact-dialog-description-${selectedIndex}`} className="text-[14px] md:text-[15px] text-silver">
                  {selectedItem.description}
                </p>
              </div>
              <button
                type="button"
                onClick={closeArtifact}
                autoFocus
                className="shrink-0 text-[13px] uppercase tracking-wide text-silver hover:text-clean-white focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                aria-label={`Close ${selectedItem.title} artifact`}
              >
                Close
              </button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto p-4 md:p-6 lg:p-8">
              <div className="flex min-h-full items-center justify-center">
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="max-h-[72dvh] w-auto max-w-full object-contain shadow-2xl"
                />
              </div>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

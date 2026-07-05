import { FormEvent } from "react";

export default function Contact() {
  const handleMediaSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    const subject = encodeURIComponent("Media Inquiry — Caroline Lofts Website");
    const body = encodeURIComponent(`Inquiry Type: Media Inquiry\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:carolinelofts@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCollabSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
    
    const subject = encodeURIComponent("Collaboration Inquiry — Caroline Lofts Website");
    const body = encodeURIComponent(`Inquiry Type: Collaboration Inquiry\n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`);
    
    window.location.href = `mailto:carolinelofts@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="flex-1 flex flex-col w-full bg-noir">
      <section className="w-full pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20 px-6 md:px-8 lg:px-12 border-b border-graphite scroll-mt-32">
        <div className="max-w-7xl mx-auto flex flex-col">
          <h1 className="text-[clamp(34px,3.4vw,52px)] font-display font-semibold text-clean-white leading-[0.9] tracking-tighter mb-4">Connect</h1>
          <div className="w-12 h-[2px] bg-accent mb-6"></div>
          <p className="text-[18px] md:text-[20px] text-silver max-w-3xl leading-relaxed">
            For media, music, and selected creative collaborations.
          </p>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 px-6 md:px-8 lg:px-12 bg-noir">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          
          <div id="media-inquiries" className="flex flex-col gap-5 scroll-mt-32">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-clean-white leading-tight tracking-tight">Media Inquiries</h2>
              <div className="w-12 h-px bg-accent"></div>
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                For press, interviews, features, music/media questions, and profile requests.
              </p>
            </div>
            <form className="flex flex-col gap-3.5" onSubmit={handleMediaSubmit}>
              <input type="text" name="name" id="media-name" aria-label="Name" required className="bg-transparent border-b border-silver/30 pb-1.5 text-[16px] text-clean-white focus:outline-none focus:border-accent transition-colors placeholder-silver/80" placeholder="Name" />
              <input type="email" name="email" id="media-email" aria-label="Email" required className="bg-transparent border-b border-silver/30 pb-1.5 text-[16px] text-clean-white focus:outline-none focus:border-accent transition-colors placeholder-silver/80" placeholder="Email" />
              <textarea name="message" id="media-message" aria-label="Message" required rows={3} className="bg-transparent border-b border-silver/30 pb-1.5 text-[16px] text-clean-white focus:outline-none focus:border-accent transition-colors resize-none placeholder-silver/80" placeholder="Message"></textarea>
              <button type="submit" className="self-start text-clean-white border-b border-[#A92F62]/80 pb-1 text-[13px] tracking-wider uppercase font-medium hover:text-accent hover:border-accent transition-all mt-1 focus:outline-none focus-visible:outline-none">
                Send Media Inquiry
              </button>
              <span className="text-[12px] text-silver/60 italic self-start -mt-2">Opens your default email client.</span>
            </form>
          </div>

          <div id="collaboration" className="flex flex-col gap-5 scroll-mt-32">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-clean-white leading-tight tracking-tight">Creative Collaboration</h2>
              <div className="w-12 h-px bg-graphite"></div>
              <p className="text-[16px] md:text-[18px] text-silver leading-relaxed">
                For songwriting, co-writing, music-for-screen, and selected creative projects.
              </p>
            </div>
            <form className="flex flex-col gap-3.5" onSubmit={handleCollabSubmit}>
              <input type="text" name="name" id="collab-name" aria-label="Name" required className="bg-transparent border-b border-silver/30 pb-1.5 text-[16px] text-clean-white focus:outline-none focus:border-accent transition-colors placeholder-silver/80" placeholder="Name" />
              <input type="email" name="email" id="collab-email" aria-label="Email" required className="bg-transparent border-b border-silver/30 pb-1.5 text-[16px] text-clean-white focus:outline-none focus:border-accent transition-colors placeholder-silver/80" placeholder="Email" />
              <textarea name="message" id="collab-message" aria-label="Message" required rows={3} className="bg-transparent border-b border-silver/30 pb-1.5 text-[16px] text-clean-white focus:outline-none focus:border-accent transition-colors resize-none placeholder-silver/80" placeholder="Message"></textarea>
              <button type="submit" className="self-start text-clean-white border-b border-[#A92F62]/80 pb-1 text-[13px] tracking-wider uppercase font-medium hover:text-accent hover:border-accent transition-all mt-1 focus:outline-none focus-visible:outline-none">
                Send Collaboration Inquiry
              </button>
              <span className="text-[12px] text-silver/60 italic self-start -mt-2">Opens your default email client.</span>
            </form>
          </div>


        </div>
      </section>
    </div>
  );
}

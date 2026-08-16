import { useEffect } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SeoManager from './SeoManager';

function RouteScrollManager() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.hash) {
      const frame = window.requestAnimationFrame(() => {
        const targetId = decodeURIComponent(location.hash.slice(1));
        const target = document.getElementById(targetId);

        if (target) {
          const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
          target.scrollIntoView({
            block: 'start',
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
          });
        }
      });

      return () => window.cancelAnimationFrame(frame);
    }

    if (navigationType !== 'POP') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash, navigationType]);

  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#06070D] text-clean-white">
      <SeoManager />
      <RouteScrollManager />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 w-full overflow-x-hidden pt-[68px] md:pt-[72px] focus:outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

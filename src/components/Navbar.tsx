import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Music', path: '/music' },
  { name: 'Editorial', path: '/editorial' },
  { name: 'Connect', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-[2147483647] w-full h-[68px] md:h-[72px] bg-[#06070D] border-b border-graphite/50 flex items-center"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2147483647,
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)'
      }}
    >
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-xl lg:text-2xl font-display font-semibold text-accent tracking-normal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent z-50">
            Caroline Lofts
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[13px] uppercase tracking-wide transition-colors duration-300 relative focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                    isActive ? 'text-accent font-medium after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-accent' : 'text-silver hover:text-clean-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[13px] uppercase tracking-wide text-silver hover:text-clean-white transition-colors focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden absolute top-[100%] left-0 w-full bg-[#06070D] border-b border-graphite/50 py-6 px-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={`text-[15px] uppercase tracking-wide transition-colors duration-300 w-max focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                  isActive ? 'text-accent font-medium border-b border-accent pb-0.5' : 'text-silver hover:text-clean-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}

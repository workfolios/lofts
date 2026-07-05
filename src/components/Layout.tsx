import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#06070D] text-clean-white">
      <Navbar />
      <main className="flex-1 w-full overflow-x-hidden pt-[68px] md:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

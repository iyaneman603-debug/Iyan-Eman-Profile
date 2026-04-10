import React from 'react';
import { User, ChartBar, Link as LinkIcon, Image as ImageIcon, MapPin, Bot } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 md:p-6 sticky top-0 bg-[#050814]/65 backdrop-blur-xl border-b border-white/10 z-[100]">
      <div className="flex items-center gap-3">
        <img 
          src="https://res.cloudinary.com/dluecf4wg/image/upload/v1775169317/4K_IYAN_03_sedea3.jpg" 
          alt="IYAN Logo" 
          className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-glow-cyan/55 shadow-[0_0_18px_rgba(0,229,255,0.35)] object-cover"
          referrerPolicy="no-referrer"
        />
        <div>
          <h1 className="font-display text-sm md:text-base font-extrabold tracking-wider uppercase leading-tight">
            IYAN EMAN JUMA
          </h1>
          <span className="text-[10px] md:text-xs text-[#9bb3c9] font-normal">
            ISSA AMAN JUMA | Profile 2026
          </span>
        </div>
      </div>

      <nav className="hidden lg:flex gap-4">
        {[
          { id: 'about', icon: User, label: 'About' },
          { id: 'stats', icon: ChartBar, label: 'Stats' },
          { id: 'links', icon: LinkIcon, label: 'Links' },
          { id: 'gallery', icon: ImageIcon, label: 'Gallery' },
          { id: 'location', icon: MapPin, label: 'Location' },
          { id: 'chatbot', icon: Bot, label: 'AI Chat' },
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="flex items-center gap-2 text-[10px] md:text-xs font-semibold px-3 py-2 rounded-xl bg-white/5 border border-white/10 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(0,229,255,0.25)] hover:border-glow-cyan/45"
          >
            <item.icon size={14} />
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

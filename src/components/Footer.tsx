import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-8 text-center p-6 border-t border-white/10 text-[#9bb3c9] text-[10px] md:text-xs">
      <div>
        © IYAN EMAN CC 2026 | XMATION COMPANY | Designed with futuristic UI effects
      </div>
      <img 
        src="https://res.cloudinary.com/dluecf4wg/image/upload/v1775169365/1000696327.png_l0cyf6.png" 
        alt="Footer Logo" 
        className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-glow-cyan/35 p-1.5 bg-white/5 mt-3 shadow-[0_0_20px_rgba(0,229,255,0.18)] object-contain mx-auto"
        referrerPolicy="no-referrer"
      />
    </footer>
  );
}

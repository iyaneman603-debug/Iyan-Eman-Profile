import React, { useState, useEffect } from 'react';
import { Star, Moon, MapPin, Zap, Clock, Calendar, Crosshair } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeStr = time.toLocaleTimeString('en-US', { hour12: false });
  const dateStr = time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5 mt-5">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)] card-glow-effect"
      >
        <div className="font-display text-2xl md:text-4xl font-black tracking-wider">
          Iyan Eman Profile 2026
        </div>

        <div className="mt-3 text-[#9bb3c9] text-sm md:text-base leading-relaxed">
          Identity profile system for <b className="text-white">ISSA AMAN JUMA</b> (Known as <b className="text-white">IYAN EMAN JUMA</b>), powered by futuristic UI, glowing effects, live time engine, calendar, live location tracking, and interactive AI assistant interface.
        </div>

        <div className="flex flex-wrap gap-2.5 mt-4">
          {[
            { icon: Star, label: 'Capricorn ♑' },
            { icon: Moon, label: 'Islam ☪' },
            { icon: MapPin, label: 'Tanzania 🇹🇿' },
            { icon: Zap, label: 'XMATION' },
          ].map((tag, i) => (
            <div key={i} className="text-[10px] md:text-xs px-3 py-2 rounded-full border border-glow-cyan/30 bg-glow-cyan/10 shadow-[0_0_15px_rgba(0,229,255,0.18)] flex items-center gap-2 font-semibold">
              <tag.icon size={14} className="text-glow-cyan" />
              {tag.label}
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between gap-3 mt-4">
          {[
            { icon: Clock, title: 'LIVE TIME', value: timeStr },
            { icon: Calendar, title: 'DATE', value: dateStr },
            { icon: Crosshair, title: 'LIVE STATUS', value: 'Active ✅' },
          ].map((mini, i) => (
            <div key={i} className="flex-1 min-w-[140px] bg-white/5 border border-white/10 p-3 rounded-2xl text-center">
              <mini.icon size={18} className="text-glow-cyan mx-auto mb-2" />
              <h3 className="text-[10px] md:text-xs font-bold">{mini.title}</h3>
              <span className="block mt-1 text-[#9bb3c9] text-[10px] md:text-xs font-display">{mini.value}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)] text-center relative overflow-hidden"
      >
        <img 
          src="https://res.cloudinary.com/dluecf4wg/image/upload/v1775169317/4K_IYAN_03_sedea3.jpg" 
          alt="Iyan Profile" 
          className="w-40 h-40 md:w-48 md:h-48 rounded-3xl object-cover border-2 border-glow-cyan/45 shadow-[0_0_25px_rgba(0,229,255,0.25)] mx-auto transition-all hover:scale-105 hover:shadow-[0_0_35px_rgba(138,43,226,0.30)] hover:border-glow-purple/50"
          referrerPolicy="no-referrer"
        />

        <h2 className="mt-4 font-display text-lg md:text-xl font-bold">
          ISSA AMAN JUMA
        </h2>

        <p className="mt-1.5 text-[#9bb3c9] text-xs md:text-sm">
          (IYAN EMAN JUMA)
        </p>

        <img 
          src="https://res.cloudinary.com/dluecf4wg/image/upload/v1770295916/LOGO_X-MANTIONS_xfhvq5.png" 
          alt="XMATION Logo" 
          className="mt-4 w-20 h-20 rounded-full border-2 border-glow-green/35 p-1.5 bg-white/5 shadow-[0_0_18px_rgba(0,255,136,0.25)] object-contain mx-auto"
          referrerPolicy="no-referrer"
        />

        <p className="mt-2.5 text-[#9bb3c9] text-[10px] md:text-xs">
          Company: <b className="text-white">XMATION</b>
        </p>
      </motion.div>
    </section>
  );
}

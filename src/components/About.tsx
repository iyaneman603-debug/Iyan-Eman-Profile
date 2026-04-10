import React from 'react';
import { IdCard, Dna, Briefcase } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)]"
      >
        <div className="font-display text-base md:text-lg mb-3 tracking-wider flex items-center gap-2">
          <IdCard size={20} className="text-glow-cyan" /> Identity
        </div>
        <div className="space-y-2 text-xs md:text-sm text-[#9bb3c9] leading-relaxed">
          <p><b className="text-white">Full Name:</b> ISSA AMAN JUMA</p>
          <p><b className="text-white">Known As:</b> IYAN EMAN JUMA</p>
          <p><b className="text-white">Gender:</b> Male</p>
          <p><b className="text-white">Age:</b> 23 Years</p>
          <p><b className="text-white">Birth:</b> 25 December 2002</p>
          <p><b className="text-white">Birth Time:</b> 00:00 (Saa 6 Kamili Usiku)</p>
          <p><b className="text-white">Birth Place:</b> Tabora, Tanzania</p>
          <p><b className="text-white">Religion:</b> Islam ☪</p>
          <p><b className="text-white">Zodiac:</b> Capricorn ♑</p>
          <p><b className="text-white">Current City:</b> Dar es Salaam</p>
        </div>
      </motion.div>

      <motion.div 
        id="stats"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)]"
      >
        <div className="font-display text-base md:text-lg mb-3 tracking-wider flex items-center gap-2">
          <Dna size={20} className="text-glow-cyan" /> Physical Stats
        </div>
        <div className="space-y-2 text-xs md:text-sm text-[#9bb3c9] leading-relaxed">
          <p><b className="text-white">Height:</b> 174 CM</p>
          <p><b className="text-white">BMI:</b> 20</p>
          <p><b className="text-white">Body Structure:</b> Moderately Slim</p>
          <p><b className="text-white">Health Status:</b> Good</p>
          <p><b className="text-white">Allergy:</b> Skin</p>
          <p><b className="text-white">Blood Group:</b> Unknown</p>
          <p><b className="text-white">Infection Risk:</b> Easy to be infected</p>
          <p><b className="text-white">Self Control:</b> 80%</p>
          <p><b className="text-white">Addiction Risk:</b> 20%</p>
          <p><b className="text-white">Alcohol/Smoking:</b> None</p>
        </div>
      </motion.div>

      <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)]"
      >
        <div className="font-display text-base md:text-lg mb-3 tracking-wider flex items-center gap-2">
          <Briefcase size={20} className="text-glow-cyan" /> Skills & Work
        </div>
        <div className="space-y-2 text-xs md:text-sm text-[#9bb3c9] leading-relaxed">
          <p><b className="text-white">Education:</b> General Secondary</p>
          <p><b className="text-white">Profession:</b> Graphics Designer & Multimedia</p>
          <p><b className="text-white">Company:</b> XMATION COMPANY</p>
          <p><b className="text-white">Hobbies:</b> Watching Movies, Listening to Music</p>
          <p><b className="text-white">Websites:</b></p>
          <p>
            <a href="https://xmationmedia.co.tz/" target="_blank" rel="noopener noreferrer" className="text-glow-cyan hover:underline">
              xmationmedia.co.tz
            </a>
          </p>
          <p>
            <a href="https://xmation.co.tz/" target="_blank" rel="noopener noreferrer" className="text-glow-cyan hover:underline">
              xmation.co.tz
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}

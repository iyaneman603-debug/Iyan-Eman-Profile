import React, { useState } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const galleryImages = [
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850006/0Q8A4278_zuu1ls.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850016/0Q8A4250_du6og3.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850097/0Q8A4306_sjnv1p.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850041/0Q8A4354_hjlt26.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850115/1754508747169_1_mzrhyq.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850119/1754509461361_1_2_sitpq1.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850124/0Q8A4310_2_eaqiv3.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850125/8993735c-5b24-447d-b110-7c375786a3b2_zs770u.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850132/1765745588791_2_tcqmsb.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850134/1754510092203_1_2_qyteuu.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850135/1754509785186_1_2_qbbs0z.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850140/0Q8A4347_o0ktzc.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850158/1765745860040_knbe42.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850195/1766247600243_vli3zj.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850199/IMG-20251220-WA0042_wxr0wh.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850207/IMG-20251220-WA0044_ofmkef.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850210/IYAN_SUIT_6_vucoy4.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850212/IYAN_SUIT_FILE_ulbp9u.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850212/IYAN_2026_phqhcn.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850214/Iyan_profile_facebook_4_xoaqxr.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850237/IAN_1_eokqey.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850245/Iyan_IERICORN_X_zwha8v.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850249/Iyan_With_Nandy_r0dunq.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850250/Lushoto_executive_lodge_5_l4oodw.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850264/f58e7376-5fda-4405-94a8-d6db22b2a3a2_lezah8.png",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850269/lv_0_20260307011115_tfnye1.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850308/lv_0_20260320152526_xsis6h.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850319/lv_0_20260320153041_naa1g2.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850441/lv_0_20260320205730_epscq0.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850339/lv_0_20260322003634_ug55ho.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850450/lv_0_20260320204000_hiwyg8.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850456/lv_0_20260322144412_comiks.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850516/lv_0_20260322145637_rmtgjh.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850522/lv_0_20260322154327_omyojx.jpg",
  "https://res.cloudinary.com/dluecf4wg/image/upload/v1775850522/REALLY_AI_skc2yr.jpg"
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)] mt-5">
      <div className="font-display text-base md:text-lg mb-4 tracking-wider flex items-center gap-2">
        <ImageIcon size={20} className="text-glow-cyan" /> Gallery (Glowing)
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {galleryImages.map((imgUrl, i) => (
          <motion.img
            key={i}
            src={imgUrl}
            alt={`Gallery ${i}`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelectedImg(imgUrl)}
            className="w-full h-40 md:h-48 object-cover rounded-2xl border border-white/10 shadow-[0_0_22px_rgba(0,229,255,0.10)] cursor-pointer transition-all hover:shadow-[0_0_30px_rgba(138,43,226,0.25)] hover:border-glow-purple/45"
            referrerPolicy="no-referrer"
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 bg-black/80 z-[9999] flex items-center justify-center p-5 backdrop-blur-sm"
          >
            <button className="absolute top-5 right-5 text-white hover:text-glow-cyan transition-colors">
              <X size={32} />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg} 
              alt="Preview" 
              className="max-w-full max-max-h-[90vh] rounded-2xl border-2 border-glow-cyan/45 shadow-[0_0_40px_rgba(0,229,255,0.25)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

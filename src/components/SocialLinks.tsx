import React from 'react';
import { 
  Youtube, 
  Facebook, 
  Instagram, 
  MessageCircle, 
  Mail, 
  Phone, 
  ExternalLink, 
  Send,
  Link as LinkIcon
} from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@iyaneman' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567615380065' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/iyan_eman/?__pwa=1' },
  { icon: MessageCircle, label: 'TikTok', href: 'https://www.tiktok.com/@iyan_eman_juma?is_from_webapp=1&sender_device=pc' },
  { icon: LinkIcon, label: 'Reddit', href: 'https://www.reddit.com/user/Critical-Elk-4382/' },
  { icon: LinkIcon, label: 'Behance', href: 'https://www.behance.net/issaaman1' },
  { icon: Mail, label: 'Email', href: 'mailto:issaaman603@gmail.com', actionIcon: Send },
  { icon: MessageCircle, label: 'WhatsApp 1', href: 'https://wa.me/255740330004' },
  { icon: MessageCircle, label: 'WhatsApp 2', href: 'https://wa.me/255760450005' },
  { icon: Phone, label: 'Call 1', href: 'tel:+255740330004' },
  { icon: Phone, label: 'Call 2', href: 'tel:+255760450005' },
];

export default function SocialLinks() {
  return (
    <section id="links" className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)] mt-5">
      <div className="font-display text-base md:text-lg mb-4 tracking-wider flex items-center gap-2">
        <LinkIcon size={20} className="text-glow-cyan" /> Social & Contact Links
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {socialLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="flex items-center justify-between gap-3 p-3 rounded-2xl border border-white/10 bg-white/5 transition-all hover:border-glow-cyan/45 hover:shadow-[0_0_22px_rgba(0,229,255,0.25)]"
          >
            <div className="flex items-center gap-3">
              <link.icon size={18} className="text-glow-green" />
              <span className="text-xs md:text-sm font-medium">{link.label}</span>
            </div>
            {link.actionIcon ? <link.actionIcon size={14} /> : <ExternalLink size={14} />}
          </motion.a>
        ))}
      </div>
    </section>
  );
}

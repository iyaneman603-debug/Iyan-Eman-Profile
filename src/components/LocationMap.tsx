import React, { useState, useEffect } from 'react';
import { MapPin, Crosshair, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function LocationMap() {
  const [location, setLocation] = useState<{ lat: number; lon: number } | null>(null);
  const [status, setStatus] = useState('Waiting...');

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('Geolocation not supported');
      return;
    }

    setStatus('Requesting permission...');
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        setStatus('Location Active ✅');
      },
      (error) => {
        setStatus(`Location Denied ❌: ${error.message}`);
      }
    );
  }, []);

  const mapUrl = location 
    ? `https://www.google.com/maps?q=${location.lat},${location.lon}&output=embed`
    : `https://www.google.com/maps?q=Dar%20es%20Salaam&output=embed`;

  const osmUrl = location
    ? `https://www.openstreetmap.org/?mlat=${location.lat}&mlon=${location.lon}#map=16/${location.lat}/${location.lon}`
    : `https://www.openstreetmap.org`;

  return (
    <section id="location" className="bg-bg-card border border-border-muted rounded-[20px] p-5 shadow-[0_0_25px_rgba(0,229,255,0.2)] mt-5">
      <div className="font-display text-base md:text-lg mb-3 tracking-wider flex items-center gap-2">
        <MapPin size={20} className="text-glow-cyan" /> Live Location & Map
      </div>

      <p className="text-[#9bb3c9] text-xs md:text-sm leading-relaxed mb-4">
        This system requests browser permission to access live location. If allowed, it will show coordinates and open map view.
      </p>

      <div className="flex flex-wrap justify-between gap-3 mb-4">
        <div className="flex-1 min-w-[140px] bg-white/5 border border-white/10 p-3 rounded-2xl text-center">
          <MapPin size={18} className="text-glow-cyan mx-auto mb-2" />
          <h3 className="text-[10px] md:text-xs font-bold uppercase">Latitude</h3>
          <span className="block mt-1 text-[#9bb3c9] text-[10px] md:text-xs">{location ? location.lat.toFixed(6) : '---'}</span>
        </div>
        <div className="flex-1 min-w-[140px] bg-white/5 border border-white/10 p-3 rounded-2xl text-center">
          <MapPin size={18} className="text-glow-cyan mx-auto mb-2" />
          <h3 className="text-[10px] md:text-xs font-bold uppercase">Longitude</h3>
          <span className="block mt-1 text-[#9bb3c9] text-[10px] md:text-xs">{location ? location.lon.toFixed(6) : '---'}</span>
        </div>
        <div className="flex-1 min-w-[140px] bg-white/5 border border-white/10 p-3 rounded-2xl text-center">
          <Globe size={18} className="text-glow-cyan mx-auto mb-2" />
          <h3 className="text-[10px] md:text-xs font-bold uppercase">Status</h3>
          <span className="block mt-1 text-[#9bb3c9] text-[10px] md:text-xs">{status}</span>
        </div>
      </div>

      <div className="w-full h-[260px] rounded-2xl border border-white/10 overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.12)]">
        <iframe 
          src={mapUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          loading="lazy" 
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <p className="mt-3">
        <a 
          href={osmUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-glow-cyan text-sm font-bold hover:underline flex items-center gap-2"
        >
          Open in OpenStreetMap →
        </a>
      </p>
    </section>
  );
}

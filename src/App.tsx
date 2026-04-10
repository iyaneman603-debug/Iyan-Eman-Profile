/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import LocationMap from './components/LocationMap';
import ChatBot from './components/ChatBot';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen relative">
      <div className="glow-bg" />
      
      <Header />

      <main className="max-w-[1150px] mx-auto px-4 md:px-6 py-6 pb-16">
        <Hero />
        <About />
        <SocialLinks />
        <LocationMap />
        <ChatBot />
        <Gallery />
      </main>

      <Footer />
    </div>
  );
}


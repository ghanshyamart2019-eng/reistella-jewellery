/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NewTrendingPage } from './pages/NewTrendingPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { FindReistellaPage } from './pages/FindReistellaPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');

  // Synchronize hash with page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'about', 'trending', 'collections', 'find', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    window.location.hash = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#031820] text-neutral-100 flex flex-col justify-between selection:bg-[#D4AF37]/30 selection:text-[#D4AF37]">
      {/* Persistent Luxury Navigation Header */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* Dynamic Page Views with Smooth Motion Fade */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <HomePage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <AboutPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'trending' && (
            <motion.div
              key="trending"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <NewTrendingPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'collections' && (
            <motion.div
              key="collections"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <CollectionsPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'find' && (
            <motion.div
              key="find"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FindReistellaPage onNavigate={handleNavigate} />
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ContactPage onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* High Jewellery Maison Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

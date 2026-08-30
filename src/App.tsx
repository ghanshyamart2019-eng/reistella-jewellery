import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { SocialSidebar } from './components/SocialSidebar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { NewTrendingPage } from './pages/NewTrendingPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { FindReistellaPage } from './pages/FindReistellaPage';
import { ContactPage } from './pages/ContactPage';
import { EditorialModal } from './components/EditorialModal';
import { JewelleryPiece } from './data/brandConfig';

const SECTION_IDS = ['home', 'about', 'trending', 'collections', 'find', 'contact'];

export function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedPiece, setSelectedPiece] = useState<JewelleryPiece | null>(null);
  const isScrollingProgrammatically = useRef<boolean>(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  // ScrollSpy: Automatically detect active section on scroll and switch pages
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingProgrammatically.current) return;

      const headerOffset = 140; // Offset to trigger active state before top of element hits header
      const scrollY = window.scrollY + headerOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // If at bottom of page, highlight the last section (contact)
      if (window.scrollY + windowHeight >= documentHeight - 60) {
        setActivePage('contact');
        if (window.location.hash !== '#contact') {
          window.history.replaceState(null, '', '#contact');
        }
        return;
      }

      let currentSection = 'home';

      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            currentSection = sectionId;
            break;
          } else if (scrollY >= top) {
            currentSection = sectionId;
          }
        }
      }

      setActivePage((prev) => {
        if (prev !== currentSection) {
          if (window.location.hash !== `#${currentSection}`) {
            window.history.replaceState(null, '', `#${currentSection}`);
          }
          return currentSection;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Initial Hash on Page Load
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash && SECTION_IDS.includes(hash)) {
      setTimeout(() => {
        handleNavigate(hash);
      }, 250);
    }
  }, []);

  // Smooth Navigation Handler with Header Offset
  const handleNavigate = (pageId: string) => {
    setActivePage(pageId);
    isScrollingProgrammatically.current = true;

    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }

    if (pageId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.replaceState(null, '', '#home');
    } else {
      const element = document.getElementById(pageId);
      if (element) {
        const headerOffset = 75;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.replaceState(null, '', `#${pageId}`);
      }
    }

    // Release programmatic scroll flag once smooth scroll finishes
    scrollTimeoutRef.current = window.setTimeout(() => {
      isScrollingProgrammatically.current = false;
    }, 850);
  };

  return (
    <div className="min-h-screen bg-[#031820] text-neutral-100 flex flex-col justify-between selection:bg-[#D4AF37]/30 selection:text-[#D4AF37] relative">
      
      {/* Luxury Sticky / Floating Navigation Header */}
      <Header activePage={activePage} onNavigate={handleNavigate} />

      {/* Floating Vertical Social Sidebar */}
      <SocialSidebar />

      {/* Sequential Single-Page Editorial Flow — Continuous Scrolling across all pages */}
      <main className="flex-grow">
        {/* 1. Home Section: Hero, Taglines, Brand Intro & Signature Piece */}
        <section id="home">
          <HomePage
            onNavigate={handleNavigate}
            onSelectPiece={setSelectedPiece}
          />
        </section>

        {/* 2. About Section: Philosophy, Manifesto, Pillars & Atelier Spread */}
        <section id="about">
          <AboutPage onNavigate={handleNavigate} />
        </section>

        {/* 3. New & Trending Section: Editorial Lookbook, Categories & Pieces */}
        <section id="trending">
          <NewTrendingPage
            onNavigate={handleNavigate}
            onSelectPiece={setSelectedPiece}
          />
        </section>

        {/* 4. Collections Section: High Jewellery Chapters & Campaign Pieces */}
        <section id="collections">
          <CollectionsPage
            onNavigate={handleNavigate}
            onSelectPiece={setSelectedPiece}
          />
        </section>

        {/* 5. Find Your ReiStella Section: Concierge, Instagram & Partner Cities */}
        <section id="find">
          <FindReistellaPage onNavigate={handleNavigate} />
        </section>

        {/* 6. Contact Section: VIP Consultation & Concierge Channels */}
        <section id="contact">
          <ContactPage onNavigate={handleNavigate} />
        </section>
      </main>

      {/* Global Interactive Piece Lightbox Modal */}
      <EditorialModal
        piece={selectedPiece}
        onClose={() => setSelectedPiece(null)}
        onNavigateToFind={() => handleNavigate('find')}
      />

      {/* Persistent Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
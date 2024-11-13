import React, { useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { CountdownTimer } from './components/CountdownTimer';
import { EventDetails } from './components/EventDetails';
import { RsvpForm } from './components/RsvpForm';
import { DressCode } from './components/DressCode';
import { PhotoGallery } from './components/PhotoGallery';

function App() {
  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll('.section-animate');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-fixed bg-cover">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70"></div>
        
        <Navigation />
        
        <div className="max-w-6xl mx-auto px-4 pt-24 pb-12 relative">
          <div className="text-center mb-16 relative animate-fade-in">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-24 bg-[url('https://www.transparenttextures.com/patterns/flowers.png')] opacity-20 rotate-180"></div>
            <h1 className="font-serif text-6xl text-gray-800 mb-4 pt-8">
              <span className="block text-2xl text-rose-400 mb-2">Приглашаем на свадьбу</span>
              Азамат & Фатима
            </h1>
            <p className="text-2xl text-gray-600 font-serif">20 июня 2024</p>
          </div>

          <section id="story" className="section-animate">
            <div className="relative h-[70vh] mb-16 rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <img 
                src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                alt="Wedding celebration"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
                <p className="font-serif text-3xl mb-4">Наша История Любви</p>
                <p className="text-lg max-w-2xl mx-auto">Каждая история любви прекрасна, но наша - особенная...</p>
              </div>
            </div>
          </section>

          <section className="section-animate">
            <CountdownTimer />
          </section>

          <section id="gallery" className="section-animate">
            <PhotoGallery />
          </section>

          <section id="details" className="section-animate">
            <EventDetails />
          </section>

          <section id="rsvp" className="section-animate">
            <RsvpForm />
          </section>

          <section id="dress-code" className="section-animate">
            <DressCode />
          </section>

          <footer className="text-center text-gray-600 mt-16 relative section-animate">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-24 bg-[url('https://www.transparenttextures.com/patterns/flowers.png')] opacity-10"></div>
            <div className="flex justify-center items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-rose-300" />
              <p className="font-serif text-xl">Азамат & Фатима</p>
              <Heart className="w-5 h-5 text-rose-300" />
            </div>
            <p className="text-lg font-serif">#AzamatFatima2024</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
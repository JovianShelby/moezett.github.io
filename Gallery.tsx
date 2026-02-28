import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn, Filter } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = ['All', 'Masjid', 'Ramadan', 'Events'];

  const galleryImages: GalleryImage[] = [
    { src: '/images/hero-exterior.jpg', title: 'Masjid Exterior - Main View', category: 'Masjid' },
    { src: '/images/courtyard-day.jpg', title: 'Courtyard - Daytime', category: 'Masjid' },
    { src: '/images/exterior-angle.jpg', title: 'Masjid Architecture', category: 'Masjid' },
    { src: '/images/courtyard-evening.jpg', title: 'Courtyard - Evening', category: 'Masjid' },
    { src: '/images/exterior-wide.jpg', title: 'Panoramic View', category: 'Masjid' },
    { src: '/images/interior-1.jpg', title: 'Prayer Hall Interior', category: 'Masjid' },
    { src: '/images/event-iftar.jpg', title: 'Ramadan Iftar Gathering', category: 'Ramadan' },
    { src: '/images/education-class.jpg', title: 'Quran Class', category: 'Events' },
  ];

  const filteredImages = activeFilter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.gallery-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Re-trigger animation when filter changes
  useEffect(() => {
    gsap.fromTo('.gallery-item',
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: 'power2.out' }
    );
  }, [activeFilter]);

  return (
    <div ref={sectionRef} className="bg-masjid-cream min-h-screen">
      {/* Page Header */}
      <section className="relative bg-masjid-green py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A24A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label text-masjid-gold mb-4 block">Visual Journey</span>
            <h1 className="heading-xl text-white mb-6">ဓာတ်ပုံများ</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              Explore moments from our masjid, community events, and spiritual gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-16 z-40 bg-masjid-cream/95 backdrop-blur-md border-b border-masjid-green/10">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <Filter className="w-4 h-4 text-masjid-gray mr-2" />
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? 'bg-masjid-green text-white'
                      : 'bg-white text-masjid-charcoal hover:bg-masjid-green/10'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 pb-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="gallery-item group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-masjid-green/90 via-masjid-green/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs uppercase tracking-wider text-masjid-gold">{image.category}</span>
                    <h3 className="font-semibold mt-1">{image.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-20">
                <p className="text-masjid-gray">No images found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-6 h-6" />
          </button>
          
          <div
            className="max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-full object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <span className="text-xs uppercase tracking-wider text-masjid-gold">{selectedImage.category}</span>
              <h3 className="text-white font-semibold mt-1 text-lg">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

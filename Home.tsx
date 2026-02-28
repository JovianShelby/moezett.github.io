import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Clock, Calendar, Heart, MessageCircle, 
  ChevronDown, ArrowRight, MapPin, Users, BookOpen,
  Moon, Phone
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const prayerRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);
  const supportRef = useRef<HTMLDivElement>(null);
  const visitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation (auto-play on load)
      const heroTl = gsap.timeline();
      heroTl
        .fromTo('.hero-bg', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' })
        .fromTo('.hero-nav', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.15)
        .fromTo('.hero-title span', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out' }, 0.35)
        .fromTo('.hero-subtitle', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.55)
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, 0.65)
        .fromTo('.hero-scroll', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }, 0.85);

      // Hero scroll-driven exit animation
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          if (progress > 0.7) {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set('.hero-content', {
              y: -18 * exitProgress + 'vh',
              opacity: 1 - exitProgress * 0.8,
            });
            gsap.set('.hero-bg', {
              scale: 1 + 0.06 * exitProgress,
              opacity: 1 - exitProgress * 0.15,
            });
          }
        },
      });

      // Prayer Times Section
      ScrollTrigger.create({
        trigger: prayerRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const card = document.querySelector('.prayer-card');
          const title = document.querySelector('.prayer-title');
          const items = document.querySelectorAll('.prayer-item');
          const rule = document.querySelector('.prayer-rule');
          const square = document.querySelector('.prayer-square');
          const bg = document.querySelector('.prayer-bg');

          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set(card, { x: 60 * (1 - enterProgress) + 'vw', opacity: enterProgress, scale: 0.96 + 0.04 * enterProgress });
            gsap.set(title, { y: 10 * (1 - enterProgress) + 'vh', opacity: enterProgress });
            items.forEach((item, i) => {
              const itemProgress = Math.max(0, Math.min(1, (enterProgress - i * 0.06) / 0.4));
              gsap.set(item, { x: -8 * (1 - itemProgress) + 'vw', opacity: itemProgress });
            });
            gsap.set(rule, { scaleY: enterProgress, opacity: enterProgress });
            gsap.set(square, { scale: enterProgress, opacity: enterProgress });
            gsap.set(bg, { scale: 1.08 - 0.08 * enterProgress, opacity: 0.8 + 0.2 * enterProgress });
          } else if (progress <= 0.7) {
            gsap.set(card, { x: 0, opacity: 1, scale: 1 });
            gsap.set(title, { y: 0, opacity: 1 });
            items.forEach((item) => gsap.set(item, { x: 0, opacity: 1 }));
            gsap.set(rule, { scaleY: 1, opacity: 1 });
            gsap.set(square, { scale: 1, opacity: 1 });
          } else {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set(card, { x: -40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8, scale: 1 - 0.02 * exitProgress });
            gsap.set(title, { y: -8 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            items.forEach((item) => gsap.set(item, { x: -6 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8 }));
            gsap.set(rule, { scaleY: 1 - 0.4 * exitProgress, opacity: 1 - exitProgress * 0.7 });
            gsap.set(square, { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress });
            gsap.set(bg, { scale: 1 + 0.05 * exitProgress, opacity: 1 - exitProgress * 0.15 });
          }
        },
      });

      // Events Section
      ScrollTrigger.create({
        trigger: eventsRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const card = document.querySelector('.events-card');
          const title = document.querySelector('.events-title');
          const items = document.querySelectorAll('.events-item');
          const rule = document.querySelector('.events-rule');
          const square = document.querySelector('.events-square');
          const bg = document.querySelector('.events-bg');

          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set(card, { y: 70 * (1 - enterProgress) + 'vh', opacity: enterProgress, scale: 0.98 + 0.02 * enterProgress });
            gsap.set(title, { y: 8 * (1 - enterProgress) + 'vh', opacity: enterProgress });
            items.forEach((item, i) => {
              const itemProgress = Math.max(0, Math.min(1, (enterProgress - i * 0.07) / 0.4));
              gsap.set(item, { x: -10 * (1 - itemProgress) + 'vw', opacity: itemProgress });
            });
            gsap.set(rule, { scaleY: enterProgress, opacity: enterProgress });
            gsap.set(square, { scale: enterProgress, opacity: enterProgress });
            gsap.set(bg, { scale: 1.08 - 0.08 * enterProgress });
          } else if (progress <= 0.7) {
            gsap.set(card, { y: 0, opacity: 1, scale: 1 });
            gsap.set(title, { y: 0, opacity: 1 });
            items.forEach((item) => gsap.set(item, { x: 0, opacity: 1 }));
            gsap.set(rule, { scaleY: 1, opacity: 1 });
            gsap.set(square, { scale: 1, opacity: 1 });
          } else {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set(card, { y: -40 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            gsap.set(title, { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            items.forEach((item) => gsap.set(item, { x: -6 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8 }));
            gsap.set(bg, { scale: 1 + 0.05 * exitProgress, opacity: 1 - exitProgress * 0.15 });
          }
        },
      });

      // Support Section
      ScrollTrigger.create({
        trigger: supportRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const card = document.querySelector('.support-card');
          const title = document.querySelector('.support-title');
          const body = document.querySelector('.support-body');
          const cta = document.querySelector('.support-cta');
          const rule = document.querySelector('.support-rule');
          const bg = document.querySelector('.support-bg');

          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set(card, { x: -60 * (1 - enterProgress) + 'vw', opacity: enterProgress, scale: 0.96 + 0.04 * enterProgress });
            gsap.set(title, { y: 10 * (1 - enterProgress) + 'vh', opacity: enterProgress });
            gsap.set(body, { y: 10 * (1 - enterProgress) * 0.7 + 'vh', opacity: Math.max(0, (enterProgress - 0.2) / 0.8) });
            gsap.set(cta, { scale: 0.92 + 0.08 * enterProgress, opacity: Math.max(0, (enterProgress - 0.4) / 0.6) });
            gsap.set(rule, { scaleY: enterProgress, opacity: enterProgress });
            gsap.set(bg, { scale: 1.08 - 0.08 * enterProgress });
          } else if (progress <= 0.7) {
            gsap.set(card, { x: 0, opacity: 1, scale: 1 });
            gsap.set(title, { y: 0, opacity: 1 });
            gsap.set(body, { y: 0, opacity: 1 });
            gsap.set(cta, { scale: 1, opacity: 1 });
            gsap.set(rule, { scaleY: 1, opacity: 1 });
          } else {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set(card, { x: 40 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8, scale: 1 - 0.02 * exitProgress });
            gsap.set(title, { y: -8 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            gsap.set(body, { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            gsap.set(cta, { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            gsap.set(bg, { scale: 1 + 0.05 * exitProgress, opacity: 1 - exitProgress * 0.15 });
          }
        },
      });

      // Visit Section
      ScrollTrigger.create({
        trigger: visitRef.current,
        start: 'top top',
        end: '+=130%',
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          const progress = self.progress;
          const card = document.querySelector('.visit-card');
          const title = document.querySelector('.visit-title');
          const address = document.querySelectorAll('.visit-address');
          const cta = document.querySelector('.visit-cta');
          const rule = document.querySelector('.visit-rule');
          const bg = document.querySelector('.visit-bg');

          if (progress <= 0.3) {
            const enterProgress = progress / 0.3;
            gsap.set(card, { y: 70 * (1 - enterProgress) + 'vh', opacity: enterProgress, scale: 0.98 + 0.02 * enterProgress });
            gsap.set(title, { y: 8 * (1 - enterProgress) + 'vh', opacity: enterProgress });
            address.forEach((line, i) => {
              const lineProgress = Math.max(0, Math.min(1, (enterProgress - i * 0.06) / 0.4));
              gsap.set(line, { x: -8 * (1 - lineProgress) + 'vw', opacity: lineProgress });
            });
            gsap.set(cta, { scale: 0.92 + 0.08 * Math.max(0, (enterProgress - 0.4) / 0.6), opacity: Math.max(0, (enterProgress - 0.4) / 0.6) });
            gsap.set(rule, { scaleY: enterProgress, opacity: enterProgress });
            gsap.set(bg, { scale: 1.08 - 0.08 * enterProgress });
          } else if (progress <= 0.7) {
            gsap.set(card, { y: 0, opacity: 1, scale: 1 });
            gsap.set(title, { y: 0, opacity: 1 });
            address.forEach((line) => gsap.set(line, { x: 0, opacity: 1 }));
            gsap.set(cta, { scale: 1, opacity: 1 });
            gsap.set(rule, { scaleY: 1, opacity: 1 });
          } else {
            const exitProgress = (progress - 0.7) / 0.3;
            gsap.set(card, { y: -40 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            gsap.set(title, { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            address.forEach((line) => gsap.set(line, { x: -6 * exitProgress + 'vw', opacity: 1 - exitProgress * 0.8 }));
            gsap.set(cta, { y: -6 * exitProgress + 'vh', opacity: 1 - exitProgress * 0.8 });
            gsap.set(bg, { scale: 1 + 0.05 * exitProgress, opacity: 1 - exitProgress * 0.15 });
          }
        },
      });

      // Quick Actions Animation
      gsap.fromTo('.quick-card', 
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.quick-actions',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // Announcements Animation
      gsap.fromTo('.announcement-card',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.announcements',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // About Preview Animation
      gsap.fromTo('.about-content',
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-preview',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo('.about-image',
        { x: 50, opacity: 0, scale: 1.05 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-preview',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );

      // Gallery Preview Animation
      gsap.fromTo('.gallery-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-preview',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const prayerTimes = [
    { name: 'Fajr', time: '5:15 AM' },
    { name: 'Dhuhr', time: '12:30 PM' },
    { name: 'Asr', time: '4:00 PM' },
    { name: 'Maghrib', time: '6:45 PM' },
    { name: 'Isha', time: '8:15 PM' },
  ];

  const events = [
    { name: 'Friday Khutbah', desc: 'Every Friday at 1:00 PM' },
    { name: 'Ramadan Iftar', desc: 'Daily sunset during Ramadan' },
    { name: 'Youth Circle', desc: 'Saturdays at 5:00 PM' },
  ];

  const quickActions = [
    { icon: Clock, label: 'ဆလတ်အချိန်များ', path: '/prayer-times', color: 'bg-masjid-green' },
    { icon: Calendar, label: 'ပွဲအစီအစဉ်များ', path: '/programs', color: 'bg-masjid-gold' },
    { icon: Heart, label: 'လှူဒါန်းရန်', path: '/donate', color: 'bg-rose-600' },
    { icon: MessageCircle, label: 'ဆက်သွယ်ရန်', path: '/contact', color: 'bg-sky-600' },
  ];

  const announcements = [
    { title: 'Ramadan Program', desc: 'Join us for daily iftar and taraweeh prayers', icon: Moon },
    { title: 'Islamic Classes', desc: 'Quran and Islamic studies for all ages', icon: BookOpen },
    { title: 'Community Events', desc: 'Weekly gatherings and activities', icon: Users },
  ];

  return (
    <div className="relative">
      {/* Section 1: Hero */}
      <section ref={heroRef} className="relative h-screen w-full overflow-hidden z-10">
        <div className="hero-bg absolute inset-0">
          <img
            src="/images/hero-exterior.jpg"
            alt="YAENI JARMAE Masjid"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-masjid-green/60 to-masjid-green/80" />
        </div>
        
        <div className="hero-content relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="hero-title heading-xl text-white mb-4 max-w-4xl">
            {'Welcome to YAENI JARMAE Masjid'.split(' ').map((word, i) => (
              <span key={i} className="inline-block mr-3">{word}</span>
            ))}
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl text-white/90 mb-8 font-body">
            A place of peace, prayer, and purpose.
          </p>
          <Link to="/prayer-times" className="hero-cta btn-primary text-base">
            Explore Prayer Times
          </Link>
          
          <div className="hero-scroll absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70">
            <p className="text-sm mb-2">Scroll to explore</p>
            <ChevronDown className="w-5 h-5 mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Section 2: Prayer Times */}
      <section ref={prayerRef} className="relative h-screen w-full overflow-hidden z-20">
        <div className="prayer-bg absolute inset-0">
          <img
            src="/images/courtyard-day.jpg"
            alt="Masjid Courtyard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-masjid-green/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="prayer-card bg-masjid-cream/95 backdrop-blur-md rounded-2xl w-full max-w-3xl p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="prayer-title heading-md text-masjid-green mb-2">Daily Prayer Times</h2>
                <p className="text-masjid-gray mb-6">Join us in congregation</p>
                
                <div className="space-y-3">
                  {prayerTimes.map((prayer) => (
                    <div key={prayer.name} className="prayer-item flex items-center justify-between py-3 border-b border-masjid-green/10">
                      <span className="font-medium text-masjid-charcoal">{prayer.name}</span>
                      <span className="text-masjid-gold font-semibold">{prayer.time}</span>
                    </div>
                  ))}
                </div>
                
                <Link to="/prayer-times" className="inline-flex items-center gap-2 text-masjid-green hover:text-masjid-gold transition-colors mt-6 text-sm font-medium">
                  View full monthly timetable <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="hidden md:flex flex-col items-center">
                <div className="prayer-square gold-square mb-4" />
                <div className="prayer-rule gold-rule flex-1 origin-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Community Events */}
      <section ref={eventsRef} className="relative h-screen w-full overflow-hidden z-30">
        <div className="events-bg absolute inset-0">
          <img
            src="/images/exterior-angle.jpg"
            alt="Masjid Exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-masjid-green/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="events-card bg-masjid-cream/95 backdrop-blur-md rounded-2xl w-full max-w-3xl p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="events-title heading-md text-masjid-green mb-2">Upcoming Events</h2>
                <p className="text-masjid-gray mb-6">Mark your calendar</p>
                
                <div className="space-y-4">
                  {events.map((event) => (
                    <div key={event.name} className="events-item flex items-start gap-4 p-4 rounded-xl bg-masjid-green/5 hover:bg-masjid-green/10 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-masjid-gold/20 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5 text-masjid-gold" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-masjid-charcoal">{event.name}</h4>
                        <p className="text-sm text-masjid-gray">{event.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link to="/programs" className="inline-flex items-center gap-2 text-masjid-green hover:text-masjid-gold transition-colors mt-6 text-sm font-medium">
                  See all events <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="hidden md:flex flex-col items-center">
                <div className="events-square gold-square mb-4" />
                <div className="events-rule gold-rule flex-1 origin-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Support the Masjid */}
      <section ref={supportRef} className="relative h-screen w-full overflow-hidden z-40">
        <div className="support-bg absolute inset-0">
          <img
            src="/images/courtyard-evening.jpg"
            alt="Masjid Evening"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-masjid-green/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="support-card bg-masjid-cream/95 backdrop-blur-md rounded-2xl w-full max-w-3xl p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="support-title heading-md text-masjid-green mb-2">Support the Masjid</h2>
                <p className="text-masjid-gray mb-4">Your generosity builds community</p>
                
                <p className="support-body text-masjid-charcoal/80 mb-8 leading-relaxed">
                  Donations help maintain the masjid, support educational programs, and provide services to those in need. Every contribution makes a difference.
                </p>
                
                <div className="support-cta flex flex-wrap gap-4">
                  <Link to="/donate" className="btn-primary">
                    Donate Now
                  </Link>
                  <Link to="/donate" className="btn-outline">
                    Learn about zakat
                  </Link>
                </div>
              </div>
              
              <div className="hidden md:flex flex-col items-center">
                <div className="gold-square mb-4" />
                <div className="support-rule gold-rule flex-1 origin-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Visit Us */}
      <section ref={visitRef} className="relative h-screen w-full overflow-hidden z-50">
        <div className="visit-bg absolute inset-0">
          <img
            src="/images/exterior-wide.jpg"
            alt="Masjid Wide View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-masjid-green/40" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="visit-card bg-masjid-cream/95 backdrop-blur-md rounded-2xl w-full max-w-3xl p-8 md:p-12 shadow-card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="visit-title heading-md text-masjid-green mb-2">Visit Us</h2>
                <p className="text-masjid-gray mb-6">Everyone is welcome</p>
                
                <div className="space-y-2 mb-6">
                  <p className="visit-address flex items-start gap-3 text-masjid-charcoal">
                    <MapPin className="w-5 h-5 text-masjid-gold flex-shrink-0 mt-0.5" />
                    <span>YGN-MDY Main Road, Yaeni<br />
                    Yedashe Township, Taungoo District<br />
                    Bago Region</span>
                  </p>
                  <p className="visit-address flex items-center gap-3 text-masjid-charcoal">
                    <Phone className="w-5 h-5 text-masjid-gold flex-shrink-0" />
                    <span>09962992990</span>
                  </p>
                </div>
                
                <Link to="/contact" className="visit-cta btn-primary inline-flex">
                  Get Directions
                </Link>
              </div>
              
              <div className="hidden md:flex flex-col items-center">
                <div className="gold-square mb-4" />
                <div className="visit-rule gold-rule flex-1 origin-top" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Quick Actions */}
      <section className="quick-actions relative z-60 bg-masjid-cream py-20">
        <div className="section-padding">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {quickActions.map((action) => (
              <Link
                key={action.path}
                to={action.path}
                className="quick-card group relative overflow-hidden rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-card hover:-translate-y-1"
              >
                <div className={`${action.color} absolute inset-0 opacity-90 group-hover:opacity-100 transition-opacity`} />
                <div className="relative z-10 text-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <action.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-sm md:text-base">{action.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Announcements */}
      <section className="announcements relative z-60 bg-masjid-cream py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Latest Updates</span>
              <h2 className="heading-md text-masjid-green">Announcements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {announcements.map((item) => (
                <div key={item.title} className="announcement-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-masjid-green/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-masjid-green" />
                  </div>
                  <h3 className="heading-sm text-masjid-charcoal mb-2">{item.title}</h3>
                  <p className="text-masjid-gray text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: About Preview */}
      <section className="about-preview relative z-60 bg-masjid-cream py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="about-content">
                <span className="label text-masjid-gold mb-3 block">About Us</span>
                <h2 className="heading-md text-masjid-green mb-6">
                  ဗလီ အကြောင်း
                </h2>
                <p className="body-md text-masjid-charcoal/80 mb-6 leading-relaxed">
                  YAENI JARMAE Masjid သည် ဒေသခံ မုစ်လင်အသိုင်းအဝိုင်းအတွက် ဆလတ်ဝတ်ပြုခြင်း၊ 
                  အစ္စလာမ်ပညာရေး သင်ကြားခြင်းနှင့် လူမှုကူညီရေး လှုပ်ရှားမှုများ ဆောင်ရွက်ပေးနေသော 
                  အရေးပါသော ဗလီ တစ်ခုဖြစ်ပါသည်။
                </p>
                <p className="body-md text-masjid-charcoal/80 mb-8 leading-relaxed">
                  ယုံကြည်ခြင်း၊ ညီညွတ်မှုနှင့် ပညာရေးကို အခြေခံ၍ အသိုင်းအဝိုင်းတိုးတက်စေရန် ဆောင်ရွက်လျက်ရှိပါသည်။
                </p>
                <Link to="/about" className="btn-primary inline-flex items-center gap-2">
                  ပိုမိုကြည့်ရန် <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="about-image relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
                  <img
                    src="/images/interior-1.jpg"
                    alt="Masjid Interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-masjid-gold/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-masjid-green/10 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Gallery Preview */}
      <section className="gallery-preview relative z-60 bg-masjid-cream py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="label text-masjid-gold mb-3 block">Gallery</span>
                <h2 className="heading-md text-masjid-green">Explore Our Masjid</h2>
              </div>
              <Link to="/gallery" className="hidden md:inline-flex items-center gap-2 text-masjid-green hover:text-masjid-gold transition-colors font-medium">
                View all photos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { src: '/images/hero-exterior.jpg', title: 'Exterior' },
                { src: '/images/interior-1.jpg', title: 'Interior' },
                { src: '/images/event-iftar.jpg', title: 'Events' },
                { src: '/images/education-class.jpg', title: 'Education' },
              ].map((item) => (
                <div key={item.title} className="gallery-item group relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-masjid-green/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/gallery" className="md:hidden inline-flex items-center gap-2 text-masjid-green hover:text-masjid-gold transition-colors font-medium mt-6">
              View all photos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

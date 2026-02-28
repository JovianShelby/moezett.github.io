import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Users, Calendar, Clock, Star, GraduationCap, Baby, User } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.program-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.programs-grid',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo('.education-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.education-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const upcomingPrograms = [
    {
      title: 'Friday Khutbah',
      description: 'Weekly Friday sermon and congregational prayer',
      schedule: 'Every Friday at 1:00 PM',
      icon: Users,
      color: 'bg-masjid-green',
    },
    {
      title: 'Ramadan Events',
      description: 'Daily iftar, taraweeh prayers, and special programs',
      schedule: 'During Ramadan - Sunset to late evening',
      icon: Star,
      color: 'bg-masjid-gold',
    },
    {
      title: 'Islamic Lectures',
      description: 'Weekly lectures on various Islamic topics',
      schedule: 'Saturdays at 7:00 PM',
      icon: BookOpen,
      color: 'bg-sky-600',
    },
    {
      title: 'Community Iftar',
      description: 'Monthly community gathering and shared meals',
      schedule: 'Last Friday of each month',
      icon: Calendar,
      color: 'bg-rose-600',
    },
  ];

  const educationPrograms = [
    {
      title: 'Quran Classes',
      description: 'Learn to read and understand the Quran with qualified teachers',
      schedule: 'Daily after Maghrib prayer',
      icon: BookOpen,
      levels: 'All levels welcome',
    },
    {
      title: 'Kids Madrasa',
      description: 'Islamic education for children including Quran, Arabic, and Islamic studies',
      schedule: 'Saturday & Sunday - 9:00 AM to 12:00 PM',
      icon: Baby,
      levels: 'Ages 5-15',
    },
    {
      title: 'Adult Islamic Studies',
      description: 'In-depth study of Islamic jurisprudence, history, and spirituality',
      schedule: 'Tuesday & Thursday - 7:00 PM',
      icon: GraduationCap,
      levels: 'Adults',
    },
    {
      title: 'Arabic Language',
      description: 'Learn Arabic language from basic to advanced levels',
      schedule: 'Monday & Wednesday - 6:00 PM',
      icon: User,
      levels: 'Beginner to Advanced',
    },
  ];

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
            <span className="label text-masjid-gold mb-4 block">Activities</span>
            <h1 className="heading-xl text-white mb-6">ပွဲအစီအစဉ်များ</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              Join our community programs and educational activities designed for all ages.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Programs */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Community</span>
              <h2 className="heading-md text-masjid-green">Upcoming Programs</h2>
            </div>
            
            <div className="programs-grid grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingPrograms.map((program, index) => (
                <div
                  key={index}
                  className="program-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-all hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${program.color} bg-opacity-10 flex items-center justify-center flex-shrink-0`}>
                      <program.icon className={`w-7 h-7 ${program.color.replace('bg-', 'text-')}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm text-masjid-charcoal mb-2">{program.title}</h3>
                      <p className="text-masjid-gray text-sm mb-3">{program.description}</p>
                      <div className="flex items-center gap-2 text-masjid-green text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{program.schedule}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Programs */}
      <section className="education-section py-20 bg-masjid-green">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Learning</span>
              <h2 className="heading-md text-white">သင်ကြားရေးအစီအစဉ်များ</h2>
              <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                ဝေဖွာကွလ် မကာသိဗ် (သင်ရိုးညွှန်းတမ်း တစ်ပုံစံတည်း တစ်ပြေးညီ သင်ကြားရေးစနစ်)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {educationPrograms.map((program, index) => (
                <div
                  key={index}
                  className="education-item bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-masjid-gold/20 flex items-center justify-center flex-shrink-0">
                      <program.icon className="w-7 h-7 text-masjid-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm text-white mb-2">{program.title}</h3>
                      <p className="text-white/70 text-sm mb-3">{program.description}</p>
                      <div className="flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-masjid-gold text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{program.schedule}</span>
                        </div>
                        <div className="flex items-center gap-2 text-white/60 text-sm">
                          <User className="w-4 h-4" />
                          <span>{program.levels}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-masjid-gold/20 flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-8 h-8 text-masjid-gold" />
              </div>
              <h3 className="heading-md text-masjid-green mb-4">Register for Classes</h3>
              <p className="text-masjid-gray max-w-xl mx-auto mb-8">
                All programs are open to the community. Contact us to register or learn more about 
                our educational offerings.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:09962992990" className="btn-primary">
                  Call to Register
                </a>
                <a href="mailto:yaenijarmae.masjid@gmail.com" className="btn-outline">
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;

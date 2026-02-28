import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Phone, Mail, Send, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-info',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo('.contact-form',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo('.map-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.map-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'YGN-MDY Main Road, Yaeni, Yedashe Township, Taungoo District, Bago Region',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '09962992990, 09973522786, 09952131786, 09761262042, 09979323997, 09974441666',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'yaenijarmae.masjid@gmail.com',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Daily: 8:00 AM - 8:00 PM',
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
            <span className="label text-masjid-gold mb-4 block">Get in Touch</span>
            <h1 className="heading-xl text-white mb-6">ဆက်သွယ်ရန်</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="contact-info">
                <span className="label text-masjid-gold mb-3 block">Contact Information</span>
                <h2 className="heading-md text-masjid-green mb-8">Reach Out to Us</h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-masjid-green/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-masjid-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-masjid-charcoal mb-1">{item.title}</h3>
                        <p className="text-masjid-gray text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mt-10">
                  <h3 className="font-semibold text-masjid-charcoal mb-4">Follow Us</h3>
                  <div className="flex items-center gap-3">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-masjid-green/10 flex items-center justify-center text-masjid-green hover:bg-masjid-green hover:text-white transition-all"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-masjid-green/10 flex items-center justify-center text-masjid-green hover:bg-masjid-green hover:text-white transition-all"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-masjid-green/10 flex items-center justify-center text-masjid-green hover:bg-masjid-green hover:text-white transition-all"
                    >
                      <Youtube className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form bg-white rounded-2xl p-8 shadow-card">
                <span className="label text-masjid-gold mb-3 block">Send Message</span>
                <h2 className="heading-sm text-masjid-green mb-6">Get in Touch</h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-masjid-charcoal mb-2 block">
                      Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-masjid-green/20 focus:border-masjid-gold focus:ring-masjid-gold/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-masjid-charcoal mb-2 block">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="border-masjid-green/20 focus:border-masjid-gold focus:ring-masjid-gold/20"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-masjid-charcoal mb-2 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                      className="border-masjid-green/20 focus:border-masjid-gold focus:ring-masjid-gold/20 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-masjid-green hover:bg-masjid-green/90 text-white py-3 rounded-full font-medium transition-all"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section py-20 pb-24">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <span className="label text-masjid-gold mb-3 block">Location</span>
              <h2 className="heading-md text-masjid-green">Find Us on the Map</h2>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card bg-masjid-green/5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15249.890476428!2d96.2673951!3d19.4727341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI4JzIxLjgiTiA5NsKwMTYnMDIuNiJF!5e0!3m2!1sen!2smm!4v1700000000000!5m2!1sen!2smm"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="YAENI JARMAE Masjid Location"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-masjid-gray text-sm">
                <span className="font-semibold text-masjid-charcoal">Coordinates:</span>{' '}
                Latitude: 19.4727341, Longitude: 96.2673951
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Heart, Landmark, Wallet, CreditCard, Phone, Building, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Donate = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.donation-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.donation-cards',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      gsap.fromTo('.payment-method',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.payment-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const donationTypes = [
    {
      title: 'Zakat',
      titleMyanmar: 'ဇကာတ်',
      description: 'Fulfill your obligatory charity. Your Zakat helps support the needy and maintain the masjid.',
      icon: Landmark,
      color: 'bg-masjid-green',
    },
    {
      title: 'Sadaqah',
      titleMyanmar: 'စဒက္ကာ',
      description: 'Voluntary charity for ongoing masjid operations, community support, and educational programs.',
      icon: Heart,
      color: 'bg-rose-600',
    },
    {
      title: 'Construction Fund',
      titleMyanmar: 'ဆောက်လုပ်ရေး ရန်ပုံငွေ',
      description: 'Support the rebuilding and maintenance of the masjid after the 2025 earthquake.',
      icon: Building,
      color: 'bg-amber-600',
    },
  ];

  const paymentMethods = [
    {
      name: 'Bank Transfer',
      details: [
        'Bank: [Your Bank Name]',
        'Account Name: YAENI JARMAE Masjid',
        'Account Number: [Your Account Number]',
      ],
      icon: CreditCard,
    },
    {
      name: 'KPay',
      details: [
        'Phone: 09962992990',
        'Account Name: YAENI JARMAE Masjid',
      ],
      icon: Phone,
    },
    {
      name: 'Wave Pay',
      details: [
        'Phone: 09962992990',
        'Account Name: YAENI JARMAE Masjid',
      ],
      icon: Wallet,
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
            <span className="label text-masjid-gold mb-4 block">Support</span>
            <h1 className="heading-xl text-white mb-6">လှူဒါန်းရန်</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              Your generosity helps us maintain the masjid, support educational programs, 
              and serve the community.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Types */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Ways to Give</span>
              <h2 className="heading-md text-masjid-green">Choose Your Donation</h2>
            </div>
            
            <div className="donation-cards grid grid-cols-1 md:grid-cols-3 gap-6">
              {donationTypes.map((type, index) => (
                <div
                  key={index}
                  className="donation-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-card transition-all hover:-translate-y-1 text-center"
                >
                  <div className={`w-20 h-20 rounded-full ${type.color} bg-opacity-10 flex items-center justify-center mx-auto mb-6`}>
                    <type.icon className={`w-10 h-10 ${type.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="heading-sm text-masjid-charcoal mb-1">{type.title}</h3>
                  <p className="text-masjid-gold text-sm mb-4">{type.titleMyanmar}</p>
                  <p className="text-masjid-gray text-sm leading-relaxed">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="payment-section py-20 bg-masjid-green">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Payment Options</span>
              <h2 className="heading-md text-white">How to Donate</h2>
              <p className="text-white/70 mt-4">
                Choose the most convenient payment method for you
              </p>
            </div>
            
            <div className="space-y-4">
              {paymentMethods.map((method, index) => (
                <div
                  key={index}
                  className="payment-method bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-masjid-gold/20 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-7 h-7 text-masjid-gold" />
                    </div>
                    <div>
                      <h3 className="heading-sm text-white mb-3">{method.name}</h3>
                      <div className="space-y-1">
                        {method.details.map((detail, i) => (
                          <p key={i} className="text-white/70 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="label text-masjid-gold mb-3 block">Your Impact</span>
                <h2 className="heading-md text-masjid-green mb-6">
                  How Your Donation Helps
                </h2>
                <div className="space-y-4">
                  {[
                    'Maintaining masjid facilities and daily operations',
                    'Supporting Islamic education programs for all ages',
                    'Providing community services and outreach',
                    'Rebuilding efforts after the 2025 earthquake',
                    'Supporting those in need through zakat distribution',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-masjid-gold flex-shrink-0 mt-0.5" />
                      <p className="text-masjid-charcoal/80">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
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

      {/* Contact CTA */}
      <section className="py-20 pb-24">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-masjid-green/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-masjid-green" />
              </div>
              <h3 className="heading-md text-masjid-green mb-4">Thank You for Your Support</h3>
              <p className="text-masjid-gray max-w-xl mx-auto mb-8">
                May Allah reward you abundantly for your generosity. For any questions about 
                donations or to discuss larger contributions, please contact us.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:09962992990" className="btn-primary">
                  Call Us
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

export default Donate;

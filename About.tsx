import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Target, Users, Heart, Landmark, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Quote animation
      gsap.fromTo('.about-quote',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-quote',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // History timeline animation
      gsap.fromTo('.history-item',
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.history-section',
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );

      // Mission animation
      gsap.fromTo('.mission-content',
        { x: 30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.mission-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // Committee cards animation
      gsap.fromTo('.committee-card',
        { y: 40, opacity: 0, scale: 0.98 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.committee-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );

      // Services animation
      gsap.fromTo('.service-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const historyMilestones = [
    { year: '၁၉၅၄', text: 'ဒေသခံ လူကြီးတစ်ဦးမှ ဗလီ နှင့် ဘာသာရေးစာသင်ကျောင်း တည်ဆောက်ရန် မြေဧရိယာ ခန့်မှန်း ၂ ဧက ကို ဝတ်ဖ်အဖြစ် လှူဒါန်းခဲ့သည်။' },
    { year: '၁၉၅၈', text: 'မြေယာပိုင်ဆိုင်မှုနှင့် အသုံးပြုခွင့် ဆိုင်ရာ စာရွက်စာတမ်းများကို ပြင်ဆင်ပြီး ဘာသာရေးအသုံးပြုရန် အတည်ပြုခဲ့သည်။' },
    { year: '၁၉၈၀', text: 'စာသင်ကျောင်းတည်ဆောက်ရေးအတွက် မြေဧရိယာ အစိတ်အပိုင်းကို အခြားနည်းအသုံးပြုခွင့် ရရှိခဲ့သည်။' },
    { year: '၁၉၈၉', text: 'ဘာသာရေးစာသင်ကျောင်း ဖွံ့ဖြိုးရေးအတွက် မြေယာအသုံးပြုခွင့် ထပ်မံ လျှောက်ထားခဲ့သည်။' },
    { year: '၁၉၉၀', text: 'စစ်ဆေးရေးများနှင့် လမ်းသွားလမ်းလာ အဆင်ပြေစေရန် မြေယာအပိုင်းတချို့ ပြန်လည်ညှိနှိုင်းခဲ့သည်။' },
    { year: '၁၉၉၂', text: 'နယ်နိမိတ် စည်းရိုးသတ်မှတ်ခြင်းနှင့် အုပ်ချုပ်ရေးဆိုင်ရာ အတည်ပြုမှုများ ဆောင်ရွက်ခဲ့သည်။' },
    { year: '၂၀၁၅', text: 'မြေယာပိုင်ဆိုင်မှုနှင့် အသုံးပြုခွင့် ပြဿနာများကို ဖြေရှင်းရန် ဆက်လက် ကြိုးပမ်းလျက်ရှိသည်။' },
    { year: '၂၀၂၅', text: 'ဖြစ်ပွားခဲ့သော ငလျင်ကြောင့် ဗလီ အဆောက်အဦးကြီး ပြိုကျ ပျက်စီးသွားခဲ့ပြီး အသစ်ပြန်လည်တည်ဆောက်လျက်ရှိသည်။' },
  ];

  const committeeMembers = [
    { name: 'ဟာဂျီဦးကျော်နိုင်စိုး', role: 'ဥက္ကဋ္ဌ', icon: Users },
    { name: 'ကိုမျိုးဇော်ထက်', role: 'ဒုဥက္ကဋ္ဌ', icon: Users },
    { name: 'ကိုစိုင်းဝေလုအောင်', role: 'အတွင်းရေးမှူး', icon: FileText },
    { name: 'ကိုအာကာစိုး', role: 'ဆောက်လုပ်ရေးတာဝန်ခံ / စာရင်းစစ်', icon: Landmark },
    { name: 'ကိုမိုးစက်ကိုကို', role: 'ဘဏ္ဍာရေးမှူး', icon: Landmark },
    { name: 'ကိုဇော်ဝင်း', role: 'အဖွဲ့ဝင်', icon: Users },
  ];

  const religiousLeaders = [
    { name: 'MLV Shafeel (ဦးဇင်မင်းကိုကို)', role: 'အီမာမ်' },
    { name: 'MLV Sohail (ဦးရှိုင်းဝဏ္ဏအောင်)', role: 'ကျောင်းဆရာ' },
    { name: 'ဦးအလီ', role: 'မော်ဇင်' },
  ];

  const services = [
    { title: 'သာရေး နာရေး', desc: 'အားတက်သရော ပါဝင်အားဖြည့်ခြင်း', icon: Heart },
    { title: 'အရေးပေါ်ဝန်ဆောင်မှု', desc: 'မြို့နေ လူထုများအတွက် အရေးပေါ်အောက်ဆီဂျင် အခမဲ့ပေးဝေခြင်း', icon: Target },
  ];

  return (
    <div ref={sectionRef} className="bg-masjid-cream">
      {/* Page Header */}
      <section className="relative bg-masjid-green py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A24A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label text-masjid-gold mb-4 block">About Us</span>
            <h1 className="heading-xl text-white mb-6">ဗလီ အကြောင်း</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              YAENI JARMAE Masjid သည် ဒေသခံ မုစ်လင်အသိုင်းအဝိုင်းအတွက် ဆလတ်ဝတ်ပြုခြင်း၊ 
              အစ္စလာမ်ပညာရေး သင်ကြားခြင်းနှင့် လူမှုကူညီရေး လှုပ်ရှားမှုများ ဆောင်ရွက်ပေးနေသော 
              အရေးပါသော ဗလီ တစ်ခုဖြစ်ပါသည်။
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-masjid-cream">
        <div className="section-padding">
          <div className="about-quote max-w-4xl mx-auto text-center">
            <blockquote className="heading-lg text-masjid-green italic font-heading">
              "Rooted in faith. Built by community."
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="w-12 h-px bg-masjid-gold" />
              <span className="text-masjid-gold text-2xl">❋</span>
              <div className="w-12 h-px bg-masjid-gold" />
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section py-20 bg-masjid-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* History Timeline */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-masjid-green/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-masjid-green" />
                  </div>
                  <h2 className="heading-md text-masjid-green">မတ်စျစ်၏ သမိုင်း</h2>
                </div>
                
                <div className="relative pl-8 border-l-2 border-masjid-gold/30 space-y-6">
                  {historyMilestones.map((milestone, index) => (
                    <div key={index} className="history-item relative">
                      <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-masjid-gold border-4 border-masjid-cream" />
                      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-card transition-shadow">
                        <span className="text-masjid-gold font-bold text-lg">{milestone.year}</span>
                        <p className="text-masjid-charcoal/80 mt-2 text-sm leading-relaxed">{milestone.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mission Section */}
              <div className="mission-section">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-full bg-masjid-gold/20 flex items-center justify-center">
                    <Target className="w-6 h-6 text-masjid-gold" />
                  </div>
                  <h2 className="heading-md text-masjid-green">ရည်မှန်းချက် & မစ်ရှင်</h2>
                </div>
                
                <div className="mission-content bg-masjid-green rounded-2xl p-8 text-white">
                  <p className="body-md leading-relaxed mb-6 text-white/90">
                    ရေနီမြိုနေ ဂျမာအသ်သား မိသားစုများ နှင့် ခရီးသွား ဧည့်သည်များ အဆင်ပြေပြေ 
                    ဝတ်ပြုနိုင်ရန်၊ အသိုင်းအဝိုင်းအတွက် ဆွလသ် ဝတ်ပြုခြင်း၊ အစ္စလာမ်ပညာရေး 
                    သင်ကြားခြင်းနှင့် လူမှုကူညီရေး လှုပ်ရှားမှုများကို စနစ်တကျ ဆောင်ရွက်ပေးသော 
                    ဗလီတစ်ခု ဖြစ်စေရန်။
                  </p>
                  <p className="body-md leading-relaxed text-white/90">
                    အလ္လာဟ်၏ လမ်းညွှန်မှုအတိုင်း ဆွလသ်၊ ပညာရေးနှင့် လူမှုရေးကူညီမှုများမှတစ်ဆင့် 
                    သာသနာနှင့် အသိုင်းအဝိုင်းကို တိုးတက်စေရန် ဆောင်ရွက်ခြင်း။
                  </p>
                  
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="text-masjid-gold font-heading text-lg italic">
                      "အစ္စလာမ်တန်ဖိုးများကို အခြေခံထားသော သန့်ရှင်းငြိမ်းချမ်းပြီး 
                      ပညာရည်မြင့်မားသော မုစ်လင်အသိုင်းအဝိုင်းကို ဖန်တီးပေးနိုင်သော ဗလီတစ်ခု ဖြစ်လာစေရန်။"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-masjid-green">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-masjid-gold" />
              <Landmark className="w-8 h-8 text-masjid-gold" />
              <div className="w-16 h-px bg-masjid-gold" />
            </div>
            <p className="body-lg text-white/90 leading-relaxed">
              YAENI JARMAE Masjid သည် ၁၉၅၄ ခုနှစ်မှ စတင်၍ ဒေသခံအသိုင်းအဝိုင်းအတွက် 
              အစ္စလာမ် ဘာသာရေး၊ ပညာရေးနှင့် လူမှုရေးလှုပ်ရှားမှုများကို ဆောင်ရွက်လာခဲ့သော 
              အရေးပါသော ဗလီ တစ်ခုဖြစ်ပြီး ယခုအခါ အသစ်ပြန်လည်တည်ဆောက်လျက်ရှိပါသည်။
            </p>
          </div>
        </div>
      </section>

      {/* Committee Section */}
      <section className="committee-section py-20 bg-masjid-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Leadership</span>
              <h2 className="heading-md text-masjid-green">ကော်မတီဝင်များ</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {committeeMembers.map((member, index) => (
                <div key={index} className="committee-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-card transition-all hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-full bg-masjid-green/10 flex items-center justify-center mb-4">
                    <member.icon className="w-7 h-7 text-masjid-green" />
                  </div>
                  <h3 className="heading-sm text-masjid-charcoal mb-1">{member.name}</h3>
                  <p className="text-masjid-gold text-sm font-medium">{member.role}</p>
                </div>
              ))}
            </div>

            {/* Religious Leaders */}
            <div className="bg-masjid-green/5 rounded-2xl p-8">
              <h3 className="heading-sm text-masjid-green mb-6 text-center">ဘာသာရေးဆိုင်ရာ တာဝန်ခံများ</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {religiousLeaders.map((leader, index) => (
                  <div key={index} className="text-center p-4">
                    <p className="font-semibold text-masjid-charcoal">{leader.name}</p>
                    <p className="text-masjid-gold text-sm">{leader.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-20 bg-masjid-cream">
        <div className="section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="label text-masjid-gold mb-3 block">Community</span>
              <h2 className="heading-md text-masjid-green">လူမှုအသိုင်းအဝိုင်း ဝန်ဆောင်မှုများ</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {services.map((service, index) => (
                <div key={index} className="service-card bg-white rounded-2xl p-8 shadow-sm hover:shadow-card transition-all text-center">
                  <div className="w-16 h-16 rounded-full bg-masjid-gold/20 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-8 h-8 text-masjid-gold" />
                  </div>
                  <h3 className="heading-sm text-masjid-charcoal mb-2">{service.title}</h3>
                  <p className="text-masjid-gray text-sm">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

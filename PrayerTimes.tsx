import { useState, useEffect } from 'react';
import { Clock, Moon, Sun, Sunset, Sparkles, Calendar } from 'lucide-react';

interface PrayerTime {
  name: string;
  nameMyanmar: string;
  time: string;
  icon: React.ElementType;
  color: string;
}

const PrayerTimes = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [nextPrayer, setNextPrayer] = useState<string>('');
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  // Myanmar prayer times (approximate for Taungoo District)
  const prayerTimes: PrayerTime[] = [
    { name: 'Fajr', nameMyanmar: 'ဖဂ်ရ်', time: '5:15 AM', icon: Moon, color: 'bg-indigo-900' },
    { name: 'Dhuhr', nameMyanmar: 'ဇူဟ်', time: '12:30 PM', icon: Sun, color: 'bg-amber-500' },
    { name: 'Asr', nameMyanmar: 'အသွ်', time: '4:00 PM', icon: Sun, color: 'bg-orange-500' },
    { name: 'Maghrib', nameMyanmar: 'မဂ်ရိဗ်', time: '6:45 PM', icon: Sunset, color: 'bg-rose-500' },
    { name: 'Isha', nameMyanmar: 'ဣချာ', time: '8:15 PM', icon: Sparkles, color: 'bg-violet-900' },
  ];

  const jummahTime = { name: 'Jummah', nameMyanmar: 'ဇုမ္မာ', time: '1:00 PM', icon: Calendar, color: 'bg-masjid-green' };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const calculateNextPrayer = () => {
      const now = currentTime;
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const currentTimeInMinutes = currentHours * 60 + currentMinutes;

      const prayerMinutes = prayerTimes.map(prayer => {
        const [time, period] = prayer.time.split(' ');
        const [hours, minutes] = time.split(':').map(Number);
        let totalMinutes = hours * 60 + minutes;
        if (period === 'PM' && hours !== 12) totalMinutes += 12 * 60;
        if (period === 'AM' && hours === 12) totalMinutes = minutes;
        return { name: prayer.name, minutes: totalMinutes };
      });

      let nextPrayerName = '';
      let nextPrayerMinutes = 0;

      for (const prayer of prayerMinutes) {
        if (prayer.minutes > currentTimeInMinutes) {
          nextPrayerName = prayer.name;
          nextPrayerMinutes = prayer.minutes;
          break;
        }
      }

      if (!nextPrayerName) {
        nextPrayerName = prayerMinutes[0].name;
        nextPrayerMinutes = prayerMinutes[0].minutes + 24 * 60;
      }

      setNextPrayer(nextPrayerName);

      const remainingMinutes = nextPrayerMinutes - currentTimeInMinutes;
      const hours = Math.floor(remainingMinutes / 60);
      const minutes = remainingMinutes % 60;
      setTimeRemaining(`${hours}h ${minutes}m`);
    };

    calculateNextPrayer();
  }, [currentTime]);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="bg-masjid-cream min-h-screen">
      {/* Page Header */}
      <section className="relative bg-masjid-green py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C8A24A' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="label text-masjid-gold mb-4 block">Prayer Schedule</span>
            <h1 className="heading-xl text-white mb-6">ဆွလသ် အချိန်ဇယား</h1>
            <p className="body-lg text-white/80 max-w-2xl mx-auto">
              Daily prayer times for YAENI JARMAE Masjid. Join us in congregation for prayers.
            </p>
          </div>
        </div>
      </section>

      {/* Current Time & Next Prayer */}
      <section className="py-12 -mt-8">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-card p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Current Date & Time */}
                <div className="text-center md:text-left">
                  <p className="text-masjid-gray text-sm mb-1">Current Date</p>
                  <p className="text-masjid-charcoal font-semibold">{formatDate(currentTime)}</p>
                  <p className="text-masjid-green font-heading text-2xl mt-2">{formatTime(currentTime)}</p>
                </div>

                {/* Next Prayer */}
                <div className="text-center border-t md:border-t-0 md:border-x border-masjid-green/10 pt-6 md:pt-0 md:px-6">
                  <p className="text-masjid-gray text-sm mb-1">Next Prayer</p>
                  <p className="text-masjid-gold font-heading text-3xl">{nextPrayer}</p>
                  <p className="text-masjid-charcoal text-sm mt-1">Time remaining: {timeRemaining}</p>
                </div>

                {/* Location */}
                <div className="text-center md:text-right border-t md:border-t-0 border-masjid-green/10 pt-6 md:pt-0">
                  <p className="text-masjid-gray text-sm mb-1">Location</p>
                  <p className="text-masjid-charcoal font-semibold">Yaeni, Yedashe Township</p>
                  <p className="text-masjid-gray text-sm">Myanmar Time (MMT)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer Times Grid */}
      <section className="py-12">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {prayerTimes.map((prayer) => {
                const isNextPrayer = prayer.name === nextPrayer;
                return (
                  <div
                    key={prayer.name}
                    className={`relative rounded-2xl p-6 transition-all hover:shadow-card ${
                      isNextPrayer ? 'bg-masjid-green text-white ring-2 ring-masjid-gold' : 'bg-white'
                    }`}
                  >
                    {isNextPrayer && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-masjid-gold text-masjid-charcoal text-xs font-semibold px-3 py-1 rounded-full">
                        Next Prayer
                      </div>
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        isNextPrayer ? 'bg-white/20' : `${prayer.color} bg-opacity-10`
                      }`}>
                        <prayer.icon className={`w-7 h-7 ${isNextPrayer ? 'text-white' : prayer.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div>
                        <p className={`text-sm ${isNextPrayer ? 'text-white/70' : 'text-masjid-gray'}`}>
                          {prayer.nameMyanmar}
                        </p>
                        <p className={`font-heading text-xl ${isNextPrayer ? 'text-white' : 'text-masjid-charcoal'}`}>
                          {prayer.name}
                        </p>
                        <p className={`font-semibold text-lg ${isNextPrayer ? 'text-masjid-gold' : 'text-masjid-green'}`}>
                          {prayer.time}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Jummah Highlight */}
      <section className="py-12">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-masjid-green to-masjid-green/90 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-masjid-gold/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-masjid-gold/10 rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-masjid-gold/20 flex items-center justify-center flex-shrink-0">
                  <jummahTime.icon className="w-10 h-10 text-masjid-gold" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-masjid-gold font-semibold mb-1">Special Prayer</p>
                  <h3 className="heading-md text-white mb-2">{jummahTime.name} ({jummahTime.nameMyanmar})</h3>
                  <p className="text-white/80 mb-4">
                    Friday congregational prayer with khutbah (sermon). All brothers are encouraged to attend.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-masjid-gold text-masjid-charcoal px-4 py-2 rounded-full font-semibold">
                    <Clock className="w-4 h-4" />
                    {jummahTime.time}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Calendar Note */}
      <section className="py-12 pb-20">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-masjid-gold/20 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-masjid-gold" />
                </div>
                <div>
                  <h3 className="heading-sm text-masjid-green mb-2">Monthly Prayer Times</h3>
                  <p className="text-masjid-gray leading-relaxed mb-4">
                    Prayer times may vary slightly throughout the month based on the position of the sun. 
                    Please check with the masjid for the most accurate times, especially during Ramadan 
                    and special occasions.
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-masjid-green" />
                      <span className="text-masjid-charcoal">Regular Prayer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-masjid-gold" />
                      <span className="text-masjid-charcoal">Next Prayer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrayerTimes;

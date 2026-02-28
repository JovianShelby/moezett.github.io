import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Moon, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/prayer-times', label: 'Prayer Times' },
    { path: '/programs', label: 'Programs' },
    { path: '/donate', label: 'Donate' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-masjid-green text-white">
      {/* Main Footer */}
      <div className="section-padding py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-masjid-gold flex items-center justify-center">
                <Moon className="w-6 h-6 text-masjid-green" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl leading-none text-white">
                  YAENI JARMAE
                </span>
                <span className="text-xs uppercase tracking-wider text-white/70">
                  Masjid
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              A place of peace, prayer, and purpose for the Muslim community in Yaeni and beyond.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-masjid-gold hover:text-masjid-green transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-masjid-gold hover:text-masjid-green transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-masjid-gold hover:text-masjid-green transition-all duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-masjid-gold">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 hover:text-masjid-gold transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-masjid-gold">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-masjid-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/70 text-sm leading-relaxed">
                  YGN-MDY Main Road, Yaeni,<br />
                  Yedashe Township, Taungoo District,<br />
                  Bago Region
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-masjid-gold flex-shrink-0" />
                <span className="text-white/70 text-sm">09962992990</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-masjid-gold flex-shrink-0" />
                <span className="text-white/70 text-sm">yaenijarmae.masjid@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Prayer Times Preview */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6 text-masjid-gold">
              Today's Prayer Times
            </h4>
            <div className="space-y-2">
              {[
                { name: 'Fajr', time: '5:15 AM' },
                { name: 'Dhuhr', time: '12:30 PM' },
                { name: 'Asr', time: '4:00 PM' },
                { name: 'Maghrib', time: '6:45 PM' },
                { name: 'Isha', time: '8:15 PM' },
              ].map((prayer) => (
                <div
                  key={prayer.name}
                  className="flex items-center justify-between py-2 border-b border-white/10"
                >
                  <span className="text-white/70 text-sm">{prayer.name}</span>
                  <span className="text-masjid-gold text-sm font-medium">{prayer.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="section-padding py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              © {currentYear} YAENI JARMAE Masjid. All rights reserved.
            </p>
            <p className="text-white/50 text-sm">
              Designed with <span className="text-masjid-gold">♥</span> for the community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

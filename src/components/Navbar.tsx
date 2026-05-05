import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShieldCheck, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTranslation } from '../context/LanguageContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.investment'), path: '/investment' },
    { name: t('nav.insights'), path: '/insights' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-crypto-blue to-crypto-green rounded-lg flex items-center justify-center group-hover:rotate-6 transition-transform shadow-[0_0_15px_rgba(0,255,163,0.2)]">
            <ShieldCheck className="text-navy-900 w-6 h-6" />
          </div>
          <span className="text-xl font-display font-bold tracking-tight text-white">NEXUS <span className="text-crypto-green">ALPHA</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-crypto-green whitespace-nowrap ${
                location.pathname === link.path ? 'text-crypto-green' : 'text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="flex items-center gap-4 border-l border-white/10 pl-8">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-xs font-bold text-slate-400 hover:text-crypto-green transition-colors"
            >
              <Globe size={14} />
              {language === 'zh' ? 'EN' : '繁中'}
            </button>
            <button className="btn-primary py-2 px-6 text-sm">{t('nav.startNow')}</button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button 
            onClick={toggleLanguage}
            className="text-xs font-bold text-slate-400"
          >
            {language === 'zh' ? 'EN' : '繁中'}
          </button>
          <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? 'text-crypto-green' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">{t('nav.startNow')}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

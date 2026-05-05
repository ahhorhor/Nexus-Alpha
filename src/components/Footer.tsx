import { Link } from 'react-router-dom';
import { ShieldCheck, Facebook, Instagram, Twitter, MessageSquare, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-crypto-green rounded-md flex items-center justify-center">
                <ShieldCheck className="text-navy-950 w-5 h-5" />
              </div>
              <span className="text-lg font-display font-bold tracking-tight text-white">NEXUS <span className="text-crypto-green">ALPHA</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t('footer.desc')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full text-slate-400 hover:text-crypto-green hover:border-crypto-green transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full text-slate-400 hover:text-crypto-green hover:border-crypto-green transition-colors">
                <MessageSquare size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full text-slate-400 hover:text-crypto-green hover:border-crypto-green transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass flex items-center justify-center rounded-full text-slate-400 hover:text-crypto-green hover:border-crypto-green transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.linksTitle')}</h4>
            <ul className="space-y-4">
              <li><Link to="/investment" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('nav.investment')}</Link></li>
              <li><Link to="/insights" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('nav.insights')}</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.legalTitle')}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('footer.legal.privacy')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('footer.legal.terms')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('footer.legal.disclaimer')}</a></li>
              <li><a href="#" className="text-slate-400 hover:text-crypto-green transition-colors text-sm">{t('footer.legal.risk')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.safetyTitle')}</h4>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg opacity-70">
                <div className="w-2 h-2 bg-crypto-green rounded-full shadow-[0_0_8px_rgba(0,255,163,0.5)]"></div>
                <span className="text-[10px] font-bold text-white">2FA 認證</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg opacity-70">
                <div className="w-2 h-2 bg-crypto-green rounded-full shadow-[0_0_8px_rgba(0,255,163,0.5)]"></div>
                <span className="text-[10px] font-bold text-white">冷儲存技術</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 glass rounded-lg opacity-70">
                <div className="w-2 h-2 bg-crypto-green rounded-full shadow-[0_0_8px_rgba(0,255,163,0.5)]"></div>
                <span className="text-[10px] font-bold text-white">資產儲備證明</span>
              </div>
            </div>
            <div className="p-4 glass rounded-xl border-crypto-green/20">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-slate-400 italic font-mono">Security Audited by</span>
                <ArrowUpRight size={14} className="text-crypto-green" />
              </div>
              <p className="text-lg font-bold text-white tracking-widest uppercase">CertiK</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © 2024 {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <span className="font-mono">Server Time: {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

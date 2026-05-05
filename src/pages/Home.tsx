import { motion } from 'motion/react';
import { ChevronRight, Shield, Zap, TrendingUp, Cpu, BarChart3, Globe as GlobeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import PriceTicker from '../components/PriceTicker';
import { useTranslation } from '../context/LanguageContext';

export default function Home() {
  const { t } = useTranslation();

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-crypto-green/10 blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-crypto-blue/10 blur-[120px] -z-10"></div>
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-20 -z-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full mb-6 border-crypto-green/30">
              <span className="flex h-2 w-2 rounded-full bg-crypto-green animate-pulse"></span>
              <span className="text-[10px] font-bold tracking-widest text-crypto-green uppercase">{t('home.heroTag')}</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-tight mb-8">
              {t('home.heroTitle')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">{t('home.heroSubTitle')}</span>
            </h1>
            <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
              {t('home.heroDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/investment" className="btn-primary flex items-center justify-center gap-2">
                {t('common.explorePlans')} <ChevronRight size={18} />
              </Link>
              <Link to="/about" className="btn-outline flex items-center justify-center gap-2">
                {t('common.learnMore')}
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">$250M+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{t('home.statsAum')}</div>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <div className="text-2xl font-bold text-white">45,000+</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{t('home.statsUsers')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block relative"
          >
            <div className="relative z-10 p-4 animate-float">
              <div className="glass-card aspect-square max-w-[450px] mx-auto p-12 flex flex-col justify-center items-center text-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-crypto-green to-crypto-blue rounded-3xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(0,255,163,0.4)]">
                   <Shield className="text-navy-950 w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{t('home.certikTitle')}</h3>
                <p className="text-slate-400">{t('home.certikDesc')}</p>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-white/5 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      <PriceTicker />

      {/* Core Values */}
      <section className="py-32 bg-navy-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t('home.whyTitle')}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t('home.whyDesc')}
            </p>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="glass-card">
              <div className="w-12 h-12 bg-crypto-green/20 rounded-lg flex items-center justify-center mb-6 text-crypto-green">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('home.value1Title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('home.value1Desc')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card">
              <div className="w-12 h-12 bg-crypto-blue/20 rounded-lg flex items-center justify-center mb-6 text-crypto-blue">
                <Cpu size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('home.value2Title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('home.value2Desc')}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="glass-card">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-6 text-purple-400">
                <GlobeIcon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">{t('home.value3Title')}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('home.value3Desc')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats/Features */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1 relative group">
             <div className="absolute inset-0 bg-crypto-green/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="glass p-8 rounded-3xl relative overflow-hidden">
                <div className="flex justify-between items-center mb-8">
                   <h4 className="text-lg font-bold">ALPHA ENGINE MONITORING</h4>
                   <Zap className="text-crypto-green animate-pulse" size={20} />
                </div>
                <div className="space-y-6">
                   <div className="h-32 bg-navy-800/50 rounded-xl flex items-end p-4 gap-2">
                       {[40, 70, 45, 90, 65, 80, 50, 95, 75].map((h, i) => (
                         <motion.div 
                            key={i} 
                            initial={{ height: 0 }}
                            whileInView={{ height: `${h}%` }}
                            className="bg-crypto-green/60 flex-1 rounded-t-sm" 
                         />
                       ))}
                   </div>
                   <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 glass rounded-xl">
                         <div className="text-xs text-slate-500 mb-1">VAR</div>
                         <div className="text-lg font-bold">1.24%</div>
                      </div>
                      <div className="p-4 glass rounded-xl">
                         <div className="text-xs text-slate-500 mb-1">Sharpe</div>
                         <div className="text-lg font-bold">3.82</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-8">
              {t('home.statsSectionTitle')}<br />
              <span className="text-gradient">{t('home.statsSectionSubTitle')}</span>
            </h2>
            <div className="space-y-6">
              {[
                { icon: <BarChart3 className="text-crypto-green" />, title: t('home.stat1Title'), desc: t('home.stat1Desc') },
                { icon: <TrendingUp className="text-crypto-blue" />, title: t('home.stat2Title'), desc: t('home.stat2Desc') },
                { icon: <Shield className="text-purple-400" />, title: t('home.stat3Title'), desc: t('home.stat3Desc') }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/insights" className="inline-block mt-10 text-crypto-green font-bold border-b border-crypto-green pb-1 hover:text-white hover:border-white transition-all">
              {t('common.readMore')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

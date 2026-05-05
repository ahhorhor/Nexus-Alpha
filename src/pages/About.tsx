import { motion } from 'motion/react';
import { ShieldCheck, Users, Target, Award, CheckCircle } from 'lucide-react';
import { useTranslation } from '../context/LanguageContext';

export default function About() {
  const { t, language } = useTranslation();
  const team = [
    { name: 'Michael Zhang', role: 'CEO & Founder', background: language === 'zh' ? '前高盛量化分析師，12 年華爾街經驗' : 'Former Goldman Sachs Quant Analyst, 12 years on Wall Street' },
    { name: 'Emma Watson', role: 'Chief Risk Officer', background: language === 'zh' ? '牛津大學經濟學博士，曾任職於歐盟央行' : 'PhD in Economics from Oxford, formerly at the ECB' },
    { name: 'Dr. Keven Wu', role: 'Head of AI', background: language === 'zh' ? '斯坦福大學 AI 實驗室博士後，專研神經網絡' : 'Stanford AI Lab Postdoc, specialized in neural networks' }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              {t('about.title')}<br />
              <span className="text-gradient">{t('about.subTitle')}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {t('about.desc1')}
            </p>
            <p className="text-slate-400 leading-relaxed">
              {t('about.desc2')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-40 relative group overflow-hidden">
               <div className="absolute inset-0 bg-crypto-green/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-crypto-green mb-2">5+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t('about.stat1')}</div>
            </div>
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-40 relative group overflow-hidden">
               <div className="absolute inset-0 bg-crypto-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-crypto-blue mb-2">120+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t('about.stat2')}</div>
            </div>
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-40 relative group overflow-hidden">
               <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t('about.stat3')}</div>
            </div>
            <div className="glass-card p-8 flex flex-col justify-center items-center text-center aspect-square md:aspect-auto md:h-40 relative group overflow-hidden">
               <div className="absolute inset-0 bg-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
              <div className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t('about.stat4')}</div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-32">
          <div className="glass-card p-10 bg-navy-900 border-none">
            <div className="w-14 h-14 bg-crypto-green/20 rounded-full flex items-center justify-center mb-8 text-crypto-green">
              <Target size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.missionTitle')}</h3>
            <p className="text-slate-400 leading-relaxed">
              {t('about.missionDesc')}
            </p>
          </div>
          <div className="glass-card p-10 bg-navy-900 border-none">
            <div className="w-14 h-14 bg-crypto-blue/20 rounded-full flex items-center justify-center mb-8 text-crypto-blue">
              <ShieldCheck size={28} />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t('about.visionTitle')}</h3>
            <p className="text-slate-400 leading-relaxed">
              {t('about.visionDesc')}
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">{t('about.teamTitle')}</h2>
            <p className="text-slate-400">{t('about.teamSubtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card text-center group"
              >
                <div className="w-24 h-24 bg-navy-800 rounded-full mx-auto mb-8 overflow-hidden border-2 border-transparent group-hover:border-crypto-green transition-all p-1">
                   <div className="w-full h-full bg-navy-700 rounded-full flex items-center justify-center">
                      <Users className="text-navy-900 w-10 h-10" />
                   </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                <div className="text-crypto-green text-sm font-bold mb-4 uppercase tracking-wider">{member.role}</div>
                <p className="text-slate-400 text-sm">{member.background}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security / Certification */}
        <div className="glass p-12 rounded-3xl border-crypto-green/20 relative overflow-hidden bg-gradient-to-r from-navy-900 to-navy-950">
           <Award className="absolute top-1/2 right-12 -translate-y-1/2 w-64 h-64 text-crypto-green opacity-[0.03] -rotate-12" />
           <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">{t('about.auditTitle')}</h2>
                <div className="space-y-4">
                   <div className="flex items-center gap-4 text-slate-300">
                      <CheckCircle className="text-crypto-green" size={20} />
                      {t('about.audit1')}
                   </div>
                   <div className="flex items-center gap-4 text-slate-300">
                      <CheckCircle className="text-crypto-green" size={20} />
                      {t('about.audit2')}
                   </div>
                   <div className="flex items-center gap-4 text-slate-300">
                      <CheckCircle className="text-crypto-green" size={20} />
                      {t('about.audit3')}
                   </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                 <div className="p-6 glass rounded-2xl flex flex-col items-center">
                    <span className="text-3xl font-bold text-white mb-2">ISO</span>
                    <span className="text-[10px] text-slate-500 uppercase font-bold">27001 Certified</span>
                 </div>
                 <div className="p-6 glass rounded-2xl flex flex-col items-center">
                    <ShieldCheck className="text-crypto-green mb-2" size={32} />
                    <span className="text-[10px] text-slate-500 uppercase font-bold">GDPR Compliant</span>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}

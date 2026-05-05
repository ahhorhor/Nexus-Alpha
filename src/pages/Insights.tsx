import { motion } from 'motion/react';
import { Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';
import { INSIGHTS } from '../constants';
import { useTranslation } from '../context/LanguageContext';

export default function Insights() {
  const { t } = useTranslation();

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('insights.title')}<span className="text-gradient">{t('insights.subTitle')}</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('insights.desc')}
          </p>
        </div>

        {/* Featured Article */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-20 p-0 flex flex-col md:flex-row overflow-hidden group cursor-pointer"
        >
          <div className="md:w-2/5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-crypto-green/20 to-transparent"></div>
            <img 
              src="https://picsum.photos/seed/crypto-insight/800/600" 
              alt="Featured Insight"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-crypto-green text-navy-950 text-[10px] font-bold rounded uppercase tracking-widest">{t('insights.featuredTag')}</span>
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
            <div className="flex gap-4 mb-6 text-xs text-slate-500">
               <span className="flex items-center gap-1"><Calendar size={14} /> 2024-05-04</span>
               <span className="flex items-center gap-1"><Tag size={14} className="text-crypto-green" /> {t('insights.insight1.category')}</span>
            </div>
            <h2 className="text-3xl font-bold mb-6 group-hover:text-crypto-green transition-colors leading-tight">
              {t('insights.featuredTitle')}
            </h2>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t('insights.featuredDesc')}
            </p>
            <div className="flex justify-between items-center mt-auto">
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-800 rounded-full"></div>
                  <div>
                    <div className="text-sm font-bold text-white">David Miller</div>
                    <div className="text-[10px] text-slate-500 uppercase">Senior Research Analyst</div>
                  </div>
               </div>
               <button className="flex items-center gap-2 text-crypto-green font-bold text-sm group/btn">
                  {t('common.readMore')} <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </motion.div>

        {/* Article Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {INSIGHTS.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card flex flex-col group cursor-pointer"
            >
              <div className="mb-6 flex justify-between items-center">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                    article.id === '2' ? 'border-crypto-blue text-crypto-blue' : 
                    article.id === '3' ? 'border-orange-400 text-orange-400' : 'border-purple-400 text-purple-400'
                }`}>
                  {t(`insights.insight${article.id}.category`)}
                </span>
                <span className="text-[10px] text-slate-500 flex items-center gap-1">
                   <Clock size={12} /> {article.readTime}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-crypto-green transition-colors leading-tight">
                {t(`insights.insight${article.id}.title`)}
              </h3>
              <p className="text-sm text-slate-400 mb-6 flex-1 line-clamp-3 leading-relaxed">
                {t(`insights.insight${article.id}.excerpt`)}
              </p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-xs text-slate-500">
                 <div className="flex items-center gap-2">
                    <User size={14} className="text-crypto-green" /> {article.author}
                 </div>
                 <div className="flex items-center gap-1">
                    <Calendar size={14} /> {article.date}
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-32 p-12 glass rounded-3xl text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-crypto-green to-transparent"></div>
          <h2 className="text-3xl font-bold mb-4">{t('insights.newsletterTitle')}</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            {t('insights.newsletterDesc')}
          </p>
          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
             <input 
                type="email" 
                placeholder={t('insights.newsletterPlaceholder')} 
                className="flex-1 bg-navy-950 border border-white/10 rounded-xl px-6 py-3 focus:outline-none focus:border-crypto-green transition-colors"
             />
             <button className="btn-primary">{t('common.subscribe')}</button>
          </div>
          <p className="mt-4 text-[10px] text-slate-600 uppercase tracking-widest">{t('insights.newsletterNote')}</p>
        </div>
      </div>
    </div>
  );
}

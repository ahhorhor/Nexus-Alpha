import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send, Plus, Minus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useTranslation();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faqs = [
    { q: t('contact.faq1.q'), a: t('contact.faq1.a') },
    { q: t('contact.faq2.q'), a: t('contact.faq2.a') },
    { q: t('contact.faq3.q'), a: t('contact.faq3.a') },
    { q: t('contact.faq4.q'), a: t('contact.faq4.a') }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-start mb-32">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8">
              {t('contact.title')}<span className="text-gradient">{t('contact.subTitle')}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-12">
              {t('contact.desc')}
            </p>

            <div className="space-y-8">
               <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-crypto-green shrink-0">
                     <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('contact.emailTitle')}</h4>
                    <p className="text-slate-400">support@nexusalpha.io</p>
                    <p className="text-slate-500 text-xs mt-1">{t('contact.emailResponse')}</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-crypto-blue shrink-0">
                     <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('contact.telegramTitle')}</h4>
                    <p className="text-slate-400">@NexusAlphaOfficial</p>
                    <p className="text-slate-500 text-xs mt-1">{t('contact.telegramDesc')}</p>
                  </div>
               </div>
               <div className="flex gap-6">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-purple-400 shrink-0">
                     <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{t('contact.addressTitle')}</h4>
                    <p className="text-slate-400">18 Robinson Road, Singapore 048547</p>
                  </div>
               </div>
            </div>

            <div className="mt-16 p-8 glass-card border-crypto-green/20">
               <h4 className="font-bold mb-4 flex items-center gap-2">
                 <Phone size={18} className="text-crypto-green" /> {t('contact.vipTitle')}
               </h4>
               <p className="text-slate-400 text-sm mb-4">{t('contact.vipDesc')}</p>
               <button className="text-crypto-green text-sm font-bold flex items-center gap-2">
                 預約諮詢 <ArrowRight size={14} />
               </button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <Send size={120} className="-rotate-12" />
            </div>
            
            <h3 className="text-2xl font-bold mb-8">{t('contact.formTitle')}</h3>
            <form className="space-y-6">
               <div className="grid grid-cols-2 gap-6">
                  <div>
                     <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">{t('contact.formName')}</label>
                     <input type="text" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-crypto-green transition-colors" />
                  </div>
                  <div>
                     <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">{t('contact.formPhone')}</label>
                     <input type="tel" className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-crypto-green transition-colors" />
                  </div>
               </div>
               <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">{t('contact.formBudget')}</label>
                  <select className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-crypto-green transition-colors appearance-none text-slate-300">
                     <option>1,000 - 10,000</option>
                     <option>10,000 - 50,000</option>
                     <option>50,000 - 200,000</option>
                     <option>200,000 +</option>
                  </select>
               </div>
               <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">{t('contact.formPlans')}</label>
                  <div className="flex flex-wrap gap-3 mt-2">
                     {['穩健型', '量化型', '私募型'].map(tag => (
                        <button key={tag} type="button" className="px-4 py-1.5 glass rounded-full text-xs hover:border-crypto-green transition-colors">
                           {tag}
                        </button>
                     ))}
                  </div>
               </div>
               <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-widest mb-2 font-bold">{t('contact.formMessage')}</label>
                  <textarea rows={4} className="w-full bg-navy-950/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-crypto-green transition-colors resize-none"></textarea>
               </div>
               <button className="btn-primary w-full py-4 flex items-center justify-center gap-2">
                 {t('common.submit')} <Send size={18} />
               </button>
            </form>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">{t('contact.faqTitle')}</h2>
              <p className="text-slate-400 text-sm italic">{t('contact.faqSubtitle')}</p>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="glass rounded-2xl overflow-hidden">
                   <button 
                     onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                     className="w-full p-6 text-left flex justify-between items-center bg-white/5 transition-colors hover:bg-white/[0.08]"
                   >
                      <span className="font-bold text-white pr-8">{faq.q}</span>
                      {activeFaq === index ? <Minus size={20} className="text-crypto-green" /> : <Plus size={20} className="text-slate-500" />}
                   </button>
                   <motion.div 
                      initial={false}
                      animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                      className="overflow-hidden"
                   >
                      <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 bg-navy-900/30">
                         {faq.a}
                      </div>
                   </motion.div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}

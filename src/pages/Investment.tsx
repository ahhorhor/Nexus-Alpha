import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, AlertCircle, TrendingUp, Calculator, ArrowRight } from 'lucide-react';
import { INVESTMENT_PLANS } from '../constants';
import { useTranslation } from '../context/LanguageContext';

export default function Investment() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState<number>(5000);
  const [selectedPlan, setSelectedPlan] = useState(INVESTMENT_PLANS[0]);

  const calculateReturn = () => {
    const rateMatch = selectedPlan.expectedReturn.match(/(\d+)%/);
    const rate = rateMatch ? parseInt(rateMatch[1]) / 100 : 0.1;
    return (amount * rate).toLocaleString();
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            {t('investment.title')}<span className="text-gradient">{t('investment.subTitle')}</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {t('investment.desc')}
          </p>
        </div>

        {/* Investment Calculator */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card mb-20 bg-gradient-to-br from-navy-900 to-navy-800"
        >
          <div className="flex items-center gap-2 mb-8">
            <Calculator className="text-crypto-green" size={24} />
            <h2 className="text-2xl font-bold">{t('investment.calcTitle')}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="col-span-1 md:col-span-2">
              <label className="block text-sm text-slate-500 mb-4 uppercase tracking-wider">{t('investment.calcInput')}</label>
              <input 
                type="number" 
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-navy-950 border border-white/10 rounded-xl px-6 py-4 text-3xl font-bold text-white focus:outline-none focus:border-crypto-green transition-colors"
                placeholder="0.00"
              />
              <div className="mt-8">
                <label className="block text-sm text-slate-500 mb-4 uppercase tracking-wider">{t('investment.calcSelect')}</label>
                <div className="flex flex-wrap gap-4">
                  {INVESTMENT_PLANS.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan)}
                      className={`px-6 py-3 rounded-xl border transition-all text-sm font-bold ${
                        selectedPlan.id === plan.id 
                          ? 'border-crypto-green bg-crypto-green/10 text-crypto-green' 
                          : 'border-white/10 text-slate-400 hover:border-white/30'
                      }`}
                    >
                      {t(`investment.plans.${plan.id}.name`)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-navy-950/30 p-8 rounded-2xl border border-white/5 flex flex-col justify-center glass">
              <span className="text-[10px] text-slate-500 mb-2 uppercase tracking-widest font-semibold flex justify-between">
                <span>{t('investment.calcEst')}</span>
                <span className="text-crypto-green/50">ESTIMATED ROI</span>
              </span>
              <div className="text-5xl font-mono font-bold neon-text mb-6">
                +${calculateReturn()}
              </div>
              <p className="text-[10px] text-slate-500 mb-8 italic leading-relaxed">{t('investment.calcNote')}</p>
              <button className="btn-primary w-full group">
                {t('investment.bidNow')}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {INVESTMENT_PLANS.map((plan, index) => (
            <motion.div 
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card flex flex-col relative overflow-hidden group ${
                plan.id === 'quant' ? 'border-crypto-green/30 scale-105 z-10' : ''
              }`}
            >
              {plan.id === 'quant' && (
                <div className="absolute top-0 right-0 bg-crypto-green text-navy-950 text-[10px] font-bold px-4 py-1 rounded-bl-xl tracking-tighter">
                  {t('investment.popular')}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 group-hover:text-crypto-green transition-colors">{t(`investment.plans.${plan.id}.name`)}</h3>
                <p className="text-slate-400 text-sm h-12 leading-relaxed">{t(`investment.plans.${plan.id}.desc`)}</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4 mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-slate-500 uppercase">{t('common.expectedReturn')}</span>
                  <span className="text-lg font-bold text-white whitespace-nowrap">{plan.expectedReturn}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-500 uppercase">{t('common.riskLabel')}</span>
                  <div className={`flex items-center gap-1.5 font-bold ${
                    plan.risk === '低' ? 'text-crypto-green' : plan.risk === '中' ? 'text-orange-400' : 'text-red-400'
                  }`}>
                    <AlertCircle size={14} />
                    {plan.risk === '低' ? t('common.riskLow') : plan.risk === '中' ? t('common.riskMedium') : t('common.riskHigh')}
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                {plan.featureKeys.map((fKey, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <CheckCircle2 size={16} className="text-crypto-green shrink-0" />
                    {t(`investment.plans.${plan.id}.f${i+1}`)}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/5">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <span className="text-[10px] text-slate-500 uppercase block mb-1">{t('common.minInvestment')}</span>
                    <span className="text-xl font-bold">{plan.minInvestment}</span>
                  </div>
                  <TrendingUp className="text-crypto-green opacity-20" size={40} />
                </div>
                <button className={`w-full py-3 rounded-xl font-bold transition-all ${
                  plan.id === 'quant' ? 'btn-primary' : 'bg-navy-800 text-white hover:bg-navy-700'
                }`}>
                  {t('investment.choosePlan')}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

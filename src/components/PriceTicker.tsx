import { MOCK_PRICES } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function PriceTicker() {
  return (
    <div className="bg-navy-900/40 backdrop-blur-sm border-y border-white/5 py-4 overflow-hidden whitespace-nowrap">
      <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
        {[...MOCK_PRICES, ...MOCK_PRICES, ...MOCK_PRICES].map((coin, index) => (
          <div key={index} className="inline-flex items-center gap-4 mx-12">
            <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">{coin.symbol}</span>
            <span className="font-mono text-sm text-white font-semibold">${coin.price}</span>
            <span className={`font-mono text-[10px] ${coin.change >= 0 ? 'text-crypto-green' : 'text-red-400'}`}>
              {coin.change >= 0 ? '+' : ''}{coin.change}%
            </span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

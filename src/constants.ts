import { InvestmentPlan, InsightArticle, CoinPrice } from './types';

export const INVESTMENT_PLANS: InvestmentPlan[] = [
  {
    id: 'steady',
    nameKey: 'steady.name',
    descKey: 'steady.desc',
    risk: '低',
    expectedReturn: '8% - 15% / 年',
    minInvestment: '1,000 USDT',
    featureKeys: ['steady.f1', 'steady.f2', 'steady.f3'],
  },
  {
    id: 'quant',
    nameKey: 'quant.name',
    descKey: 'quant.desc',
    risk: '中',
    expectedReturn: '25% - 40% / 年',
    minInvestment: '10,000 USDT',
    featureKeys: ['quant.f1', 'quant.f2', 'quant.f3'],
  },
  {
    id: 'private',
    nameKey: 'private.name',
    descKey: 'private.desc',
    risk: '高',
    expectedReturn: '100% - 500%+ / cycle',
    minInvestment: '50,000 USDT',
    featureKeys: ['private.f1', 'private.f2', 'private.f3'],
  },
];

export const INSIGHTS: InsightArticle[] = [
  {
    id: '1',
    titleKey: 'insight1.title',
    excerptKey: 'insight1.excerpt',
    categoryKey: 'insight1.category',
    date: '2024-05-01',
    author: 'Alex Chen',
    readTime: '8 min',
  },
  {
    id: '2',
    titleKey: 'insight2.title',
    excerptKey: 'insight2.excerpt',
    categoryKey: 'insight2.category',
    date: '2024-04-28',
    author: 'Sarah Wang',
    readTime: '5 min',
  },
  {
    id: '3',
    titleKey: 'insight3.title',
    excerptKey: 'insight3.excerpt',
    categoryKey: 'insight3.category',
    date: '2024-04-20',
    author: 'Tech Support',
    readTime: '4 min',
  },
];

export const MOCK_PRICES: CoinPrice[] = [
  { symbol: 'BTC', name: 'Bitcoin', price: '64,235.12', change: 2.45 },
  { symbol: 'ETH', name: 'Ethereum', price: '3,124.55', change: -1.12 },
  { symbol: 'SOL', name: 'Solana', price: '145.22', change: 5.67 },
  { symbol: 'BNB', name: 'BNB', price: '588.40', change: 0.32 },
  { symbol: 'AVAX', name: 'Avalanche', price: '34.15', change: -2.44 },
];

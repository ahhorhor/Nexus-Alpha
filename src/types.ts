/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InvestmentPlan {
  id: string;
  nameKey: string;
  descKey: string;
  risk: '低' | '中' | '高';
  expectedReturn: string;
  minInvestment: string;
  featureKeys: string[];
}

export interface InsightArticle {
  id: string;
  titleKey: string;
  excerptKey: string;
  categoryKey: string;
  date: string;
  author: string;
  readTime: string;
}

export interface CoinPrice {
  symbol: string;
  name: string;
  price: string;
  change: number;
}

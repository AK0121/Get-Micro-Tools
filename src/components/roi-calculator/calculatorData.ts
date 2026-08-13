export interface FAQItem {
  question: string;
  answer: string;
}

export interface ROIBenchmarkTier {
  category: string;
  typicalRoi: string;
  timeframe: string;
  notes: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is Return on Investment (ROI)?",
    answer: "Return on Investment (ROI) is a core financial metric used to measure the profitability or efficiency of an investment relative to its initial cost. Expressed as a percentage, ROI helps investors, executives, and marketers determine how effectively capital or budget generates net financial returns."
  },
  {
    question: "What is the ROI formula and how do I calculate ROI?",
    answer: "The standard ROI formula is: ROI (%) = [(Final Return - Initial Investment) / Initial Investment] × 100. To perform an ROI calculation, subtract your initial cost from the final return to get your net profit, divide by the initial investment, and multiply by 100."
  },
  {
    question: "How do I calculate Marketing ROI?",
    answer: "Marketing ROI (mROI) factors in gross profit margins and product costs (COGS) to calculate true net campaign profitability: Marketing ROI (%) = [((Revenue × Gross Margin %) - Marketing Spend) / Marketing Spend] × 100. Using a dedicated Marketing ROI calculator ensures you account for product costs rather than overestimating returns based solely on gross sales."
  },
  {
    question: "What is the difference between ROI and ROAS?",
    answer: "ROI (Return on Investment) measures net profit after deducting all expenses, including ad spend, product cost of goods sold (COGS), shipping, and overhead. ROAS (Return on Ad Spend) measures gross revenue earned strictly per dollar spent on advertising, without factoring in product or operational costs."
  },
  {
    question: "When should I use ROI vs. ROAS?",
    answer: "Use ROAS for fast, campaign-level ad optimization (such as bidding adjustments or testing ad sets on Meta and Google Ads). Use ROI for business-level financial decisions, evaluating total channel profitability, and allocating annual marketing budgets."
  },
  {
    question: "What is Annualized ROI (CAGR) and why does it matter?",
    answer: "Annualized ROI (Compound Annual Growth Rate or CAGR) calculates the average yearly return rate of an investment across its holding period: Annualized ROI = [(Final Return / Initial Cost)^(1 / Years) - 1] × 100. It allows you to fairly compare multi-year investments with different durations."
  },
  {
    question: "What is a good ROI percentage for marketing and investments?",
    answer: "A 'good' ROI varies by asset class. Historically, stock index funds yield ~7%–10% annually, real estate averages 8%–12%, and successful digital marketing campaigns often target 30% to 150%+ net ROI depending on profit margins and ad scale."
  },
  {
    question: "Can ROI be negative?",
    answer: "Yes. If your final return is less than your initial investment (or if your campaign gross profit is less than your ad spend), your net profit is negative, resulting in a negative ROI percentage representing a financial loss."
  }
];

export const benchmarkTiers: ROIBenchmarkTier[] = [
  { category: 'S&P 500 Index Funds', typicalRoi: '7% - 10% / yr', timeframe: 'Long term (5+ yrs)', notes: 'Historical stock market average adjusted for inflation.' },
  { category: 'Real Estate Investments', typicalRoi: '8% - 12% / yr', timeframe: 'Medium to long term', notes: 'Includes rental cash flow & property appreciation.' },
  { category: 'Digital Marketing Campaigns', typicalRoi: '30% - 150%+', timeframe: 'Short term (1-6 mos)', notes: 'Highly dependent on COGS, profit margins, and ad spend.' },
  { category: 'E-Commerce Product Launch', typicalRoi: '20% - 80%', timeframe: 'Quarterly', notes: 'Factors in advertising, shipping, inventory, and refunds.' },
  { category: 'Venture Capital & Startups', typicalRoi: '200% - 1000%+', timeframe: '5 - 10 yrs', notes: 'High-risk asset class targeting asymmetric upside.' }
];

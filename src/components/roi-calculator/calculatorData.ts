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
    answer: "Return on Investment (ROI) is a fundamental financial performance metric used to measure the profitability and efficiency of an investment relative to its initial capital cost. Expressed as a percentage, ROI helps business owners, investors, and marketers evaluate whether an expenditure generated a positive net gain or a financial loss."
  },
  {
    question: "What is the ROI formula and how do I calculate ROI?",
    answer: "The universal ROI formula is: ROI (%) = [(Final Return - Initial Investment) / Initial Investment] × 100. To calculate ROI: subtract your initial investment cost from the final return proceeds to determine your net profit, divide that net profit by your initial investment cost, and multiply by 100."
  },
  {
    question: "How do I calculate Marketing ROI (mROI)?",
    answer: "Marketing ROI (mROI) factors in gross profit margins to isolate true net profitability after Cost of Goods Sold (COGS): Marketing ROI (%) = [((Gross Revenue × Gross Profit Margin %) - Marketing Spend) / Marketing Spend] × 100. Using our Marketing ROI mode ensures you do not overestimate campaign profits by confusing top-line revenue with bottom-line earnings."
  },
  {
    question: "What is the difference between ROI and ROAS?",
    answer: "ROI (Return on Investment) measures net bottom-line profit after subtracting all associated costs, including ad spend, inventory COGS, fulfillment, merchant fees, and overhead. ROAS (Return on Ad Spend) measures gross top-line revenue generated strictly per dollar spent on advertising (ROAS = Revenue / Ad Spend), ignoring product manufacturing and operating expenses."
  },
  {
    question: "When should I use ROI vs. ROAS?",
    answer: "Use ROAS for tactical, day-to-day media buying optimization, such as comparing ad creatives and bid strategies on Google, Meta, or TikTok. Use ROI for executive-level business decisions, evaluating cross-channel marketing profitability, and allocating quarterly or annual business capital."
  },
  {
    question: "What is Annualized ROI (CAGR) and why is it important?",
    answer: "Annualized ROI (Compound Annual Growth Rate or CAGR) normalizes multi-year investment returns into an equivalent annual rate: Annualized ROI = [(Final Return / Initial Cost)^(1 / Years) - 1] × 100. It prevents misleading comparisons between short-term gains (e.g. 20% in 3 months) and long-term holds (e.g. 20% over 5 years)."
  },
  {
    question: "What is considered a good ROI for business and marketing?",
    answer: "A 'good' ROI depends heavily on the asset class and timeframe. In public markets, the S&P 500 historically delivers ~7%–10% annualized ROI. Real estate investments typically target 8%–12% annual ROI. In digital marketing and e-commerce, campaigns generally target 30% to 150%+ net ROI after deducting product costs."
  },
  {
    question: "Can ROI be negative or exceed 100%?",
    answer: "Yes. An ROI below 0% indicates a financial loss where the returns were lower than the initial investment. An ROI of 0% is break-even. An ROI exceeding 100% means the net profit earned is greater than the original investment amount (e.g. 200% ROI means you doubled your money in net profit)."
  },
  {
    question: "How does Cost of Goods Sold (COGS) affect ROI?",
    answer: "Cost of Goods Sold (COGS) directly lowers gross profit margins. If a business generates $100,000 in sales with $60,000 in COGS, the gross profit is $40,000 (40% margin). If ad spend was $20,000, net profit is $20,000, yielding a 100% marketing ROI instead of the misleading 400% ROI that would appear if COGS were ignored."
  },
  {
    question: "What is the Benefit-Cost Ratio (BCR)?",
    answer: "Benefit-Cost Ratio (BCR) is the ratio of the benefits (total return) to the costs (initial investment): BCR = Final Return / Initial Investment. A BCR greater than 1.0 indicates a profitable venture, while a BCR below 1.0 signifies a loss."
  },
  {
    question: "How do I calculate break-even sales for an advertising campaign?",
    answer: "Break-even sales revenue is calculated as: Break-Even Revenue = Ad Spend / Gross Profit Margin %. For example, with an ad budget of $5,000 and a 40% profit margin, you must generate at least $12,500 ($5,000 / 0.40) in gross sales to achieve a 0% break-even ROI."
  },
  {
    question: "Is this ROI calculator free to use, and is my financial data private?",
    answer: "Yes. Our ROI Calculator is 100% free with no sign-ups or downloads required. All calculations execute locally inside your web browser via client-side JavaScript, ensuring that none of your proprietary financial numbers or campaign metrics are transmitted or stored on any server."
  }
];

export const benchmarkTiers: ROIBenchmarkTier[] = [
  { category: 'S&P 500 Index Funds', typicalRoi: '7% - 10% / yr', timeframe: 'Long term (5+ yrs)', notes: 'Historical stock market benchmark, adjusted for inflation.' },
  { category: 'Commercial & Residential Real Estate', typicalRoi: '8% - 12% / yr', timeframe: 'Medium to long term (3-10 yrs)', notes: 'Combines net rental yield, tax advantages, and property appreciation.' },
  { category: 'Paid Digital Marketing (Meta, Google, TikTok)', typicalRoi: '30% - 150%+', timeframe: 'Short term (1-6 mos)', notes: 'Net margin-adjusted ROI factoring in ad spend and COGS.' },
  { category: 'E-Commerce Product Launch', typicalRoi: '20% - 80%', timeframe: 'Quarterly (3 mos)', notes: 'Accounts for inventory procurement, shipping, merchant fees, and ads.' },
  { category: 'B2B SaaS Customer Acquisition (LTV/CAC)', typicalRoi: '100% - 300%+', timeframe: '12 - 24 mos', notes: 'Measured over customer lifetime value relative to acquisition cost.' },
  { category: 'Venture Capital & Early-Stage Startups', typicalRoi: '200% - 1000%+', timeframe: '5 - 10 yrs', notes: 'High-risk asset class targeting asymmetric outlier returns.' }
];

/**
 * Pure, deterministic ROI Calculation Functions
 * Free of side-effects or DOM dependencies.
 */

export interface ROICalculationInput {
  initialInvestment: number;
  finalReturn: number;
  durationValue?: number;
  durationUnit?: 'years' | 'months';
  profitMarginPct?: number; // Used for marketing mode
  mode?: 'standard' | 'marketing';
}

export interface ROICalculationResult {
  netGain: number;
  roiPct: number;
  annualizedRoiPct: number | null;
  benefitCostRatio: number;
  grossProfit?: number;
  breakEvenRevenue?: number;
  isProfitable: boolean;
  isLoss: boolean;
  isBreakEven: boolean;
  hasDuration: boolean;
  durationYears: number | null;
}

export interface ROIBenchmarkRating {
  status: 'awaiting' | 'loss' | 'breakeven' | 'modest' | 'strong' | 'exceptional';
  label: string;
  badgeClass: string;
  description: string;
}

export interface ROIRecommendation {
  type: 'info' | 'success' | 'warning' | 'tip';
  title: string;
  text: string;
}

/**
 * Parses and sanitizes numeric inputs safely.
 */
export function parseNumberInput(val: unknown, fallback = 0): number {
  if (val === null || val === undefined || val === '') return fallback;
  const num = Number(val);
  return isNaN(num) ? fallback : num;
}

/**
 * Calculates net gain (Final Return - Initial Investment)
 */
export function calculateNetGain(initialInvestment: number, finalReturn: number): number {
  return finalReturn - initialInvestment;
}

/**
 * Calculates standard ROI percentage: ((Final Return - Initial Investment) / Initial Investment) * 100
 */
export function calculateROI(initialInvestment: number, finalReturn: number): number {
  if (initialInvestment <= 0) return 0;
  const netGain = calculateNetGain(initialInvestment, finalReturn);
  return (netGain / initialInvestment) * 100;
}

/**
 * Calculates Annualized ROI (Compound Annual Growth Rate logic)
 * Annualized ROI = ((Final Return / Initial Investment) ^ (1 / durationYears) - 1) * 100
 */
export function calculateAnnualizedROI(
  initialInvestment: number,
  finalReturn: number,
  durationValue?: number,
  durationUnit: 'years' | 'months' = 'years'
): { annualizedRoi: number | null; durationYears: number | null } {
  const duration = parseNumberInput(durationValue, 0);
  if (duration <= 0 || initialInvestment <= 0) {
    return { annualizedRoi: null, durationYears: null };
  }

  const durationYears = durationUnit === 'months' ? duration / 12 : duration;
  if (durationYears <= 0) {
    return { annualizedRoi: null, durationYears: null };
  }

  if (finalReturn <= 0) {
    // Total loss or non-positive final return over duration
    return { annualizedRoi: -100, durationYears };
  }

  const ratio = finalReturn / initialInvestment;
  const annualized = (Math.pow(ratio, 1 / durationYears) - 1) * 100;

  return {
    annualizedRoi: Number.isFinite(annualized) ? annualized : null,
    durationYears
  };
}

/**
 * Calculates Benefit-Cost Ratio (Final Return / Initial Investment)
 */
export function calculateBenefitCostRatio(initialInvestment: number, finalReturn: number): number {
  if (initialInvestment <= 0) return 0;
  return finalReturn / initialInvestment;
}

/**
 * Comprehensive ROI calculation suite supporting both Standard and Marketing modes.
 */
export function calculateROIMetrics(input: ROICalculationInput): ROICalculationResult {
  const initialInvestment = Math.max(0, parseNumberInput(input.initialInvestment, 0));
  const finalReturn = Math.max(0, parseNumberInput(input.finalReturn, 0));
  const mode = input.mode || 'standard';

  let effectiveReturn = finalReturn;
  let grossProfit: number | undefined = undefined;
  let breakEvenRevenue: number | undefined = undefined;

  if (mode === 'marketing') {
    const marginPct = Math.min(100, Math.max(0, parseNumberInput(input.profitMarginPct, 100)));
    grossProfit = finalReturn * (marginPct / 100);
    effectiveReturn = grossProfit; // Net marketing revenue before spend
    if (marginPct > 0) {
      breakEvenRevenue = initialInvestment / (marginPct / 100);
    } else {
      breakEvenRevenue = 0;
    }
  }

  const netGain = calculateNetGain(initialInvestment, effectiveReturn);
  const roiPct = calculateROI(initialInvestment, effectiveReturn);
  const { annualizedRoi, durationYears } = calculateAnnualizedROI(
    initialInvestment,
    effectiveReturn,
    input.durationValue,
    input.durationUnit
  );
  const bcr = calculateBenefitCostRatio(initialInvestment, effectiveReturn);

  const isProfitable = netGain > 0;
  const isLoss = netGain < 0;
  const isBreakEven = netGain === 0 && initialInvestment > 0;

  return {
    netGain,
    roiPct,
    annualizedRoiPct: annualizedRoi,
    benefitCostRatio: bcr,
    grossProfit,
    breakEvenRevenue,
    isProfitable,
    isLoss,
    isBreakEven,
    hasDuration: durationYears !== null && durationYears > 0,
    durationYears
  };
}

/**
 * Evaluates ROI benchmark rating & badge styling.
 */
export function evaluateROIBenchmark(result: ROICalculationResult, initialInvestment: number): ROIBenchmarkRating {
  if (initialInvestment <= 0) {
    return {
      status: 'awaiting',
      label: 'Awaiting Data',
      badgeClass: 'bg-surface-strong text-muted border-hairline',
      description: 'Enter your initial investment and expected returns to calculate your ROI metrics.'
    };
  }

  if (result.isBreakEven) {
    return {
      status: 'breakeven',
      label: 'Break-Even (0%)',
      badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      description: 'Your investment has fully recovered costs with zero net gain or loss.'
    };
  }

  if (result.isLoss) {
    return {
      status: 'loss',
      label: 'Negative ROI',
      badgeClass: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
      description: `Your returns fell short of your initial cost by ${Math.abs(result.roiPct).toFixed(2)}%.`
    };
  }

  const roi = result.roiPct;

  if (roi < 20) {
    return {
      status: 'modest',
      label: 'Modest Gain',
      badgeClass: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      description: `Solid positive yield of ${roi.toFixed(2)}% net return on investment.`
    };
  } else if (roi < 100) {
    return {
      status: 'strong',
      label: 'Strong Return',
      badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      description: `Impressive ${roi.toFixed(2)}% net profit relative to your starting investment.`
    };
  } else {
    return {
      status: 'exceptional',
      label: 'Exceptional ROI',
      badgeClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      description: `High-performing return! You generated ${roi.toFixed(2)}% net profit (${result.benefitCostRatio.toFixed(2)}x benefit-cost ratio).`
    };
  }
}

/**
 * Generates deterministic rule-based recommendations.
 */
export function generateROIRecommendations(
  result: ROICalculationResult,
  initialInvestment: number,
  finalReturn: number,
  mode: 'standard' | 'marketing' = 'standard'
): ROIRecommendation[] {
  const recommendations: ROIRecommendation[] = [];

  if (initialInvestment <= 0) {
    recommendations.push({
      type: 'info',
      title: 'Getting Started with ROI Analysis',
      text: 'Return on Investment (ROI) measures net efficiency by comparing profits generated against capital invested. Enter your figures above to begin.'
    });
    return recommendations;
  }

  // 1. Profitability Assessment
  if (result.isLoss) {
    recommendations.push({
      type: 'warning',
      title: 'Negative Return Risk Warning',
      text: `Your investment generated a net loss of ${Math.abs(result.netGain).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}. Review cost structures or optimize performance before scaling.`
    });
  } else if (result.isProfitable) {
    recommendations.push({
      type: 'success',
      title: 'Profitable Investment Outcome',
      text: `Your investment generated a net profit of ${result.netGain.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} (${result.roiPct.toFixed(2)}% ROI).`
    });
  } else {
    recommendations.push({
      type: 'info',
      title: 'Break-Even Benchmark',
      text: 'Your return matches your initial outlay. In marketing, reaching break-even allows customer acquisition at zero net cost.'
    });
  }

  // 2. Annualized ROI Insight
  if (result.hasDuration && result.annualizedRoiPct !== null) {
    const annRoi = result.annualizedRoiPct;
    const yearsStr = result.durationYears?.toFixed(1) || '1.0';
    recommendations.push({
      type: annRoi >= 10 ? 'success' : 'tip',
      title: 'Annualized Growth Rate (CAGR)',
      text: `Over a ${yearsStr}-year timeframe, your compound annual growth rate is ${annRoi.toFixed(2)}% per year. Standard stock market index benchmarks average ~7-10% annually.`
    });
  } else if (initialInvestment > 0 && finalReturn > 0) {
    recommendations.push({
      type: 'tip',
      title: 'Add Time Horizon for Annualized ROI',
      text: 'Input an investment duration (in years or months) above to compute your Annualized ROI (CAGR) and evaluate yearly compounding performance.'
    });
  }

  // 3. Mode-specific insight
  if (mode === 'marketing') {
    if (result.breakEvenRevenue && result.breakEvenRevenue > 0) {
      recommendations.push({
        type: 'info',
        title: 'Break-Even Sales Target',
        text: `To achieve 0% net loss on your campaign spend, your business needs to generate at least ${result.breakEvenRevenue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} in total gross sales.`
      });
    }
    recommendations.push({
      type: 'tip',
      title: 'ROAS vs. Marketing ROI',
      text: 'If you want to track gross ad revenue divided directly by ad spend, check our dedicated ROAS Calculator for ad-level campaign tuning.'
    });
  } else {
    if (result.benefitCostRatio > 0) {
      recommendations.push({
        type: 'info',
        title: 'Benefit-Cost Ratio (BCR)',
        text: `Your Benefit-Cost Ratio is ${result.benefitCostRatio.toFixed(2)}x. A ratio greater than 1.0 indicates that total revenue generated exceeds total cost.`
      });
    }
  }

  return recommendations.slice(0, 4);
}

/**
 * Instagram Engagement Rate Calculator Logic
 * Pure, deterministic calculation functions for Instagram metrics.
 */

/**
 * Calculates total engagement interactions.
 * Accepts individual metrics and an optional direct totalEngagements value.
 * @param {Object} metrics
 * @param {number|string} [metrics.likes]
 * @param {number|string} [metrics.comments]
 * @param {number|string} [metrics.shares]
 * @param {number|string} [metrics.saves]
 * @param {number|string} [metrics.totalEngagements]
 * @returns {number}
 */
export function calculateTotalEngagements({ likes = 0, comments = 0, shares = 0, saves = 0, totalEngagements = 0 } = {}) {
  const parseVal = (val) => {
    if (val === null || val === undefined || val === '') return 0;
    const num = Number(val);
    return isNaN(num) || num < 0 ? 0 : Math.floor(num);
  };

  const safeLikes = parseVal(likes);
  const safeComments = parseVal(comments);
  const safeShares = parseVal(shares);
  const safeSaves = parseVal(saves);
  const sum = safeLikes + safeComments + safeShares + safeSaves;

  const safeTotalInput = parseVal(totalEngagements);

  // Return breakdown sum if any breakdown inputs are present; otherwise fallback to direct totalEngagements if provided
  return (safeLikes > 0 || safeComments > 0 || safeShares > 0 || safeSaves > 0) ? sum : (sum > 0 ? sum : safeTotalInput);
}

/**
 * Calculates Engagement Rate by Reach (ERR)
 * @param {number|string} totalEngagements
 * @param {number|string} reach
 * @returns {number} Percentage formatted (0 - 999.99)
 */
export function calculateERR(totalEngagements, reach) {
  const safeTotal = Math.max(0, Number(totalEngagements) || 0);
  const safeReach = Math.max(0, Number(reach) || 0);
  if (safeReach <= 0) return 0;
  const rate = (safeTotal / safeReach) * 100;
  return Number.isFinite(rate) ? Math.min(rate, 999.99) : 0;
}

/**
 * Calculates Engagement Rate by Followers (ERF)
 * @param {number|string} totalEngagements
 * @param {number|string} followers
 * @returns {number} Percentage formatted (0 - 999.99)
 */
export function calculateERF(totalEngagements, followers) {
  const safeTotal = Math.max(0, Number(totalEngagements) || 0);
  const safeFollowers = Math.max(0, Number(followers) || 0);
  if (safeFollowers <= 0) return 0;
  const rate = (safeTotal / safeFollowers) * 100;
  return Number.isFinite(rate) ? Math.min(rate, 999.99) : 0;
}

/**
 * Detects creator tier based on follower count
 * @param {number|string} followers
 * @returns {Object} Tier info object
 */
export function getCreatorTier(followers) {
  const count = Math.max(0, Number(followers) || 0);
  if (count < 10000) {
    return {
      key: 'nano',
      label: 'Nano Creator',
      range: '< 10k Followers',
      avgERR: '4.0% - 7.0%',
      goodERR: 4.0,
      avgERF: '2.0% - 5.0%',
      goodERF: 2.0
    };
  } else if (count < 50000) {
    return {
      key: 'micro',
      label: 'Micro Creator',
      range: '10k - 50k Followers',
      avgERR: '2.5% - 4.5%',
      goodERR: 2.5,
      avgERF: '1.5% - 3.0%',
      goodERF: 1.5
    };
  } else if (count < 200000) {
    return {
      key: 'mid',
      label: 'Mid-Tier Creator',
      range: '50k - 200k Followers',
      avgERR: '1.8% - 3.2%',
      goodERR: 1.8,
      avgERF: '1.0% - 2.0%',
      goodERF: 1.0
    };
  } else if (count < 1000000) {
    return {
      key: 'macro',
      label: 'Macro Creator',
      range: '200k - 1M Followers',
      avgERR: '1.2% - 2.2%',
      goodERR: 1.2,
      avgERF: '0.6% - 1.2%',
      goodERF: 0.6
    };
  } else {
    return {
      key: 'mega',
      label: 'Mega Creator',
      range: '1M+ Followers',
      avgERR: '0.8% - 1.5%',
      goodERR: 0.8,
      avgERF: '0.4% - 0.9%',
      goodERF: 0.4
    };
  }
}

/**
 * Evaluates benchmark performance based on rate, followers, denominator, and mode.
 * @param {number|string} rate - Current calculated engagement rate (%)
 * @param {number|string} followers - Follower count
 * @param {number|string} [denominator=0] - Reach or Followers count used as denominator
 * @param {string} [mode='err'] - Calculation mode ('err' or 'erf')
 * @returns {Object} Benchmark rating object
 */
export function evaluateBenchmark(rate, followers, denominator = 0, mode = 'err') {
  const safeDenominator = Math.max(0, Number(denominator) || 0);
  const safeRate = Math.max(0, Number(rate) || 0);
  const isERR = mode === 'err';
  const metricLabel = isERR ? 'ERR' : 'ERF';

  if (safeDenominator <= 0) {
    return {
      status: 'awaiting',
      label: 'Awaiting Data',
      badgeClass: 'bg-surface-strong text-muted border-hairline',
      description: isERR 
        ? 'Enter your post reach & interactions to compute ERR and benchmark against your creator tier.'
        : 'Enter your total followers & interactions to compute ERF and benchmark against your creator tier.'
    };
  }

  if (safeRate <= 0) {
    return {
      status: 'zero',
      label: 'No Engagement',
      badgeClass: 'bg-surface-strong text-muted border-hairline',
      description: 'Add likes, comments, shares, or saves to view your benchmark rating.'
    };
  }

  const tier = getCreatorTier(followers);
  const goodThreshold = isERR ? tier.goodERR : tier.goodERF;
  const avgRange = isERR ? tier.avgERR : tier.avgERF;

  if (safeRate < goodThreshold * 0.5) {
    return {
      status: 'below',
      label: 'Needs Work',
      badgeClass: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
      description: `Below average ${metricLabel} for a ${tier.label}. Typical ${metricLabel} standard for your tier is ${avgRange}.`
    };
  } else if (safeRate < goodThreshold) {
    return {
      status: 'average',
      label: 'Average',
      badgeClass: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      description: `Solid baseline. Average ${metricLabel} range for ${tier.label}s is ${avgRange}.`
    };
  } else if (safeRate < goodThreshold * 1.6) {
    return {
      status: 'good',
      label: 'Good',
      badgeClass: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      description: `Above average! Your post is outperforming typical ${tier.label} ${metricLabel} benchmarks (${avgRange}).`
    };
  } else {
    return {
      status: 'viral',
      label: 'Exceptional',
      badgeClass: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      description: `Exceptional performance! Your ${metricLabel} significantly exceeds average ${tier.label} benchmarks (${avgRange}).`
    };
  }
}

/**
 * Generates deterministic actionable recommendations based on post metrics and calculation mode.
 * @param {Object} params
 * @param {number|string} [params.likes]
 * @param {number|string} [params.comments]
 * @param {number|string} [params.shares]
 * @param {number|string} [params.saves]
 * @param {number|string} [params.totalEngagements]
 * @param {number|string} [params.reach]
 * @param {number|string} [params.followers]
 * @param {string} [params.mode] - 'err' or 'erf'
 * @returns {Array<{ type: string, title: string, text: string }>}
 */
export function generateRecommendations({ likes = 0, comments = 0, shares = 0, saves = 0, totalEngagements = 0, reach = 0, followers = 0, mode = 'err' } = {}) {
  const recommendations = [];
  const safeLikes = Math.max(0, Number(likes) || 0);
  const safeComments = Math.max(0, Number(comments) || 0);
  const safeShares = Math.max(0, Number(shares) || 0);
  const safeSaves = Math.max(0, Number(saves) || 0);
  const safeReach = Math.max(0, Number(reach) || 0);
  const safeFollowers = Math.max(0, Number(followers) || 0);

  const calculatedSum = safeLikes + safeComments + safeShares + safeSaves;
  const total = calculatedSum > 0 ? calculatedSum : Math.max(0, Number(totalEngagements) || 0);
  const isERR = mode === 'err';

  // 1. Mode Explanation & Usage
  if (isERR) {
    recommendations.push({
      type: 'info',
      title: 'What ERR Measures & When to Use It',
      text: 'Engagement Rate by Reach (ERR) measures the percentage of unique viewers who engaged with your post. Use ERR to evaluate content hook strength, post quality, and Reels virality regardless of follower count.'
    });
  } else {
    recommendations.push({
      type: 'info',
      title: 'What ERF Measures & When to Use It',
      text: 'Engagement Rate by Followers (ERF) measures total engagement relative to your overall follower count. Brands & talent agencies commonly use ERF to audit profile authority, account health, and baseline community loyalty.'
    });
  }

  // 2. Missing Denominator Warnings (Non-blocking)
  if (total > 0) {
    if (isERR && safeReach === 0) {
      recommendations.push({
        type: 'warning',
        title: 'Missing Reach Data',
        text: 'You entered engagement interactions, but Accounts Reached is zero. Input post reach above to calculate your ERR rate.'
      });
    } else if (!isERR && safeFollowers === 0) {
      recommendations.push({
        type: 'warning',
        title: 'Missing Follower Data',
        text: 'You entered engagement interactions, but Total Followers is zero. Input follower count above to calculate your ERF rate.'
      });
    }
  }

  if (total === 0) {
    recommendations.push({
      type: 'tip',
      title: 'Awaiting Interaction Data',
      text: isERR 
        ? 'Enter post interactions (Likes, Comments, Shares, Saves) above to calculate your Reach-Based Engagement Rate.'
        : 'Enter post interactions (Likes, Comments, Shares, Saves) above to calculate your Follower-Based Engagement Rate.'
    });
    return recommendations;
  }

  // 3. Unrealistic Inputs & Edge Case Warnings (Non-blocking)
  if (isERR && safeReach > 0 && total > safeReach) {
    recommendations.push({
      type: 'warning',
      title: 'Unrealistic Ratio Warning',
      text: `Total engagements (${total.toLocaleString()}) exceed Accounts Reached (${safeReach.toLocaleString()}). This occurs if users interact multiple times, but please verify your Instagram Insights.`
    });
  } else if (!isERR && safeFollowers > 0 && total > safeFollowers) {
    recommendations.push({
      type: 'warning',
      title: 'High Engagement Ratio',
      text: `Total engagements (${total.toLocaleString()}) exceed Total Followers (${safeFollowers.toLocaleString()}). Non-follower reach (Explore/Reels) is likely driving interaction.`
    });
  }

  const rate = isERR ? (safeReach > 0 ? (total / safeReach) * 100 : 0) : (safeFollowers > 0 ? (total / safeFollowers) * 100 : 0);
  if (rate > 50) {
    recommendations.push({
      type: 'warning',
      title: 'Unusually High Rate',
      text: `Calculated ${isERR ? 'ERR' : 'ERF'} is ${rate.toFixed(2)}%. Rates above 50% are rare — verify that your reach or follower figures aren't understated.`
    });
  }

  // 4. Result Interpretation against Creator Tier Benchmarks
  const tier = getCreatorTier(safeFollowers);
  if (isERR && safeReach > 0) {
    const err = (total / safeReach) * 100;
    recommendations.push({
      type: err >= tier.goodERR ? 'success' : 'tip',
      title: `ERR Result Interpretation (${tier.label})`,
      text: `Your ERR is ${err.toFixed(2)}%. Standard ERR benchmark for a ${tier.label} is ${tier.avgERR}. ${
        err >= tier.goodERR 
          ? 'Your content effectively converted viewers into active engagements.' 
          : 'Focus on improving initial 2-second hooks and CTA prompts to lift reach conversion.'
      }`
    });
  } else if (!isERR && safeFollowers > 0) {
    const erf = (total / safeFollowers) * 100;
    recommendations.push({
      type: erf >= tier.goodERF ? 'success' : 'tip',
      title: `ERF Result Interpretation (${tier.label})`,
      text: `Your ERF is ${erf.toFixed(2)}%. Standard ERF benchmark for a ${tier.label} is ${tier.avgERF}. ${
        erf >= tier.goodERF 
          ? 'Your audience demonstrates strong baseline loyalty for brand partnerships.' 
          : 'Consider warming up your feed with interactive Story stickers before posting.'
      }`
    });
  }

  // 5. Save & Share Ratio Insights
  if (safeLikes > 0 && recommendations.length < 4) {
    const saveRatio = safeSaves / safeLikes;
    if (saveRatio >= 0.15) {
      recommendations.push({
        type: 'success',
        title: 'High Save Velocity',
        text: `Save-to-Like ratio is ${(saveRatio * 100).toFixed(1)}%. Users find this post highly valuable to bookmark.`
      });
    }
  }

  if (safeLikes > 0 && recommendations.length < 4) {
    const shareRatio = safeShares / safeLikes;
    if (shareRatio >= 0.20) {
      recommendations.push({
        type: 'success',
        title: 'Viral DM Share Rate',
        text: `Shares are ${(shareRatio * 100).toFixed(1)}% of likes! High send velocity drives Explore distribution.`
      });
    }
  }

  return recommendations.slice(0, 4);
}




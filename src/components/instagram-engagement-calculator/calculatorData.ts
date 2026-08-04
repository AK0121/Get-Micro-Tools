export interface CreatorTier {
  name: string;
  range: string;
  avgERR: string;
  avgERF: string;
  target: string;
  tip: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What is Instagram Engagement Rate?",
    answer: "Instagram Engagement Rate is the quantitative percentage of an audience (Reach or Followers) that actively interacts with your content through Likes, Comments, Shares, and Saves. Unlike raw follower counts, engagement rate measures true content resonance, audience loyalty, and algorithmic performance."
  },
  {
    question: "What is Engagement Rate by Reach (ERR) vs. Engagement Rate by Followers (ERF)?",
    answer: "ERR measures the percentage of unique accounts who saw your post and engaged with it (Total Engagements / Reach × 100). ERF measures engagement against your total follower count (Total Engagements / Followers × 100). ERR is the true indicator of content quality and Reels virality, while ERF is traditionally used by agencies to audit overall account authority."
  },
  {
    question: "Which engagement rate formula do brands and agencies use?",
    answer: "Traditionally, brand agencies use ERF for quick influencer vetting because follower count is publicly visible without backend dashboard access. However, performance-driven brands and sponsors now request ERR (or post Reach screenshots) for paid creator campaigns to evaluate actual impression conversion rates."
  },
  {
    question: "Which engagement rate formula should creators track?",
    answer: "Creators should primarily track ERR (Engagement Rate by Reach). ERR isolates content performance from Instagram's distribution algorithm. When a Reel or Carousel goes viral to non-followers, ERR shows how effectively your hook and value proposition converted viewers into active engagement."
  },
  {
    question: "What is a good Instagram engagement rate in 2026?",
    answer: "A good engagement rate depends on your creator tier and chosen metric. For Nano creators (<10k followers), 4.0%–7.0% ERR (or 2.0%–5.0% ERF) is standard. For Micro creators (10k–50k), 2.5%–4.5% ERR (1.5%–3.0% ERF) is healthy. Larger tiers naturally scale down because reach distribution broadens."
  },
  {
    question: "Why are Shares and Saves so important on Instagram?",
    answer: "Instagram's recommendation algorithm prioritizes high-intent actions. Shares (DMs/Sends) indicate content virality and drive non-follower reach on Explore and Reels. Saves (Bookmarks) signal high value and utility. Both actions carry significantly higher weight in algorithm distribution than standard double-tap Likes."
  },
  {
    question: "How do I find my Instagram Reach metrics?",
    answer: "You can find your Reach metric in Instagram Insights on any Professional or Creator account. Open a post or Reel, tap 'View Insights', and locate the 'Accounts Reached' metric under the Overview section."
  },
  {
    question: "Is this calculator free and private?",
    answer: "Yes, 100% free and client-side. Your inputs are calculated instantly in your browser without sending any data to external servers or storing personal profile information."
  }
];

export const creatorTiers: CreatorTier[] = [
  { name: 'Nano Creator', range: '< 10k', avgERR: '4.0% - 7.0%', avgERF: '2.0% - 5.0%', target: '6.0%+', tip: 'High engagement density; focus on building tight community trust.' },
  { name: 'Micro Creator', range: '10k - 50k', avgERR: '2.5% - 4.5%', avgERF: '1.5% - 3.0%', target: '4.0%+', tip: 'Ideal tier for brand sponsorships; optimize shareable carousels.' },
  { name: 'Mid-Tier Creator', range: '50k - 200k', avgERR: '1.8% - 3.2%', avgERF: '1.0% - 2.0%', target: '2.8%+', tip: 'Reach broadens; focus on high-retention Reels & strong hooks.' },
  { name: 'Macro Creator', range: '200k - 1M', avgERR: '1.2% - 2.2%', avgERF: '0.6% - 1.2%', target: '1.8%+', tip: 'High reach volume; use Story stickers to maintain follower loyalty.' },
  { name: 'Mega Creator', range: '1M+', avgERR: '0.8% - 1.5%', avgERF: '0.4% - 0.9%', target: '1.2%+', tip: 'Massive scale; algorithm prioritizes viral share loops and trends.' }
];

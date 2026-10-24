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
    question: "What is Instagram engagement rate and how is it calculated?",
    answer: "Instagram engagement rate measures how actively an audience interacts with content relative to an account's audience baseline. This calculator supports two industry-standard methods: Reach-Based (ERR = Total Engagements / Reach × 100) and Follower-Based (ERF = Total Engagements / Followers × 100). Total Engagements is calculated as the direct sum of Likes, Comments, Shares, and Saves."
  },
  {
    question: "What is the difference between Engagement Rate by Reach (ERR) and by Followers (ERF)?",
    answer: "The difference lies in the denominator. ERR divides total engagements by unique accounts that actually viewed the post (Accounts Reached from Instagram Insights), making it an accurate reflection of creative hook strength and viewer conversion. ERF divides total engagements by total follower count, reflecting overall profile authority and baseline community loyalty, though it can be deflated by organic feed distribution limits or inflated by viral non-follower reach."
  },
  {
    question: "Which metrics does this calculator accept?",
    answer: "The tool accepts six specific metrics: Total Followers (profile-level audience) and Accounts Reached (unique post viewers) as baseline denominators, plus Likes, Comments, Shares, and Saves as post interaction numerators. It automatically calculates Total Engagements and intent ratios (Save-to-Like and Share-to-Like). The calculator does not take impressions, Story sticker taps, profile visits, or DMs."
  },
  {
    question: "Where do I find 'Accounts Reached' on Instagram?",
    answer: "On an Instagram Creator or Business account, navigate to any published post or Reel and tap 'View Insights'. In the Overview section, look for 'Accounts Reached'. This figure represents unique accounts that saw your post at least once, which is the required denominator for ERR."
  },
  {
    question: "Why is my follower-based engagement rate (ERF) over 100% on a Reel?",
    answer: "ERF can exceed 100% when a Reel receives widespread algorithm distribution across the Explore page or Reels feed. Because the video reaches hundreds of thousands of non-followers, the total engagements can easily exceed your registered follower count. Switching to Reach-Based mode (ERR) normalizes these interactions against actual viewers."
  },
  {
    question: "Why do engagement rates naturally decline as follower accounts grow?",
    answer: "Smaller accounts (nano and micro creators) typically have a tight, dedicated community where a high percentage of followers see and interact with posts. As an account scales to hundreds of thousands of followers, the algorithm distributes content across a broader, more diverse audience pool with varying interest levels, naturally lowering the average follower-based engagement rate."
  },
  {
    question: "Why are Saves and Shares weighted more heavily than Likes?",
    answer: "Double-tap likes require minimal cognitive effort. Shares (sends via Direct Message or external link) demonstrate active word-of-mouth endorsement, prompting Instagram to distribute content to wider recommendation pools. Saves signal evergreen reference utility. High save and share ratios indicate content that provides lasting value."
  },
  {
    question: "Can I use this calculator for an entire profile or only single posts?",
    answer: "You can use it for both. To audit an individual post or Reel, input that specific post's metrics. To calculate an account-wide baseline, average the likes, comments, shares, and saves across your 10 to 12 most recent feed posts (excluding pinned or abnormal viral outliers), and enter your total followers or average reach."
  },
  {
    question: "How do brands and agencies evaluate engagement rates for sponsorships?",
    answer: "Brands typically use ERF for rapid top-of-funnel screening when vetting influencer lists, as follower counts and public likes are visible without private access. For campaign contracting and rate negotiations, performance-focused brands request post-level ERR or Insights screenshots to evaluate actual impression conversion and calculate Cost-Per-Engagement (CPE)."
  },
  {
    question: "Is my Instagram data private and secure when using this tool?",
    answer: "Yes. All calculations execute entirely client-side in your web browser using JavaScript. No profile handles, follower figures, or post metrics are transmitted to external servers, stored in databases, or shared with third parties."
  }
];

export const creatorTiers: CreatorTier[] = [
  { 
    name: 'Nano Creator', 
    range: '< 10k Followers', 
    avgERR: '4.0% - 7.0%', 
    avgERF: '2.0% - 5.0%', 
    target: '4.0%+', 
    tip: 'High community intimacy; focus on conversational comments and direct audience relationships.' 
  },
  { 
    name: 'Micro Creator', 
    range: '10k - 50k Followers', 
    avgERR: '2.5% - 4.5%', 
    avgERF: '1.5% - 3.0%', 
    target: '2.5%+', 
    tip: 'Primary tier for targeted brand sponsorships; test swipeable carousels to elevate save rates.' 
  },
  { 
    name: 'Mid-Tier Creator', 
    range: '50k - 200k Followers', 
    avgERR: '1.8% - 3.2%', 
    avgERF: '1.0% - 2.0%', 
    target: '1.8%+', 
    tip: 'Reach diversifies; optimize 3-second Reel hooks to retain non-follower viewers from Explore.' 
  },
  { 
    name: 'Macro Creator', 
    range: '200k - 1M Followers', 
    avgERR: '1.2% - 2.2%', 
    avgERF: '0.6% - 1.2%', 
    target: '1.2%+', 
    tip: 'Broad distribution; leverage Story engagement stickers to maintain core community warmth.' 
  },
  { 
    name: 'Mega Creator', 
    range: '1M+ Followers', 
    avgERR: '0.8% - 1.5%', 
    avgERF: '0.4% - 0.9%', 
    target: '0.8%+', 
    tip: 'Mainstream awareness; algorithm distribution is driven primarily by viral share velocity.' 
  }
];

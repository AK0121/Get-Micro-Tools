export interface FAQItem {
  question: string;
  answer: string;
}

export interface BioTemplate {
  category: string;
  icon: string;
  name: string;
  text: string;
  charCount: number;
}

export const bioTemplates: BioTemplate[] = [
  {
    category: "Creator",
    icon: "🎬",
    name: "Video Creator / Tech",
    text: "Daily tech tips & creator workflows ⚡\nFree tools & presets below 👇",
    charCount: 71
  },
  {
    category: "Brand",
    icon: "🛍️",
    name: "E-Commerce / Streetwear",
    text: "Sustainable street style 🌿\nWorldwide shipping 📦\nShop new drop 👇",
    charCount: 71
  },
  {
    category: "Coach",
    icon: "📈",
    name: "Coach / Business",
    text: "Helping creators scale to $10k/mo 🚀\nFree growth guide below 👇",
    charCount: 68
  },
  {
    category: "Fitness",
    icon: "🏋️",
    name: "Fitness / Personal Trainer",
    text: "Simple daily home workouts 💪\n30-Day Transformation Challenge 👇",
    charCount: 68
  },
  {
    category: "Food",
    icon: "🥑",
    name: "Food / Recipe Creator",
    text: "Quick 15-minute healthy dinners 🥑\nGrab my free recipe book 👇",
    charCount: 62
  },
  {
    category: "Humor",
    icon: "☕",
    name: "Lifestyle / Vlogger",
    text: "Unfiltered vlogs & iced coffee ☕\nJoin the chaos ✨\nLatest video 👇",
    charCount: 70
  },
  {
    category: "Podcast",
    icon: "🎙️",
    name: "Podcast / Media",
    text: "Uncensored business & creator stories 🎙️\nNew episode every Monday 👇",
    charCount: 73
  },
  {
    category: "Design",
    icon: "🎨",
    name: "Aesthetic / Artist",
    text: "Visual artist & graphic designer 🎨\nCustom prints & commissions 👇",
    charCount: 68
  },
  {
    category: "Beauty",
    icon: "💄",
    name: "Beauty & Skincare",
    text: "Honest skincare reviews & routines ✨\nShop holy grail products 👇",
    charCount: 68
  },
  {
    category: "Travel",
    icon: "✈️",
    name: "Travel & Nomads",
    text: "Budget travel tips & itineraries ✈️\n50+ countries explored 🗺️\nGuides 👇",
    charCount: 74
  },
  {
    category: "Real Estate",
    icon: "🏡",
    name: "Real Estate & Realtor",
    text: "Luxury home tours & market insights 🏡\nBook a private showing 👇",
    charCount: 68
  }
];

export const faqs: FAQItem[] = [
  {
    question: "What is the TikTok bio character limit?",
    answer: "The official TikTok bio character limit is strictly 80 characters. This 80-character cap includes letters, numbers, punctuation, spaces, emojis, and line breaks (pressing Enter/Return). Any text beyond 80 characters cannot be typed or saved in the TikTok profile editor."
  },
  {
    question: "How does this TikTok bio character counter handle emojis and symbols?",
    answer: "Our TikTok bio character counter uses standard Unicode grapheme cluster segmentation (via Intl.Segmenter). While basic characters count as 1 character, certain complex emojis (like skin-tone modifiers, flags, or zero-width joiner sequences) can count as 2 or more code units on TikTok. Our checker provides real-time grapheme cluster calculation so you never get surprised when pasting your bio into the app."
  },
  {
    question: "Do spaces and line breaks count toward the TikTok bio limit?",
    answer: "Yes. Every space bar stroke counts as 1 character, and every line break (pressing 'Enter' or 'Return' on your keyboard) also counts as 1 character against your 80-character limit. If you format your bio with 3 separate lines, you will use 2 characters just for the line breaks."
  },
  {
    question: "How many lines can you have in a TikTok bio?",
    answer: "While TikTok does not enforce a strict hard limit on line count as long as the total text stays within 80 characters, formatting your bio into 2 to 4 clean lines is recommended. Having more than 4 lines on smaller smartphone screens can cause line clipping or push your clickable website link further down the screen."
  },
  {
    question: "How does the TikTok bio checker tool work?",
    answer: "Our free TikTok bio checker runs 100% in your browser. As you type or paste your bio, it computes the exact character count, word count, line count, and remaining character balance in real time. It displays a color-coded capacity progress bar, triggers warnings when you approach or exceed 80 characters, and updates an authentic mobile profile preview mockup instantly."
  },
  {
    question: "What are the best high-converting TikTok bio ideas for creators?",
    answer: "The most effective TikTok bio formula follows 3 concise lines: 1) Value Hook (Who you help or what you create, e.g., 'Daily AI & productivity tips ⚡'), 2) Social Proof or Credibility (e.g., '100k+ community' or 'Certified Trainer'), and 3) Direct Call-to-Action (e.g., 'Get free toolkit below 👇') pointing straight down to your link in bio."
  },
  {
    question: "How do I add a clickable link in my TikTok bio with fewer than 1,000 followers?",
    answer: "Personal and Creator accounts require at least 1,000 followers to unlock the clickable 'Website' field. However, you can switch to a free TikTok Business Account at any time through 'Settings > Manage account > Switch to Business Account' to immediately unlock the Website link field in most regions, regardless of your follower count."
  },
  {
    question: "Does adding keywords to my TikTok bio improve my TikTok SEO ranking?",
    answer: "Yes! TikTok operates as a powerful search engine. Including your primary niche keywords (such as 'fitness coach', 'tech reviewer', or 'skincare tips') in your username, display name, and the first line of your 80-character bio helps TikTok's recommendation algorithm categorize your account and rank your profile in user search queries."
  },
  {
    question: "Can I use custom fonts, bold, or italic text in my TikTok bio?",
    answer: "You can copy and paste stylized Unicode fonts into your TikTok bio, but use them cautiously. Unicode stylized characters take up multiple UTF code points, may not be readable by screen readers for accessibility, and can sometimes cause formatting bugs or count unpredictably toward the 80-character limit. Standard clean text with clear emojis is generally best for readability."
  },
  {
    question: "How often can you change your TikTok bio?",
    answer: "You can change your TikTok bio text as many times as you want without any cooldown or waiting period. Unlike username changes (which have a 30-day cooldown) or display name changes (which have a 7-day cooldown), bio updates take effect instantly and have no frequency restrictions."
  },
  {
    question: "Why is my TikTok bio truncated or cut off on some mobile screens?",
    answer: "While TikTok allows up to 80 characters, small smartphone screens or oversized device font settings might push long multi-line bios behind the profile fold or cause line wrapping. Keeping your bio between 65 and 75 characters with at most 3 clean lines ensures full visibility on all device sizes."
  },
  {
    question: "Should I put hashtags in my TikTok bio?",
    answer: "No, you should avoid placing hashtags in your TikTok bio. Hashtags inside your bio text are not clickable in the same way video hashtags are, do not provide significant search ranking advantages, and waste valuable character space that is better spent on your value proposition and call-to-action."
  },
  {
    question: "Is this TikTok bio checker free and secure?",
    answer: "Yes, our TikTok bio checker is 100% free with no account registration or download required. All character counting and profile preview rendering occur locally on your device, meaning your draft bios are never stored, logged, or sent to any server."
  }
];

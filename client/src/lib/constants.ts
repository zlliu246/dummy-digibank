export const MOCK_PORTFOLIO_DATA = [
  { month: 'Jan', value: 10000 },
  { month: 'Feb', value: 11200 },
  { month: 'Mar', value: 10800 },
  { month: 'Apr', value: 11500 },
  { month: 'May', value: 12300 },
  { month: 'Jun', value: 12800 }
];

export const FEATURED_ETFS = [
  {
    id: 1,
    symbol: "VTI",
    name: "Vanguard Total Stock Market ETF",
    description: "Broad exposure to the entire U.S. stock market",
    price: 245.67,
    change: 1.25,
    aum: 1325000000.00,
    expense_ratio: 0.03
  },
  {
    id: 2,
    symbol: "VOO",
    name: "Vanguard S&P 500 ETF",
    description: "Tracks the performance of the S&P 500 index",
    price: 410.89,
    change: 0.75,
    aum: 8925000000.00,
    expense_ratio: 0.025
  }
];

export const INVESTMENT_GUIDES = [
  {
    title: "ETF Investing 101",
    description: "Learn the basics of ETF investing and why it's a great choice for beginners",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    title: "Understanding Expense Ratios",
    description: "How fees impact your investment returns over time",
    imageUrl: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11"
  },
  {
    title: "Diversification Strategies",
    description: "Build a balanced portfolio with different ETF types",
    imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105"
  }
];

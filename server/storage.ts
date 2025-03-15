import { users, etfs, portfolios, type User, type InsertUser, type ETF, type Portfolio } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getETFs(): Promise<ETF[]>;
  getETF(id: number): Promise<ETF | undefined>;
  getPortfolio(userId: number): Promise<Portfolio[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private etfs: Map<number, ETF>;
  private portfolios: Map<number, Portfolio[]>;
  private currentId: { users: number; etfs: number; portfolios: number };

  constructor() {
    this.users = new Map();
    this.etfs = new Map();
    this.portfolios = new Map();
    this.currentId = { users: 1, etfs: 1, portfolios: 1 };
    
    // Initialize with mock ETF data
    this.initializeETFs();
  }

  private initializeETFs() {
    const mockETFs: Omit<ETF, "id">[] = [
      {
        symbol: "VTI",
        name: "Vanguard Total Stock Market ETF",
        description: "Broad exposure to the entire U.S. stock market",
        price: "245.67",
        change: "1.25",
        aum: "1325000000.00",
        expense_ratio: "0.030"
      },
      {
        symbol: "VOO",
        name: "Vanguard S&P 500 ETF",
        description: "Tracks the performance of the S&P 500 index",
        price: "410.89",
        change: "0.75",
        aum: "8925000000.00",
        expense_ratio: "0.025"
      }
    ];

    mockETFs.forEach(etf => {
      const id = this.currentId.etfs++;
      this.etfs.set(id, { ...etf, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user: User = { ...insertUser, id, balance: "1000.00" };
    this.users.set(id, user);
    return user;
  }

  async getETFs(): Promise<ETF[]> {
    return Array.from(this.etfs.values());
  }

  async getETF(id: number): Promise<ETF | undefined> {
    return this.etfs.get(id);
  }

  async getPortfolio(userId: number): Promise<Portfolio[]> {
    return this.portfolios.get(userId) || [];
  }
}

export const storage = new MemStorage();

import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/etfs", async (req, res) => {
    try {
      const etfs = await storage.getETFs();
      res.json(etfs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch ETFs" });
    }
  });

  app.get("/api/etfs/:id", async (req, res) => {
    try {
      const etf = await storage.getETF(parseInt(req.params.id));
      if (!etf) {
        return res.status(404).json({ message: "ETF not found" });
      }
      res.json(etf);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch ETF" });
    }
  });

  app.get("/api/portfolio/:userId", async (req, res) => {
    try {
      const portfolio = await storage.getPortfolio(parseInt(req.params.userId));
      res.json(portfolio);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch portfolio" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

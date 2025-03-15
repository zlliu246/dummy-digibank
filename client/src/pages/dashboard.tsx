import { useQuery } from "@tanstack/react-query";
import { PortfolioChart } from "@/components/portfolio-chart";
import { ETFCard } from "@/components/etf-card";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MOCK_PORTFOLIO_DATA } from "@/lib/constants";
import type { ETF } from "@shared/schema";

export default function Dashboard() {
  const { data: etfs, isLoading: etfsLoading } = useQuery<ETF[]>({
    queryKey: ["/api/etfs"],
  });

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Investment Dashboard</h1>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$12,800.00</p>
              <p className="text-sm text-green-600">+28.00% all time</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Return</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+$500.00</p>
              <p className="text-sm text-green-600">+4.1% this month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total ETFs</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm text-gray-600">Diversified portfolio</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <PortfolioChart data={MOCK_PORTFOLIO_DATA} />
        </div>

        <h2 className="text-2xl font-bold mb-6">Your ETF Holdings</h2>
        {etfsLoading ? (
          <div className="text-center py-8">Loading your ETFs...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {etfs?.map((etf) => (
              <ETFCard key={etf.id} {...etf} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

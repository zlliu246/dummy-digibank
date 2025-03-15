import { useQuery } from "@tanstack/react-query";
import { ETFCard } from "@/components/etf-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import type { ETF } from "@shared/schema";

export default function Discover() {
  const { data: etfs, isLoading } = useQuery<ETF[]>({
    queryKey: ["/api/etfs"],
  });

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Discover ETFs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our selection of carefully curated ETFs designed to help you achieve your investment goals.
          </p>
        </div>

        <div className="mb-8 flex gap-4">
          <Input
            placeholder="Search ETFs by name or symbol..."
            className="max-w-md"
          />
          <Button>
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>

        {isLoading ? (
          <div className="text-center py-8">Loading ETFs...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {etfs?.map((etf) => (
              <ETFCard key={etf.id} {...etf} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

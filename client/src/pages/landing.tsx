import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Zap, PieChart } from "lucide-react";
import { FEATURED_ETFS } from "@/lib/constants";
import { ETFCard } from "@/components/etf-card";

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Invest in Your Future with
              <span className="text-primary block">InvestPro Bank</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              A Digital bank that allows you to start building your wealth automatically with our curated selection of low-cost ETFs. No complex trading required
            </p>
            <Button size="lg" className="text-lg">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Investment</h3>
                <p className="text-gray-600">
                  Your investments are protected and insured up to $500,000.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy to Start</h3>
                <p className="text-gray-600">
                  Begin investing with as little as $100. No prior experience needed.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <PieChart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Diversified Portfolio</h3>
                <p className="text-gray-600">
                  Spread your risk across hundreds of companies with a single investment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured ETFs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured ETFs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {FEATURED_ETFS.map((etf) => (
              <ETFCard key={etf.id} {...etf} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

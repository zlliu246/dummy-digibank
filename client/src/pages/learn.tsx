import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { INVESTMENT_GUIDES } from "@/lib/constants";

export default function Learn() {
  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4">Investment Education</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn everything you need to know about ETF investing and building long-term wealth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {INVESTMENT_GUIDES.map((guide, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={guide.imageUrl}
                alt={guide.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle>{guide.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{guide.description}</p>
                <Button variant="outline" className="w-full">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Investing?</h2>
          <p className="text-gray-600 mb-6">
            Put your knowledge into action and begin building your investment portfolio today.
          </p>
          <Button size="lg">
            Open an Account <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

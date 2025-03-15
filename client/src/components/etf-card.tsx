import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

interface ETFCardProps {
  symbol: string;
  name: string;
  description: string;
  price: number;
  change: number;
  aum: number;
  expense_ratio: number;
}

export function ETFCard({ symbol, name, description, price, change, aum, expense_ratio }: ETFCardProps) {
  const isPositiveChange = change >= 0;

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{symbol}</CardTitle>
            <CardDescription className="mt-1">{name}</CardDescription>
          </div>
          <Badge variant={isPositiveChange ? "default" : "destructive"} className="flex items-center">
            {isPositiveChange ? <ArrowUpIcon className="w-3 h-3 mr-1" /> : <ArrowDownIcon className="w-3 h-3 mr-1" />}
            {change.toFixed(2)}%
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{description}</p>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Price</p>
              <p className="text-lg font-semibold">${price.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">AUM</p>
              <p className="text-lg font-semibold">${(aum / 1e9).toFixed(1)}B</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Expense Ratio</p>
              <p className="text-lg font-semibold">{(expense_ratio * 100).toFixed(2)}%</p>
            </div>
          </div>

          <Button className="w-full">Invest Now</Button>
        </div>
      </CardContent>
    </Card>
  );
}

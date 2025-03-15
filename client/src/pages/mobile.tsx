import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Banknote,
  TrendingUp,
  BarChart,
  Clock,
  Bot,
  Users
} from "lucide-react";

export default function MobileApp() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      {/* Balance Card */}
      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="text-center">
            <p className="text-sm text-gray-500">Available Balance</p>
            <h1 className="text-4xl font-bold text-primary">$10,000.00</h1>
            <div className="mt-4 flex justify-center gap-4">
              <Button size="sm" variant="outline">
                <Banknote className="w-4 h-4 mr-2" />
                Deposit
              </Button>
              <Button size="sm" variant="outline">
                Withdraw
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Investment Options */}
      <Tabs defaultValue="invest" className="mb-6">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="invest">Invest</TabsTrigger>
          <TabsTrigger value="automate">Automate</TabsTrigger>
          <TabsTrigger value="copy">Copy</TabsTrigger>
        </TabsList>

        {/* Invest Tab */}
        <TabsContent value="invest">
          <div className="grid grid-cols-2 gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">Stocks</h3>
                <p className="text-xs text-gray-500">Buy any stock</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <BarChart className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h3 className="font-semibold">ETFs</h3>
                <p className="text-xs text-gray-500">Diversified funds</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Automate Tab */}
        <TabsContent value="automate">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">DCA Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Investment Amount</label>
                    <Input type="number" placeholder="Enter amount" />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Frequency</label>
                    <select className="w-full p-2 border rounded">
                      <option>Weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <Button className="w-full">
                    <Clock className="w-4 h-4 mr-2" />
                    Setup Auto-Investment
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Bot className="w-5 h-5 mr-2" />
                  Robo-Advisor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Let our AI manage your portfolio based on your risk profile
                </p>
                <Button variant="outline" className="w-full">Start Assessment</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Copy Trading Tab */}
        <TabsContent value="copy">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Copy Trading
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm text-green-600">+32% this month</p>
                  </div>
                  <Button size="sm">Copy</Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <h4 className="font-medium">Jane Smith</h4>
                    <p className="text-sm text-green-600">+28% this month</p>
                  </div>
                  <Button size="sm">Copy</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-auto py-4 flex flex-col">
              <TrendingUp className="w-6 h-6 mb-2" />
              <span>Buy Fractional</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col">
              <BarChart className="w-6 h-6 mb-2" />
              <span>Portfolio</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
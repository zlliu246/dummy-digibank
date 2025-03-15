import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/navbar";
import Landing from "@/pages/landing";
import Dashboard from "@/pages/dashboard";
import Bank from "@/pages/bank";
import Discover from "@/pages/discover";
import Learn from "@/pages/learn";
import MobileApp from "@/pages/mobile";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/accounts" component={Bank} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/discover" component={Discover} />
      <Route path="/learn" component={Learn} />
      <Route path="/mobile" component={MobileApp} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}


export default App;
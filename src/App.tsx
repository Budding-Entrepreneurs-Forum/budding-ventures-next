import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import VisionMission from "./pages/VisionMission";
import Members from "./pages/Members";
import DepartmentDetail from "./pages/DepartmentDetail";
import Activities from "./pages/Activities";
import EventPage from "./pages/EventPage";
import Blog from "./pages/Blog";
import Newsletter from "./pages/Newsletter";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Branding from "./pages/Branding";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/members" element={<Members />} />
          <Route path="/department/:id" element={<DepartmentDetail />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/activities/:slug" element={<EventPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branding" element={<Branding />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

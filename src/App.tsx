
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationProvider } from "@/contexts/NavigationContext";
import { DropboxAuthProvider } from "@/contexts/DropboxAuthContext";
import { PWAProvider } from "@/contexts/PWAContext";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import FavoritesPage from "./pages/FavoritesPage";
import RecipesPage from "./pages/RecipesPage";
import CameraPage from "./pages/CameraPage";
import ProductDetail from "./pages/ProductDetail";
import AuthCallback from "./pages/AuthCallback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DropboxAuthProvider>
          <NavigationProvider>
            <PWAProvider>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<ExplorePage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/camera" element={<CameraPage />} />
                <Route path="/auth/callback" element={<AuthCallback />} />
                <Route path="/product/:productSlug" element={<ProductDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </PWAProvider>
          </NavigationProvider>
        </DropboxAuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

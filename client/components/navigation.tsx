import { useState, useEffect } from "react";                // React hooks for state and lifecycle events
import { Link, useLocation, useNavigate } from "react-router-dom"; // Link for routing, useLocation for detecting route changes, useNavigate for programmatic navigation
import { Menu, X } from "lucide-react";                     // Icons for mobile navigation toggle
import { Button } from "@/components/ui/button";            // Button component from UI library
import { ThemeToggle } from "@/components/theme-toggle";    // Theme switch (light/dark mode)
import { cn } from "@/lib/utils";                           // Utility for combining Tailwind classes conditionally

// Navigation menu items (used in both desktop & mobile)
const navigation = [
  { name: "Home", href: "/" },               // Main page
  { name: "Services", href: "/#services" },  // Scrolls to services section
  { name: "Portfolio", href: "/#portfolio" },// Scrolls to portfolio section
  { name: "About", href: "/about" },         // Separate about page
  { name: "Contact", href: "/contact" },     // Contact page
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // State for toggling mobile menu visibility
  const location = useLocation();                             // Current route info
  const navigate = useNavigate();                             // For programmatic navigation

  // 🔹 Scroll to top smoothly whenever a route changes (non-anchor links)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });          // Smooth scroll to top
  }, [location.pathname]);                                    // Runs when only pathname (not hash) changes

  // 🔹 Smooth scroll to hash sections when hash changes (like #services or #portfolio)
  useEffect(() => {
    if (location.hash) {                                      // Check if there is a hash
      const elementId = location.hash.replace("#", "");       // Remove # to get pure id
      const element = document.getElementById(elementId);     // Get element by ID
      if (element) {
        // Delay scrolling slightly to ensure DOM is ready after navigation
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
  }, [location.hash]);                                        // Runs whenever hash changes

  // Function to smoothly scroll to specific section (for in-page # links)
  const scrollToSection = (href: string) => {
    if (href.startsWith("/#")) {                             // Check if it's an in-page anchor link
      const targetHash = href.replace("/#", "#");            // Convert "/#id" to "#id"
      if (location.pathname !== "/") {                       // If not already on home page
        // Navigate to home with hash, triggering the hash effect above
        navigate("/" + targetHash);
      } else {
        const elementId = targetHash.replace("#", "");        // Remove "#" to get pure id
        const element = document.getElementById(elementId);   // Get element by ID
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });     // Smoothly scroll to that element
        }
      }
    }
    setMobileMenuOpen(false);                                // Close mobile menu after clicking
  };

  return (
    // Sticky header with blur effect
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          
          {/* --- LOGO --- */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">Wasky_Links</span>
            </Link>
          </div>

          {/* --- DESKTOP NAVIGATION (visible on md+ screens) --- */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}                                // Unique key for React rendering
                  to={item.href}                                 // Destination link
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {            // If anchor link (same page or with hash)
                      e.preventDefault();                        // Prevent page reload
                      scrollToSection(item.href);                // Call smooth scroll or navigate home then scroll
                    }
                  }}
                  className={cn(                                 // Conditional styling
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"                           // Highlight active page
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}                                    {/* Link name */}
                </Link>
              ))}
            </div>
          </div>

          {/* --- DESKTOP RIGHT SIDE (Theme toggle + CTA button) --- */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />                                      {/* Theme toggle button */}
            {/* CTA button (no asChild because Link works inside Button) */}
            <Button className="px-4 py-2">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* --- MOBILE MENU BUTTON (visible on small screens) --- */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />                                      {/* Theme toggle on mobile too */}
            <Button
              variant="ghost"                                    // Transparent style
              size="sm"                                          // Small size button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} // Toggle mobile menu open/close
              aria-label="Toggle menu"                           // Accessibility label
            >
              {mobileMenuOpen ? (                               // Show X icon if open, Menu if closed
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* --- MOBILE NAVIGATION MENU (dropdown) --- */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith("/#")) {            // If anchor link
                      e.preventDefault();                        // Stop default jump
                      scrollToSection(item.href);                // Smooth scroll or navigate home then scroll
                    } else {
                      setMobileMenuOpen(false);                  // Close menu on normal link click
                    }
                  }}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors hover:text-primary",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3">
                {/* FIXED BUTTON: no asChild to avoid error */}
                <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

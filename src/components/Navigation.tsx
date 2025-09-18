import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, User, Bell } from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center pulse-glow">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <span className="text-2xl font-bold gradient-text">TalentFlow</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#jobs" className="text-foreground hover:text-primary transition-colors duration-200">
              Jobs
            </a>
            <a href="#companies" className="text-foreground hover:text-primary transition-colors duration-200">
              Companies
            </a>
            <a href="#talent" className="text-foreground hover:text-primary transition-colors duration-200">
              Talent
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-muted/50">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted/50">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted/50">
              <User className="h-5 w-5" />
            </Button>
            <Button className="btn-hero">Post Job</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-muted/50"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#jobs" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                Jobs
              </a>
              <a href="#companies" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                Companies
              </a>
              <a href="#talent" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                Talent
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors duration-200 px-2 py-1">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">Sign In</Button>
                <Button className="btn-hero w-full">Post Job</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
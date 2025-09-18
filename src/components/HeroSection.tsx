import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Briefcase, Users, Building } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-primary-glow/30 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Hero Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border/50 mb-8">
            <span className="text-sm text-muted-foreground">🚀 Now connecting top talent with leading companies</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="gradient-text block">Career Match</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Connect with top companies, discover amazing opportunities, and take your career to the next level with TalentFlow.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input
                type="text"
                placeholder="Search jobs, companies, or skills..."
                className="talent-input w-full pl-12 h-14 text-lg"
              />
            </div>
            <Button className="btn-hero h-14 px-8 text-lg group">
              Search Jobs
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button className="btn-hero group">
              <Briefcase className="mr-2 h-5 w-5" />
              Browse Jobs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-accent group">
              <Building className="mr-2 h-5 w-5" />
              Post a Job
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="talent-card p-6 talent-card-hover">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-lg mb-4 mx-auto">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Active Jobs</div>
            </div>
            <div className="talent-card p-6 talent-card-hover" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center w-12 h-12 bg-accent/20 rounded-lg mb-4 mx-auto">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">50,000+</div>
              <div className="text-muted-foreground">Talented Professionals</div>
            </div>
            <div className="talent-card p-6 talent-card-hover" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center w-12 h-12 bg-primary-glow/20 rounded-lg mb-4 mx-auto">
                <Building className="h-6 w-6 text-primary-glow" />
              </div>
              <div className="text-3xl font-bold text-primary-glow mb-2">5,000+</div>
              <div className="text-muted-foreground">Top Companies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
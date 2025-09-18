import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import JobListings from "@/components/JobListings";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <JobListings />
    </div>
  );
};

export default Index;
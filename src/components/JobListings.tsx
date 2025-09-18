import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import JobCard from "./JobCard";
import { Search, Filter, MapPin, Briefcase, DollarSign } from "lucide-react";

// Mock data for demonstration
const mockJobs = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $160k",
    postedTime: "2 days ago",
    description: "We're looking for a passionate Senior Frontend Developer to join our growing team. You'll work on cutting-edge projects using React, TypeScript, and modern web technologies.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    featured: true
  },
  {
    id: "2",
    title: "Product Manager",
    company: "InnovateLab",
    location: "New York, NY",
    type: "Full-time",
    salary: "$140k - $180k",
    postedTime: "1 day ago",
    description: "Join our product team to drive the development of innovative solutions that impact millions of users worldwide.",
    skills: ["Product Strategy", "Analytics", "User Research", "Agile"]
  },
  {
    id: "3",
    title: "UX/UI Designer",
    company: "DesignStudio",
    location: "Remote",
    type: "Contract",
    salary: "$80k - $100k",
    postedTime: "3 days ago",
    description: "Create beautiful and intuitive user experiences for our digital products. Work closely with developers and product managers.",
    skills: ["Figma", "Sketch", "Prototyping", "User Testing"]
  },
  {
    id: "4",
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130k - $170k",
    postedTime: "1 week ago",
    description: "Build and maintain our cloud infrastructure. Automate deployment processes and ensure system reliability.",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform"],
    featured: true
  },
  {
    id: "5",
    title: "Data Scientist",
    company: "DataCorp",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$110k - $150k",
    postedTime: "4 days ago",
    description: "Analyze complex datasets to drive business insights and build predictive models using machine learning.",
    skills: ["Python", "Machine Learning", "SQL", "TensorFlow"]
  },
  {
    id: "6",
    title: "Mobile Developer",
    company: "AppWorks",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$90k - $120k",
    postedTime: "5 days ago",
    description: "Develop cross-platform mobile applications using React Native. Work on both iOS and Android platforms.",
    skills: ["React Native", "iOS", "Android", "JavaScript"]
  }
];

const JobListings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = !jobTypeFilter || jobTypeFilter === "all" || job.type === jobTypeFilter;
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <section id="jobs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Your Next
            <span className="gradient-text block">Career Opportunity</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Browse through thousands of job opportunities from top companies worldwide
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12 animate-slide-in-left">
          <div className="talent-card p-6 mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="talent-input pl-12 h-12"
                />
              </div>

              {/* Location Filter */}
              <div className="relative lg:w-48">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Location"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                  className="talent-input pl-12 h-12"
                />
              </div>

              {/* Job Type Filter */}
              <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
                <SelectTrigger className="talent-input h-12 lg:w-48">
                  <div className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-3 text-muted-foreground" />
                    <SelectValue placeholder="Job Type" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Full-time">Full-time</SelectItem>
                  <SelectItem value="Part-time">Part-time</SelectItem>
                  <SelectItem value="Contract">Contract</SelectItem>
                  <SelectItem value="Remote">Remote</SelectItem>
                </SelectContent>
              </Select>

              {/* Filter Toggle */}
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="h-12 px-6"
              >
                <Filter className="h-5 w-5 mr-2" />
                Filters
              </Button>
            </div>

            {/* Advanced Filters */}
            {showFilters && (
              <div className="mt-6 pt-6 border-t border-border/50 animate-fade-in">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger className="talent-input">
                      <div className="flex items-center">
                        <DollarSign className="h-5 w-5 mr-3 text-muted-foreground" />
                        <SelectValue placeholder="Salary Range" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50k">$0 - $50k</SelectItem>
                      <SelectItem value="50k-100k">$50k - $100k</SelectItem>
                      <SelectItem value="100k-150k">$100k - $150k</SelectItem>
                      <SelectItem value="150k+">$150k+</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="talent-input">
                      <SelectValue placeholder="Experience Level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="entry">Entry Level</SelectItem>
                      <SelectItem value="mid">Mid Level</SelectItem>
                      <SelectItem value="senior">Senior Level</SelectItem>
                      <SelectItem value="lead">Lead/Principal</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select>
                    <SelectTrigger className="talent-input">
                      <SelectValue placeholder="Company Size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="startup">Startup (1-50)</SelectItem>
                      <SelectItem value="medium">Medium (51-500)</SelectItem>
                      <SelectItem value="large">Large (500+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </div>

          {/* Popular Skills */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3">Popular Skills:</p>
            <div className="flex flex-wrap gap-2">
              {["React", "Python", "JavaScript", "AWS", "Node.js", "TypeScript", "Docker", "Kubernetes"].map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary/20 transition-colors"
                  onClick={() => setSearchTerm(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 animate-slide-in-right">
          <p className="text-muted-foreground">
            Showing <span className="text-primary font-semibold">{filteredJobs.length}</span> jobs
            {searchTerm && (
              <span> for "<span className="text-foreground font-semibold">{searchTerm}</span>"</span>
            )}
          </p>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredJobs.map((job, index) => (
            <div
              key={job.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-12">
            <Button className="btn-hero">
              Load More Jobs
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">No jobs found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm("");
                setLocationFilter("");
                setJobTypeFilter("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
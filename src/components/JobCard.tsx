import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Calendar, 
  DollarSign, 
  Clock, 
  Bookmark, 
  Share2,
  Building2,
  Users
} from "lucide-react";

interface JobCardProps {
  job: {
    id: string;
    title: string;
    company: string;
    location: string;
    type: string;
    salary: string;
    postedTime: string;
    description: string;
    skills: string[];
    companyLogo?: string;
    featured?: boolean;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className={`talent-card p-6 talent-card-hover group relative ${
      job.featured ? 'ring-2 ring-primary/50 shadow-glow' : ''
    }`}>
      {/* Featured Badge */}
      {job.featured && (
        <div className="absolute -top-2 -right-2 bg-gradient-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse-glow">
          Featured
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center">
            {job.companyLogo ? (
              <img src={job.companyLogo} alt={job.company} className="w-8 h-8 rounded" />
            ) : (
              <Building2 className="h-6 w-6 text-primary" />
            )}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <p className="text-muted-foreground">{job.company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted/50">
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-muted/50">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {job.location}
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-1" />
          {job.type}
        </div>
        <div className="flex items-center">
          <DollarSign className="h-4 w-4 mr-1" />
          {job.salary}
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {job.postedTime}
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 line-clamp-2">{job.description}</p>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {job.skills.map((skill, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-muted/50 hover:bg-primary/20 transition-colors cursor-pointer"
          >
            {skill}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between">
        <Button 
          variant="outline" 
          className="group-hover:border-primary/50 transition-colors"
        >
          View Details
        </Button>
        <Button className="btn-accent">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
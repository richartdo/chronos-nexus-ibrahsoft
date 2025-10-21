import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A fully-featured online marketplace with payment integration, inventory management, and real-time analytics",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    },
    {
      title: "AI Chatbot Solution",
      category: "Artificial Intelligence",
      description: "Intelligent customer service chatbot with natural language processing and multi-language support",
      tech: ["Python", "TensorFlow", "NLP", "FastAPI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
    },
    {
      title: "Cloud Infrastructure",
      category: "Cloud Computing",
      description: "Scalable cloud architecture for a SaaS platform serving 100,000+ users",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication and real-time transactions",
      tech: ["React Native", "Firebase", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
    },
    {
      title: "Data Analytics Dashboard",
      category: "Data Science",
      description: "Real-time business intelligence dashboard with predictive analytics and custom reporting",
      tech: ["Python", "Tableau", "SQL", "Apache Spark"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
    },
    {
      title: "Healthcare Management System",
      category: "Enterprise Software",
      description: "Comprehensive hospital management system with patient records, appointments, and billing",
      tech: ["Vue.js", "Django", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing our successful projects and innovative solutions that have transformed businesses
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-futuristic rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View
                  </Button>
                  <Button size="sm" variant="outline" className="border-primary/50 hover:bg-primary/10">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

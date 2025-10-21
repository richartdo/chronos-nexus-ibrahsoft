import { BookOpen, Code, Lightbulb, DollarSign, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Resources = () => {
  const resourceSections = [
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Coding Tips",
      description: "Best practices, tutorials, and guides for modern software development",
      items: [
        "Clean Code Principles",
        "Design Patterns Guide",
        "Git Workflow Best Practices",
        "API Development Standards",
      ],
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Blog Articles",
      description: "Insights, trends, and news from the world of technology",
      items: [
        "Latest Tech Trends 2024",
        "AI in Business",
        "Cloud Migration Guide",
        "Cybersecurity Essentials",
      ],
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-primary" />,
      title: "Tech Tips",
      description: "Practical advice and solutions for common technical challenges",
      items: [
        "Performance Optimization",
        "Security Best Practices",
        "DevOps Automation",
        "Testing Strategies",
      ],
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Pricing & Packages",
      description: "Transparent pricing for all our services and solutions",
      items: [
        "Web Development Packages",
        "AI Solution Pricing",
        "Cloud Services Rates",
        "Support Plans",
      ],
    },
    {
      icon: <Megaphone className="h-12 w-12 text-primary" />,
      title: "Advertise With Us",
      description: "Partner with IbrahSoft to reach tech-savvy audiences",
      items: [
        "Sponsored Content",
        "Banner Advertising",
        "Newsletter Features",
        "Event Partnerships",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Resources & <span className="gradient-text">Insights</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access our collection of guides, articles, and resources to accelerate your tech journey
          </p>
        </div>

        {/* Resource Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {resourceSections.map((section, index) => (
            <div
              key={index}
              className="card-futuristic p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 animate-pulse-glow">{section.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{section.title}</h3>
              <p className="text-muted-foreground mb-6">{section.description}</p>

              {/* Items List */}
              <ul className="space-y-2 mb-6">
                {section.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                Explore
              </Button>
            </div>
          ))}
        </div>

        {/* Featured Article */}
        <div className="card-futuristic p-12 rounded-3xl mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Featured Article
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Future of <span className="gradient-text">AI in Business</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Discover how artificial intelligence is revolutionizing business operations, from automation to predictive analytics, and learn how to leverage AI for your organization's growth.
              </p>
              <Link to="/blog">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                  Read Full Article
                </Button>
              </Link>
            </div>
            <div className="card-futuristic p-8 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
                alt="AI Article"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center card-futuristic p-12 rounded-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest tech insights, tips, and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-input border border-primary/30 rounded-lg focus:outline-none focus:border-primary"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;

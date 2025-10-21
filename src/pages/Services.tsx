import { Code, Brain, Cloud, Headphones, Database, Shield, Smartphone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-16 w-16 text-primary" />,
      title: "Web Development",
      description: "Custom web applications, e-commerce platforms, and responsive websites built with modern frameworks like React, Next.js, and Vue.js",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Secure Architecture"],
    },
    {
      icon: <Brain className="h-16 w-16 text-primary" />,
      title: "AI Solutions",
      description: "Machine learning models, natural language processing, computer vision, and intelligent automation to transform your business operations",
      features: ["Predictive Analytics", "Chatbots", "Image Recognition", "Process Automation"],
    },
    {
      icon: <Cloud className="h-16 w-16 text-primary" />,
      title: "Cloud Computing",
      description: "Cloud migration, infrastructure setup, DevOps, and scalable cloud solutions on AWS, Azure, and Google Cloud platforms",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Cost Optimization"],
    },
    {
      icon: <Headphones className="h-16 w-16 text-primary" />,
      title: "IT Support",
      description: "24/7 technical support, system maintenance, network management, and troubleshooting for businesses of all sizes",
      features: ["24/7 Support", "System Monitoring", "Quick Response", "Preventive Maintenance"],
    },
    {
      icon: <Database className="h-16 w-16 text-primary" />,
      title: "Data Analytics",
      description: "Business intelligence, data visualization, big data processing, and insights to drive informed decision-making",
      features: ["Data Warehousing", "Real-time Analytics", "Custom Dashboards", "Predictive Models"],
    },
    {
      icon: <Shield className="h-16 w-16 text-primary" />,
      title: "Cybersecurity",
      description: "Comprehensive security assessments, threat detection, vulnerability management, and security training programs",
      features: ["Security Audits", "Penetration Testing", "Compliance", "Employee Training"],
    },
    {
      icon: <Smartphone className="h-16 w-16 text-primary" />,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Launch"],
    },
    {
      icon: <Globe className="h-16 w-16 text-primary" />,
      title: "Digital Marketing",
      description: "SEO, content marketing, social media management, and digital advertising to grow your online presence",
      features: ["SEO Strategy", "Social Media", "Content Creation", "PPC Campaigns"],
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-futuristic p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 animate-pulse-glow">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="card-futuristic p-12 rounded-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your project and discover how we can help you achieve your goals
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/consultation">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
                Book Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

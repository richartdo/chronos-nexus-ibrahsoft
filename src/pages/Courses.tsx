import { GraduationCap, Clock, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      title: "Python Programming",
      level: "Beginner to Advanced",
      duration: "12 weeks",
      students: "213+",
      description: "Master Python from basics to advanced concepts including data structures, OOP, and frameworks",
      modules: ["Python Basics", "Data Structures", "OOP", "Django/Flask", "Projects"],
      price: "$9.99",
    },
    {
      title: "Web Development",
      level: "Beginner to Advanced",
      duration: "16 weeks",
      students: "900+",
      description: "Learn HTML, CSS, JavaScript, React, and build modern, responsive websites",
      modules: ["HTML/CSS", "JavaScript", "React", "Node.js", "Full-Stack Projects"],
      price: "$10.00",
    },
    {
      title: "AI Automation",
      level: "Beginner",
      duration: "14 weeks",
      students: "1,800+",
      description: "Learn how to automate processes using n8n. Automate social media.",
      modules: ["OpenAI", "API intergration", "n8n", "Database tools"],
      price: "$9.99",
    },
    // {
    //   title: "Data Science",
    //   level: "Intermediate",
    //   duration: "12 weeks",
    //   // students: "2,100+",
    //   description: "Learn data analysis, visualization, and predictive modeling",
    //   modules: ["Python/R", "Statistics", "Pandas/NumPy", "Data Viz", "ML Basics"],
    //   price: "$19.99",
    // },
    // {
    //   title: "Cloud Computing",
    //   level: "Intermediate",
    //   duration: "10 weeks",
    //   // students: "1,500+",
    //   description: "Master AWS, Azure, and cloud architecture",
    //   modules: ["Cloud Basics", "AWS Services", "Azure", "DevOps", "Security"],
    //   price: "$19.99",
    // },
    // {
    //   title: "Cybersecurity",
    //   level: "Intermediate to Advanced",
    //   duration: "14 weeks",
    //   // students: "1,200+",
    //   description: "Learn ethical hacking, network security, and threat prevention",
    //   modules: ["Security Basics", "Ethical Hacking", "Network Security", "Compliance", "Incident Response"],
    //   price: "$19.99",
    // },
    {
      title: "Digital Marketing",
      level: "Beginner",
      duration: "8 weeks",
      students: "2,800+",
      description: "Master SEO, social media marketing, and digital advertising",
      modules: ["SEO", "Social Media", "Content Marketing", "Analytics", "PPC"],
      price: "$12.99",
    },
    // {
    //   title: "Graphic Design",
    //   level: "Beginner to Intermediate",
    //   duration: "10 weeks",
    //   students: "2,000+",
    //   description: "Learn design principles, Adobe Creative Suite, and UI/UX basics",
    //   modules: ["Design Theory", "Photoshop", "Illustrator", "UI/UX", "Portfolio"],
    //   price: "$19.99",
    // },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tech <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Level up your skills with our comprehensive courses designed by industry experts
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="card-futuristic p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <div className="bg-primary/20 p-3 rounded-lg inline-block animate-pulse-glow">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-2 text-foreground">{course.title}</h3>
              <p className="text-sm text-primary mb-4">{course.level}</p>
              <p className="text-muted-foreground mb-6">{course.description}</p>

              {/* Course Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  {course.students} students enrolled
                </div>
              </div>

              {/* Modules */}
              <div className="mb-6">
                <h4 className="font-semibold mb-2 text-sm">Course Modules:</h4>
                <div className="flex flex-wrap gap-2">
                  {course.modules.map((module, idx) => (
                    <span
                      key={idx}
                      className="bg-primary/10 text-primary px-2 py-1 rounded text-xs border border-primary/30"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price and CTA */}
              <div className="flex items-center justify-between pt-6 border-t border-primary/20">
                <div>
                  <span className="text-3xl font-bold gradient-text">{course.price}</span>
                </div>
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Upcoming
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 card-futuristic p-12 rounded-3xl text-center">
          <Award className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse-glow" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Learning Journey
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get certified and advance your career with our expert-led courses
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Courses;

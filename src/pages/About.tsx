import { Target, Eye, Award, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="h-12 w-12 text-primary" />,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology solutions",
    },
    {
      icon: <Eye className="h-12 w-12 text-primary" />,
      title: "Excellence",
      description: "Delivering superior quality in every project we undertake",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Reliability",
      description: "Trusted partner for businesses seeking dependable tech solutions",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Client-Focused",
      description: "Your success is our priority, every step of the way",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            About <span className="gradient-text">Us</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            IbrahSoft Solutions is a leading technology company specializing in innovative software, AI, cloud computing, and comprehensive IT solutions.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-20">
          <div className="card-futuristic p-12 rounded-3xl animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded with a vision to bridge the gap between businesses and cutting-edge technology, IbrahSoft Solutions has grown into a trusted partner for organizations seeking digital transformation.
              </p>
              <p>
                Our team of experienced professionals combines technical expertise with business acumen to deliver solutions that not only meet but exceed expectations. We believe in the power of technology to transform businesses and create lasting value.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-futuristic p-10 rounded-3xl animate-fade-in">
              <div className="mb-6 animate-pulse-glow">
                <Target className="h-16 w-16 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and competitive advantage in the digital age.
              </p>
            </div>

            <div className="card-futuristic p-10 rounded-3xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="mb-6 animate-pulse-glow">
                <Eye className="h-16 w-16 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
              <p className="text-lg text-muted-foreground">
                To be the leading technology partner recognized globally for delivering transformative solutions that shape the future of business operations.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="gradient-text">Us</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-futuristic p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center animate-pulse-glow">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="card-futuristic p-12 rounded-3xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "200+", label: "Happy Clients" },
              { number: "50+", label: "Team Members" },
              { number: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

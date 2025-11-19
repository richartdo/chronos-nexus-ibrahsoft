// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Code, Brain, Cloud, Headphones } from "lucide-react";
// import heroImage from "@/assets/hero-tech.jpg";
// import techAI from "@/assets/tech-ai.jpg";
// import techCloud from "@/assets/tech-cloud.jpg";
// import techWeb from "@/assets/tech-web.jpg";

// const Home = () => {
//   const services = [
//     {
//       icon: <Code className="h-12 w-12 text-primary" />,
//       title: "Web Development",
//       description: "Custom web applications built with cutting-edge technologies",
//       image: techWeb,
//     },
//     {
//       icon: <Brain className="h-12 w-12 text-primary" />,
//       title: "AI Solutions",
//       description: "Intelligent automation and machine learning implementations",
//       image: techAI,
//     },
//     {
//       icon: <Cloud className="h-12 w-12 text-primary" />,
//       title: "Cloud Computing",
//       description: "Scalable cloud infrastructure and migration services",
//       image: techCloud,
//     },
//     {
//       icon: <Headphones className="h-12 w-12 text-primary" />,
//       title: "IT Support",
//       description: "24/7 technical support and system maintenance",
//       image: heroImage,
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//         {/* Background Image with Overlay */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={heroImage}
//             alt="Tech Background"
//             className="w-full h-full object-cover opacity-30"
//           />
//           <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
//         </div>

//         <div className="container mx-auto px-4 py-20 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Hero Content */}
//             <div className="space-y-8 animate-fade-in-up">
//               <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//                 AI, Cloud, and Software Solutions {" "}
//                 <span className="gradient-text text-glow">for a Smarter World</span>
//               </h1>
//               <p className="text-xl md:text-2xl text-muted-foreground">
//                 Find your tech solutions with us.
//               </p>
//               <p className="text-lg text-muted-foreground max-w-lg">
//                 IbrahSoft Solutions delivers innovative software, AI, cloud computing, and IT support to transform your business into the digital future.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <Link to="/services">
//                   <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
//                     Explore Services
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                   </Button>
//                 </Link>
//                 <Link to="/consultation">
//                   <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
//                     Book Consultation
//                   </Button>
//                 </Link>
//               </div>
//             </div>

//             {/* Hero Images Grid */}
//             <div className="grid grid-cols-2 gap-4 animate-float">
//               {services.slice(0, 3).map((service, index) => (
//                 <div
//                   key={index}
//                   className="card-futuristic rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500"
//                   style={{ animationDelay: `${index * 0.2}s` }}
//                 >
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-48 object-cover"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Preview */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our <span className="gradient-text">Services</span>
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Comprehensive tech solutions tailored to your business needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="card-futuristic p-6 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <div className="mb-4 animate-pulse-glow">{service.icon}</div>
//                 <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
//                 <p className="text-muted-foreground">{service.description}</p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Link to="/services">
//               <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
//                 View All Services
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
//         <div className="container mx-auto px-4 relative z-10">
//           <div className="card-futuristic p-12 rounded-3xl text-center">
//             <h2 className="text-3xl md:text-5xl font-bold mb-6">
//               Ready to Transform Your Business?
//             </h2>
//             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Let's discuss how IbrahSoft Solutions can elevate your technology infrastructure
//             </p>
//             <Link to="/contact">
//               <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary">
//                 Get Started Today
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;






































// UNDER CONTRUCTION CODES COMMAND
import { Button } from "@/components/ui/button";
import { Construction } from "lucide-react"; // Icon for style

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4">
      {/* Construction Icon */}
      <Construction className="h-24 w-24 text-yellow-400 mb-6 animate-bounce" />

      {/* Main Heading */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center animate-fade-in-up">
        🚧 Under Construction 🚧
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-yellow-300 mb-8 text-center animate-fade-in-up">
        Our website is getting a tech makeover. We'll be live soon!
      </p>

      {/* CTA Button */}
      <Button
        size="lg"
        className="bg-yellow-400 text-gray-900 hover:bg-yellow-500 glow-primary animate-pulse"
        onClick={() => window.location.reload()}
      >
        Refresh Later
      </Button>

      {/* Optional footer */}
      <p className="mt-12 text-gray-400 text-center max-w-md animate-fade-in-up">
        Meanwhile, you can reach out to us via WhatsApp or email for any inquiries.
      </p>
    </div>
  );
};

export default Home;

import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Rise of AI in Modern Software Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build and deploy software applications in 2024",
      author: "Ibrahim Hassan",
      date: "Jan 15, 2024",
      category: "Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop",
      readTime: "5 min read",
    },
    {
      title: "Cloud Migration: A Complete Guide for Businesses",
      excerpt: "Everything you need to know about moving your infrastructure to the cloud, including best practices and common pitfalls",
      author: "Sarah Johnson",
      date: "Jan 12, 2024",
      category: "Cloud Computing",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop",
      readTime: "8 min read",
    },
    {
      title: "Cybersecurity Trends Every Business Should Know",
      excerpt: "Stay ahead of cyber threats with these essential security practices and emerging trends in the cybersecurity landscape",
      author: "Michael Chen",
      date: "Jan 10, 2024",
      category: "Cybersecurity",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "Building Scalable Web Applications with React",
      excerpt: "Best practices and architectural patterns for creating performant and maintainable React applications",
      author: "Emma Williams",
      date: "Jan 8, 2024",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop",
      readTime: "7 min read",
    },
    {
      title: "Data Analytics: Turning Information into Insights",
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth",
      author: "David Martinez",
      date: "Jan 5, 2024",
      category: "Data Science",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      readTime: "6 min read",
    },
    {
      title: "The Future of Mobile App Development",
      excerpt: "Exploring emerging technologies and frameworks shaping the next generation of mobile applications",
      author: "Lisa Anderson",
      date: "Jan 3, 2024",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop",
      readTime: "5 min read",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tech <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and innovations in technology
          </p>
        </div>

        {/* Featured Post */}
        <div className="card-futuristic rounded-3xl overflow-hidden mb-16 animate-fade-in">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative h-96 lg:h-auto">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-primary text-sm font-semibold mb-2">{blogPosts[0].category}</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center text-sm text-muted-foreground mb-6">
                <User className="h-4 w-4 mr-2 text-primary" />
                {blogPosts[0].author}
                <Calendar className="h-4 w-4 ml-4 mr-2 text-primary" />
                {blogPosts[0].date}
                <span className="ml-4">{blogPosts[0].readTime}</span>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-fit">
                Read Article
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <div
              key={index}
              className="card-futuristic rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Post Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                {/* Meta Info */}
                <div className="flex items-center text-xs text-muted-foreground mb-4">
                  <User className="h-3 w-3 mr-1 text-primary" />
                  {post.author}
                  <Calendar className="h-3 w-3 ml-3 mr-1 text-primary" />
                  {post.date}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <Button size="sm" variant="ghost" className="text-primary hover:bg-primary/10">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
            Load More Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;

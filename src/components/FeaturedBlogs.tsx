import BlogCard from "./BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FeaturedBlogs = () => {
  const featuredBlogs = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development. From AI integration to serverless architectures, discover what's next.",
      author: {
        name: "Sarah Chen",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "2 days ago",
      readTime: "8 min read",
      likes: 156,
      comments: 23,
      category: "Technology",
      featured: true,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      title: "Building Sustainable Habits: A Designer's Journey",
      excerpt: "How small changes in daily routines can lead to significant improvements in creativity and productivity. A personal reflection on sustainable design practices.",
      author: {
        name: "Marcus Rodriguez",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "4 days ago",
      readTime: "6 min read",
      likes: 89,
      comments: 12,
      category: "Design",
      trending: true,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop"
    },
    {
      title: "The Art of Minimalist Living in a Digital Age",
      excerpt: "Finding balance between digital connectivity and intentional living. Practical tips for decluttering both your physical and digital spaces.",
      author: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "1 week ago",
      readTime: "10 min read",
      likes: 234,
      comments: 45,
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Articles</h2>
            <p className="text-muted-foreground">Handpicked stories from our community</p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
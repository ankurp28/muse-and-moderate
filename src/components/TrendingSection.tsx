import BlogCard from "./BlogCard";
import { TrendingUp } from "lucide-react";

const TrendingSection = () => {
  const trendingBlogs = [
    {
      title: "Why Remote Work is Here to Stay: Data-Driven Insights",
      excerpt: "An analysis of remote work trends and their impact on productivity, employee satisfaction, and company culture.",
      author: {
        name: "David Kim",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "3 hours ago",
      readTime: "7 min read",
      likes: 412,
      comments: 67,
      category: "Business",
      trending: true
    },
    {
      title: "Machine Learning Explained: A Beginner's Guide",
      excerpt: "Demystifying machine learning concepts with practical examples and real-world applications.",
      author: {
        name: "Priya Patel",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "1 day ago",
      readTime: "12 min read",
      likes: 298,
      comments: 34,
      category: "Technology",
      trending: true
    },
    {
      title: "The Psychology of Color in User Interface Design",
      excerpt: "How color choices influence user behavior and emotional responses in digital products.",
      author: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "2 days ago",
      readTime: "9 min read",
      likes: 187,
      comments: 28,
      category: "Design",
      trending: true
    },
    {
      title: "Sustainable Travel: Exploring the World Responsibly",
      excerpt: "Tips and insights for eco-conscious travelers looking to minimize their environmental impact.",
      author: {
        name: "Luna Martinez",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
      },
      publishedAt: "3 days ago",
      readTime: "11 min read",
      likes: 156,
      comments: 22,
      category: "Travel",
      trending: true
    }
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex items-center mb-12">
          <TrendingUp className="w-6 h-6 text-primary mr-3" />
          <div>
            <h2 className="text-3xl font-bold mb-2">Trending Now</h2>
            <p className="text-muted-foreground">Most popular articles this week</p>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {trendingBlogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
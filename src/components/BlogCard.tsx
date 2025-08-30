import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Clock, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  likes: number;
  comments: number;
  category: string;
  featured?: boolean;
  trending?: boolean;
  image?: string;
}

const BlogCard = ({
  title,
  excerpt,
  author,
  publishedAt,
  readTime,
  likes,
  comments,
  category,
  featured = false,
  trending = false,
  image
}: BlogCardProps) => {
  return (
    <Card className={`card-elegant ${featured ? 'border-primary/20' : ''} group cursor-pointer`}>
      {image && (
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={image} 
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
          {trending && (
            <div className="flex items-center text-xs text-primary">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trending
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-semibold leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
          {excerpt}
        </p>
        
        <div className="flex items-center space-x-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback className="text-xs">
              {author.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <span className="text-xs text-muted-foreground">{author.name}</span>
          <span className="text-xs text-muted-foreground">•</span>
          <span className="text-xs text-muted-foreground">{publishedAt}</span>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{readTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-3 h-3" />
              <span>{likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3" />
              <span>{comments}</span>
            </div>
          </div>
          
          {featured && (
            <Button size="sm" variant="ghost" className="text-xs hover:text-primary">
              Read More
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold gradient-text">Muse</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              A modern blogging platform where creativity meets community. Share your stories with the world.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Platform</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Trending</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Categories</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Writers</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Help Center</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Community</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Guidelines</a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Get the latest articles and platform updates delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Enter your email" className="text-sm" />
              <Button size="sm" className="btn-gradient">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by the Muse team</span>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
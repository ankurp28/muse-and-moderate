import { Button } from "@/components/ui/button";
import { PenTool, User, Search, Menu } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold gradient-text">Muse</h1>
          <div className="hidden md:flex items-center space-x-2 max-w-sm">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="border-0 bg-muted/50" />
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Trending</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Categories</a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <PenTool className="w-4 h-4 mr-2" />
            Write
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm" className="btn-gradient">
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background p-4">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search articles..." className="border-0 bg-muted/50" />
            </div>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Trending</a>
              <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Categories</a>
            </nav>
            <Button variant="ghost" size="sm" className="justify-start">
              <PenTool className="w-4 h-4 mr-2" />
              Write
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
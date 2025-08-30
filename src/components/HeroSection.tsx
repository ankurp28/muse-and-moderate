import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5 py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 mr-2 text-primary" />
            Where ideas come to life
          </div>
          
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Share Your <span className="gradient-text">Stories</span> with the World
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            A modern blogging platform where creativity meets community. Write, share, and discover amazing stories from writers around the globe.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" className="btn-gradient">
              Start Writing Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Articles
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Published Articles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">5K+</div>
              <div className="text-sm text-muted-foreground">Active Writers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Monthly Readers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
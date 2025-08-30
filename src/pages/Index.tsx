import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import TrendingSection from "@/components/TrendingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedBlogs />
        <TrendingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

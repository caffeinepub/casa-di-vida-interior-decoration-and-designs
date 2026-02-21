import { ArrowDown } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
            Casa Di Vida
            <span className="block text-3xl md:text-5xl lg:text-6xl mt-4 text-gold">
              Interior Decoration and Designs
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-light">
            Transforming spaces into timeless sanctuaries of elegance and comfort
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gold hover:bg-gold/90 text-gold-foreground font-medium px-8 py-6 text-lg shadow-elegant-lg"
            >
              Start Your Journey
            </Button>
            <Button
              onClick={() => {
                const portfolioSection = document.getElementById('portfolio');
                if (portfolioSection) {
                  portfolioSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}

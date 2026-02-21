import { Ruler, Palette, Sofa, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
  {
    title: 'Space Planning',
    description: 'Optimize your living spaces with thoughtful layouts that enhance flow, functionality, and aesthetic appeal. We create harmonious environments that maximize every square foot.',
    icon: Ruler,
    image: '/assets/generated/service-space-planning.dim_800x600.png'
  },
  {
    title: 'Color Consultation',
    description: 'Discover the perfect palette for your home. Our expert color consultations bring warmth, personality, and cohesion to your interiors through carefully curated color schemes.',
    icon: Palette,
    image: '/assets/generated/service-color-consultation.dim_800x600.png'
  },
  {
    title: 'Furniture Selection',
    description: 'Curate the perfect pieces that blend style, comfort, and quality. We source and select furniture that reflects your taste while ensuring timeless elegance and durability.',
    icon: Sofa,
    image: '/assets/generated/service-furniture-selection.dim_800x600.png'
  },
  {
    title: 'Full Room Design',
    description: 'Experience complete transformations from concept to completion. Our comprehensive design service covers every detail, creating cohesive, stunning spaces that exceed expectations.',
    icon: Home,
    image: '/assets/generated/service-full-room-design.dim_800x600.png'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From initial concept to final touches, we offer comprehensive interior design services tailored to your unique vision and lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-elegant-lg transition-all duration-300 border-border/50 bg-card"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-gold/90 backdrop-blur-sm p-3 rounded-lg">
                    <Icon className="h-6 w-6 text-gold-foreground" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

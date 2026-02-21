import { Heart, Award, Users, Sparkles } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Passion for Design',
    description: 'Every project is infused with our love for creating beautiful, functional spaces'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards in craftsmanship and attention to detail'
  },
  {
    icon: Users,
    title: 'Client-Centered',
    description: 'Your vision and lifestyle guide every design decision we make'
  },
  {
    icon: Sparkles,
    title: 'Timeless Beauty',
    description: 'We create interiors that remain elegant and relevant for years to come'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                About Casa Di Vida
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Casa Di Vida, we believe that your home should be a reflection of your unique story—a sanctuary where beauty meets functionality, and every detail speaks to your personal style.
                </p>
                <p>
                  Our design philosophy centers on creating timeless interiors that blend elegance with comfort. We carefully curate each element, from color palettes to furniture selection, ensuring that every space we design feels both luxurious and livable.
                </p>
                <p>
                  With years of experience in interior decoration and design, we've helped countless clients transform their houses into homes they truly love. Our approach is collaborative, thoughtful, and always focused on exceeding your expectations.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-elegant hover:shadow-elegant-lg transition-all duration-300 border border-border/50"
                  >
                    <div className="bg-gold/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <h3 className="font-serif font-semibold text-xl mb-2">{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-serif italic text-foreground max-w-3xl mx-auto">
              "We don't just design spaces—we craft experiences that elevate your everyday life and create lasting memories."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

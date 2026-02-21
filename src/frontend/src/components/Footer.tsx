import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname)
    : 'casa-di-vida';

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-serif font-semibold mb-4">Casa Di Vida</h3>
              <p className="text-primary-foreground/80">
                Transforming spaces into timeless sanctuaries of elegance and comfort.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <button
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-gold transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-gold transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-gold transition-colors"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-gold transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-gold transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>info@casadivida.com</li>
                <li>+1 (555) 123-4567</li>
                <li>Monday - Friday: 9AM - 6PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              <span>© {currentYear} Casa Di Vida. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Built with <Heart className="h-4 w-4 text-gold fill-gold" /> using{' '}
                <a
                  href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors underline"
                >
                  caffeine.ai
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

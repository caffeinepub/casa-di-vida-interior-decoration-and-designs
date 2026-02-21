import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const portfolioCategories = [
  {
    id: 'home',
    name: 'Home',
    projects: [
      { id: 1, image: '/assets/generated/home-1.dim_800x600.png', title: 'Elegant Living Space', description: 'Sophisticated living room featuring plush seating, warm ambient lighting, and carefully curated decor that creates an inviting atmosphere for family gatherings.' },
      { id: 2, image: '/assets/generated/home-2.dim_800x600.png', title: 'Serene Master Bedroom', description: 'Tranquil master suite with soft linens, calming neutral palette, and luxurious textures that promote restful sleep and relaxation.' },
      { id: 3, image: '/assets/generated/home-3.dim_800x600.png', title: 'Modern Dining Room', description: 'Contemporary dining space with statement lighting, elegant table setting, and comfortable seating perfect for entertaining guests.' },
      { id: 4, image: '/assets/generated/home-4.dim_800x600.png', title: 'Gourmet Kitchen Design', description: 'Chef-inspired kitchen featuring marble countertops, custom cabinetry, and high-end appliances for culinary excellence.' },
      { id: 5, image: '/assets/generated/home-5.dim_800x600.png', title: 'Cozy Reading Nook', description: 'Intimate reading corner with comfortable seating, abundant natural light, and built-in shelving for your favorite books.' },
      { id: 6, image: '/assets/generated/home-6.dim_800x600.png', title: 'Spa-Like Bathroom', description: 'Luxurious bathroom retreat with elegant fixtures, natural stone finishes, and a soothing color palette for ultimate relaxation.' },
      { id: 7, image: '/assets/generated/home-7.dim_800x600.png', title: 'Charming Nursery', description: 'Gentle and nurturing nursery design with soft colors, practical storage, and whimsical touches for your little one.' },
      { id: 8, image: '/assets/generated/home-8.dim_800x600.png', title: 'Productive Home Office', description: 'Functional workspace with ergonomic furniture, ample storage, and inspiring decor to boost productivity and creativity.' },
      { id: 9, image: '/assets/generated/home-9.dim_800x600.png', title: 'Contemporary Kitchen', description: 'Sleek modern kitchen with minimalist design, smart storage solutions, and premium finishes for everyday luxury.' },
      { id: 10, image: '/assets/generated/home-10.dim_800x600.png', title: 'Luxury Bedroom Suite', description: 'Opulent bedroom featuring tufted headboard, designer lighting, and rich textiles that create a five-star hotel experience.' },
      { id: 11, image: '/assets/generated/home-11.dim_800x600.png', title: 'Open Concept Living', description: 'Spacious living area with flowing layout, natural light, and cohesive design elements that connect indoor spaces.' },
      { id: 12, image: '/assets/generated/home-12.dim_800x600.png', title: 'Minimalist Zen Bedroom', description: 'Peaceful bedroom sanctuary with clean lines, natural materials, and uncluttered design for ultimate tranquility.' },
      { id: 13, image: '/assets/generated/home-13.dim_800x600.png', title: 'Traditional Living Room', description: 'Classic living space with timeless furniture, warm wood tones, and elegant details that never go out of style.' },
      { id: 14, image: '/assets/generated/home-14.dim_800x600.png', title: 'Formal Dining Area', description: 'Sophisticated dining room with statement chandelier, refined table setting, and luxurious seating for special occasions.' },
      { id: 15, image: '/assets/generated/home-15.dim_800x600.png', title: 'Modern Master Bath', description: 'Contemporary bathroom with floating vanity, frameless glass shower, and designer fixtures for a clean aesthetic.' },
      { id: 16, image: '/assets/generated/home-bathroom-01.dim_800x600.png', title: 'Elegant Powder Room', description: 'Refined half bath with decorative wallpaper, statement mirror, and luxury fixtures for guest impressions.' },
      { id: 17, image: '/assets/generated/home-bathroom-02.dim_800x600.png', title: 'Spa Bathroom Retreat', description: 'Luxurious bathroom with soaking tub, natural materials, and serene ambiance for daily relaxation.' },
      { id: 18, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Coastal Bedroom', description: 'Breezy bedroom with light colors, natural textures, and beach-inspired accents for relaxed coastal style.' },
      { id: 19, image: '/assets/generated/home-bedroom-02.dim_800x600.png', title: 'Contemporary Master Suite', description: 'Modern bedroom with comfortable seating, entertainment center, and durable finishes for everyday living.' },
      { id: 20, image: '/assets/generated/home-bedroom-03.dim_800x600.png', title: 'Romantic Bedroom', description: 'Intimate bedroom with plush bedding, soft lighting, and personal touches for quiet moments.' },
      { id: 21, image: '/assets/generated/home-dining-01.dim_800x600.png', title: 'Elegant Dining Space', description: 'Refined dining room with sophisticated furnishings, ambient lighting, and timeless design for memorable meals.' },
      { id: 22, image: '/assets/generated/home-dining-02.dim_800x600.png', title: 'Casual Dining Area', description: 'Comfortable dining space with practical seating, warm atmosphere, and family-friendly design.' },
      { id: 23, image: '/assets/generated/home-kitchen-01.dim_800x600.png', title: 'Farmhouse Kitchen', description: 'Rustic kitchen with exposed beams, farmhouse sink, and vintage-inspired details that blend charm with functionality.' },
      { id: 24, image: '/assets/generated/home-kitchen-02.dim_800x600.png', title: 'Modern Culinary Space', description: 'Contemporary kitchen with sleek appliances, ample counter space, and efficient layout for home chefs.' },
      { id: 25, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Luxe Living Lounge', description: 'High-end living room with premium materials, statement pieces, and sophisticated design for luxury living.' },
      { id: 26, image: '/assets/generated/home-living-02.dim_800x600.png', title: 'Natural Light Haven', description: 'Sun-filled living room with large windows, light colors, and airy design that maximizes natural illumination.' },
      { id: 27, image: '/assets/generated/home-living-03.dim_800x600.png', title: 'Cozy Family Room', description: 'Inviting living space with comfortable seating, warm textures, and welcoming atmosphere for family time.' },
      { id: 28, image: '/assets/generated/home-nursery-01.dim_800x600.png', title: 'Sweet Nursery', description: 'Gentle nursery with soft colors, practical storage, and whimsical touches for your little one.' },
      { id: 29, image: '/assets/generated/home-office-01.dim_800x600.png', title: 'Home Office Sanctuary', description: 'Productive workspace with ergonomic furniture, ample storage, and inspiring decor to boost creativity.' },
      { id: 30, image: '/assets/generated/home-reading-01.dim_800x600.png', title: 'Cozy Reading Corner', description: 'Intimate reading nook with comfortable seating, abundant natural light, and built-in shelving for your favorite books.' }
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial',
    projects: [
      { id: 31, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Luxury Retail Store', description: 'High-end retail space with elegant displays, sophisticated lighting, and premium finishes that enhance the shopping experience.' },
      { id: 32, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Fine Dining Restaurant', description: 'Upscale restaurant interior with intimate seating, ambient lighting, and refined decor for memorable dining experiences.' },
      { id: 33, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Modern Coffee Shop', description: 'Contemporary cafe design with comfortable seating, industrial accents, and inviting atmosphere for coffee lovers.' },
      { id: 34, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Fashion Boutique', description: 'Chic boutique interior with curated displays, elegant fixtures, and sophisticated palette that showcases merchandise.' },
      { id: 35, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Luxury Hair Salon', description: 'Stylish salon with modern stations, flattering lighting, and comfortable seating for premium beauty services.' },
      { id: 36, image: '/assets/generated/portfolio-living-6.dim_800x600.png', title: 'Wellness Spa', description: 'Tranquil spa environment with natural materials, soothing colors, and serene ambiance for relaxation and rejuvenation.' },
      { id: 37, image: '/assets/generated/portfolio-living-7.dim_800x600.png', title: 'Fitness Center', description: 'Energizing gym space with modern equipment, motivational design, and functional layout for optimal workouts.' },
      { id: 38, image: '/assets/generated/portfolio-living-8.dim_800x600.png', title: 'Product Showroom', description: 'Sleek showroom with strategic lighting, clean lines, and professional displays that highlight products effectively.' },
      { id: 39, image: '/assets/generated/portfolio-living-9.dim_800x600.png', title: 'Cocktail Bar', description: 'Sophisticated bar interior with statement lighting, premium materials, and intimate seating for evening entertainment.' },
      { id: 40, image: '/assets/generated/portfolio-living-10.dim_800x600.png', title: 'Artisan Bakery', description: 'Warm bakery design with display cases, rustic touches, and inviting atmosphere that showcases fresh baked goods.' }
    ]
  },
  {
    id: 'office',
    name: 'Office',
    projects: [
      { id: 61, image: '/assets/generated/home-1.dim_800x600.png', title: 'Executive Office', description: 'Prestigious corner office with custom furniture, sophisticated finishes, and commanding views for leadership presence.' },
      { id: 62, image: '/assets/generated/home-2.dim_800x600.png', title: 'Conference Room', description: 'Professional meeting space with large table, integrated technology, and acoustic treatments for productive discussions.' },
      { id: 63, image: '/assets/generated/home-3.dim_800x600.png', title: 'Open Office Plan', description: 'Collaborative workspace with flexible seating, natural light, and modern design that promotes teamwork and creativity.' },
      { id: 64, image: '/assets/generated/home-4.dim_800x600.png', title: 'Corporate Reception', description: 'Impressive lobby with reception desk, comfortable seating, and branded design that welcomes clients professionally.' },
      { id: 65, image: '/assets/generated/home-5.dim_800x600.png', title: 'Private Office', description: 'Individual workspace with ergonomic furniture, ample storage, and professional design for focused work.' },
      { id: 66, image: '/assets/generated/home-6.dim_800x600.png', title: 'Employee Breakroom', description: 'Inviting break area with comfortable seating, kitchen facilities, and relaxed atmosphere for staff refreshment.' },
      { id: 67, image: '/assets/generated/home-7.dim_800x600.png', title: 'Boardroom', description: 'Formal meeting room with executive table, premium seating, and sophisticated design for important decisions.' },
      { id: 68, image: '/assets/generated/home-8.dim_800x600.png', title: 'Modern Workstations', description: 'Efficient cubicle design with privacy panels, adjustable desks, and organized layout for productive work.' },
      { id: 69, image: '/assets/generated/home-9.dim_800x600.png', title: 'Creative Studio', description: 'Inspiring workspace with flexible layout, collaborative areas, and vibrant design for creative professionals.' },
      { id: 70, image: '/assets/generated/home-10.dim_800x600.png', title: 'Tech Startup Office', description: 'Modern tech space with standing desks, casual seating, and innovative design for agile teams.' }
    ]
  },
  {
    id: 'hotels',
    name: 'Hotels',
    projects: [
      { id: 91, image: '/assets/generated/home-11.dim_800x600.png', title: 'Luxury Hotel Lobby', description: 'Grand entrance with elegant furnishings, statement lighting, and sophisticated design that welcomes guests in style.' },
      { id: 92, image: '/assets/generated/home-12.dim_800x600.png', title: 'Presidential Suite', description: 'Opulent hotel suite with premium amenities, stunning views, and five-star comfort for discerning travelers.' },
      { id: 93, image: '/assets/generated/home-13.dim_800x600.png', title: 'Hotel Restaurant', description: 'Elegant dining venue with refined decor, ambient lighting, and sophisticated atmosphere for memorable meals.' },
      { id: 94, image: '/assets/generated/home-14.dim_800x600.png', title: 'Rooftop Bar', description: 'Stylish rooftop lounge with panoramic views, contemporary design, and upscale ambiance for evening entertainment.' },
      { id: 95, image: '/assets/generated/home-15.dim_800x600.png', title: 'Spa & Wellness Center', description: 'Tranquil hotel spa with luxurious treatment rooms, relaxation areas, and serene design for guest rejuvenation.' },
      { id: 96, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Boutique Hotel Room', description: 'Intimate guest room with designer furnishings, curated art, and personalized touches for unique stays.' },
      { id: 97, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Hotel Ballroom', description: 'Grand event space with elegant chandeliers, sophisticated finishes, and flexible layout for celebrations.' },
      { id: 98, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Executive Lounge', description: 'Exclusive club lounge with comfortable seating, business amenities, and refined atmosphere for premium guests.' },
      { id: 99, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Hotel Pool Area', description: 'Resort-style pool deck with luxury loungers, cabanas, and tropical design for relaxation and leisure.' },
      { id: 100, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Concierge Desk', description: 'Welcoming service area with professional design, efficient layout, and elegant finishes for guest assistance.' }
    ]
  }
];

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string } | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of interior design projects across residential, commercial, and hospitality spaces.
          </p>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            {portfolioCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.projects.map((project) => (
                  <div
                    key={project.id}
                    className="group relative overflow-hidden rounded-lg cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImage({ image: project.image, title: project.title, description: project.description })}
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                        <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0">
            {selectedImage && (
              <div className="relative">
                <DialogClose className="absolute top-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 transition-colors">
                  <X className="h-5 w-5" />
                </DialogClose>
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

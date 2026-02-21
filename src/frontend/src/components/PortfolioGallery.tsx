import { useState } from 'react';
import { X } from 'lucide-react';
import { Dialog, DialogContent, DialogClose } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const portfolioCategories = [
  {
    id: 'home',
    name: 'Home',
    projects: [
      { id: 1, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Elegant Living Space', description: 'Sophisticated living room featuring plush seating, warm ambient lighting, and carefully curated decor that creates an inviting atmosphere for family gatherings.' },
      { id: 2, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Serene Master Bedroom', description: 'Tranquil master suite with soft linens, calming neutral palette, and luxurious textures that promote restful sleep and relaxation.' },
      { id: 3, image: '/assets/generated/home-dining-01.dim_800x600.png', title: 'Modern Dining Room', description: 'Contemporary dining space with statement lighting, elegant table setting, and comfortable seating perfect for entertaining guests.' },
      { id: 4, image: '/assets/generated/home-kitchen-01.dim_800x600.png', title: 'Gourmet Kitchen Design', description: 'Chef-inspired kitchen featuring marble countertops, custom cabinetry, and high-end appliances for culinary excellence.' },
      { id: 5, image: '/assets/generated/home-reading-01.dim_800x600.png', title: 'Cozy Reading Nook', description: 'Intimate reading corner with comfortable seating, abundant natural light, and built-in shelving for your favorite books.' },
      { id: 6, image: '/assets/generated/home-bathroom-01.dim_800x600.png', title: 'Spa-Like Bathroom', description: 'Luxurious bathroom retreat with elegant fixtures, natural stone finishes, and a soothing color palette for ultimate relaxation.' },
      { id: 7, image: '/assets/generated/home-nursery-01.dim_800x600.png', title: 'Charming Nursery', description: 'Gentle and nurturing nursery design with soft colors, practical storage, and whimsical touches for your little one.' },
      { id: 8, image: '/assets/generated/home-office-01.dim_800x600.png', title: 'Productive Home Office', description: 'Functional workspace with ergonomic furniture, ample storage, and inspiring decor to boost productivity and creativity.' },
      { id: 9, image: '/assets/generated/home-kitchen-02.dim_800x600.png', title: 'Contemporary Kitchen', description: 'Sleek modern kitchen with minimalist design, smart storage solutions, and premium finishes for everyday luxury.' },
      { id: 10, image: '/assets/generated/home-bedroom-02.dim_800x600.png', title: 'Luxury Bedroom Suite', description: 'Opulent bedroom featuring tufted headboard, designer lighting, and rich textiles that create a five-star hotel experience.' },
      { id: 11, image: '/assets/generated/home-living-02.dim_800x600.png', title: 'Open Concept Living', description: 'Spacious living area with flowing layout, natural light, and cohesive design elements that connect indoor spaces.' },
      { id: 12, image: '/assets/generated/home-bedroom-03.dim_800x600.png', title: 'Minimalist Zen Bedroom', description: 'Peaceful bedroom sanctuary with clean lines, natural materials, and uncluttered design for ultimate tranquility.' },
      { id: 13, image: '/assets/generated/home-living-03.dim_800x600.png', title: 'Traditional Living Room', description: 'Classic living space with timeless furniture, warm wood tones, and elegant details that never go out of style.' },
      { id: 14, image: '/assets/generated/home-dining-02.dim_800x600.png', title: 'Formal Dining Area', description: 'Sophisticated dining room with statement chandelier, refined table setting, and luxurious seating for special occasions.' },
      { id: 15, image: '/assets/generated/home-bathroom-02.dim_800x600.png', title: 'Modern Master Bath', description: 'Contemporary bathroom with floating vanity, frameless glass shower, and designer fixtures for a clean aesthetic.' },
      { id: 16, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Layered Living Space', description: 'Inviting living room with multiple textures, comfortable seating arrangements, and warm lighting for cozy evenings.' },
      { id: 17, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Sophisticated Lounge', description: 'Refined living area with designer furniture, curated art pieces, and elegant color palette for entertaining.' },
      { id: 18, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Coastal Living Room', description: 'Breezy living space with light colors, natural textures, and beach-inspired accents for relaxed coastal style.' },
      { id: 19, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Contemporary Family Room', description: 'Modern family space with comfortable seating, entertainment center, and durable finishes for everyday living.' },
      { id: 20, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Intimate Sitting Area', description: 'Cozy conversation nook with plush seating, soft lighting, and personal touches for quiet moments.' },
      { id: 21, image: '/assets/generated/portfolio-living-6.dim_800x600.png', title: 'Art Deco Living', description: 'Glamorous living room with vintage influences, geometric patterns, and luxurious materials for sophisticated style.' },
      { id: 22, image: '/assets/generated/portfolio-living-7.dim_800x600.png', title: 'Scandinavian Living', description: 'Light-filled living room with minimalist design, natural wood, and functional beauty in Nordic style.' },
      { id: 23, image: '/assets/generated/portfolio-living-8.dim_800x600.png', title: 'Transitional Living Space', description: 'Balanced living room blending traditional and contemporary elements for timeless appeal.' },
      { id: 24, image: '/assets/generated/portfolio-living-9.dim_800x600.png', title: 'Eclectic Living Room', description: 'Creative living space mixing styles, patterns, and eras for unique and personal expression.' },
      { id: 25, image: '/assets/generated/portfolio-living-10.dim_800x600.png', title: 'Luxe Living Lounge', description: 'High-end living room with premium materials, statement pieces, and sophisticated design for luxury living.' },
      { id: 26, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Natural Light Haven', description: 'Sun-filled living room with large windows, light colors, and airy design that maximizes natural illumination.' },
      { id: 27, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Four-Poster Bedroom', description: 'Classic bedroom with traditional four-poster bed, timeless textiles, and elegant furnishings for refined taste.' },
      { id: 28, image: '/assets/generated/home-kitchen-01.dim_800x600.png', title: 'Farmhouse Kitchen', description: 'Rustic kitchen with exposed beams, farmhouse sink, and vintage-inspired details that blend charm with functionality.' },
      { id: 29, image: '/assets/generated/home-dining-01.dim_800x600.png', title: 'Elegant Dining Space', description: 'Refined dining room with sophisticated furnishings, ambient lighting, and timeless design for memorable meals.' },
      { id: 30, image: '/assets/generated/home-bathroom-01.dim_800x600.png', title: 'Elegant Powder Room', description: 'Refined half bath with decorative wallpaper, statement mirror, and luxury fixtures for guest impressions.' }
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
      { id: 40, image: '/assets/generated/portfolio-living-10.dim_800x600.png', title: 'Artisan Bakery', description: 'Warm bakery design with display cases, rustic touches, and inviting atmosphere that showcases fresh baked goods.' },
      { id: 41, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Medical Clinic', description: 'Professional healthcare space with clean design, comfortable waiting area, and calming colors for patient comfort.' },
      { id: 42, image: '/assets/generated/home-living-02.dim_800x600.png', title: 'Art Gallery', description: 'Minimalist gallery space with optimal lighting, neutral walls, and open layout that lets artwork take center stage.' },
      { id: 43, image: '/assets/generated/home-living-03.dim_800x600.png', title: 'Photography Studio', description: 'Versatile studio with professional lighting, neutral backdrop, and functional layout for creative photography sessions.' },
      { id: 44, image: '/assets/generated/home-office-01.dim_800x600.png', title: 'Private Theater', description: 'Luxurious screening room with plush seating, acoustic treatments, and sophisticated design for cinematic experiences.' },
      { id: 45, image: '/assets/generated/home-reading-01.dim_800x600.png', title: 'VIP Lounge', description: 'Exclusive lounge area with comfortable seating, elegant decor, and refined atmosphere for premium guests.' },
      { id: 46, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Bank Branch', description: 'Professional banking space with secure design, comfortable customer areas, and sophisticated finishes that inspire trust.' },
      { id: 47, image: '/assets/generated/home-bedroom-02.dim_800x600.png', title: 'Private Library', description: 'Elegant library with custom shelving, comfortable reading areas, and classic design for book enthusiasts.' },
      { id: 48, image: '/assets/generated/home-bedroom-03.dim_800x600.png', title: 'Wine Cellar', description: 'Temperature-controlled wine storage with custom racking, ambient lighting, and sophisticated design for collectors.' },
      { id: 49, image: '/assets/generated/home-kitchen-01.dim_800x600.png', title: 'Jewelry Store', description: 'Luxurious jewelry boutique with secure displays, flattering lighting, and elegant finishes that showcase precious items.' },
      { id: 50, image: '/assets/generated/home-kitchen-02.dim_800x600.png', title: 'Flower Shop', description: 'Fresh and inviting florist with display coolers, work area, and charming design that celebrates natural beauty.' },
      { id: 51, image: '/assets/generated/home-dining-01.dim_800x600.png', title: 'Independent Bookstore', description: 'Cozy bookshop with floor-to-ceiling shelves, reading nooks, and warm atmosphere for literary exploration.' },
      { id: 52, image: '/assets/generated/home-dining-02.dim_800x600.png', title: 'Modern Pharmacy', description: 'Clean pharmacy design with efficient layout, professional displays, and welcoming customer service area.' },
      { id: 53, image: '/assets/generated/home-bathroom-01.dim_800x600.png', title: 'Dental Office', description: 'Contemporary dental practice with calming colors, modern equipment, and comfortable patient rooms for quality care.' },
      { id: 54, image: '/assets/generated/home-bathroom-02.dim_800x600.png', title: 'Veterinary Clinic', description: 'Pet-friendly clinic with durable finishes, separate waiting areas, and welcoming design for animals and owners.' },
      { id: 55, image: '/assets/generated/home-nursery-01.dim_800x600.png', title: 'Music Store', description: 'Acoustic-friendly music shop with instrument displays, soundproof rooms, and inspiring design for musicians.' },
      { id: 56, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Eyewear Boutique', description: 'Stylish optical store with elegant displays, proper lighting, and modern design for eyewear selection.' },
      { id: 57, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Pet Grooming Salon', description: 'Functional grooming space with professional equipment, easy-clean surfaces, and cheerful design for pets.' },
      { id: 58, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Yoga Studio', description: 'Peaceful yoga space with natural light, bamboo floors, and minimalist design for mindful practice.' },
      { id: 59, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Dance Studio', description: 'Professional dance space with mirrored walls, sprung floors, and motivating design for dancers of all levels.' },
      { id: 60, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Coworking Space', description: 'Flexible workspace with hot desks, meeting rooms, and collaborative design for modern professionals.' }
    ]
  },
  {
    id: 'office',
    name: 'Office',
    projects: [
      { id: 61, image: '/assets/generated/home-office-01.dim_800x600.png', title: 'Executive Office', description: 'Prestigious corner office with custom furniture, sophisticated finishes, and commanding views for leadership presence.' },
      { id: 62, image: '/assets/generated/home-dining-01.dim_800x600.png', title: 'Conference Room', description: 'Professional meeting space with large table, integrated technology, and acoustic treatments for productive discussions.' },
      { id: 63, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Open Office Plan', description: 'Collaborative workspace with flexible seating, natural light, and modern design that promotes teamwork and creativity.' },
      { id: 64, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Corporate Reception', description: 'Impressive lobby with reception desk, comfortable seating, and branded design that welcomes clients professionally.' },
      { id: 65, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Private Office', description: 'Individual workspace with ergonomic furniture, ample storage, and professional design for focused work.' },
      { id: 66, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Employee Breakroom', description: 'Inviting break area with comfortable seating, kitchen facilities, and relaxed atmosphere for staff refreshment.' },
      { id: 67, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Boardroom', description: 'Formal meeting room with executive table, premium seating, and sophisticated design for important decisions.' },
      { id: 68, image: '/assets/generated/portfolio-living-6.dim_800x600.png', title: 'Modern Workstations', description: 'Efficient cubicle design with privacy panels, adjustable desks, and organized layout for productive work.' },
      { id: 69, image: '/assets/generated/portfolio-living-7.dim_800x600.png', title: 'Creative Studio', description: 'Inspiring workspace with flexible layout, collaborative areas, and vibrant design for creative professionals.' },
      { id: 70, image: '/assets/generated/portfolio-living-8.dim_800x600.png', title: 'Tech Startup Office', description: 'Modern tech space with standing desks, casual seating, and innovative design for agile teams.' },
      { id: 71, image: '/assets/generated/portfolio-living-9.dim_800x600.png', title: 'Office Library', description: 'Quiet research area with extensive shelving, comfortable seating, and professional atmosphere for focused study.' },
      { id: 72, image: '/assets/generated/portfolio-living-10.dim_800x600.png', title: 'Training Room', description: 'Versatile learning space with flexible seating, presentation technology, and functional design for education.' },
      { id: 73, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Office Lounge', description: 'Casual collaboration area with comfortable furniture, coffee bar, and relaxed design for informal meetings.' },
      { id: 74, image: '/assets/generated/home-living-02.dim_800x600.png', title: 'Phone Booth', description: 'Private call space with acoustic panels, comfortable seating, and compact design for confidential conversations.' },
      { id: 75, image: '/assets/generated/home-living-03.dim_800x600.png', title: 'Server Room', description: 'Climate-controlled IT space with organized cabling, security features, and professional design for technology infrastructure.' },
      { id: 76, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Mail Room', description: 'Efficient mail processing area with sorting stations, storage, and organized layout for daily operations.' },
      { id: 77, image: '/assets/generated/home-bedroom-02.dim_800x600.png', title: 'Office Storage', description: 'Organized supply room with shelving systems, labeled storage, and efficient design for inventory management.' },
      { id: 78, image: '/assets/generated/home-bedroom-03.dim_800x600.png', title: 'Wellness Room', description: 'Quiet space for meditation, nursing, or rest with comfortable seating and calming design for employee wellbeing.' },
      { id: 79, image: '/assets/generated/home-kitchen-01.dim_800x600.png', title: 'Office Cafe', description: 'In-house coffee bar with seating, professional equipment, and inviting design for employee convenience.' },
      { id: 80, image: '/assets/generated/home-kitchen-02.dim_800x600.png', title: 'Office Terrace', description: 'Outdoor workspace with weather-resistant furniture, greenery, and fresh air for alternative work environment.' },
      { id: 81, image: '/assets/generated/home-dining-02.dim_800x600.png', title: 'Research Lab', description: 'Specialized laboratory with proper ventilation, work surfaces, and safety features for scientific work.' },
      { id: 82, image: '/assets/generated/home-bathroom-01.dim_800x600.png', title: 'Executive Washroom', description: 'Premium restroom facilities with luxury fixtures, elegant finishes, and sophisticated design for executives.' },
      { id: 83, image: '/assets/generated/home-bathroom-02.dim_800x600.png', title: 'Office Gym', description: 'On-site fitness facility with cardio equipment, weights, and motivating design for employee wellness.' },
      { id: 84, image: '/assets/generated/home-nursery-01.dim_800x600.png', title: 'Childcare Center', description: 'Safe and nurturing childcare space with age-appropriate furniture, bright colors, and engaging design.' },
      { id: 85, image: '/assets/generated/home-reading-01.dim_800x600.png', title: 'Quiet Room', description: 'Peaceful retreat for focused work or meditation with minimal distractions and calming atmosphere.' },
      { id: 86, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Innovation Lab', description: 'Experimental workspace with prototyping tools, flexible layout, and creative design for innovation teams.' },
      { id: 87, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Video Conference Room', description: 'Technology-equipped meeting space with professional lighting, cameras, and acoustic design for virtual meetings.' },
      { id: 88, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Hot Desk Area', description: 'Flexible workspace with shared desks, power outlets, and modern design for mobile workers.' },
      { id: 89, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Executive Lounge', description: 'Premium relaxation area with comfortable seating, refreshments, and sophisticated design for senior staff.' },
      { id: 90, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Collaboration Hub', description: 'Central meeting point with writable walls, flexible furniture, and energizing design for team collaboration.' }
    ]
  },
  {
    id: 'hotels',
    name: 'Hotels',
    projects: [
      { id: 91, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Luxury Hotel Suite', description: 'Opulent guest suite with premium furnishings, elegant decor, and five-star amenities for discerning travelers.' },
      { id: 92, image: '/assets/generated/home-bedroom-02.dim_800x600.png', title: 'Boutique Hotel Room', description: 'Stylish guest room with unique design, comfortable bedding, and personalized touches for memorable stays.' },
      { id: 93, image: '/assets/generated/home-bedroom-03.dim_800x600.png', title: 'Presidential Suite', description: 'Exclusive top-floor suite with panoramic views, separate living areas, and ultimate luxury for VIP guests.' },
      { id: 94, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Hotel Lobby', description: 'Grand entrance with impressive design, comfortable seating, and welcoming atmosphere that sets the tone.' },
      { id: 95, image: '/assets/generated/home-living-02.dim_800x600.png', title: 'Hotel Lounge', description: 'Sophisticated gathering space with bar service, comfortable seating, and elegant design for guest relaxation.' },
      { id: 96, image: '/assets/generated/home-living-03.dim_800x600.png', title: 'Hotel Restaurant', description: 'Fine dining venue with elegant table settings, ambient lighting, and refined decor for exceptional culinary experiences.' },
      { id: 97, image: '/assets/generated/home-dining-01.dim_800x600.png', title: 'Breakfast Room', description: 'Bright dining area with buffet service, comfortable seating, and inviting design for morning meals.' },
      { id: 98, image: '/assets/generated/home-dining-02.dim_800x600.png', title: 'Private Dining Room', description: 'Intimate dining space for special events with elegant furnishings and sophisticated atmosphere.' },
      { id: 99, image: '/assets/generated/home-bathroom-01.dim_800x600.png', title: 'Spa Bathroom', description: 'Luxurious hotel bathroom with soaking tub, rain shower, and premium amenities for spa-like experience.' },
      { id: 100, image: '/assets/generated/home-bathroom-02.dim_800x600.png', title: 'Marble Bathroom', description: 'Elegant bathroom with marble finishes, designer fixtures, and sophisticated design for luxury comfort.' },
      { id: 101, image: '/assets/generated/home-kitchen-01.dim_800x600.png', title: 'Hotel Kitchen', description: 'Professional culinary space with commercial equipment, efficient layout, and high standards for guest dining.' },
      { id: 102, image: '/assets/generated/home-kitchen-02.dim_800x600.png', title: 'Suite Kitchenette', description: 'Compact in-room kitchen with modern appliances, counter space, and functional design for extended stays.' },
      { id: 103, image: '/assets/generated/portfolio-living-1.dim_800x600.png', title: 'Hotel Bar', description: 'Stylish bar area with premium spirits, comfortable seating, and sophisticated ambiance for evening entertainment.' },
      { id: 104, image: '/assets/generated/portfolio-living-2.dim_800x600.png', title: 'Rooftop Terrace', description: 'Outdoor lounge with stunning views, comfortable furniture, and elegant design for al fresco relaxation.' },
      { id: 105, image: '/assets/generated/portfolio-living-3.dim_800x600.png', title: 'Hotel Spa', description: 'Tranquil wellness center with treatment rooms, relaxation areas, and serene design for rejuvenation.' },
      { id: 106, image: '/assets/generated/portfolio-living-4.dim_800x600.png', title: 'Fitness Center', description: 'Well-equipped gym with modern machines, free weights, and motivating design for guest workouts.' },
      { id: 107, image: '/assets/generated/portfolio-living-5.dim_800x600.png', title: 'Pool Area', description: 'Resort-style pool with lounge chairs, cabanas, and tropical design for leisure and recreation.' },
      { id: 108, image: '/assets/generated/portfolio-living-6.dim_800x600.png', title: 'Conference Center', description: 'Professional meeting facility with flexible spaces, modern technology, and sophisticated design for events.' },
      { id: 109, image: '/assets/generated/portfolio-living-7.dim_800x600.png', title: 'Ballroom', description: 'Grand event space with elegant chandeliers, spacious dance floor, and luxurious design for celebrations.' },
      { id: 110, image: '/assets/generated/portfolio-living-8.dim_800x600.png', title: 'Hotel Library', description: 'Quiet reading room with book collection, comfortable seating, and refined atmosphere for relaxation.' },
      { id: 111, image: '/assets/generated/portfolio-living-9.dim_800x600.png', title: 'Business Center', description: 'Professional workspace with computers, printers, and private areas for business travelers.' },
      { id: 112, image: '/assets/generated/portfolio-living-10.dim_800x600.png', title: 'Concierge Desk', description: 'Welcoming service area with knowledgeable staff and elegant design for guest assistance.' },
      { id: 113, image: '/assets/generated/home-office-01.dim_800x600.png', title: 'Executive Floor Lounge', description: 'Exclusive lounge for premium guests with refreshments, work areas, and sophisticated design.' },
      { id: 114, image: '/assets/generated/home-reading-01.dim_800x600.png', title: 'Garden Courtyard', description: 'Peaceful outdoor space with landscaping, seating areas, and natural beauty for guest enjoyment.' },
      { id: 115, image: '/assets/generated/home-nursery-01.dim_800x600.png', title: 'Kids Club', description: 'Fun and safe play area with age-appropriate activities, colorful design, and supervised entertainment.' },
      { id: 116, image: '/assets/generated/home-bedroom-01.dim_800x600.png', title: 'Honeymoon Suite', description: 'Romantic retreat with luxurious bedding, intimate lighting, and special amenities for newlyweds.' },
      { id: 117, image: '/assets/generated/home-bedroom-02.dim_800x600.png', title: 'Accessible Room', description: 'Thoughtfully designed guest room with accessibility features, comfort, and dignity for all guests.' },
      { id: 118, image: '/assets/generated/home-bedroom-03.dim_800x600.png', title: 'Penthouse Suite', description: 'Ultimate luxury accommodation with private terrace, premium amenities, and breathtaking views.' },
      { id: 119, image: '/assets/generated/home-living-01.dim_800x600.png', title: 'Hotel Corridor', description: 'Elegant hallway with sophisticated lighting, artwork, and refined design that enhances guest experience.' },
      { id: 120, image: '/assets/generated/home-living-02.dim_800x600.png', title: 'Reception Area', description: 'Welcoming check-in space with efficient layout, comfortable waiting area, and professional design.' }
    ]
  }
];

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string } | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-primary mb-4">Our Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of interior design projects across residential, commercial, office, and hospitality spaces.
          </p>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8">
            {portfolioCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {portfolioCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.projects.map((project) => (
                  <div
                    key={project.id}
                    className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                    onClick={() => setSelectedImage({ image: project.image, title: project.title, description: project.description })}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                        </div>
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
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6 bg-background">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-2">{selectedImage.title}</h3>
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

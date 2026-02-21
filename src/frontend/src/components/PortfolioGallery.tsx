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
      { id: 16, image: '/assets/generated/home-living-04.dim_800x600.png', title: 'Layered Living Space', description: 'Inviting living room with multiple textures, comfortable seating arrangements, and warm lighting for cozy evenings.' },
      { id: 17, image: '/assets/generated/home-closet-01.dim_800x600.png', title: 'Walk-In Closet', description: 'Organized dressing room with custom shelving, elegant lighting, and boutique-style display for your wardrobe.' },
      { id: 18, image: '/assets/generated/home-kitchen-03.dim_800x600.png', title: 'Farmhouse Kitchen', description: 'Rustic kitchen with exposed beams, farmhouse sink, and vintage-inspired details that blend charm with functionality.' },
      { id: 19, image: '/assets/generated/home-bedroom-04.dim_800x600.png', title: 'Coastal Bedroom', description: 'Breezy bedroom design with light colors, natural textures, and beach-inspired accents for a vacation-like feel.' },
      { id: 20, image: '/assets/generated/home-family-01.dim_800x600.png', title: 'Family Room', description: 'Comfortable family space with durable furnishings, entertainment center, and kid-friendly design for everyday living.' },
      { id: 21, image: '/assets/generated/home-sitting-01.dim_800x600.png', title: 'Intimate Sitting Area', description: 'Cozy conversation nook with plush seating, soft lighting, and personal touches for quiet moments.' },
      { id: 22, image: '/assets/generated/home-living-05.dim_800x600.png', title: 'Art Deco Living', description: 'Glamorous living room with vintage influences, geometric patterns, and luxurious materials for sophisticated style.' },
      { id: 23, image: '/assets/generated/home-bedroom-05.dim_800x600.png', title: 'Contemporary Bedroom', description: 'Modern bedroom with feature wall, platform bed, and sleek furnishings for a fresh, updated look.' },
      { id: 24, image: '/assets/generated/home-kitchen-04.dim_800x600.png', title: 'Bright White Kitchen', description: 'Airy kitchen with white cabinetry, gold hardware accents, and marble countertops for timeless elegance.' },
      { id: 25, image: '/assets/generated/home-meditation-01.dim_800x600.png', title: 'Meditation Space', description: 'Peaceful retreat with minimal furnishings, natural elements, and calming colors for mindfulness practice.' },
      { id: 26, image: '/assets/generated/home-bedroom-06.dim_800x600.png', title: 'Boutique Hotel Bedroom', description: 'Luxurious bedroom with designer touches, premium linens, and sophisticated palette for ultimate comfort.' },
      { id: 27, image: '/assets/generated/home-living-06.dim_800x600.png', title: 'Statement Living Room', description: 'Bold living space with designer furniture, dramatic lighting, and curated art pieces that make an impression.' },
      { id: 28, image: '/assets/generated/home-bathroom-03.dim_800x600.png', title: 'Elegant Powder Room', description: 'Refined half bath with decorative wallpaper, statement mirror, and luxury fixtures for guest impressions.' },
      { id: 29, image: '/assets/generated/home-living-07.dim_800x600.png', title: 'Natural Light Haven', description: 'Sun-filled living room with large windows, light colors, and airy design that maximizes natural illumination.' },
      { id: 30, image: '/assets/generated/home-bedroom-07.dim_800x600.png', title: 'Four-Poster Bedroom', description: 'Classic bedroom with traditional four-poster bed, timeless textiles, and elegant furnishings for refined taste.' }
    ]
  },
  {
    id: 'commercial',
    name: 'Commercial',
    projects: [
      { id: 31, image: '/assets/generated/commercial-retail-01.dim_800x600.png', title: 'Luxury Retail Store', description: 'High-end retail space with elegant displays, sophisticated lighting, and premium finishes that enhance the shopping experience.' },
      { id: 32, image: '/assets/generated/commercial-restaurant-01.dim_800x600.png', title: 'Fine Dining Restaurant', description: 'Upscale restaurant interior with intimate seating, ambient lighting, and refined decor for memorable dining experiences.' },
      { id: 33, image: '/assets/generated/commercial-cafe-01.dim_800x600.png', title: 'Modern Coffee Shop', description: 'Contemporary cafe design with comfortable seating, industrial accents, and inviting atmosphere for coffee lovers.' },
      { id: 34, image: '/assets/generated/commercial-boutique-01.dim_800x600.png', title: 'Fashion Boutique', description: 'Chic boutique interior with curated displays, elegant fixtures, and sophisticated palette that showcases merchandise.' },
      { id: 35, image: '/assets/generated/commercial-salon-01.dim_800x600.png', title: 'Luxury Hair Salon', description: 'Stylish salon with modern stations, flattering lighting, and comfortable seating for premium beauty services.' },
      { id: 36, image: '/assets/generated/commercial-spa-01.dim_800x600.png', title: 'Wellness Spa', description: 'Tranquil spa environment with natural materials, soothing colors, and serene ambiance for relaxation and rejuvenation.' },
      { id: 37, image: '/assets/generated/commercial-gym-01.dim_800x600.png', title: 'Fitness Center', description: 'Energizing gym space with modern equipment, motivational design, and functional layout for optimal workouts.' },
      { id: 38, image: '/assets/generated/commercial-showroom-01.dim_800x600.png', title: 'Product Showroom', description: 'Sleek showroom with strategic lighting, clean lines, and professional displays that highlight products effectively.' },
      { id: 39, image: '/assets/generated/commercial-bar-01.dim_800x600.png', title: 'Cocktail Bar', description: 'Sophisticated bar interior with statement lighting, premium materials, and intimate seating for evening entertainment.' },
      { id: 40, image: '/assets/generated/commercial-bakery-01.dim_800x600.png', title: 'Artisan Bakery', description: 'Warm bakery design with display cases, rustic touches, and inviting atmosphere that showcases fresh baked goods.' },
      { id: 41, image: '/assets/generated/commercial-clinic-01.dim_800x600.png', title: 'Medical Clinic', description: 'Professional healthcare space with clean design, comfortable waiting area, and calming colors for patient comfort.' },
      { id: 42, image: '/assets/generated/commercial-gallery-01.dim_800x600.png', title: 'Art Gallery', description: 'Minimalist gallery space with optimal lighting, neutral walls, and open layout that lets artwork take center stage.' },
      { id: 43, image: '/assets/generated/commercial-studio-01.dim_800x600.png', title: 'Photography Studio', description: 'Versatile studio with professional lighting, neutral backdrop, and functional layout for creative photography sessions.' },
      { id: 44, image: '/assets/generated/commercial-theater-01.dim_800x600.png', title: 'Private Theater', description: 'Luxurious screening room with plush seating, acoustic treatments, and sophisticated design for cinematic experiences.' },
      { id: 45, image: '/assets/generated/commercial-lounge-01.dim_800x600.png', title: 'VIP Lounge', description: 'Exclusive lounge area with comfortable seating, elegant decor, and refined atmosphere for premium guests.' },
      { id: 46, image: '/assets/generated/commercial-bank-01.dim_800x600.png', title: 'Bank Branch', description: 'Professional banking space with secure design, comfortable customer areas, and sophisticated finishes that inspire trust.' },
      { id: 47, image: '/assets/generated/commercial-library-01.dim_800x600.png', title: 'Private Library', description: 'Elegant library with custom shelving, comfortable reading areas, and classic design for book enthusiasts.' },
      { id: 48, image: '/assets/generated/commercial-wine-01.dim_800x600.png', title: 'Wine Cellar', description: 'Temperature-controlled wine storage with custom racking, ambient lighting, and sophisticated design for collectors.' },
      { id: 49, image: '/assets/generated/commercial-jewelry-01.dim_800x600.png', title: 'Jewelry Store', description: 'Luxurious jewelry boutique with secure displays, flattering lighting, and elegant finishes that showcase precious items.' },
      { id: 50, image: '/assets/generated/commercial-florist-01.dim_800x600.png', title: 'Flower Shop', description: 'Fresh and inviting florist with display coolers, work area, and charming design that celebrates natural beauty.' },
      { id: 51, image: '/assets/generated/commercial-bookstore-01.dim_800x600.png', title: 'Independent Bookstore', description: 'Cozy bookshop with floor-to-ceiling shelves, reading nooks, and warm atmosphere for literary exploration.' },
      { id: 52, image: '/assets/generated/commercial-pharmacy-01.dim_800x600.png', title: 'Modern Pharmacy', description: 'Clean pharmacy design with efficient layout, professional displays, and welcoming customer service area.' },
      { id: 53, image: '/assets/generated/commercial-dental-01.dim_800x600.png', title: 'Dental Office', description: 'Contemporary dental practice with calming colors, modern equipment, and comfortable patient rooms for quality care.' },
      { id: 54, image: '/assets/generated/commercial-vet-01.dim_800x600.png', title: 'Veterinary Clinic', description: 'Pet-friendly clinic with durable finishes, separate waiting areas, and welcoming design for animals and owners.' },
      { id: 55, image: '/assets/generated/commercial-music-01.dim_800x600.png', title: 'Music Store', description: 'Acoustic-friendly music shop with instrument displays, soundproof rooms, and inspiring design for musicians.' },
      { id: 56, image: '/assets/generated/commercial-optical-01.dim_800x600.png', title: 'Eyewear Boutique', description: 'Stylish optical store with elegant displays, proper lighting, and modern design for eyewear selection.' },
      { id: 57, image: '/assets/generated/commercial-pet-01.dim_800x600.png', title: 'Pet Grooming Salon', description: 'Functional grooming space with professional equipment, easy-clean surfaces, and cheerful design for pets.' },
      { id: 58, image: '/assets/generated/commercial-yoga-01.dim_800x600.png', title: 'Yoga Studio', description: 'Peaceful yoga space with natural light, bamboo floors, and minimalist design for mindful practice.' },
      { id: 59, image: '/assets/generated/commercial-dance-01.dim_800x600.png', title: 'Dance Studio', description: 'Professional dance space with mirrored walls, sprung floors, and motivating design for dancers of all levels.' },
      { id: 60, image: '/assets/generated/commercial-cowork-01.dim_800x600.png', title: 'Coworking Space', description: 'Flexible workspace with hot desks, meeting rooms, and collaborative design for modern professionals.' }
    ]
  },
  {
    id: 'office',
    name: 'Office',
    projects: [
      { id: 61, image: '/assets/generated/office-executive-01.dim_800x600.png', title: 'Executive Office', description: 'Prestigious corner office with custom furniture, sophisticated finishes, and commanding views for leadership presence.' },
      { id: 62, image: '/assets/generated/office-conference-01.dim_800x600.png', title: 'Conference Room', description: 'Professional meeting space with large table, integrated technology, and acoustic treatments for productive discussions.' },
      { id: 63, image: '/assets/generated/office-open-01.dim_800x600.png', title: 'Open Office Plan', description: 'Collaborative workspace with flexible seating, natural light, and modern design that promotes teamwork and creativity.' },
      { id: 64, image: '/assets/generated/office-reception-01.dim_800x600.png', title: 'Corporate Reception', description: 'Impressive lobby with reception desk, comfortable seating, and branded design that welcomes clients professionally.' },
      { id: 65, image: '/assets/generated/office-private-01.dim_800x600.png', title: 'Private Office', description: 'Individual workspace with ergonomic furniture, ample storage, and professional design for focused work.' },
      { id: 66, image: '/assets/generated/office-breakroom-01.dim_800x600.png', title: 'Employee Breakroom', description: 'Inviting break area with comfortable seating, kitchen facilities, and relaxed atmosphere for staff refreshment.' },
      { id: 67, image: '/assets/generated/office-boardroom-01.dim_800x600.png', title: 'Boardroom', description: 'Formal meeting room with executive table, premium seating, and sophisticated design for important decisions.' },
      { id: 68, image: '/assets/generated/office-cubicle-01.dim_800x600.png', title: 'Modern Workstations', description: 'Efficient cubicle design with privacy panels, adjustable desks, and organized layout for productive work.' },
      { id: 69, image: '/assets/generated/office-creative-01.dim_800x600.png', title: 'Creative Studio', description: 'Inspiring workspace with flexible layout, collaborative areas, and vibrant design for creative professionals.' },
      { id: 70, image: '/assets/generated/office-tech-01.dim_800x600.png', title: 'Tech Startup Office', description: 'Modern tech space with standing desks, casual seating, and innovative design for agile teams.' },
      { id: 71, image: '/assets/generated/office-library-01.dim_800x600.png', title: 'Office Library', description: 'Quiet research area with extensive shelving, comfortable seating, and professional atmosphere for focused study.' },
      { id: 72, image: '/assets/generated/office-training-01.dim_800x600.png', title: 'Training Room', description: 'Versatile learning space with flexible seating, presentation technology, and functional design for education.' },
      { id: 73, image: '/assets/generated/office-lounge-01.dim_800x600.png', title: 'Office Lounge', description: 'Casual collaboration area with comfortable furniture, coffee bar, and relaxed design for informal meetings.' },
      { id: 74, image: '/assets/generated/office-phone-01.dim_800x600.png', title: 'Phone Booth', description: 'Private call space with acoustic panels, comfortable seating, and compact design for confidential conversations.' },
      { id: 75, image: '/assets/generated/office-server-01.dim_800x600.png', title: 'Server Room', description: 'Climate-controlled IT space with organized cabling, security features, and professional design for technology infrastructure.' },
      { id: 76, image: '/assets/generated/office-mailroom-01.dim_800x600.png', title: 'Mail Room', description: 'Efficient mail processing area with sorting stations, storage, and organized layout for daily operations.' },
      { id: 77, image: '/assets/generated/office-storage-01.dim_800x600.png', title: 'Office Storage', description: 'Organized supply room with shelving systems, labeled storage, and efficient design for inventory management.' },
      { id: 78, image: '/assets/generated/office-wellness-01.dim_800x600.png', title: 'Wellness Room', description: 'Quiet space for meditation, nursing, or rest with comfortable seating and calming design for employee wellbeing.' },
      { id: 79, image: '/assets/generated/office-cafe-01.dim_800x600.png', title: 'Office Cafe', description: 'In-house coffee bar with seating, professional equipment, and inviting design for employee convenience.' },
      { id: 80, image: '/assets/generated/office-terrace-01.dim_800x600.png', title: 'Office Terrace', description: 'Outdoor workspace with weather-resistant furniture, greenery, and fresh air for alternative work environment.' },
      { id: 81, image: '/assets/generated/office-lab-01.dim_800x600.png', title: 'Research Lab', description: 'Specialized laboratory with proper ventilation, work surfaces, and safety features for scientific work.' },
      { id: 82, image: '/assets/generated/office-print-01.dim_800x600.png', title: 'Print Center', description: 'Centralized printing area with multiple devices, paper storage, and efficient layout for document production.' },
      { id: 83, image: '/assets/generated/office-security-01.dim_800x600.png', title: 'Security Office', description: 'Monitoring station with multiple screens, secure access, and professional design for building security.' },
      { id: 84, image: '/assets/generated/office-archive-01.dim_800x600.png', title: 'Archive Room', description: 'Climate-controlled document storage with filing systems, organized shelving, and secure design for records.' },
      { id: 85, image: '/assets/generated/office-studio-01.dim_800x600.png', title: 'Recording Studio', description: 'Soundproof recording space with acoustic treatments, professional equipment, and technical design for audio work.' },
      { id: 86, image: '/assets/generated/office-workshop-01.dim_800x600.png', title: 'Workshop Space', description: 'Hands-on work area with tool storage, work benches, and durable finishes for practical projects.' },
      { id: 87, image: '/assets/generated/office-showroom-01.dim_800x600.png', title: 'Product Showroom', description: 'Professional display area with strategic lighting, organized layout, and elegant design for client presentations.' },
      { id: 88, image: '/assets/generated/office-kitchen-01.dim_800x600.png', title: 'Office Kitchen', description: 'Full kitchen facility with appliances, dining area, and functional design for employee meals and events.' },
      { id: 89, image: '/assets/generated/office-gym-01.dim_800x600.png', title: 'Office Fitness Center', description: 'On-site gym with cardio equipment, weights, and motivating design for employee health and wellness.' },
      { id: 90, image: '/assets/generated/office-game-01.dim_800x600.png', title: 'Game Room', description: 'Recreation area with games, comfortable seating, and fun design for employee relaxation and team building.' }
    ]
  },
  {
    id: 'hotels',
    name: 'Hotels',
    projects: [
      { id: 91, image: '/assets/generated/hotel-lobby-01.dim_800x600.png', title: 'Grand Hotel Lobby', description: 'Impressive entrance with soaring ceilings, elegant seating, and luxurious finishes that create memorable first impressions.' },
      { id: 92, image: '/assets/generated/hotel-suite-01.dim_800x600.png', title: 'Presidential Suite', description: 'Opulent suite with separate living area, premium furnishings, and five-star amenities for distinguished guests.' },
      { id: 93, image: '/assets/generated/hotel-room-01.dim_800x600.png', title: 'Deluxe Guest Room', description: 'Comfortable hotel room with quality bedding, modern amenities, and sophisticated design for restful stays.' },
      { id: 94, image: '/assets/generated/hotel-restaurant-01.dim_800x600.png', title: 'Hotel Restaurant', description: 'Elegant dining venue with refined table settings, ambient lighting, and upscale design for exceptional cuisine.' },
      { id: 95, image: '/assets/generated/hotel-bar-01.dim_800x600.png', title: 'Hotel Bar', description: 'Sophisticated cocktail lounge with premium spirits display, comfortable seating, and intimate atmosphere.' },
      { id: 96, image: '/assets/generated/hotel-spa-01.dim_800x600.png', title: 'Hotel Spa', description: 'Luxurious spa facility with treatment rooms, relaxation areas, and serene design for ultimate pampering.' },
      { id: 97, image: '/assets/generated/hotel-pool-01.dim_800x600.png', title: 'Indoor Pool', description: 'Resort-style pool area with comfortable loungers, elegant finishes, and inviting atmosphere for relaxation.' },
      { id: 98, image: '/assets/generated/hotel-ballroom-01.dim_800x600.png', title: 'Grand Ballroom', description: 'Spectacular event space with crystal chandeliers, elegant decor, and flexible layout for weddings and galas.' },
      { id: 99, image: '/assets/generated/hotel-meeting-01.dim_800x600.png', title: 'Meeting Room', description: 'Professional conference space with modern technology, comfortable seating, and business-appropriate design.' },
      { id: 100, image: '/assets/generated/hotel-concierge-01.dim_800x600.png', title: 'Concierge Desk', description: 'Welcoming service area with elegant design, organized workspace, and professional atmosphere for guest assistance.' },
      { id: 101, image: '/assets/generated/hotel-corridor-01.dim_800x600.png', title: 'Hotel Corridor', description: 'Elegant hallway with sophisticated lighting, artwork, and refined finishes that enhance the guest experience.' },
      { id: 102, image: '/assets/generated/hotel-penthouse-01.dim_800x600.png', title: 'Penthouse Suite', description: 'Exclusive top-floor accommodation with panoramic views, luxury furnishings, and premium amenities.' },
      { id: 103, image: '/assets/generated/hotel-breakfast-01.dim_800x600.png', title: 'Breakfast Room', description: 'Bright dining area with buffet stations, comfortable seating, and welcoming design for morning meals.' },
      { id: 104, image: '/assets/generated/hotel-library-01.dim_800x600.png', title: 'Hotel Library', description: 'Quiet reading room with book collection, comfortable chairs, and refined atmosphere for relaxation.' },
      { id: 105, image: '/assets/generated/hotel-terrace-01.dim_800x600.png', title: 'Rooftop Terrace', description: 'Outdoor lounge with stunning views, comfortable seating, and elegant design for al fresco dining and drinks.' },
      { id: 106, image: '/assets/generated/hotel-gym-01.dim_800x600.png', title: 'Fitness Center', description: 'Well-equipped gym with modern machines, free weights, and motivating design for guest workouts.' },
      { id: 107, image: '/assets/generated/hotel-business-01.dim_800x600.png', title: 'Business Center', description: 'Professional workspace with computers, printers, and quiet environment for business travelers.' },
      { id: 108, image: '/assets/generated/hotel-lounge-01.dim_800x600.png', title: 'Executive Lounge', description: 'Private club area with complimentary refreshments, comfortable seating, and exclusive atmosphere for premium guests.' },
      { id: 109, image: '/assets/generated/hotel-bridal-01.dim_800x600.png', title: 'Bridal Suite', description: 'Elegant preparation room with vanity area, comfortable seating, and beautiful design for wedding parties.' },
      { id: 110, image: '/assets/generated/hotel-chapel-01.dim_800x600.png', title: 'Wedding Chapel', description: 'Intimate ceremony space with elegant decor, comfortable seating, and romantic atmosphere for special moments.' },
      { id: 111, image: '/assets/generated/hotel-garden-01.dim_800x600.png', title: 'Hotel Garden', description: 'Landscaped outdoor space with walking paths, seating areas, and natural beauty for peaceful retreats.' },
      { id: 112, image: '/assets/generated/hotel-kids-01.dim_800x600.png', title: 'Kids Club', description: 'Playful activity room with games, crafts, and safe design for young guests entertainment.' },
      { id: 113, image: '/assets/generated/hotel-wine-01.dim_800x600.png', title: 'Wine Cellar', description: 'Temperature-controlled wine storage with tasting area, elegant displays, and sophisticated design for connoisseurs.' },
      { id: 114, image: '/assets/generated/hotel-cigar-01.dim_800x600.png', title: 'Cigar Lounge', description: 'Exclusive smoking room with leather seating, humidor, and refined atmosphere for cigar enthusiasts.' },
      { id: 115, image: '/assets/generated/hotel-theater-01.dim_800x600.png', title: 'Private Cinema', description: 'Luxury screening room with plush seating, state-of-the-art technology, and intimate design for movie nights.' },
      { id: 116, image: '/assets/generated/hotel-casino-01.dim_800x600.png', title: 'Casino Floor', description: 'Exciting gaming area with slot machines, table games, and vibrant design for entertainment.' },
      { id: 117, image: '/assets/generated/hotel-nightclub-01.dim_800x600.png', title: 'Hotel Nightclub', description: 'Dynamic entertainment venue with dance floor, DJ booth, and energetic design for nightlife.' },
      { id: 118, image: '/assets/generated/hotel-sauna-01.dim_800x600.png', title: 'Sauna & Steam Room', description: 'Wellness facility with wood finishes, proper ventilation, and relaxing design for heat therapy.' },
      { id: 119, image: '/assets/generated/hotel-salon-01.dim_800x600.png', title: 'Beauty Salon', description: 'Full-service salon with styling stations, premium products, and elegant design for guest pampering.' },
      { id: 120, image: '/assets/generated/hotel-boutique-01.dim_800x600.png', title: 'Hotel Boutique', description: 'Retail shop with curated merchandise, elegant displays, and sophisticated design for guest shopping.' }
    ]
  }
];

export default function PortfolioGallery() {
  const [selectedImage, setSelectedImage] = useState<{ image: string; title: string; description: string } | null>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our collection of beautifully designed spaces. Each project reflects our commitment to creating interiors that inspire and delight.
          </p>
        </div>

        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
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
                    className="group relative overflow-hidden rounded-lg cursor-pointer shadow-elegant hover:shadow-elegant-lg transition-all duration-300"
                    onClick={() => setSelectedImage(project)}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-serif font-semibold text-lg mb-1">{project.title}</h3>
                        <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto"
                />
                <div className="p-6 bg-card">
                  <h3 className="font-serif font-semibold text-2xl mb-2">{selectedImage.title}</h3>
                  <p className="text-muted-foreground">{selectedImage.description}</p>
                </div>
                <DialogClose className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors">
                  <X className="h-5 w-5" />
                </DialogClose>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

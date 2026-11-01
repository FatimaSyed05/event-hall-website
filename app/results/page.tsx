"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, MapPin, Star, Users, Snowflake, Zap, Car, Flower2, UtensilsCrossed, X, Wind, Volume2, Tv, Sparkles, Toilet } from "lucide-react";
import Link from "next/link";

// Watercolor Flowers Background
const WatercolorFlowersBg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          <radialGradient id="flowerGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="flowerGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="flowerGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          <path id="petal" d="M0,0 Q50,-30 100,0 Q50,30 0,0" />
        </defs>
        <g transform="translate(150, 150) rotate(0)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(0)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(72)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(144)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(216)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(288)" opacity="0.8" />
          <circle cx="100" cy="100" r="15" fill="#D4AF37" opacity="0.3" />
        </g>
        <g transform="translate(950, 200) rotate(15)">
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(0)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(72)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(144)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(216)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(288)" opacity="0.7" />
          <circle cx="120" cy="120" r="18" fill="#D4AF37" opacity="0.25" />
        </g>
        <g transform="translate(1000, 500) rotate(-10)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(0)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(72)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(144)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(216)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(288)" opacity="0.75" />
          <circle cx="140" cy="140" r="20" fill="#D4AF37" opacity="0.3" />
        </g>
        <g transform="translate(200, 700) rotate(20)">
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(0)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(72)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(144)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(216)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(288)" opacity="0.7" />
          <circle cx="110" cy="110" r="16" fill="#D4AF37" opacity="0.25" />
        </g>
        <g transform="translate(900, 750) rotate(-15)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(0)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(72)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(144)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(216)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(288)" opacity="0.75" />
          <circle cx="130" cy="130" r="19" fill="#D4AF37" opacity="0.3" />
        </g>
        <g transform="translate(400, 300) rotate(25)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(288)" opacity="0.5" />
          <circle cx="60" cy="60" r="10" fill="#D4AF37" opacity="0.2" />
        </g>
        <g transform="translate(750, 350) rotate(-10)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(288)" opacity="0.5" />
          <circle cx="70" cy="70" r="11" fill="#D4AF37" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
};

// EXACT Sample Halls Data
const allHallsData = [
  {
    id: 1,
    name: "Seven Star Event Complex",
    location: "Lahore",
    facilities: ["AC", "Generator", "Parking", "Decoration"],
    capacity: "Large",
    capacityPax: 800,
    price: 210000,
    rating: 4.3,
    reviews: 995,
    image: "pictures/hall-bg8.jpg",
  },
  {
    id: 2,
    name: "Royal Palace",
    location: "Sheikhupura",
    facilities: ["AC", "Generator", "Catering"],
    capacity: "Medium",
    capacityPax: 500,
    price: 350000,
    rating: 4.6,
    reviews: 98,
    image: "pictures/hall-bg5.jpg",
  },
  {
    id: 3,
    name: "Dynasty Gulberg Event Complex",
    location: "Lahore",
    facilities: ["AC", "Parking", "Special Lights", "Decoration"],
    capacity: "Medium",
    capacityPax: 600,
    price: 180000,
    rating: 4.5,
    reviews: 1403,
    image: "pictures/hall-bg7.jpg",
  },
  {
    id: 4,
    name: "Koh-e-Noor Marquee",
    location: "Farooqabad",
    facilities: ["AC", "Generator", "Parking", "Catering"],
    capacity: "Medium",
    capacityPax: 400,
    price: 220000,
    rating: 4.1,
    reviews: 196,
    image: "pictures/hall-bg9.jpg",
  },
  {
    id: 5,
    name: "Liansa Marquee",
    location: "Lahore",
    facilities: ["AC", "Generator", "Catering", "Washroom", "Decoration"],
    capacity: "Medium",
    capacityPax: 400,
    price: 95000,
    rating: 4.7,
    reviews: 101,
    image: "pictures/hall-bg3.jpg",
  },
  {
    id: 6,
    name: "Grand Nexus Marquee",
    location: "Lahore",
    facilities: ["AC", "Parking", "Sound System", "Catering"],
    capacity: "Large",
    capacityPax: 500,
    price: 145000,
    rating: 4.7,
    reviews: 300,
    image: "pictures/hall-bg2.jpg",
  },
  {
    id: 7,
    name: "Shershah Palace & Farmhouse",
    location: "Lahore",
    facilities: ["Air Ventilation", "Decoration", "Projector", "Special Lights"],
    capacity: "Large",
    capacityPax: 1000,
    price: 150000,
    rating: 5,
    reviews: 505,
    image: "pictures/hall-bg1.jpg",
  },
];

// 100% MATCHING Mapping: Sidebar keys -> Data strings
const facilityMapping: Record<string, string> = {
  ac: "AC",
  generator: "Generator",
  parking: "Parking",
  decoration: "Decoration",
  catering: "Catering",
  ventilation: "Air Ventilation",
  soundSystem: "Sound System",
  washroom: "Washroom",
  speciallights: "Special Lights",
  projector: "Projector",
};

const getFacilityIcon = (facility: string, size = 16) => {
  switch (facility) {
    case "AC": return <Snowflake size={size} />;
    case "Generator": return <Zap size={size} />;
    case "Parking": return <Car size={size} />;
    case "Decoration": return <Flower2 size={size} />;
    case "Catering": return <UtensilsCrossed size={size} />;
    case "Air Ventilation": return <Wind size={size} />;
    case "Sound System": return <Volume2 size={size} />;
    case "Special Lights": return <Sparkles size={size} />;
    case "Projector": return <Tv size={size} />;
    case "Washroom": return <Toilet size={size} />;
    default: return null;
  }
};

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [activeFilters, setActiveFilters] = useState({
    category: searchParams.get("category") || "",
    facilities: searchParams.get("facilities")?.split(",").filter(Boolean) || [],
    capacity: searchParams.get("capacity") || "",
    priceMin: searchParams.get("priceMin") ? Number(searchParams.get("priceMin")) : 0,
    priceMax: searchParams.get("priceMax") ? Number(searchParams.get("priceMax")) : 500000,
  });

  const [sortBy, setSortBy] = useState("recommended");
  const [filteredHalls, setFilteredHalls] = useState(allHallsData);

  // ✅ FIXED: useEffect block is now complete and error-free
  useEffect(() => {
    let results = [...allHallsData];

    // 1. Map sidebar keys to exact data strings
    const selectedFacilities = activeFilters.facilities
      .map(f => f.trim())
      .map(f => facilityMapping[f])
      .filter(Boolean);

    if (selectedFacilities.length > 0) {
      results = results.filter(h => 
        selectedFacilities.every(f => h.facilities.includes(f))
      );
    }

    // 2. Case-insensitive capacity match
    if (activeFilters.capacity) {
      results = results.filter(h => 
        h.capacity.toLowerCase() === activeFilters.capacity.toLowerCase()
      );
    }

    // 3. Price range match
    results = results.filter(h => 
      h.price >= activeFilters.priceMin && h.price <= activeFilters.priceMax
    );

    // 4. Sort
    if (sortBy === "price-low") {
      results.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      results.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      results.sort((a, b) => b.rating - a.rating);
    }

    setFilteredHalls(results);
  }, [activeFilters, sortBy]);

  const removeFilter = (type: string, value?: string) => {
    setActiveFilters(prev => {
      if (type === "capacity") return { ...prev, capacity: "" };
      if (type === "facility" && value) {
        return { ...prev, facilities: prev.facilities.filter(f => f !== value) };
      }
      return prev;
    });
  };

  const clearAllFilters = () => {
    setActiveFilters({
      category: "",
      facilities: [],
      capacity: "",
      priceMin: 0,
      priceMax: 500000,
    });
  };

  const formatPrice = (price: number) => `PKR ${price.toLocaleString()}`;

  const getActiveFilterTags = () => {
    const tags: { type: string; label: string; value?: string }[] = [];
    activeFilters.facilities.forEach(f => {
      const cleanKey = f.trim();
      tags.push({ type: "facility", label: facilityMapping[cleanKey] || cleanKey, value: cleanKey });
    });
    if (activeFilters.capacity) {
      const cap = activeFilters.capacity.toLowerCase();
      const label = cap === "small" ? "Small (up to 200)" : cap === "medium" ? "Medium (201-500)" : "Large (501+)";
      tags.push({ type: "capacity", label });
    }
    return tags;
  };

  const activeTags = getActiveFilterTags();

  return (
    <div className="min-h-screen bg-[#FAF5F0] relative">
      <WatercolorFlowersBg />

      <nav className="bg-[#3B0D22] shadow-lg sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
                <path d="M8 56 L8 28 C8 16 18 8 32 8 C46 8 56 16 56 28 L56 56" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
                <path d="M14 56 L14 30 C14 20 22 14 32 14 C42 14 50 20 50 30 L50 56" stroke="#D4AF37" strokeWidth="2" fill="none"/>
                <line x1="32" y1="8" x2="32" y2="22" stroke="#D4AF37" strokeWidth="1.5"/>
                <path d="M26 22 L38 22 L36 26 L28 26 Z" fill="#D4AF37"/>
                <path d="M28 26 L36 26 L34 34 L30 34 Z" fill="#D4AF37" opacity="0.9"/>
                <path d="M30 34 L34 34 L32 38 Z" fill="#D4AF37"/>
                <line x1="6" y1="56" x2="58" y2="56" stroke="#D4AF37" strokeWidth="2.5"/>
              </svg>
              <div className="flex items-baseline">
                <h1 className="text-3xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Event</h1>
                <h1 className="text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>Halls</h1>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/" className="text-lg font-medium text-white hover:text-[#D4AF37] transition" style={{ fontFamily: "'Playfair Display', serif" }}>Home</Link>
              <Link href="/halls" className="text-lg font-medium text-white hover:text-[#D4AF37] transition" style={{ fontFamily: "'Playfair Display', serif" }}>Halls</Link>
              <Link href="/my-bookings" className="text-lg font-medium text-white hover:text-[#D4AF37] transition" style={{ fontFamily: "'Playfair Display', serif" }}>My Bookings</Link>
              <Link href="/notifications" className="text-lg font-medium text-white hover:text-[#D4AF37] transition" style={{ fontFamily: "'Playfair Display', serif" }}>Notifications</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-white hover:text-[#D4AF37] font-medium transition">Login</Link>
              <Link href="/signup" className="bg-[#D4AF37] text-[#3B0D22] px-5 py-2.5 rounded-lg hover:bg-[#b8954a] transition font-bold">Sign Up</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <button onClick={() => router.back()} className="mb-6 text-gray-500 hover:text-gray-500 transition-colors flex items-center gap-2 group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold"></span>
        </button>

        {/* ✅ FIXED: "Clear All" button is now OUTSIDE the .map() loop */}
        {activeTags.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap items-center gap-2">
              {activeTags.map((tag, index) => (
                <span key={index} className="inline-flex items-center gap-2 bg-white border border-[#D4AF37] text-[#3B0D22] px-4 py-2 rounded-full text-sm font-medium" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {tag.label}
                  <button onClick={() => removeFilter(tag.type, tag.value)} className="hover:text-[#D4AF37] transition-colors">
                    <X size={14} />
                  </button>
                </span>
              ))}
              
              <button 
                onClick={clearAllFilters} 
                className="inline-flex items-center gap-1 text-[#3B0D22] hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        )}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3B0D22]" style={{ fontFamily: "'Playfair Display', serif" }}>
              {filteredHalls.length} Event Halls Found
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <label className="text-sm text-gray-600 font-medium">Sort by:</label>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-white border border-[#E8D5C5] text-[#3B0D22] px-4 py-2 rounded-lg text-sm font-medium focus:outline-none focus:border-[#D4AF37] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>
              <option value="recommended">Recommended</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>

        {filteredHalls.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHalls.map((hall) => (
              <div key={hall.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
                <div className="relative h-48 overflow-hidden">
                  <img src={hall.image} alt={hall.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{hall.name}</h3>
                  <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/> {hall.location}</p>
                  <div className="flex items-center gap-3 mb-3 text-[#D4AF37]">
                    {hall.facilities.map((facility, idx) => (
                      <div key={idx} title={facility}>{getFacilityIcon(facility, 18)}</div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <Users size={14} className="text-[#D4AF37]" />
                    <span>Up to {hall.capacityPax} pax</span>
                  </div>
                  <p className="text-[#3B0D22] font-bold text-lg mb-2">{formatPrice(hall.price)}</p>
                  <div className="flex items-center text-yellow-500 text-sm mb-4">
                    <Star size={14} fill="currentColor" className="mr-1"/>
                    <span className="font-semibold mr-1">{hall.rating}</span>
                    <span className="text-gray-400">({hall.reviews} reviews)</span>
                  </div>
                  <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/80 backdrop-blur-sm rounded-xl border border-[#E8D5C5]">
            <div className="w-20 h-20 bg-[#FAF5F0] rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-[#D4AF37]">
              <MapPin className="h-10 w-10 text-[#D4AF37]" />
            </div>
            <h3 className="text-2xl font-bold text-[#3B0D22] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>No halls found</h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">We couldn't find any halls matching your filters. Try adjusting your criteria.</p>
            <button onClick={clearAllFilters} className="bg-[#3B0D22] hover:bg-[#4a0222] text-white px-6 py-2.5 rounded-lg font-semibold transition" style={{ fontFamily: "'Playfair Display', serif" }}>Clear All Filters</button>
          </div>
        )}
      </div>

      <footer className="bg-[#3B0D22] text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>EventHalls</h3>
              <p className="text-gray-300 text-sm leading-relaxed">The best platform to find and book event halls for your <span className="whitespace-nowrap">special moments.</span></p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>Contact Us</h3>
              <p className="text-gray-300 text-sm flex items-center mb-2">+92 3355733482</p>
              <p className="text-gray-300 text-sm">zdua2471@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', serif" }}>Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/halls" className="hover:text-[#D4AF37] transition">All Halls</Link></li>
                <li><Link href="/login" className="hover:text-[#D4AF37] transition">Login</Link></li>
                <li><Link href="/signup" className="hover:text-[#D4AF37] transition">Sign Up</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5a1d3a] mt-10 pt-8 text-center text-gray-400 text-sm">© 2026 All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
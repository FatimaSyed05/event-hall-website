"use client";
import FilterSidebar from "./components/FilterSidebar";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MapPin, Star, Menu, Phone, Mail, Search, Calendar, Users } from "lucide-react";

// ✅ 1. NAYA WATERCOLOR BOTANICAL BACKGROUND COMPONENT
const WatercolorFlowersBg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Soft watercolor gradient for petals */}
          <radialGradient id="flowerGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c7a228" stopOpacity="0.4" />
            <stop offset="60%" stopColor="#c7a228" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="flowerGradient2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c7a228" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#c7a228" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>
          
          <radialGradient id="flowerGradient3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
            <stop offset="60%" stopColor="#c7a228" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </radialGradient>

          {/* Flower petal shape */}
          <path id="petal" d="M0,0 Q50,-30 100,0 Q50,30 0,0" />
        </defs>

        {/* ========== LARGE WATERCOLOR FLOWERS ========== */}
        
        {/* Flower 1 - Top Left */}
        <g transform="translate(150, 150) rotate(0)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(0)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(72)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(144)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(216)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(288)" opacity="0.8" />
          <circle cx="100" cy="100" r="15" fill="#c7a228" opacity="0.3" />
        </g>

        {/* Flower 2 - Top Right */}
        <g transform="translate(950, 200) rotate(15)">
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(0)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(72)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(144)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(216)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(120,120) rotate(288)" opacity="0.7" />
          <circle cx="120" cy="120" r="18" fill="#D4AF37" opacity="0.25" />
        </g>

        {/* Flower 3 - Center Right */}
        <g transform="translate(1000, 500) rotate(-10)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(0)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(72)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(144)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(216)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(140,140) rotate(288)" opacity="0.75" />
          <circle cx="140" cy="140" r="20" fill="#c7a228" opacity="0.3" />
        </g>

        {/* Flower 4 - Bottom Left */}
        <g transform="translate(200, 700) rotate(20)">
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(0)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(72)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(144)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(216)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(110,110) rotate(288)" opacity="0.7" />
          <circle cx="110" cy="110" r="16" fill="#D4AF37" opacity="0.25" />
        </g>

        {/* Flower 5 - Bottom Right */}
        <g transform="translate(900, 750) rotate(-15)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(0)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(72)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(144)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(216)" opacity="0.75" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(130,130) rotate(288)" opacity="0.75" />
          <circle cx="130" cy="130" r="19" fill="#c7a228" opacity="0.3" />
        </g>

        {/* Flower 6 - Center Left */}
        <g transform="translate(100, 450) rotate(10)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(0)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(72)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(144)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(216)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(288)" opacity="0.6" />
          <circle cx="90" cy="90" r="14" fill="#D4AF37" opacity="0.25" />
        </g>

        {/* Flower 7 - Top Center */}
        <g transform="translate(550, 100) rotate(5)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(0)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(72)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(144)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(216)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(288)" opacity="0.65" />
          <circle cx="100" cy="100" r="15" fill="#c7a228" opacity="0.25" />
        </g>

        {/* Flower 8 - Bottom Center */}
        <g transform="translate(600, 800) rotate(-20)">
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(0)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(72)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(144)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(216)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(288)" opacity="0.7" />
          <circle cx="115" cy="115" r="17" fill="#D4AF37" opacity="0.25" />
        </g>

        {/* ========== SMALLER FAINT FLOWERS ========== */}
        
        {/* Small flower 1 */}
        <g transform="translate(400, 300) rotate(25)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(288)" opacity="0.5" />
          <circle cx="60" cy="60" r="10" fill="#c7a228" opacity="0.2" />
        </g>

        {/* Small flower 2 */}
        <g transform="translate(750, 350) rotate(-10)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(288)" opacity="0.5" />
          <circle cx="70" cy="70" r="11" fill="#D4AF37" opacity="0.2" />
        </g>

        {/* Small flower 3 */}
        <g transform="translate(300, 600) rotate(15)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(288)" opacity="0.5" />
          <circle cx="65" cy="65" r="10" fill="#c7a228" opacity="0.2" />
        </g>

        {/* Small flower 4 */}
        <g transform="translate(850, 600) rotate(-5)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(288)" opacity="0.5" />
          <circle cx="75" cy="75" r="12" fill="#D4AF37" opacity="0.2" />
        </g>

        {/* Small flower 5 */}
        <g transform="translate(500, 550) rotate(30)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(55,55) rotate(0)" opacity="0.45" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(55,55) rotate(72)" opacity="0.45" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(55,55) rotate(144)" opacity="0.45" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(55,55) rotate(216)" opacity="0.45" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(55,55) rotate(288)" opacity="0.45" />
          <circle cx="55" cy="55" r="9" fill="#D4AF37" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
};
export default function Home() {
   const router = useRouter();
  const videos = ["/videos/hall-bg3.mp4", "/videos/hall-bg4.mp4", "/videos/hall-bg5.mp4", "/videos/hall-bg6.mp4"];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [location, setLocation] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  const handleApplyFilters = (filters: any) => {
    console.log("Filters Applied:", filters);
  };

  const handleVideoEnd = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => console.log("Autoplay prevented:", error));
      }
    }
  }, [currentVideoIndex]);

    const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.set("location", location);
    if (date) params.set("date", date);
    if (guests) params.set("guests", guests);

    // Redirect to the Halls/Search page with filters
    router.push(`/halls?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] font-sans relative">
            <WatercolorFlowersBg />

      {/* ================= NAVBAR ================= */}
      <nav className="bg-[#3B0D22] shadow-lg sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => setIsFilterOpen(true)} className="bg-[#3B0D22] text-[#b8954a] px-4 py-2 rounded-lg hover:bg-[#3B0D22] transition font-semibold flex items-center gap-2">
              <div className="flex flex-col justify-center gap-[3px] w-5 h-5">
                <span className="block w-full h-[2px] bg-current rounded-full"></span>
                <span className="block w-full h-[2px] bg-current rounded-full"></span>
                <span className="block w-full h-[2px] bg-current rounded-full"></span>
              </div>
            </button>
            
            <Link href="/" className="flex items-center gap-3 group">
              <div className="flex-shrink-0">
                <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 56 L8 28 C8 16 18 8 32 8 C46 8 56 16 56 28 L56 56" stroke="#D4AF37" strokeWidth="2.5" fill="none"/>
                  <path d="M14 56 L14 30 C14 20 22 14 32 14 C42 14 50 20 50 30 L50 56" stroke="#D4AF37" strokeWidth="2" fill="none"/>
                  <line x1="32" y1="8" x2="32" y2="22" stroke="#D4AF37" strokeWidth="1.5"/>
                  <path d="M26 22 L38 22 L36 26 L28 26 Z" fill="#D4AF37"/>
                  <path d="M28 26 L36 26 L34 34 L30 34 Z" fill="#D4AF37" opacity="0.9"/>
                  <path d="M30 34 L34 34 L32 38 Z" fill="#D4AF37"/>
                  <line x1="28" y1="28" x2="26" y2="32" stroke="#D4AF37" strokeWidth="1"/>
                  <line x1="36" y1="28" x2="38" y2="32" stroke="#D4AF37" strokeWidth="1"/>
                  <line x1="6" y1="56" x2="58" y2="56" stroke="#D4AF37" strokeWidth="2.5"/>
                </svg>
              </div>
              <div className="flex items-baseline">
                <h1 className="text-3xl font-bold text-white tracking-wide" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Event</h1>
                <h1 className="text-3xl font-semibold text-[#D4AF37] tracking-wide" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Halls</h1>
              </div>
            </Link>

            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              <Link href="/" className="relative text-lg font-medium text-[#D4AF37] pb-1 transition-colors" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>
              </Link>
              <Link href="/halls" className="relative text-lg font-medium text-white hover:text-[#D4AF37] pb-1 transition-colors" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Halls</Link>
              <Link href="/my-bookings" className="relative text-lg font-medium text-white hover:text-[#D4AF37] pb-1 transition-colors" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>My Bookings</Link>
              <Link href="/notifications" className="relative text-lg font-medium text-white hover:text-[#D4AF37] pb-1 transition-colors" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Notifications</Link>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login" className="text-white hover:text-[#D4AF37] font-medium transition">Login</Link>
              <Link href="/signup" className="bg-[#D4AF37] text-[#3B0D22] px-5 py-2.5 rounded-lg hover:bg-[#b8954a] transition font-bold">Sign Up</Link>
            </div>
            
            <div className="md:hidden flex items-center">
              <button className="text-[#D4AF37]"><Menu size={28} /></button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <video ref={videoRef} autoPlay muted playsInline preload="auto" onEnded={handleVideoEnd} className="absolute inset-0 w-full h-full object-cover bg-black">
          <source src={videos[currentVideoIndex]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-white" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
            Find your Perfect <span className="text-[#D4AF37] text-4xl md:text-6xl font-extrabold">Destination</span> <br />
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Discover beautiful venues created for unforgettable celebrations and cherished memories.
          </p>

          <form onSubmit={handleSearch} className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-3 flex flex-col md:flex-row gap-3 border border-[#E8D5C5]">
            <div className="flex-1 flex items-center px-4 py-2">
              <MapPin className="text-[#D4AF37] mr-3 flex-shrink-0" size={20} />
              <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter location" className="w-full text-gray-700 focus:outline-none placeholder-gray-400" />
            </div>
            <div className="hidden md:block w-px bg-gray-200 my-2"></div>
            <div className="flex-1 flex items-center px-4 py-2">
              <Calendar className="text-[#D4AF37] mr-3 flex-shrink-0" size={20} />
              <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full text-gray-700 focus:outline-none" />
            </div>
            <div className="hidden md:block w-px bg-gray-200 my-2"></div>
            <div className="flex-1 flex items-center px-4 py-2">
              <Users className="text-[#D4AF37] mr-3 flex-shrink-0" size={20} />
              <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder="No. of guests" className="w-full text-gray-700 focus:outline-none placeholder-gray-400" />
            </div>
            <button type="submit" className="bg-[#3B0D22] hover:bg-[#4a0222] text-white px-8 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 whitespace-nowrap">
              <Search size={18} /> Search
            </button>
          </form>
        </div>
      </section>

      {/* ================= FEATURED HALLS ================= */}
      {/* ✅ 4. PURANA "CENTER-ONLY LEAVES" WALA CODE YAHAN SE HATA DIYA GAYA HAI */}
      <div className="relative py-10 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
             </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3B0D22] mb-4" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Popular Event Halls</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore top-rated halls for your next celebration</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Hall Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="Pictures/hall-bg8.jpg" alt="Seven Star Event Complex" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Seven Star Event Complex</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/>Lahore</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 250,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 4.3 (995 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>

            {/* Hall Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="pictures/hall-bg5.jpg" alt="Royal Palace" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Royal Palace</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/>Sheikhupura</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 180,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 4.6 (98 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>

            {/* Hall Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="pictures/hall-bg7.jpg" alt="Dynasty Gulberg Event Complex" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Dynasty Gulberg Event Complex</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/>Lahore</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 180,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 4.5 (1403 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>

            {/* Hall Card 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="Pictures/hall-bg9.jpg" alt="Koh-e-Noor Marquee" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Koh-e-Noor Marquee</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/>Farooqabad</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 220,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 4.1 (196 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="pictures/hall-bg3.jpg" alt="Liansa Marquee" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Liansa Marquee</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/> Lahore</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 220,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 4.7 (101 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="pictures/hall-bg2.jpg" alt="Grand Nexus Marquee" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Grand Nexus Marquee</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/> Lahore</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 150,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 4.7 (300 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 border border-[#E8D5C5]">
              <div className="relative">
                <img src="pictures/hall-bg1.jpg" alt="Shershah Palace & Farmhouse" className="w-full h-48 object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Shershah Palace & Farmhouse</h3>
                <p className="text-gray-500 text-sm flex items-center mb-3"><MapPin size={14} className="mr-1 text-[#D4AF37]"/> Lahore</p>
                <p className="text-[#3B0D22] font-bold mb-3">PKR 340,000+</p>
                <div className="flex items-center text-yellow-500 text-sm mb-4"><Star size={14} fill="currentColor" className="mr-1"/> 5 (507 reviews)</div>
                <button className="w-full border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#3B0D22] text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>EventHalls</h3>
              <p className="text-gray-300 text-sm leading-relaxed">The best platform to find and book event halls for your special moments.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Contact Us</h3>
              <p className="text-gray-300 text-sm flex items-center mb-2"><Phone size={16} className="mr-2 text-[#D4AF37]"/> +92 3355733482</p>
              <p className="text-gray-300 text-sm flex items-center"><Mail size={16} className="mr-2 text-[#D4AF37]"/> zdua2471@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Quick Links</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/halls" className="hover:text-[#D4AF37] transition">All Halls</Link></li>
                <li><Link href="/login" className="hover:text-[#D4AF37] transition">Login</Link></li>
                <li><Link href="/signup" className="hover:text-[#D4AF37] transition">Sign Up</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#5a1d3a] mt-10 pt-8 text-center text-white text-sm">
            © 2026 All rights reserved.
          </div>
        </div>
      </footer>
      
      <FilterSidebar 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)} 
        onApplyFilters={handleApplyFilters}
      />
    </div>
  );
}
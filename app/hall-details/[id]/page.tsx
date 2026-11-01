"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {ArrowLeft, MapPin, Phone, Users, Armchair, UtensilsCrossed, Building2, 
Car, Snowflake, Volume2, Droplets, Sparkles, Sofa, Wifi, Calendar, ChevronDown,Mail, CheckCircle2} from "lucide-react";
import Link from "next/link";
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
const allHallsData = [
  {
    id: 1, name: "Seven Star Event Complex", location: "Lahore", facilities: ["AC", "Generator", "Parking", "Decoration"],
    capacity: "Large", capacityPax: 800, price: 210000, rating: 4.3, reviews: 995,
    image: "pictures/hall-bg8.jpg", contact: "0300-1234567", pricePerHead: 260, chairs: 850, tables: 85, type: "Indoor / Outdoor"
  },
  {
    id: 2, name: "Royal Palace", location: "Sheikhupura", facilities: ["AC", "Generator", "Catering"],
    capacity: "Medium", capacityPax: 500, price: 350000, rating: 4.6, reviews: 98,
    image: "pictures/hall-bg5.jpg", contact: "0321-9876543", pricePerHead: 700, chairs: 550, tables: 55, type: "Indoor"
  },
  {
    id: 3, name: "Dynasty Gulberg Event Complex", location: "Lahore", facilities: ["AC", "Parking", "Special Lights", "Decoration"],
    capacity: "Medium", capacityPax: 600, price: 180000, rating: 4.5, reviews: 1403,
    image: "pictures/hall-bg7.jpg", contact: "0333-4567890", pricePerHead: 300, chairs: 650, tables: 65, type: "Indoor"
   },
  {
    id: 4, name: "Koh-e-Noor Marquee", location: "Farooqabad", facilities: ["AC", "Generator", "Parking", "Catering"],
    capacity: "Medium", capacityPax: 400, price: 220000, rating: 4.1, reviews: 196,
    image: "pictures/hall-bg9.jpg", contact: "0345-1122334", pricePerHead: 550, chairs: 450, tables: 45, type: "Outdoor"
  },
  {
    id: 5, name: "Liansa Marquee", location: "Lahore", facilities: ["AC", "Generator", "Catering", "Washroom", "Decoration"],
    capacity: "Medium", capacityPax: 400, price: 95000, rating: 4.7, reviews: 101,
    image: "pictures/hall-bg3.jpg", contact: "0301-5566778", pricePerHead: 237, chairs: 420, tables: 42, type: "Outdoor"
  },
  {
    id: 6, name: "Grand Nexus Marquee", location: "Lahore", facilities: ["AC", "Parking", "Sound System", "Catering"],
    capacity: "Large", capacityPax: 500, price: 145000, rating: 4.7, reviews: 300,
    image: "pictures/hall-bg2.jpg", contact: "0312-9988776", pricePerHead: 290, chairs: 550, tables: 55, type: "Indoor / Outdoor"
  },
  {
    id: 7, name: "Shershah Palace & Farmhouse", location: "Lahore", facilities: ["Air Ventilation", "Decoration", "Projector", "Special Lights"],
    capacity: "Large", capacityPax: 1000, price: 150000, rating: 5, reviews: 505,
    image: "pictures/hall-bg1.jpg", contact: "0305-4433221", pricePerHead: 150, chairs: 1050, tables: 100, type: "Farmhouse"
  },
];
const facilityMapping: Record<string, string> = {
  ac: "AC", generator: "Generator", parking: "Parking", decoration: "Decoration", catering: "Catering",
  ventilation: "Air Ventilation", soundSystem: "Sound System", washroom: "Washroom", speciallights: "Special Lights", projector: "Projector",
};

const getFacilityIcon = (iconName: string) => {
  const iconClass = "w-5 h-5 text-[#3B0D22]";
  switch (iconName) {
    case "AC": return <Snowflake className={iconClass} />;
    case "Generator": return <Volume2 className={iconClass} />; 
    case "Parking": return <Car className={iconClass} />;
    case "Decoration": return <Sparkles className={iconClass} />;
    case "Catering": return <UtensilsCrossed className={iconClass} />;
    case "Air Ventilation": return <Droplets className={iconClass} />;
    case "Sound System": return <Volume2 className={iconClass} />;
    case "Washroom": return <Droplets className={iconClass} />;
    case "Special Lights": return <Sparkles className={iconClass} />;
    case "Projector": return <Building2 className={iconClass} />;
    default: return <CheckCircle2 className={iconClass} />;
  }
};

export default function HallDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const hallId = Number(params.id);
  const hall = allHallsData.find(h => h.id === hallId);

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [availabilityResult, setAvailabilityResult] = useState<string | null>(null);
  const [requestSent, setRequestSent] = useState(false);

  
  if (!hall) {
    return (
      <div className="min-h-screen bg-[#FAF5F0] flex items-center justify-center relative">
        <WatercolorFlowersBg />
        <div className="text-center z-10">
          <h1 className="text-3xl font-bold text-[#3B0D22] mb-4">Hall Not Found</h1>
          <button onClick={() => router.back()} className="text-[#D4AF37] underline">Go Back</button>
        </div>
      </div>
    );
  }

  const timeSlots = ["Morning (8:00 AM - 12:00 PM)", "Afternoon (12:00 PM - 4:00 PM)", "Evening (4:00 PM - 8:00 PM)", "Night (8:00 PM - 12:00 AM)"];

  const handleCheckAvailability = () => {
    if (!selectedDate || !selectedTimeSlot) {
      setAvailabilityResult("Please select both date and time slot.");
      return;
    }
    setAvailabilityResult(`✅ ${hall.name} is available on ${selectedDate} for ${selectedTimeSlot}!`);
  };

  const handleSendRequest = () => {
    if (!selectedDate || !selectedTimeSlot) {
      alert("Please check availability first by selecting date and time slot.");
      return;
    }
    setRequestSent(true);
    setTimeout(() => setRequestSent(false), 4000);
  };

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
              <Link href="/halls" className="text-lg font-medium text-[#D4AF37] transition" style={{ fontFamily: "'Playfair Display', serif" }}>Halls</Link>
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-10">
        <button onClick={() => router.back()} className="mb-6 text-[#3B0D22] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back to Halls</span>
        </button>
        <div className="bg-white rounded-xl shadow-md border border-[#E8D5C5] p-6 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B0D22] mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            {hall.name}
          </h2>
          <div className="space-y-2 mb-4">
            <p className="text-gray-700 flex items-center gap-2">
              <MapPin size={18} className="text-[#D4AF37]" />
              <span>{hall.location}</span>
            </p>
            <p className="text-gray-700">
              Starting from <span className="font-bold text-[#3B0D22]">PKR {hall.pricePerHead.toLocaleString()}</span> per head 
              <span className="text-sm text-gray-500 ml-2">(Total: PKR {hall.price.toLocaleString()})</span>
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <Phone size={18} className="text-[#D4AF37]" />
              <a href={`tel:${hall.contact}`} className="text-[#3B0D22] underline hover:text-[#D4AF37] transition-colors font-medium">
                {hall.contact}
              </a>
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-[#3B0D22]" style={{ fontFamily: "'Playfair Display', serif" }}>Hall Media</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* Hum same image ko 4 baar dikha rahe hain gallery effect ke liye. Real app mein yeh alag images hongi */}
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className="relative group overflow-hidden rounded-lg border border-[#E8D5C5]">
                  <img 
                    src={hall.image} 
                    alt={`${hall.name} view ${idx + 1}`}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-[#E8D5C5] p-6 mb-8">
          <h3 className="text-xl font-bold text-[#3B0D22] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Hall Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center gap-3 p-4 bg-[#FAF5F0] rounded-lg border border-[#E8D5C5]">
              <Users className="text-[#3B0D22]" size={24} />
              <div><p className="text-xs text-gray-500">Capacity</p><p className="font-bold text-[#3B0D22]">{hall.capacityPax} people</p></div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#FAF5F0] rounded-lg border border-[#E8D5C5]">
              <Armchair className="text-[#3B0D22]" size={24} />
              <div><p className="text-xs text-gray-500">Chairs</p><p className="font-bold text-[#3B0D22]">{hall.chairs}</p></div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#FAF5F0] rounded-lg border border-[#E8D5C5]">
              <UtensilsCrossed className="text-[#3B0D22]" size={24} />
              <div><p className="text-xs text-gray-500">Tables</p><p className="font-bold text-[#3B0D22]">{hall.tables}</p></div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-[#FAF5F0] rounded-lg border border-[#E8D5C5]">
              <Building2 className="text-[#3B0D22]" size={24} />
              <div><p className="text-xs text-gray-500">Type</p><p className="font-bold text-[#3B0D22]">{hall.type}</p></div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-[#E8D5C5] p-6 mb-8">
          <h3 className="text-xl font-bold text-[#3B0D22] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Availability</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#3B0D22] mb-2">Date</label>
              <div className="relative">
                <input type="date" value={selectedDate} onChange={(e) => { setSelectedDate(e.target.value); setAvailabilityResult(null); }}
                  className="w-full px-4 py-3 border border-[#E8D5C5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700" />
                <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37] pointer-events-none" size={20} />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#3B0D22] mb-2">Time Slot</label>
              <div className="relative">
                <select value={selectedTimeSlot} onChange={(e) => { setSelectedTimeSlot(e.target.value); setAvailabilityResult(null); }}
                  className="w-full px-4 py-3 border border-[#E8D5C5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-gray-700 appearance-none bg-white">
                  <option value="">Select Time Slot</option>
                  {timeSlots.map((slot, idx) => <option key={idx} value={slot}>{slot}</option>)}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#D4AF37] pointer-events-none" size={20} />
              </div>
            </div>
            <button onClick={handleCheckAvailability} className="w-full bg-[#3B0D22] hover:bg-[#4a0222] text-white py-3 rounded-lg font-semibold transition-colors shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
              Check Availability
            </button>
            {availabilityResult && (
              <div className={`p-4 rounded-lg ${availabilityResult.includes('✅') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {availabilityResult}
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-md border border-[#E8D5C5] p-6 mb-8">
          <h3 className="text-xl font-bold text-[#3B0D22] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Facilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hall.facilities.map((facility, idx) => (
              <div key={idx} className="flex items-center gap-3 p-4 bg-[#FAF5F0] rounded-lg border border-[#E8D5C5] hover:border-[#D4AF37] transition-colors">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center border border-[#E8D5C5]">
                  {getFacilityIcon(facility)}
                </div>
                <span className="text-[#3B0D22] font-medium">{facility}</span>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleSendRequest}
          disabled={requestSent}
          className={`w-full py-4 rounded-lg font-semibold text-lg transition-all shadow-md mb-12 ${
            requestSent ? "bg-green-600 text-white cursor-not-allowed" : "bg-[#3B0D22] hover:bg-[#4a0222] text-white"
          }`}
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {requestSent ? (
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={20} /> Request Sent Successfully!</span>
          ) : (
            "Send Booking Request"
          )}
        </button>
      </div>
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
    </div>
  );
}
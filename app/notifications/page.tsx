"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, MessageCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";

// Watercolor Flowers Background
const WatercolorFlowersBg = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice">
        <defs>
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
          <path id="petal" d="M0,0 Q50,-30 100,0 Q50,30 0,0" />
        </defs>

        <g transform="translate(150, 150) rotate(0)">
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(0)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(72)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(144)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(216)" opacity="0.8" />
          <use href="#petal" fill="url(#flowerGradient1)" transform="translate(100,100) rotate(288)" opacity="0.8" />
          <circle cx="100" cy="100" r="15" fill="#c7a228" opacity="0.3" />
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
          <circle cx="140" cy="140" r="20" fill="#c7a228" opacity="0.3" />
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
          <circle cx="130" cy="130" r="19" fill="#c7a228" opacity="0.3" />
        </g>
        <g transform="translate(100, 450) rotate(10)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(0)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(72)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(144)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(216)" opacity="0.6" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(90,90) rotate(288)" opacity="0.6" />
          <circle cx="90" cy="90" r="14" fill="#D4AF37" opacity="0.25" />
        </g>
        <g transform="translate(550, 100) rotate(5)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(0)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(72)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(144)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(216)" opacity="0.65" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(100,100) rotate(288)" opacity="0.65" />
          <circle cx="100" cy="100" r="15" fill="#c7a228" opacity="0.25" />
        </g>
        <g transform="translate(600, 800) rotate(-20)">
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(0)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(72)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(144)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(216)" opacity="0.7" />
          <use href="#petal" fill="url(#flowerGradient2)" transform="translate(115,115) rotate(288)" opacity="0.7" />
          <circle cx="115" cy="115" r="17" fill="#D4AF37" opacity="0.25" />
        </g>
        <g transform="translate(400, 300) rotate(25)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(60,60) rotate(288)" opacity="0.5" />
          <circle cx="60" cy="60" r="10" fill="#c7a228" opacity="0.2" />
        </g>
        <g transform="translate(750, 350) rotate(-10)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(70,70) rotate(288)" opacity="0.5" />
          <circle cx="70" cy="70" r="11" fill="#D4AF37" opacity="0.2" />
        </g>
        <g transform="translate(300, 600) rotate(15)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(65,65) rotate(288)" opacity="0.5" />
          <circle cx="65" cy="65" r="10" fill="#c7a228" opacity="0.2" />
        </g>
        <g transform="translate(850, 600) rotate(-5)">
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(0)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(72)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(144)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(216)" opacity="0.5" />
          <use href="#petal" fill="url(#flowerGradient3)" transform="translate(75,75) rotate(288)" opacity="0.5" />
          <circle cx="75" cy="75" r="12" fill="#D4AF37" opacity="0.2" />
        </g>
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

// Notification Data
const notificationsData = [
  { id: 1, hallName: "Sharaz Palace", message: "PKR 15000 has been refunded for Sharaz palace booking.", date: "Sep 20", type: "all", unread: true, color: "bg-purple-600" },
  { id: 2, hallName: "Sharaz Palace", message: "Your booking at Sharaz palace for 2026-09-20 (6:00 PM to 10:00 PM) has been cancelled. Your refund of PKR 15000 is awaiting admin approval.", date: "Sep 20", type: "all", unread: true, color: "bg-purple-600" },
  { id: 3, hallName: "Sharaz Palace", message: "thk h", date: "Sep 20", type: "all", unread: true, color: "bg-purple-600" },
  { id: 4, hallName: "Sharaz Palace", message: "Your advance payment of PKR 15000 for Sharaz palace has been received.", date: "Sep 20", type: "all", unread: false, color: "bg-blue-500" },
  { id: 5, hallName: "Sharaz Palace", message: "Your booking request for 'Sharaz palace' on 2026-09-20 has been ACCEPTED! ", date: "Sep 20", type: "all", unread: false, color: "bg-green-500" },
  { id: 6, hallName: "Shareef Events", message: "Your final payment of PKR 42000 for Shareef Events has been received.", date: "Sep 18", type: "all", unread: false, color: "bg-blue-500" },
  { id: 7, hallName: "Sharaz Palace", message: "Sfhji", date: "Sep 15", type: "all", unread: false, color: "bg-purple-600" },
  { id: 8, hallName: "Sharaz Palace", message: "Your booking request for 'Sharaz palace' on 2026-09-20 has been ACCEPTED! 🎉", date: "Sep 20", type: "requests", unread: false, color: "bg-green-500" },
  { id: 9, hallName: "Le Grand Marquee", message: "Your request for Le Grand Marquee on 2026-09-07 at 8:00 AM to 12:00 PM was auto-rejected as another customer confirmed the booking first.", date: "Sep 6", type: "requests", unread: true, color: "bg-red-500" },
  { id: 10, hallName: "Sharaz Palace", message: "Your advance payment of PKR 15000 for Sharaz palace has been received.", date: "Sep 20", type: "payments", unread: true, color: "bg-blue-500" },
  { id: 11, hallName: "Shareef Events", message: "Your final payment of PKR 42000 for Shareef Events has been received.", date: "Sep 18", type: "payments", unread: false, color: "bg-blue-500" },
  { id: 12, hallName: "Shareef Events", message: "Your advance payment of PKR 18000 for Shareef Events has been received.", date: "Sep 6", type: "payments", unread: true, color: "bg-blue-500" },
  { id: 13, hallName: "Le Grand Marquee", message: "Your advance payment of PKR 15000 for Le Grand Marquee has been received.", date: "Sep 6", type: "payments", unread: false, color: "bg-blue-500" },
  { id: 14, hallName: "Sharaz Palace", message: "Your advance payment of PKR 15000 for Sharaz palace has been received.", date: "Sep 6", type: "payments", unread: true, color: "bg-blue-500" },
  { id: 15, hallName: "Sharaz Palace", message: "PKR 15000 has been refunded for Sharaz palace booking.", date: "Sep 20", type: "bookings", unread: true, color: "bg-purple-600" },
  { id: 16, hallName: "Sharaz Palace", message: "Your booking at Sharaz palace for 2026-09-20 (6:00 PM to 10:00 PM) has been cancelled. Your refund of PKR 15000 is awaiting admin approval.", date: "Sep 20", type: "bookings", unread: true, color: "bg-purple-600" },
  { id: 17, hallName: "Shareef Events", message: "PKR 10800 has been refunded for Shareef Events booking.", date: "Sep 2", type: "bookings", unread: false, color: "bg-purple-600" },
  { id: 18, hallName: "Shareef Events", message: "Your booking at Shareef Events for 2026-09-04 (6:00 PM to 10:00 PM) has been cancelled. Your refund of PKR 10800 is awaiting admin approval.", date: "Sep 2", type: "bookings", unread: false, color: "bg-purple-600" },
  { id: 19, hallName: "Le Grand Marquee", message: "PKR 15000 has been refunded for Le Grand Marquee booking.", date: "Sep 2", type: "bookings", unread: true, color: "bg-purple-600" },
];

export default function NotificationsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const [activeTab, setActiveTab] = useState<"all" | "requests" | "payments" | "bookings" | "chats">("all");

  const filteredNotifications = notificationsData.filter((notif) => {
    if (activeTab === "all") return true;
    if (activeTab === "chats") return false;
    return notif.type === activeTab;
  });

  const getFirstLetter = (hallName: string) => hallName.charAt(0);

  return (
    <div className="min-h-screen bg-[#FAF5F0] relative">
      <WatercolorFlowersBg />
      
      {/* Top Navigation Bar */}
      <nav className="bg-[#3B0D22] shadow-lg sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* LEFT: Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
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

            {/* CENTER: Navigation Links (Perfectly Centered with Active States) */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-10">
              <Link 
                href="/" 
                className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Home
                {isActive("/") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
              <Link 
                href="/halls" 
                className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/halls") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Halls
                {isActive("/halls") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
              <Link 
                href="/my-bookings" 
                className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/my-bookings") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                My Bookings
                {isActive("/my-bookings") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
              <Link 
                href="/notifications" 
                className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/notifications") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} 
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Notifications
                {isActive("/notifications") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Back Button & Header */}
        <div className="mb-6">
          <button 
            onClick={() => router.back()} 
            className="mb-4 text-gray-500 hover:text-gray-500 transition-colors flex items-center gap-2 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold"></span>
          </button>

          <h1 
            className="text-3xl md:text-4xl font-bold text-[#3B0D22] text-center"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Notifications
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-start gap-3 mb-6 flex-wrap">
          <button onClick={() => setActiveTab("all")} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === "all" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            All <span className="ml-1 text-xs opacity-70">11</span>
          </button>
          <button onClick={() => setActiveTab("requests")} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === "requests" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Requests <span className="ml-1 text-xs opacity-70">2</span>
          </button>
          <button onClick={() => setActiveTab("payments")} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === "payments" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Payments <span className="ml-1 text-xs opacity-70">5</span>
          </button>
          <button onClick={() => setActiveTab("bookings")} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === "bookings" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Bookings <span className="ml-1 text-xs opacity-70">3</span>
          </button>
          <button onClick={() => setActiveTab("chats")} className={`px-4 py-2 rounded-full font-semibold text-sm transition-all ${activeTab === "chats" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Chats <span className="ml-1 text-xs opacity-70">1</span>
          </button>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.length > 0 ? (
            filteredNotifications.map((notification) => (
              <div key={notification.id} className={`bg-white/95 backdrop-blur-sm rounded-xl border p-4 hover:shadow-lg transition-all cursor-pointer ${notification.unread ? "border-[#D4AF37] shadow-md" : "border-[#E8D5C5]"}`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${notification.color} rounded-full flex items-center justify-center flex-shrink-0 shadow-sm`}>
                    <span className="text-white font-bold text-lg">{getFirstLetter(notification.hallName)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#3B0D22]" style={{ fontFamily: "'Playfair Display', serif" }}>{notification.hallName}</h3>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs text-gray-500">{notification.date}</span>
                        {notification.unread && <span className="w-5 h-5 bg-[#3B0D22] text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{notification.message}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white/80 backdrop-blur-sm rounded-xl border border-[#E8D5C5]">
              <div className="w-20 h-20 bg-[#FAF5F0] rounded-full flex items-center justify-center mb-4 border-2 border-[#D4AF37]">
                <MessageCircle className="h-10 w-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#3B0D22] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>No notifications</h3>
              <p className="text-gray-500 text-sm text-center">
                {activeTab === "chats" ? "You have no chat messages yet." : `No ${activeTab} notifications at the moment.`}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#3B0D22] text-white py-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#D4AF37]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>EventHalls</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                The best platform to find and book event halls for your <span className="whitespace-nowrap">special moments.</span>
              </p>
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
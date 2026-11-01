"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowLeft, ChevronRight, Calendar, Clock, Phone, Mail } from "lucide-react";
import Link from "next/link";

// Sample Booking Data
const bookingsData = [
  { id: 1, hallName: "Sharaz Palace", eventType: "Walima", date: "2026-09-20", time: "6:00 PM to 10:00 PM", status: "confirmed" },
  { id: 2, hallName: "Le Grand Marquee", eventType: "Result Declaration", date: "2026-09-07", time: "8:00 AM to 12:00 PM", status: "pending" },
  { id: 3, hallName: "Shareef Events", eventType: "Engagement", date: "2026-09-08", time: "6:00 PM to 10:00 PM", status: "confirmed" },
  { id: 4, hallName: "Le Grand Marquee", eventType: "Barat", date: "2026-09-08", time: "12:00 PM to 4:00 PM", status: "confirmed" },
  { id: 5, hallName: "Al-Noor Marquee", eventType: "Bridal Shower", date: "2026-09-08", time: "12:00 PM to 4:00 PM", status: "pending" },
];

export default function MyBookingsPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const [activeTab, setActiveTab] = useState("all");

  const filteredBookings = bookingsData.filter((booking) => {
    if (activeTab === "all") return true;
    if (activeTab === "requests") return booking.status.toLowerCase() === "pending";
    if (activeTab === "bookings") return booking.status.toLowerCase() === "confirmed";
    return true;
  });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] relative">
      
      {/* ================= NAVBAR (FIXED: Centered & Active States) ================= */}
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

            {/* CENTER: Navigation Links with Active Gold Underline */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-12">
              <Link href="/" className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                Home
                {isActive("/") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
              <Link href="/halls" className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/halls") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                Halls
                {isActive("/halls") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
              <Link href="/my-bookings" className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/my-bookings") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                My Bookings
                {isActive("/my-bookings") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
              <Link href="/notifications" className={`relative text-lg font-medium pb-1 transition-colors ${isActive("/notifications") ? "text-[#D4AF37]" : "text-white hover:text-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                Notifications
                {isActive("/notifications") && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] rounded-full"></span>}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Back Button & Header */}
        <div className="mb-6">
          <button onClick={() => router.back()} className="mb-4 text-gray-500 hover:text-gray-500 transition-colors flex items-center gap-2 group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold"></span>
          </button>
          <h1 className="text-3xl md:text-4xl font-bold text-[#3B0D22] text-center" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
            My Bookings
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-start gap-3 mb-8">
          <button onClick={() => setActiveTab("all")} className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === "all" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            All ({bookingsData.length})
          </button>
          <button onClick={() => setActiveTab("requests")} className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === "requests" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Requests ({bookingsData.filter(b => b.status.toLowerCase() === "pending").length})
          </button>
          <button onClick={() => setActiveTab("bookings")} className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === "bookings" ? "bg-[#3B0D22] text-white shadow-md" : "bg-white text-[#3B0D22] border border-[#E8D5C5] hover:border-[#D4AF37]"}`} style={{ fontFamily: "'Playfair Display', serif" }}>
            Bookings ({bookingsData.filter(b => b.status.toLowerCase() === "confirmed").length})
          </button>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white rounded-xl border border-[#E8D5C5] p-5 hover:shadow-lg hover:border-[#D4AF37] transition-all cursor-pointer group relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#3B0D22] mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {booking.hallName}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{booking.eventType}</p>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} className="text-[#D4AF37]" />
                        <span>{formatDate(booking.date)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} className="text-[#D4AF37]" />
                        <span>{booking.time}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      {booking.status.toLowerCase() === "confirmed" ? (
                        <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">✓ Confirmed</span>
                      ) : (
                        <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-semibold rounded-full border border-yellow-200">⏳ Pending Request</span>
                      )}
                    </div>
                  </div>
                  <div className="ml-4">
                    <ChevronRight size={24} className="text-gray-400 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-16 bg-white rounded-xl border border-[#E8D5C5] relative z-10">
              <div className="w-16 h-16 bg-[#FAF5F0] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]">
                <Calendar className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-bold text-[#3B0D22] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>No bookings found</h3>
              <p className="text-gray-600 text-sm mb-6">
                {activeTab === "requests" ? "You have no pending requests" : activeTab === "bookings" ? "You have no confirmed bookings" : "You haven't made any bookings yet"}
              </p>
              <Link href="/halls" className="inline-block bg-[#3B0D22] hover:bg-[#4a0222] text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md" style={{ fontFamily: "'Playfair Display', serif" }}>
                Browse Halls
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ================= FOOTER (FIXED: whitespace-nowrap) ================= */}
      <footer className="bg-[#3B0D22] text-white py-12 mt-12 relative z-10">
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
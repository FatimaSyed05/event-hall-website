"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { X, Calendar, RotateCcw } from "lucide-react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
}

export default function FilterSidebar({ isOpen, onClose, onApplyFilters }: FilterSidebarProps) {
    if (!isOpen) return null;
    const router = useRouter();
  
  const [facilities, setFacilities] = useState({
    ac: false,
    generator: false,
    parking: false,
    decoration: false,
    catering: false,
    ventilation: false,
    soundSystem: false,
    washroom: false,
    speciallights: false,
    projector: false,
  });

  const [capacity, setCapacity] = useState("");
  const [priceRange, setPriceRange] = useState(250000);
  const [availableDate, setAvailableDate] = useState("");

  const handleFacilityChange = (facility: keyof typeof facilities) => {
    setFacilities((prev) => ({ ...prev, [facility]: !prev[facility] }));
  };

  const handleReset = () => {
    setFacilities({
      ac: false,
      generator: false,
      parking: false,
      decoration: false,
      catering: false,
      ventilation: false,
      soundSystem: false,
      washroom: false,
      speciallights: false,
      projector: false,
    });
    setCapacity("");
    setPriceRange(250000);
    setAvailableDate("");
  };

  const handleApply = () => {
    const params = new URLSearchParams();
    const selectedFacilities = Object.entries(facilities)
      .filter(([_, value]) => value)
      .map(([key]) => key);
    
    if (selectedFacilities.length > 0) {
      params.set("facilities", selectedFacilities.join(","));
    }
    if (capacity) {
      params.set("capacity", capacity);
    }
    if (priceRange) {
      params.set("priceMax", priceRange.toString());
    }
    if (availableDate) {
      params.set("date", availableDate);
    }
    onApplyFilters({
      facilities,
      capacity,
      priceRange,
      availableDate,
    });
    onClose();
    router.push(`/results?${params.toString()}`);
  };

  if (!isOpen) return null;

  return (
    <>
          <div 
        className="fixed inset-0 bg-black/40 z-40"
        onClick={onClose}
      ></div>
      <div className="fixed left-0 top-0 h-full w-full max-w-md bg-[#FAF5F0] shadow-2xl z-50 overflow-y-auto">
        <div className="p-6">
      
          <div className="flex items-center justify-between mb-6">
            <h2 
              className="text-2xl font-bold text-[#3B0D22]"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Filters
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-[#3B0D22] transition-colors p-1 rounded-full hover:bg-[#FAF5F0]"
            >
              <X size={22} />
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-[#3B0D22] mb-3 uppercase tracking-wide">
                Facilities
              </h3>
              <div className="grid grid-cols-2 gap-y-2.5 gap-x-4">
                {Object.entries(facilities).map(([key, value]) => (
                  <label key={key} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={value}
                      onChange={() => handleFacilityChange(key as keyof typeof facilities)}
                      className="w-4 h-4 rounded border-[#E8D5C5] text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#3B0D22] transition-colors capitalize">
                      {key === 'ventilation' ? 'Air Ventilation' : 
                       key === 'soundSystem' ? 'Sound System' : 
                       key === 'speciallights' ? 'Special Lights' : 
                       key}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#E8D5C5]"></div>

            <div>
              <h3 className="text-sm font-bold text-[#3B0D22] mb-3 uppercase tracking-wide">
                Capacity
              </h3>
              <div className="space-y-2.5">
                {["small", "medium", "large"].map((size) => (
                  <label key={size} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="capacity"
                      value={size}
                      checked={capacity === size}
                      onChange={(e) => setCapacity(e.target.value)}
                      className="w-4 h-4 border-[#E8D5C5] text-[#D4AF37] focus:ring-[#D4AF37] cursor-pointer"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#3B0D22] transition-colors capitalize">
                      {size === "small" ? "Small (up to 200)" : 
                       size === "medium" ? "Medium (201 – 500)" : 
                       "Large (501+)"}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#E8D5C5]"></div>
            <div>
              <h3 className="text-sm font-bold text-[#3B0D22] mb-3 uppercase tracking-wide">
                Price Range
              </h3>
              <div className="px-2">
                <input
                  type="range"
                  min={50000}
                  max={500000}
                  step={10000}
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E8D5C5] rounded-lg appearance-none cursor-pointer accent-[#D4AF37]"
                />
                <div className="flex justify-between mt-2 text-xs text-gray-600">
                  <span>PKR 50,000</span>
                  <span className="font-semibold text-[#3B0D22]">
                    PKR {priceRange.toLocaleString()}+
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-[#E8D5C5]"></div>
            <div>
              <h3 className="text-sm font-bold text-[#3B0D22] mb-3 uppercase tracking-wide">
                Availability
              </h3>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar size={16} className="text-[#D4AF37]" />
                </div>
                <input
                  type="date"
                  value={availableDate}
                  onChange={(e) => setAvailableDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-[#E8D5C5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm text-gray-700"
                />
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <button
                onClick={handleReset}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 border border-[#3B0D22] text-[#3B0D22] rounded-lg font-semibold text-sm hover:bg-[#FAF5F0] transition-colors"
              >
                <RotateCcw size={16} />
                Reset Filters
              </button>
              <button
                onClick={handleApply}
                className="w-full py-3 px-4 bg-[#3B0D22] hover:bg-[#4a0222] text-white rounded-lg font-semibold text-sm transition-colors shadow-md"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
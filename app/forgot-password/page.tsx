"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Mail, Loader2 } from "lucide-react";
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
          <circle cx="55" cy="55" r="9" fill="#c7a228" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
};

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Email address is required");
      return;
    } else if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <WatercolorFlowersBg />
      <div className="max-w-4xl w-full bg-white p-10 rounded-lg shadow-sm relative z-10 border border-[#E8D5C5]">
    
        <button 
          onClick={() => router.back()} 
          className="mb-6 text-gray-500 hover:text-gray-500 transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold"></span>
        </button>
        <div className="text-center mb-8">
          
          <h2 className="text-3xl font-bold text-[#3B0D22]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
            Forgot Password
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Please enter your registered email.
          </p>
        </div>
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6">
          
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-[#3B0D22] mb-1.5">
                Email Address <span className="text-red-500"></span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError("");
                  }}
                  className={`w-full pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition ${
                    error ? "border-red-500 bg-red-50" : "border-[#E8D5C5]"
                  }`}
                  placeholder="Enter your email address"
                />
              </div>
              {error && (
                <p className="mt-1.5 text-sm text-red-600">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#3B0D22] hover:bg-[#4a0222] text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Sending...
                </>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-[#FAF5F0] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]">
              <Mail className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-bold text-[#3B0D22] mb-2" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
              Check your email
            </h3>
            <p className="text-gray-600 mb-6 text-sm">
              We have sent a password reset link to <br/>
              <span className="font-semibold text-[#3B0D22]">{email}</span>
            </p>
            <button
              onClick={() => router.push("/login")}
              className="text-[#D4AF37] font-semibold hover:text-[#3B0D22] transition text-sm"
            >
              Back to Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
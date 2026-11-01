"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

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

export default function LoginPage() {
  const router = useRouter(); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: "", password: "" };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Login:", { email, password });
      alert("Login Successful!");
      router.push("/"); 
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <WatercolorFlowersBg />
      <div className="max-w-2xl w-full bg-white p-10 rounded-lg shadow-sm relative z-10 border border-[#E8D5C5]">
        <button 
          onClick={() => router.back()} 
          className="mb-6 text-[#3B0D22] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back</span>
        </button>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#3B0D22]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>
            Sign In
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#3B0D22] mb-1.5">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
              }}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition ${
                errors.email ? "border-red-500 bg-red-50" : "border-[#E8D5C5]"
              }`}
              placeholder="Enter your email"
            />
            {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-[#3B0D22] mb-1.5">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (errors.password) setErrors((prev) => ({ ...prev, password: "" }));
                }}
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition pr-12 ${
                  errors.password ? "border-red-500 bg-red-50" : "border-[#E8D5C5]"
                }`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-[#3B0D22] transition"
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            {errors.password && <p className="mt-1.5 text-sm text-red-600">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#D4AF37] focus:ring-[#D4AF37] border-[#E8D5C5] rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <Link href="/forgot-password" className="font-semibold text-[#3B0D22] hover:text-[#D4AF37] transition">
                Forgot password?
              </Link>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#3B0D22] hover:bg-[#4a0222] text-white font-semibold py-3 rounded-lg transition shadow-md hover:shadow-lg"
            style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
          >
            Login
          </button>
          <div className="text-center pt-3">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <Link href="/signup" className="font-semibold text-[#3B0D22] hover:text-[#D4AF37] transition">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
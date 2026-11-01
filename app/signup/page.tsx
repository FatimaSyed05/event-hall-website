"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import Link from "next/link"; 

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

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phone: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateField = (name: string, value: string) => {
    let error = "";
    switch (name) {
      case "fullName":
        if (!value.trim()) error = "Full name is required";
        else if (value.trim().length < 3) error = "Name must be at least 3 characters";
        break;
      case "phone":
        const phoneClean = value.replace(/[\s\-]/g, "");
        if (!phoneClean) error = "Phone number is required";
        else if (!/^\d{11}$/.test(phoneClean)) error = "Phone number must be 11 digits";
        break;
      case "address":
        if (!value.trim()) error = "Address is required";
        else if (value.trim().length < 10) error = "Please enter your complete address";
        break;
      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) error = "Email is required";
        else if (!emailRegex.test(value)) error = "Please enter a valid email";
        break;
      case "password":
        if (!value) error = "Password is required";
        else if (value.length < 8) error = "Password must be at least 8 characters";
        else if (!/^[A-Z]/.test(value)) error = "First letter must be Uppercase";
        break;
      case "confirmPassword":
        if (!value) error = "Please confirm your password";
        else if (value !== formData.password) error = "Passwords do not match";
        break;
    }
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.fullName.trim()) { newErrors.fullName = "Full name is required"; isValid = false; }
    else if (formData.fullName.trim().length < 3) { newErrors.fullName = "Name must be at least 3 characters"; isValid = false; }

    const phoneClean = formData.phone.replace(/[\s\-]/g, "");
    if (!phoneClean) { newErrors.phone = "Phone number is required"; isValid = false; }
    else if (!/^\d{11}$/.test(phoneClean)) { newErrors.phone = "Phone number must be 11 digits"; isValid = false; }

    if (!formData.address.trim()) { newErrors.address = "Address is required"; isValid = false; }
    else if (formData.address.trim().length < 10) { newErrors.address = "Please enter a complete address"; isValid = false; }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) { newErrors.email = "Email is required"; isValid = false; }
    else if (!emailRegex.test(formData.email)) { newErrors.email = "Please enter a valid email"; isValid = false; }

    if (!formData.password) { newErrors.password = "Password is required"; isValid = false; }
    else if (formData.password.length < 8) { newErrors.password = "Password must be at least 8 characters"; isValid = false; }
    else if (!/^[A-Z]/.test(formData.password)) { newErrors.password = "First letter must be Uppercase"; isValid = false; }

    if (!formData.confirmPassword) { newErrors.confirmPassword = "Please confirm your password"; isValid = false; }
    else if (formData.confirmPassword !== formData.password) { newErrors.confirmPassword = "Passwords do not match"; isValid = false; }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Account created successfully!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5F0] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <WatercolorFlowersBg/>
      <div className="max-w-4xl w-full space-y-8 bg-white p-10 rounded-lg shadow-sm relative z-10 border border-[#E8D5C5]">        
        <button 
          onClick={() => router.back()} 
          className="mb-6 text-[#3B0D22] hover:text-[#D4AF37] transition-colors flex items-center gap-2 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold">Back</span>
        </button>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#3B0D22]" style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}>Create Account</h2>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="block text-sm font-bold text-[#3B0D22]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full px-3 py-3 border ${
                  errors.fullName ? "border-red-500" : "border-[#E8D5C5]"
                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-bold text-[#3B0D22]">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full px-3 py-3 border ${
                  errors.phone ? "border-red-500" : "border-[#E8D5C5]"
                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm`}
                placeholder="e.g., 03001234567"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-bold text-[#3B0D22]">
              Address <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="address"
                name="address"
                type="text"
                value={formData.address}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full px-3 py-3 border ${
                  errors.address ? "border-red-500" : "border-[#E8D5C5]"
                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm`}
                placeholder="e.g., House 123, Wapda Town, Lahore"
              />
              {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#3B0D22]">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full px-3 py-3 border ${
                  errors.email ? "border-red-500" : "border-[#E8D5C5]"
                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-bold text-[#3B0D22]">
              Create Password <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full px-3 py-3 border pr-10 ${
                  errors.password ? "border-red-500" : "border-[#E8D5C5]"
                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm`}
                placeholder="Enter password"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#3B0D22] transition"
              >
                {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-bold text-[#3B0D22]">
              Confirm Password <span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`appearance-none block w-full px-3 py-3 border pr-10 ${
                  errors.confirmPassword ? "border-red-500" : "border-[#E8D5C5]"
                } rounded-md placeholder-gray-400 focus:outline-none focus:ring-[#D4AF37] focus:border-[#D4AF37] sm:text-sm`}
                placeholder="Confirm your password"
              />
              <button 
                type="button" 
                onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#3B0D22] transition"
              >
                {showConfirmPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
              </button>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#3B0D22] hover:bg-[#4a0222] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-colors"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Create Account
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-[#D4AF37] hover:text-[#3B0D22] transition-colors">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
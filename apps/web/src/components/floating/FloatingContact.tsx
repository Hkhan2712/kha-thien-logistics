import { Facebook, MessageCircle, Phone } from "lucide-react";

const FloatingContact = () => {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col gap-4 z-50">
        {/* Phone Button */}
        <a
          href="tel:0901234567"
          className="relative bg-[#f97316] text-white rounded-full p-4 transition-all duration-300 hover:scale-125 active:scale-90 group overflow-visible"
          style={{ 
            animation: 'slide-in-bounce 1s ease-out 0.2s both, float-strong 2.5s ease-in-out infinite, wiggle 3s ease-in-out 4s infinite, glow-pulse 2s ease-in-out infinite'
          }}
          aria-label="Gọi ngay"
        >
          {/* Outer pulse ring */}
          <div 
            className="absolute inset-0 rounded-full bg-[#f97316]" 
            style={{ animation: 'pulse-ring-outer 2s ease-out infinite' }}
          ></div>
          {/* Inner pulse ring */}
          <div 
            className="absolute inset-0 rounded-full bg-[#f97316]" 
            style={{ animation: 'pulse-ring 1.5s ease-out infinite 0.3s' }}
          ></div>
          {/* Icon */}
          <Phone size={28} className="relative z-10 drop-shadow-lg" />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse border-2 border-white">
            !
          </span>
        </a>

        {/* Zalo Button */}
        <a
          href="https://zalo.me/0901234567"
          target="_blank"
          rel="noreferrer"
          className="relative bg-[#0068FF] text-white rounded-full p-4 transition-all duration-300 hover:scale-125 active:scale-90 group overflow-visible"
          style={{ 
            animation: 'slide-in-bounce 1s ease-out 0.4s both, float-strong 2.5s ease-in-out 0.5s infinite, wiggle 3s ease-in-out 5s infinite, glow-pulse-blue 2s ease-in-out infinite'
          }}
          aria-label="Zalo"
        >
          {/* Outer pulse ring */}
          <div 
            className="absolute inset-0 rounded-full bg-[#0068FF]" 
            style={{ animation: 'pulse-ring-outer 2s ease-out infinite 0.2s' }}
          ></div>
          {/* Inner pulse ring */}
          <div 
            className="absolute inset-0 rounded-full bg-[#0068FF]" 
            style={{ animation: 'pulse-ring 1.5s ease-out infinite 0.5s' }}
          ></div>
          {/* Icon */}
          <MessageCircle size={28} className="relative z-10 drop-shadow-lg" />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse border-2 border-white">
            !
          </span>
        </a>

        {/* Facebook Button */}
        <a
          href="https://facebook.com/khathientransport"
          target="_blank"
          rel="noreferrer"
          className="relative bg-[#1877f2] text-white rounded-full p-4 transition-all duration-300 hover:scale-125 active:scale-90 group overflow-visible"
          style={{ 
            animation: 'slide-in-bounce 1s ease-out 0.6s both, float-strong 2.5s ease-in-out 1s infinite, wiggle 3s ease-in-out 6s infinite, glow-pulse-facebook 2s ease-in-out infinite'
          }}
          aria-label="Facebook"
        >
          {/* Outer pulse ring */}
          <div 
            className="absolute inset-0 rounded-full bg-[#1877f2]" 
            style={{ animation: 'pulse-ring-outer 2s ease-out infinite 0.4s' }}
          ></div>
          {/* Inner pulse ring */}
          <div 
            className="absolute inset-0 rounded-full bg-[#1877f2]" 
            style={{ animation: 'pulse-ring 1.5s ease-out infinite 0.7s' }}
          ></div>
          {/* Icon */}
          <Facebook size={28} className="relative z-10 drop-shadow-lg" />
          {/* Notification badge */}
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse border-2 border-white">
            !
          </span>
        </a>
      </div>
    )
}

export default FloatingContact;
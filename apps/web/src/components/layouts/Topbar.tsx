import { Phone } from "lucide-react";

const Topbar = () => {
    return (
        <div className="bg-[#1e3a8a] text-white text-sm hidden md:flex items-center justify-between px-6 py-2">
            <span>🇻🇳 Vận chuyển hàng hóa toàn quốc – Nhanh – An toàn – Uy tín</span>
            <div className="flex items-center gap-4">
                <a href="tel:0901234567" className="flex items-center gap-1 hover:text-orange-300 transition-colors">
                    <Phone size={14} /> 0901 234 567
                </a>
                <a href="https://zalo.me/0901234567" target="_blank" rel="noreferrer" className="hover:text-orange-300 transition-colors">
                    Zalo
                </a>
                <a href="https://facebook.com/khathientransport" target="_blank" rel="noreferrer" className="hover:text-orange-300 transition-colors">
                    Facebook
                </a>
            </div>
        </div>
    )
}

export default Topbar;
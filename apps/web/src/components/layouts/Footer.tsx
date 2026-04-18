import { Facebook, MessageCircle, Phone, Truck } from "lucide-react";
import Link from "next/link";
import type { Route } from "next";

type NavLink = {
    label: string;
    to: Route;
};

const navLinks: NavLink[] = [
    { label: "Trang Chủ", to: "/" },
    { label: "Dịch Vụ", to: "/services" },
    { label: "Về Chúng Tôi", to: "/about-us" },
    { label: "Liên Hệ", to: "/contact" },
];

const Footer = () => {
    return (
        <footer className="bg-[#1e3a8a] text-white">
            <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <div className="flex items-center gap-2 mb-3">
                <div className="bg-[#f97316] rounded-lg p-2">
                    <Truck size={20} className="text-white" />
                </div>
                <span className="font-bold text-lg">Kha Thiên Transportation</span>
                </div>
                <p className="text-blue-200 text-sm leading-relaxed">
                Dịch vụ vận chuyển hàng hóa toàn quốc uy tín, nhanh chóng và an toàn. Phục vụ khách hàng tận tâm mọi lúc mọi nơi.
                </p>
            </div>
            <div>
                <h4 className="font-semibold mb-3 text-orange-300">Liên Kết Nhanh</h4>
                <ul className="space-y-2 text-sm text-blue-200">
                {navLinks.map((link) => (
                    <li key={link.to}>
                    <Link href={link.to} className="hover:text-white transition-colors">
                        {link.label}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            <div>
                <h4 className="font-semibold mb-3 text-orange-300">Liên Hệ</h4>
                <ul className="space-y-3 text-sm text-blue-200">
                <li className="flex items-center gap-2">
                    <Phone size={16} className="text-orange-300 shrink-0" />
                    <a href="tel:0901234567" className="hover:text-white transition-colors">0901 234 567</a>
                </li>
                <li className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-green-400 shrink-0" />
                    <a href="https://zalo.me/0901234567" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Zalo: 0901 234 567
                    </a>
                </li>
                <li className="flex items-center gap-2">
                    <Facebook size={16} className="text-blue-300 shrink-0" />
                    <a href="https://facebook.com/khathientransport" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    fb.com/khathientransport
                    </a>
                </li>
                </ul>
            </div>
            </div>
            <div className="border-t border-blue-800 text-center py-4 text-xs text-blue-300">
            © 2024 Kha Thiên Transportation. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer;
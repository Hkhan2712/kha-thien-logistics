'use client'
import Link from "next/link";
import { Truck, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import type { Route } from "next";

type NavLink = {
    label: string;
    to: Route;
};

const navLinks: NavLink[] = [
    { label: "Trang Chủ", to: "/" },
    { label: "Dịch Vụ", to: "/services" },
    { label: "Về Chúng Tôi", to: "/about-us" },
    { label: "Gửi Hàng", to: "/shipping" },
    { label: "Liên Hệ", to: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
                <div className="bg-[#f97316] rounded-lg p-2">
                    <Truck size={22} className="text-white" />
                </div>
                <div className="leading-tight">
                    <span className="block text-[#1e3a8a] font-bold text-base">Kha Thiên</span>
                    <span className="block text-[#f97316] text-xs tracking-wide uppercase">Transportation</span>
                </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
                {navLinks.map((link) => (
                <Link
                    key={link.to}
                    href={link.to}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.to
                        ? "bg-[#1e3a8a] text-white"
                        : "text-gray-700 hover:text-[#1e3a8a] hover:bg-blue-50"
                    }`}
                >
                    {link.label}
                </Link>
                ))}
                <Link
                href="/shipping"
                className="ml-2 px-4 py-2 bg-[#f97316] text-white rounded-md text-sm font-medium hover:bg-orange-600 transition-colors"
                >
                Gửi Hàng Ngay
                </Link>
            </nav>

            {/* Mobile menu button */}
            <button
                className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {/* Mobile Nav */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 space-y-1">
                    {navLinks.map((link) => (
                    <Link
                        key={link.to}
                        href={link.to}
                        onClick={() => setMenuOpen(false)}
                        className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                        pathname === link.to
                            ? "bg-[#1e3a8a] text-white"
                            : "text-gray-700 hover:bg-blue-50 hover:text-[#1e3a8a]"
                        }`}
                    >
                        {link.label}
                    </Link>
                    ))}
                    <Link
                    href="/shipping"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-3 bg-[#f97316] text-white rounded-md text-sm font-medium text-center mt-2"
                    >
                    🚚 Gửi Hàng Ngay
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar;
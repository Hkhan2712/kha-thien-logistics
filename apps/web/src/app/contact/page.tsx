'use client'
import { useState } from "react";
import {
  Phone, Facebook, MessageCircle, MapPin, Clock, Mail,
  CheckCircle2, Send
} from "lucide-react";

const contactInfo = [
  {
    icon: <Phone size={24} className="text-[#f97316]" />,
    title: "Hotline",
    primary: "0901 234 567",
    secondary: "0902 345 678",
    action: { label: "Gọi ngay", href: "tel:0901234567" },
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    icon: <MessageCircle size={24} className="text-[#0068FF]" />,
    title: "Zalo",
    primary: "0901 234 567",
    secondary: "Nhắn tin nhanh – phản hồi trong 5 phút",
    action: { label: "Chat Zalo", href: "https://zalo.me/0901234567" },
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: <Facebook size={24} className="text-[#1877f2]" />,
    title: "Facebook",
    primary: "Kha Thiên Transportation",
    secondary: "Nhắn tin qua Messenger bất cứ lúc nào",
    action: { label: "Nhắn Facebook", href: "https://facebook.com/khathientransport" },
    bg: "bg-indigo-50",
    border: "border-indigo-200",
  },
  {
    icon: <Mail size={24} className="text-green-600" />,
    title: "Email",
    primary: "hotro@khathien.vn",
    secondary: "Phản hồi trong vòng 24 giờ làm việc",
    action: { label: "Gửi Email", href: "mailto:hotro@khathien.vn" },
    bg: "bg-green-50",
    border: "border-green-200",
  },
];

const offices = [
  {
    city: "TP. Hồ Chí Minh",
    badge: "Trụ sở chính",
    address: "123 Nguyễn Văn Linh, Phường Tân Phong, Quận 7, TP. Hồ Chí Minh",
    phone: "0901 234 567",
    hours: "Thứ 2 – Thứ 7: 7:00 – 20:00\nChủ nhật: 8:00 – 17:00",
  },
  {
    city: "Hà Nội",
    badge: "Chi nhánh",
    address: "456 Giải Phóng, Phường Thịnh Liệt, Quận Hoàng Mai, Hà Nội",
    phone: "0902 345 678",
    hours: "Thứ 2 – Thứ 7: 7:30 – 19:00\nChủ nhật: 8:00 – 16:00",
  },
  {
    city: "Đà Nẵng",
    badge: "Chi nhánh",
    address: "789 Trần Cao Vân, Phường Thanh Khê Đông, Quận Thanh Khê, Đà Nẵng",
    phone: "0903 456 789",
    hours: "Thứ 2 – Thứ 7: 7:30 – 19:00\nChủ nhật: Nghỉ",
  },
];

type ContactFormData = {
  name: string;
  phone: string;
  email: string;
  message: string;
};

const ContactPage = () => {
    const [formData, setFormData] = useState<ContactFormData>({ name: "", phone: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        await new Promise((r) => setTimeout(r, 1000));
        setLoading(false);
        setSubmitted(true);
    };

    return (
        <div>
        {/* Hero */}
        <section className="bg-linear-to-br from-[#1e3a8a] to-[#1d4ed8] text-white py-14 px-4">
            <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Liên Hệ
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Chúng Tôi Luôn Sẵn Sàng Hỗ Trợ</h1>
            <p className="text-blue-100 text-base max-w-xl mx-auto">
                Liên hệ ngay qua điện thoại, Zalo hoặc Facebook – nhân viên sẽ phản hồi trong vòng 5 phút trong giờ làm việc.
            </p>
            </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {contactInfo.map((c) => (
                <div key={c.title} className={`${c.bg} border ${c.border} rounded-2xl p-5 hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-3 mb-3">
                    <div className="bg-white rounded-xl p-2.5 shadow-sm">{c.icon}</div>
                    <h3 className="font-bold text-[#1e3a8a] text-lg">{c.title}</h3>
                </div>
                <p className="font-semibold text-gray-800 text-base mb-1">{c.primary}</p>
                <p className="text-gray-500 text-sm mb-4">{c.secondary}</p>
                <a
                    href={c.action.href}
                    target={c.action.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.action.href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 bg-[#1e3a8a] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors"
                >
                    {c.action.label}
                </a>
                </div>
            ))}
            </div>
        </section>

        {/* Business Hours */}
        <section className="bg-blue-50 py-12 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
                <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Giờ làm việc</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Chúng Tôi Hoạt Động</h2>
            </div>
            <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                {[
                { day: "Thứ 2 – Thứ 6", hours: "07:00 – 21:00", open: true },
                { day: "Thứ 7", hours: "07:00 – 20:00", open: true },
                { day: "Chủ Nhật", hours: "08:00 – 17:00", open: true },
                { day: "Ngày Lễ", hours: "Theo thông báo", open: false },
                ].map((row, i) => (
                <div key={row.day} className={`flex items-center justify-between px-5 py-3.5 ${i !== 3 ? "border-b border-gray-100" : ""}`}>
                    <div className="flex items-center gap-2">
                    <Clock size={16} className="text-gray-400" />
                    <span className="text-sm font-medium text-gray-700">{row.day}</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{row.hours}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${row.open ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"}`}>
                        {row.open ? "Mở cửa" : "Nghỉ"}
                    </span>
                    </div>
                </div>
                ))}
            </div>
            <p className="text-center text-gray-500 text-sm mt-4">
                📞 Hotline hỗ trợ gấp 24/7:{" "}
                <a href="tel:0901234567" className="text-[#1e3a8a] font-semibold hover:underline">0901 234 567</a>
            </p>
            </div>
        </section>

        {/* Offices */}
        <section className="py-12 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-8">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Văn phòng</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Hệ Thống Văn Phòng</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offices.map((o) => (
                <div key={o.city} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-[#1e3a8a]">{o.city}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${o.badge === "Trụ sở chính" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                    {o.badge}
                    </span>
                </div>
                <div className="flex items-start gap-2 mb-3">
                    <MapPin size={16} className="text-[#f97316] mt-0.5 shrink-0" />
                    <p className="text-gray-600 text-sm leading-relaxed">{o.address}</p>
                </div>
                <div className="flex items-center gap-2 mb-3">
                    <Phone size={15} className="text-[#f97316] shrink-0" />
                    <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="text-sm text-[#1e3a8a] font-medium hover:underline">
                    {o.phone}
                    </a>
                </div>
                <div className="flex items-start gap-2">
                    <Clock size={15} className="text-gray-400 mt-0.5 shrink-0" />
                    <p className="text-gray-500 text-xs whitespace-pre-line">{o.hours}</p>
                </div>
                </div>
            ))}
            </div>
        </section>

        {/* Contact Form */}
        <section className="bg-[#1e3a8a] py-14 px-4">
            <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Gửi Tin Nhắn Cho Chúng Tôi</h2>
                <p className="text-blue-200 text-sm">Để lại thông tin, nhân viên sẽ liên hệ lại trong thời gian sớm nhất.</p>
            </div>

            {submitted ? (
                <div className="bg-white rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Đã gửi thành công!</h3>
                <p className="text-gray-500 text-sm mb-4">Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong vòng 30 phút.</p>
                <button
                    onClick={() => { setSubmitted(false); setFormData({ name: "", phone: "", email: "", message: "" }); }}
                    className="bg-[#1e3a8a] text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:bg-blue-900 transition-colors"
                >
                    Gửi tin nhắn khác
                </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và tên *</label>
                    <input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] bg-white"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                    <input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="0901 234 567"
                        className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] bg-white"
                    />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] bg-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nội dung *</label>
                    <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Bạn cần hỗ trợ gì? Hãy để lại tin nhắn cho chúng tôi..."
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] bg-white resize-none"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#f97316] hover:bg-orange-600 disabled:bg-gray-300 text-white py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
                >
                    {loading ? (
                    <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Đang gửi...
                    </>
                    ) : (
                    <>
                        <Send size={18} /> Gửi Tin Nhắn
                    </>
                    )}
                </button>
                </form>
            )}
            </div>
        </section>

        {/* Social CTA */}
        <section className="py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Theo Dõi Chúng Tôi</h2>
            <p className="text-gray-500 text-sm mb-6">Cập nhật thông tin khuyến mãi, dịch vụ mới nhất từ Kha Thiên Transportation</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                href="https://facebook.com/khathientransport"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#1877f2] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                <Facebook size={20} /> Theo dõi Facebook
                </a>
                <a
                href="https://zalo.me/0901234567"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#0068FF] text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                >
                <MessageCircle size={20} /> Kết bạn Zalo
                </a>
            </div>
            </div>
        </section>
        </div>
    );
}

export default ContactPage;
import { ArrowRight, Truck, Shield, Clock, MapPin, Star, ChevronRight, Package, Boxes, Refrigerator, CheckCircle2 } from "lucide-react";

import Link from "next/link";

const services = [
    {
        icon: <Truck size={32} className="text-[#f97316]" />,
        title: "Vận Chuyển Liên Tỉnh",
        badge: "Phổ biến",
        desc: "Dịch vụ vận chuyển hàng hóa giữa các tỉnh thành trên toàn quốc với lộ trình tối ưu, đảm bảo hàng hóa đến nơi nhanh nhất.",
        features: ["Phủ sóng 63 tỉnh thành", "Thời gian 1-3 ngày", "Bảo hiểm hàng hóa", "Theo dõi realtime"],
        price: "Từ 50.000đ",
    },
    {
        icon: <Package size={32} className="text-[#f97316]" />,
        title: "Giao Hàng Nhanh Nội Thành",
        badge: "Nhanh nhất",
        desc: "Dịch vụ giao hàng trong ngày cho khu vực nội thành. Phù hợp với shop online, doanh nghiệp cần giao hàng gấp.",
        features: ["Giao trong 2-4 giờ", "Khu vực nội thành", "SMS thông báo", "Hoàn tiền nếu trễ"],
        price: "Từ 25.000đ",
    },
    {
        icon: <Boxes size={32} className="text-[#f97316]" />,
        title: "Vận Chuyển Hàng Nặng",
        badge: "Chuyên biệt",
        desc: "Chuyên vận chuyển hàng hóa cồng kềnh, nặng ký như máy móc thiết bị, nội thất, vật liệu xây dựng.",
        features: ["Tải trọng 500kg – 10 tấn", "Xe tải chuyên dụng", "Đóng gói chuyên nghiệp", "Bốc dỡ tận nơi"],
        price: "Báo giá theo yêu cầu",
    },
    {
        icon: <Refrigerator size={32} className="text-[#f97316]" />,
        title: "Hàng Lạnh – Thực Phẩm",
        badge: "Mới",
        desc: "Vận chuyển thực phẩm tươi sống, hàng đông lạnh với xe lạnh chuyên dụng, đảm bảo chất lượng hàng hóa.",
        features: ["Nhiệt độ -18°C đến +5°C", "Xe lạnh chuyên dụng", "Vệ sinh an toàn thực phẩm", "Giao nhanh trong ngày"],
        price: "Từ 80.000đ",
    },
];

const process = [
    { step: "01", title: "Đặt Lịch", desc: "Điền form gửi hàng hoặc gọi hotline để đặt lịch lấy hàng" },
    { step: "02", title: "Lấy Hàng", desc: "Nhân viên đến tận địa điểm lấy hàng theo thời gian bạn chọn" },
    { step: "03", title: "Vận Chuyển", desc: "Hàng được đóng gói an toàn và vận chuyển theo lộ trình tối ưu" },
    { step: "04", title: "Giao Hàng", desc: "Giao tận tay người nhận và xác nhận bàn giao hàng hóa" },
];

const cargoTypes = [
    "Hàng điện tử – thiết bị công nghệ",
    "Quần áo – giày dép – thời trang",
    "Mỹ phẩm – hóa mỹ phẩm",
    "Thực phẩm khô – bánh kẹo",
    "Đồ gia dụng – nội thất",
    "Máy móc – thiết bị công nghiệp",
    "Tài liệu – hồ sơ quan trọng",
    "Hàng nông sản – thực phẩm tươi",
];

const ServicesPage = () => {
    return (
        <div>
            {/* Hero */}
            <section className="bg-linear-to-br from-[#1e3a8a] to-[#1d4ed8] text-white py-14 px-4">
                <div className="max-w-4xl mx-auto text-center">
                <span className="inline-block bg-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    Dịch Vụ
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Đa Dạng Dịch Vụ Vận Chuyển</h1>
                <p className="text-blue-100 text-base max-w-2xl mx-auto leading-relaxed">
                    Kha Thiên cung cấp đầy đủ các giải pháp vận chuyển từ hàng nhỏ lẻ đến hàng hóa công nghiệp, phục vụ mọi nhu cầu của bạn.
                </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-14 px-4 max-w-6xl mx-auto">
                <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a]">Các Gói Dịch Vụ</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((s) => (
                    <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                        <div className="bg-orange-50 rounded-xl p-3 inline-block">{s.icon}</div>
                        <span className="bg-[#1e3a8a] text-white text-xs px-2.5 py-1 rounded-full font-medium">{s.badge}</span>
                    </div>
                    <h3 className="font-bold text-[#1e3a8a] text-lg mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                    <ul className="space-y-1.5 mb-4">
                        {s.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={15} className="text-green-500 shrink-0" />
                            {f}
                        </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <span className="text-[#f97316] font-semibold text-sm">{s.price}</span>
                        <Link
                            href="/shipping"
                            className="flex items-center gap-1 bg-[#f97316] text-white text-sm px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        >
                        Đặt ngay <ArrowRight size={14} />
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            </section>

            {/* Cargo types */}
            <section className="bg-blue-50 py-14 px-4">
                <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Loại hàng hóa</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Chúng Tôi Vận Chuyển Mọi Loại Hàng</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {cargoTypes.map((type) => (
                    <div key={type} className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 text-sm text-gray-700 font-medium hover:border-[#f97316] hover:text-[#f97316] transition-colors cursor-default">
                        {type}
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-14 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-10">
                <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Quy trình làm việc</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Gửi Hàng Chỉ 4 Bước Đơn Giản</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                {process.map((p, i) => (
                    <div key={p.step} className="text-center relative">
                    {i < process.length - 1 && (
                        <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-orange-200" />
                    )}
                    <div className="w-16 h-16 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center text-xl font-bold mx-auto mb-3 relative z-10">
                        {p.step}
                    </div>
                    <h3 className="font-semibold text-[#1e3a8a] text-sm mb-1">{p.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                ))}
                </div>
            </section>

            {/* Why us */}
            <section className="bg-[#1e3a8a] py-12 px-4">
                <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-white text-center mb-8">Cam Kết Dịch Vụ</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {[
                    { icon: <Shield size={24} />, title: "Bảo Hiểm Hàng Hóa", desc: "Mọi lô hàng đều được bảo hiểm 100% giá trị" },
                    { icon: <Clock size={24} />, title: "Giao Đúng Hẹn", desc: "Cam kết hoàn tiền nếu giao trễ hơn hẹn" },
                    { icon: <MapPin size={24} />, title: "Theo Dõi Realtime", desc: "Biết vị trí hàng hóa mọi lúc qua điện thoại" },
                    ].map((c) => (
                    <div key={c.title} className="flex items-start gap-3 bg-blue-800/50 rounded-xl p-4">
                        <div className="text-[#f97316] shrink-0 mt-0.5">{c.icon}</div>
                        <div>
                        <div className="text-white font-semibold text-sm mb-1">{c.title}</div>
                        <div className="text-blue-200 text-xs">{c.desc}</div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 px-4 text-center">
                <h2 className="text-2xl font-bold text-[#1e3a8a] mb-3">Sẵn Sàng Gửi Hàng?</h2>
                <p className="text-gray-500 text-sm mb-6">Điền form gửi hàng ngay – không cần đăng ký tài khoản!</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                    href="/shipping"
                    className="inline-flex items-center justify-center gap-2 bg-[#f97316] text-white px-7 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                >
                    Gửi Hàng Ngay <ArrowRight size={16} />
                </Link>
                <a
                    href="tel:0901234567"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#1e3a8a] text-[#1e3a8a] px-7 py-3 rounded-lg font-semibold hover:bg-[#1e3a8a] hover:text-white transition-colors"
                >
                    Gọi Tư Vấn: 0901 234 567
                </a>
                </div>
            </section>
        </div>
    );
}

export default ServicesPage;   
import { CheckCircle2, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const values = [
    { icon: <CheckCircle2 size={20} className="text-[#f97316]" />, title: "Uy tín", desc: "Luôn giữ lời hứa với khách hàng, cam kết giao hàng đúng thời gian." },
    { icon: <CheckCircle2 size={20} className="text-[#f97316]" />, title: "Trách nhiệm", desc: "Bảo đảm hàng hóa an toàn từ khi nhận đến khi giao tận tay người nhận." },
    { icon: <CheckCircle2 size={20} className="text-[#f97316]" />, title: "Minh bạch", desc: "Báo giá rõ ràng, không phát sinh chi phí ẩn, khách hàng luôn được thông báo đầy đủ." },
    { icon: <CheckCircle2 size={20} className="text-[#f97316]" />, title: "Tận tâm", desc: "Đội ngũ nhân viên nhiệt tình, luôn lắng nghe và giải đáp mọi thắc mắc của khách hàng." },
];

const milestones = [
    { year: "2019", event: "Thành lập công ty Kha Thiên Transportation tại TP. Hồ Chí Minh" },
    { year: "2020", event: "Mở rộng mạng lưới ra các tỉnh miền Trung và miền Bắc" },
    { year: "2022", event: "Đạt mốc 5.000 đơn hàng thành công, ký kết với 50+ đối tác doanh nghiệp" },
    { year: "2024", event: "Phủ sóng 63 tỉnh thành, đội xe hơn 30 chiếc, hơn 10.000 đơn hàng" },
];

const AboutUsPage = () => {
    return (
        <div>
        {/* Hero */}
        <section className="bg-linear-to-br from-[#1e3a8a] to-[#1d4ed8] text-white py-14 px-4">
            <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Về Chúng Tôi
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Kha Thiên Transportation</h1>
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Hơn 5 năm kinh nghiệm trong lĩnh vực vận chuyển hàng hóa, chúng tôi tự hào là đối tác tin cậy của hàng nghìn doanh nghiệp và cá nhân trên toàn quốc.
            </p>
            </div>
        </section>

        {/* Story & Image */}
        <section className="py-14 px-4 max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
                <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Câu chuyện của chúng tôi</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2 mb-4">
                Từ Nhỏ Bé Đến Mạnh Mẽ
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Kha Thiên Transportation được thành lập năm 2019 với xuất phát điểm là một đội xe nhỏ tại TP. Hồ Chí Minh. Với khát vọng mang lại giải pháp vận chuyển uy tín và hiệu quả, chúng tôi không ngừng phát triển và mở rộng quy mô hoạt động.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Hiện nay, Kha Thiên đã phủ sóng toàn bộ 63 tỉnh thành Việt Nam với đội ngũ nhân viên chuyên nghiệp và hệ thống xe tải hiện đại. Chúng tôi phục vụ từ cá nhân đến doanh nghiệp, từ hàng nhỏ lẻ đến hàng hóa thương mại quy mô lớn.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                Sứ mệnh của chúng tôi là tạo ra sự kết nối liền mạch giữa người gửi và người nhận, đồng thời đóng góp vào sự phát triển kinh tế của đất nước thông qua hoạt động logistics hiệu quả.
                </p>
            </div>
            <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                    src="https://images.unsplash.com/photo-1648433102653-584f60ebe2d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWxpdmVyeSUyMHRlYW0lMjBWaWV0bmFtZXNlJTIwbG9naXN0aWNzJTIwd29ya2Vyc3xlbnwxfHx8fDE3NzYwMDQ1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Our team"
                    className="w-full h-72 md:h-80 object-cover"
                />
                </div>
            </div>
            </div>
        </section>

        {/* Values */}
        <section className="bg-blue-50 py-14 px-4">
            <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
                <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Giá trị cốt lõi</span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Cam Kết Của Chúng Tôi</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {values.map((v) => (
                <div key={v.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex gap-4 items-start">
                    <div className="shrink-0 mt-0.5">{v.icon}</div>
                    <div>
                    <h3 className="font-semibold text-[#1e3a8a] mb-1">{v.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Timeline */}
        <section className="py-14 px-4 max-w-3xl mx-auto">
            <div className="text-center mb-10">
            <span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Chặng đường phát triển</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Hành Trình Của Chúng Tôi</h2>
            </div>
            <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 -translate-x-1/2" />
            <div className="space-y-8">
                {milestones.map((m, i) => (
                <div key={m.year} className={`relative flex gap-4 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? "md:text-right md:pr-10" : "md:text-left md:pl-10"} pl-16 md:pl-0`}>
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 inline-block text-left">
                        <span className="text-[#f97316] font-bold text-sm">{m.year}</span>
                        <p className="text-gray-600 text-sm mt-1">{m.event}</p>
                    </div>
                    </div>
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 top-4 w-4 h-4 rounded-full bg-[#f97316] border-2 border-white shadow" />
                    <div className="flex-1 hidden md:block" />
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Stats row */}
        <section className="bg-[#1e3a8a] py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
                { icon: <TrendingUp size={28} />, value: "10,000+", label: "Đơn hàng" },
                { icon: <Users size={28} />, value: "500+", label: "Khách hàng thường xuyên" },
                { icon: <Award size={28} />, value: "5+", label: "Năm kinh nghiệm" },
                { icon: <CheckCircle2 size={28} />, value: "98%", label: "Tỉ lệ hài lòng" },
            ].map((s) => (
                <div key={s.label}>
                <div className="flex justify-center text-[#f97316] mb-2">{s.icon}</div>
                <div className="text-2xl font-bold">{s.value}</div>
                <div className="text-blue-200 text-sm mt-1">{s.label}</div>
                </div>
            ))}
            </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 text-center">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-3">Bắt Đầu Gửi Hàng Ngay Hôm Nay</h2>
            <p className="text-gray-500 text-sm mb-6">Không cần đăng ký tài khoản. Chỉ cần điền thông tin và chúng tôi sẽ liên hệ ngay.</p>
            <Link
                href="/shipping"
                className="inline-flex items-center gap-2 bg-[#f97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
            Gửi Hàng Ngay
            </Link>
        </section>
        </div>
    );
}

export default AboutUsPage;
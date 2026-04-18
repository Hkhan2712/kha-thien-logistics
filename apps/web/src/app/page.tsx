import Link from "next/link";
import { Truck, Shield, Clock, MapPin, Star, ChevronRight, Package, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";

const stats = [
  { value: "5+", label: "Năm kinh nghiệm" },
  { value: "10K+", label: "Đơn hàng thành công" },
  { value: "63", label: "Tỉnh thành phủ sóng" },
  { value: "98%", label: "Khách hàng hài lòng" },
];

const features = [
	{
		icon: <Truck size={28} className="text-[#f97316]" />,
		title: "Vận Chuyển Nhanh",
		desc: "Giao hàng đúng hẹn, nhanh chóng trên toàn quốc với đội xe hiện đại.",
	},
	{
		icon: <Shield size={28} className="text-[#f97316]" />,
		title: "An Toàn – Bảo Mật",
		desc: "Hàng hóa được đóng gói và bảo quản cẩn thận, bảo hiểm hàng hóa đầy đủ.",
	},
	{
		icon: <Clock size={28} className="text-[#f97316]" />,
		title: "Hỗ Trợ 24/7",
		desc: "Đội ngũ chăm sóc khách hàng luôn sẵn sàng hỗ trợ bạn mọi lúc mọi nơi.",
	},
	{
		icon: <MapPin size={28} className="text-[#f97316]" />,
		title: "Theo Dõi Đơn Hàng",
		desc: "Cập nhật trạng thái vận chuyển theo thời gian thực qua điện thoại.",
	},
];

const testimonials = [
	{
		name: "Nguyễn Văn An",
		role: "Chủ shop online",
		content: "Dịch vụ tuyệt vời! Hàng luôn được giao đúng hẹn, nguyên vẹn. Tôi rất hài lòng và sẽ tiếp tục sử dụng dịch vụ.",
		stars: 5,
	},
	{
		name: "Trần Thị Bình",
		role: "Doanh nghiệp vừa và nhỏ",
		content: "Kha Thiên là đối tác vận chuyển tin cậy của công ty tôi trong 3 năm qua. Luôn chuyên nghiệp và tận tâm.",
		stars: 5,
	},
	{
		name: "Lê Minh Châu",
		role: "Khách hàng cá nhân",
		content: "Giá cả hợp lý, thái độ phục vụ tốt. Gọi là có người nhận hàng ngay, rất thuận tiện!",
		stars: 5,
	},
];

export default function Home() {
	return (
	<div>
		{/* Hero Section */}
		<section className="relative bg-[#1e3a8a] text-white overflow-hidden min-h-130 flex items-center">
			<div className="absolute inset-0">
			<ImageWithFallback
				src="https://images.unsplash.com/photo-1758738880454-7a81de45a0a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0cnVjayUyMHRyYW5zcG9ydGF0aW9uJTIwVmlldG5hbSUyMGhpZ2h3YXl8ZW58MXx8fHwxNzc2MDA0NTE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
				alt="Logistics truck"
				className="w-full h-full object-cover opacity-25"
			/>
			<div className="absolute inset-0 bg-linear-to-r from-[#1e3a8a]/95 via-[#1e3a8a]/80 to-transparent" />
			</div>
			<div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
			<div className="max-w-xl">
				<span className="inline-block bg-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
				🚚 Vận Chuyển Toàn Quốc
				</span>
				<h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
				Giải Pháp Vận Chuyển <span className="text-[#f97316]">Nhanh & Uy Tín</span>
				</h1>
				<p className="text-blue-100 mb-8 text-base md:text-lg leading-relaxed">
				Kha Thiên Transportation – Đối tác vận chuyển đáng tin cậy, kết nối hàng hóa của bạn đến mọi tỉnh thành trên cả nước với tốc độ nhanh và chi phí tối ưu.
				</p>
				<div className="flex flex-col sm:flex-row gap-3">
				<Link
					href={`/shipping`}
					className="flex items-center justify-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-base"
				>
					<Package size={18} />
					Gửi Hàng Ngay
				</Link>
				<Link
					href={`/services`}
					className="flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold transition-colors text-base"
				>
					Xem Dịch Vụ
					<ChevronRight size={18} />
				</Link>
				</div>
			</div>
			</div>
		</section>

		{/* Stats Bar */}
		<section className="bg-[#f97316]">
			<div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
			{stats.map((s) => (
				<div key={s.label} className="text-center text-white">
				<div className="text-2xl md:text-3xl font-bold">{s.value}</div>
				<div className="text-xs md:text-sm text-orange-100 mt-0.5">{s.label}</div>
				</div>
			))}
			</div>
		</section>

		{/* Features Section */}
		<section className="py-14 px-4 max-w-6xl mx-auto">
			<div className="text-center mb-10">
			<span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Tại sao chọn chúng tôi</span>
			<h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Dịch Vụ Chất Lượng Hàng Đầu</h2>
			<p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
				Chúng tôi cam kết mang lại trải nghiệm vận chuyển tốt nhất với chi phí hợp lý và dịch vụ chuyên nghiệp.
			</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
			{features.map((f) => (
				<div
				key={f.title}
				className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all text-center"
				>
				<div className="flex justify-center mb-3">
					<div className="bg-orange-50 rounded-full p-3">{f.icon}</div>
				</div>
				<h3 className="font-semibold text-[#1e3a8a] mb-2 text-base">{f.title}</h3>
				<p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
				</div>
			))}
			</div>
		</section>

		{/* CTA Banner */}
		<section className="bg-linear-to-r from-[#1e3a8a] to-[#1d4ed8] py-12 px-4">
			<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white">
			<div>
				<h2 className="text-xl md:text-2xl font-bold mb-1">Sẵn sàng gửi hàng hôm nay?</h2>
				<p className="text-blue-200 text-sm">Điền form gửi hàng chỉ trong vài phút, không cần đăng ký tài khoản.</p>
			</div>
			<Link
				href="/shipping"
				className="flex items-center gap-2 bg-[#f97316] hover:bg-orange-600 text-white px-7 py-3 rounded-lg font-semibold transition-colors shrink-0 text-base"
			>
				Gửi Hàng Ngay <ArrowRight size={18} />
			</Link>
			</div>
		</section>

		{/* Services Preview */}
		<section className="py-14 px-4 max-w-6xl mx-auto">
			<div className="text-center mb-10">
			<span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Dịch vụ của chúng tôi</span>
			<h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Các Loại Hàng Hóa Chúng Tôi Vận Chuyển</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
				<ImageWithFallback
				src="https://images.unsplash.com/photo-1773126378587-d30f7a716b14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBjYXJnbyUyMHNoaXBwaW5nJTIwY29udGFpbmVyc3xlbnwxfHx8fDE3NzYwMDQ1MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
				alt="Cargo shipping"
				className="w-full h-48 object-cover"
				/>
				<div className="p-5">
				<h3 className="font-semibold text-[#1e3a8a] mb-1">Hàng Hóa Thương Mại</h3>
				<p className="text-gray-500 text-sm">Vận chuyển hàng hóa thương mại, hàng kinh doanh với khối lượng lớn, đảm bảo an toàn và đúng tiến độ.</p>
				<Link href="/services" className="inline-flex items-center gap-1 text-[#f97316] text-sm font-medium mt-3 hover:gap-2 transition-all">
					Tìm hiểu thêm <ChevronRight size={16} />
				</Link>
				</div>
			</div>
			<div className="rounded-xl overflow-hidden shadow-sm border border-gray-100">
				<ImageWithFallback
				src="https://images.unsplash.com/photo-1773809855723-252b42ad6bbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHByZXNzJTIwcGFja2FnZSUyMGRlbGl2ZXJ5JTIwbW90b3JjeWNsZSUyMHVyYmFufGVufDF8fHx8MTc3NjAwNDUyMHww&ixlib=rb-4.1.0&q=80&w=1080"
				alt="Express delivery"
				className="w-full h-48 object-cover"
				/>
				<div className="p-5">
				<h3 className="font-semibold text-[#1e3a8a] mb-1">Giao Hàng Nhanh Nội Thành</h3>
				<p className="text-gray-500 text-sm">Dịch vụ giao hàng nội thành tốc độ cao, phù hợp cho shop online và cá nhân cần giao gấp trong ngày.</p>
				<Link href="/services" className="inline-flex items-center gap-1 text-[#f97316] text-sm font-medium mt-3 hover:gap-2 transition-all">
					Tìm hiểu thêm <ChevronRight size={16} />
				</Link>
				</div>
			</div>
			</div>
			<div className="text-center mt-6">
			<Link
				href="/services"
				className="inline-flex items-center gap-2 border-2 border-[#1e3a8a] text-[#1e3a8a] px-6 py-2.5 rounded-lg font-medium hover:bg-[#1e3a8a] hover:text-white transition-colors text-sm"
			>
				Xem tất cả dịch vụ <ChevronRight size={16} />
			</Link>
			</div>
		</section>

		{/* Testimonials */}
		<section className="bg-blue-50 py-14 px-4">
			<div className="max-w-6xl mx-auto">
			<div className="text-center mb-10">
				<span className="text-[#f97316] text-sm font-semibold uppercase tracking-wide">Đánh giá khách hàng</span>
				<h2 className="text-2xl md:text-3xl font-bold text-[#1e3a8a] mt-2">Khách Hàng Nói Gì Về Chúng Tôi</h2>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-5">
				{testimonials.map((t) => (
				<div key={t.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
					<div className="flex gap-0.5 mb-3">
					{Array.from({ length: t.stars }).map((_, i) => (
						<Star key={i} size={15} className="text-yellow-400 fill-yellow-400" />
					))}
					</div>
					<p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.content}"</p>
					<div>
					<div className="font-semibold text-[#1e3a8a] text-sm">{t.name}</div>
					<div className="text-gray-400 text-xs">{t.role}</div>
					</div>
				</div>
				))}
			</div>
			</div>
		</section>
	</div>
	);
}

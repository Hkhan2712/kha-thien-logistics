'use client';
import { CheckCircle2, ChevronDown, Truck, Shield, Clock, MapPin, User, Phone, Package, Weight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
    // Sender
    senderName: string;
    senderPhone: string;
    senderAddress: string;
    senderCity: string;
    // Receiver
    receiverName: string;
    receiverPhone: string;
    receiverAddress: string;
    receiverCity: string;
    // Cargo
    cargoType: string;
    cargoDescription: string;
    weight: string;
    dimensions: string;
    quantity: string;
    serviceType: string;
    note: string;
    // COD
    codAmount: string;
    insuranceValue: string;
};

const cities = [
    "TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Hải Phòng",
    "Bình Dương", "Đồng Nai", "An Giang", "Bà Rịa – Vũng Tàu", "Bắc Giang",
    "Bắc Kạn", "Bạc Liêu", "Bắc Ninh", "Bến Tre", "Bình Định", "Bình Phước",
    "Bình Thuận", "Cà Mau", "Cao Bằng", "Đắk Lắk", "Đắk Nông", "Điện Biên",
    "Đồng Tháp", "Gia Lai", "Hà Giang", "Hà Nam", "Hà Tĩnh", "Hải Dương",
    "Hậu Giang", "Hòa Bình", "Hưng Yên", "Khánh Hòa", "Kiên Giang",
    "Kon Tum", "Lai Châu", "Lạng Sơn", "Lào Cai", "Lâm Đồng", "Long An",
    "Nam Định", "Nghệ An", "Ninh Bình", "Ninh Thuận", "Phú Thọ", "Phú Yên",
    "Quảng Bình", "Quảng Nam", "Quảng Ngãi", "Quảng Ninh", "Quảng Trị",
    "Sóc Trăng", "Sơn La", "Tây Ninh", "Thái Bình", "Thái Nguyên",
    "Thanh Hóa", "Thừa Thiên Huế", "Tiền Giang", "Trà Vinh", "Tuyên Quang",
    "Vĩnh Long", "Vĩnh Phúc", "Yên Bái",
];

const cargoTypes = [
    "Hàng điện tử – Thiết bị công nghệ",
    "Quần áo – Thời trang",
    "Mỹ phẩm – Hóa mỹ phẩm",
    "Thực phẩm khô – Bánh kẹo",
    "Đồ gia dụng – Nội thất",
    "Máy móc – Thiết bị công nghiệp",
    "Tài liệu – Hồ sơ",
    "Hàng nông sản – Thực phẩm tươi",
    "Khác",
];

const serviceTypes = [
    { value: "express", label: "Giao Nhanh Nội Thành (2-4 giờ)" },
    { value: "standard", label: "Vận Chuyển Liên Tỉnh Tiêu Chuẩn (1-3 ngày)" },
    { value: "heavy", label: "Hàng Nặng – Cồng Kềnh" },
    { value: "cold", label: "Hàng Lạnh – Thực Phẩm" },
];

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const FormInput = ({ label, error, icon, ...props }: InputProps) => {
    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            {icon && <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>}
            <input
            {...props}
            className={`w-full border rounded-lg py-2.5 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] transition-colors bg-white ${
                icon ? "pl-10 pr-3" : "px-3"
            } ${error ? "border-red-400" : "border-gray-200"}`}
            />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  children: React.ReactNode;
}

const FormSelect = ({ label, error, children, ...props }: SelectProps) => {
    return (
        <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
        <div className="relative">
            <select
            {...props}
            className={`w-full border rounded-lg py-2.5 px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] transition-colors bg-white appearance-none pr-8 ${
                error ? "border-red-400" : "border-gray-200"
            }`}
            >
            {children}
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}

const ShippingPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [orderId] = useState(`KT${Date.now().toString().slice(-8)}`);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormData>();

    const onSubmit = async (data: FormData) => {
        // Simulate API call
        await new Promise((r) => setTimeout(r, 1200));
        console.log("Shipment request:", data);
        setSubmitted(true);
    };

    if (submitted) {
        return (
        <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-md w-full text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Đặt Hàng Thành Công!</h2>
            <p className="text-gray-500 text-sm mb-4">
                Yêu cầu gửi hàng của bạn đã được tiếp nhận. Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.
            </p>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-5">
                <p className="text-sm text-gray-600 mb-1">Mã đơn hàng của bạn:</p>
                <p className="text-2xl font-bold text-[#f97316]">{orderId}</p>
                <p className="text-xs text-gray-400 mt-1">Lưu lại mã này để theo dõi đơn hàng</p>
            </div>
            <div className="text-sm text-gray-500 mb-5">
                Hotline hỗ trợ:{" "}
                <a href="tel:0901234567" className="text-[#1e3a8a] font-semibold hover:underline">
                0901 234 567
                </a>
            </div>
            <button
                onClick={() => setSubmitted(false)}
                className="w-full bg-[#1e3a8a] text-white py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors"
            >
                Gửi Đơn Hàng Khác
            </button>
            </div>
        </div>
        );
    }
    return (
        <div>
        {/* Hero */}
        <section className="bg-linear-to-br from-[#1e3a8a] to-[#1d4ed8] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-[#f97316] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                Gửi Hàng Online
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Đặt Lịch Gửi Hàng</h1>
            <p className="text-blue-100 text-base max-w-xl mx-auto">
                Điền thông tin bên dưới – không cần đăng ký tài khoản. Nhân viên sẽ liên hệ xác nhận trong 30 phút.
            </p>
            </div>
        </section>

        {/* Form */}
        <section className="py-10 px-4 max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Sender Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
                <div className="bg-[#1e3a8a] rounded-lg p-1.5">
                    <User size={18} className="text-white" />
                </div>
                <h2 className="font-semibold text-[#1e3a8a] text-lg">Thông Tin Người Gửi</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                    label="Họ và tên *"
                    placeholder="Nguyễn Văn A"
                    icon={<User size={16} />}
                    error={errors.senderName?.message}
                    {...register("senderName", { required: "Vui lòng nhập họ tên" })}
                />
                <FormInput
                    label="Số điện thoại *"
                    placeholder="0901 234 567"
                    type="tel"
                    icon={<Phone size={16} />}
                    error={errors.senderPhone?.message}
                    {...register("senderPhone", {
                    required: "Vui lòng nhập số điện thoại",
                    pattern: { value: /^[0-9]{10,11}$/, message: "Số điện thoại không hợp lệ" },
                    })}
                />
                <div className="sm:col-span-2">
                    <FormInput
                    label="Địa chỉ lấy hàng *"
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện"
                    icon={<MapPin size={16} />}
                    error={errors.senderAddress?.message}
                    {...register("senderAddress", { required: "Vui lòng nhập địa chỉ" })}
                    />
                </div>
                <div className="sm:col-span-2">
                    <FormSelect
                    label="Tỉnh/Thành phố *"
                    error={errors.senderCity?.message}
                    {...register("senderCity", { required: "Vui lòng chọn tỉnh thành" })}
                    >
                    <option value="">-- Chọn tỉnh/thành phố --</option>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                    </FormSelect>
                </div>
                </div>
            </div>

            {/* Receiver Info */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
                <div className="bg-[#f97316] rounded-lg p-1.5">
                    <MapPin size={18} className="text-white" />
                </div>
                <h2 className="font-semibold text-[#1e3a8a] text-lg">Thông Tin Người Nhận</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                    label="Họ và tên *"
                    placeholder="Trần Thị B"
                    icon={<User size={16} />}
                    error={errors.receiverName?.message}
                    {...register("receiverName", { required: "Vui lòng nhập họ tên người nhận" })}
                />
                <FormInput
                    label="Số điện thoại *"
                    placeholder="0901 234 567"
                    type="tel"
                    icon={<Phone size={16} />}
                    error={errors.receiverPhone?.message}
                    {...register("receiverPhone", {
                    required: "Vui lòng nhập số điện thoại người nhận",
                    pattern: { value: /^[0-9]{10,11}$/, message: "Số điện thoại không hợp lệ" },
                    })}
                />
                <div className="sm:col-span-2">
                    <FormInput
                    label="Địa chỉ giao hàng *"
                    placeholder="Số nhà, tên đường, phường/xã, quận/huyện"
                    icon={<MapPin size={16} />}
                    error={errors.receiverAddress?.message}
                    {...register("receiverAddress", { required: "Vui lòng nhập địa chỉ người nhận" })}
                    />
                </div>
                <div className="sm:col-span-2">
                    <FormSelect
                    label="Tỉnh/Thành phố *"
                    error={errors.receiverCity?.message}
                    {...register("receiverCity", { required: "Vui lòng chọn tỉnh thành" })}
                    >
                    <option value="">-- Chọn tỉnh/thành phố --</option>
                    {cities.map((c) => <option key={c} value={c}>{c}</option>)}
                    </FormSelect>
                </div>
                </div>
            </div>

            {/* Cargo Details */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
                <div className="bg-green-600 rounded-lg p-1.5">
                    <Package size={18} className="text-white" />
                </div>
                <h2 className="font-semibold text-[#1e3a8a] text-lg">Thông Tin Hàng Hóa</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                    <FormSelect
                    label="Loại hàng hóa *"
                    error={errors.cargoType?.message}
                    {...register("cargoType", { required: "Vui lòng chọn loại hàng" })}
                    >
                    <option value="">-- Chọn loại hàng hóa --</option>
                    {cargoTypes.map((c) => <option key={c} value={c}>{c}</option>)}
                    </FormSelect>
                </div>
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả hàng hóa</label>
                    <textarea
                    placeholder="Mô tả chi tiết hàng hóa (màu sắc, thương hiệu, tình trạng...)"
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] transition-colors bg-white resize-none"
                    {...register("cargoDescription")}
                    />
                </div>
                <FormInput
                    label="Trọng lượng (kg) *"
                    placeholder="Ví dụ: 2.5"
                    type="number"
                    min="0.1"
                    step="0.1"
                    icon={<Weight size={16} />}
                    error={errors.weight?.message}
                    {...register("weight", { required: "Vui lòng nhập trọng lượng" })}
                />
                <FormInput
                    label="Số lượng kiện"
                    placeholder="Ví dụ: 1"
                    type="number"
                    min="1"
                    {...register("quantity")}
                />
                <FormInput
                    label="Kích thước (cm)"
                    placeholder="DxRxC: 30x20x15"
                    {...register("dimensions")}
                />
                <div className="sm:col-span-2">
                    <FormSelect
                    label="Loại dịch vụ *"
                    error={errors.serviceType?.message}
                    {...register("serviceType", { required: "Vui lòng chọn dịch vụ" })}
                    >
                    <option value="">-- Chọn loại dịch vụ --</option>
                    {serviceTypes.map((s) => (
                        <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                    </FormSelect>
                </div>
                </div>
            </div>

            {/* Extra options */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-5">
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
                <div className="bg-purple-600 rounded-lg p-1.5">
                    <Truck size={18} className="text-white" />
                </div>
                <h2 className="font-semibold text-[#1e3a8a] text-lg">Tùy Chọn Thêm</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormInput
                    label="Thu hộ COD (VNĐ)"
                    placeholder="Ví dụ: 500000"
                    type="number"
                    min="0"
                    {...register("codAmount")}
                />
                <FormInput
                    label="Giá trị hàng bảo hiểm (VNĐ)"
                    placeholder="Ví dụ: 2000000"
                    type="number"
                    min="0"
                    {...register("insuranceValue")}
                />
                <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ghi chú</label>
                    <textarea
                    placeholder="Ghi chú thêm cho tài xế hoặc nhân viên (thời gian lấy hàng, lưu ý đặc biệt...)"
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg py-2.5 px-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/30 focus:border-[#1e3a8a] transition-colors bg-white resize-none"
                    {...register("note")}
                    />
                </div>
                </div>
            </div>

            {/* Notice */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                <p className="text-[#1e3a8a] text-sm font-medium mb-1">📋 Lưu ý quan trọng:</p>
                <ul className="text-gray-600 text-xs space-y-1 list-disc list-inside">
                <li>Nhân viên sẽ gọi xác nhận đơn hàng trong vòng 30 phút sau khi bạn gửi form.</li>
                <li>Giá cước sẽ được báo cụ thể sau khi xem hàng hoặc qua điện thoại.</li>
                <li>Mọi hàng hóa vi phạm pháp luật đều không được vận chuyển.</li>
                </ul>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#f97316] hover:bg-orange-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-base transition-colors flex items-center justify-center gap-2"
            >
                {isSubmitting ? (
                <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Đang gửi yêu cầu...
                </>
                ) : (
                <>
                    <Package size={20} />
                    Gửi Yêu Cầu Đặt Hàng
                </>
                )}
            </button>
                <p className="text-center text-gray-400 text-xs mt-3">
                    Hoặc gọi trực tiếp:{" "}
                    <a href="tel:0901234567" className="text-[#1e3a8a] font-semibold hover:underline">
                    0901 234 567
                    </a>{" "}
                    để được tư vấn ngay
                </p>
            </form>
        </section>
    </div>
    );
};

export default ShippingPage;
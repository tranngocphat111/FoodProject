import { Clock, MapPin, Star } from "lucide-react";
import { Carousel } from "antd";
export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="px-6 py-16 md:py-24 grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                <div className="space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold text-primary_yellow leading-snug">
                        Chúng tôi mang đến những bữa ăn lành mạnh cho gia đình
                        bạn.
                    </h1>
                    <p className="text-gray-300 leading-relaxed">
                        Trải nghiệm hương vị chân thật và nguyên bản từ gian bếp
                        của chúng tôi đến bàn ăn của bạn. Đội ngũ đầu bếp luôn
                        chuẩn bị từng món ăn với sự tận tâm và tỉ mỉ.
                    </p>
                    <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                        <button className="px-6 py-3 bg-primary_yellow text-primary_brown font-semibold rounded-full hover:bg-opacity-90 transition-all">
                            Liên hệ với chúng tôi ngay
                        </button>
                        <button className="px-6 py-3 border-2 border-primary_yellow text-primary_yellow rounded-full hover:bg-primary_yellow hover:text-primary_brown transition-all">
                            Xem thực đơn
                        </button>
                    </div>
                </div>
                <div>
                    <Carousel arrows infinite={false}>
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
                            alt="Delicious food plate"
                            className="rounded-lg w-full h-[400px] object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
                            alt="Delicious food plate"
                            className="rounded-lg w-full h-[400px] object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
                            alt="Delicious food plate"
                            className="rounded-lg w-full h-[400px] object-cover shadow-lg"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
                            alt="Delicious food plate"
                            className="rounded-lg w-full h-[400px] object-cover shadow-lg"
                        />
                    </Carousel>
                </div>
            </section>

            {/* Features */}
            <section className="bg-primary_linear px-6 py-16 text-white text-center">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: Clock,
                            title: "Tươi ngon mỗi ngày",
                            desc: "Chúng tôi chuẩn bị nguyên liệu tươi sống mỗi ngày để đảm bảo chất lượng tốt nhất.",
                        },
                        {
                            icon: MapPin,
                            title: "Đặt hàng dễ dàng",
                            desc: "Chọn món ăn yêu thích và đặt hàng trực tuyến hoặc qua điện thoại.",
                        },
                        {
                            icon: Star,
                            title: "Nhà hàng hàng đầu",
                            desc: "Được khách hàng đánh giá là nhà hàng tốt nhất trong thành phố.",
                        },
                    ].map((feature, index) => (
                        <div key={index} className="space-y-4">
                            <feature.icon className="h-12 w-12 mx-auto text-primary_yellow" />
                            <h3 className="font-semibold text-xl">
                                {feature.title}
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Stats */}
            <section className="px-6 py-16 max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl font-bold text-primary_yellow leading-snug">
                            Thông tin dành cho những vị khách quý của chúng tôi.
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Chúng tôi tự hào mang đến trải nghiệm ẩm thực tuyệt
                            vời nhất.
                        </p>
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { value: "3", label: "Ngôi sao Michelin" },
                                { value: "1995", label: "Hoạt động từ" },
                                { value: "65+", label: "Thành viên nhân viên" },
                                { value: "100%", label: "Khách hàng hài lòng" },
                            ].map((stat, index) => (
                                <div key={index}>
                                    <div className="text-4xl font-bold text-primary_yellow">
                                        {stat.value}
                                    </div>
                                    <div className="text-white">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80"
                            alt="Chef preparing food"
                            className="rounded-lg w-full h-[400px] object-cover shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-primary_linear px-6 py-16 text-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-primary_yellow mb-12">
                        Khách hàng nói gì về chúng tôi
                    </h2>
                    <div className="grid md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
                            >
                                <div className="flex justify-center gap-2 mb-4">
                                    {[...Array(5)].map((_, star) => (
                                        <Star
                                            key={star}
                                            className="h-4 w-4 fill-primary_yellow text-primary_yellow"
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-200 leading-relaxed mb-4">
                                    "Trải nghiệm ẩm thực tuyệt vời nhất mà tôi
                                    từng có trong nhiều năm qua. Món ăn tuyệt
                                    hảo và dịch vụ vô cùng xuất sắc."
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <img
                                        src={`https://i.pravatar.cc/150?img=${i}`}
                                        alt="Customer"
                                        className="w-12 h-12 rounded-full"
                                    />
                                    <div>
                                        <div className="font-semibold">
                                            John Doe
                                        </div>
                                        <div className="text-sm text-gray-300">
                                            Nhà phê bình ẩm thực
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

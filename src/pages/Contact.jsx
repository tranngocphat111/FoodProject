import React, { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Hàm xử lý khi người dùng gửi form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập gọi API (Delay 1.5 giây)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form đã được gửi:", formData);
    setIsLoading(false);
  };

  // Hàm xử lý thay đổi dữ liệu trong form
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-primary-linear flex flex-col items-center justify-start p-4 animate-gradient relative overflow-hidden">
      {/* Các phần tử nền động */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary_yellow/20 blur-[100px] animate-pulse-slow"></div>
          <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full bg-primary_yellow/10 blur-[100px] animate-float"></div>
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-primary_yellow/15 blur-[100px] animate-float-delayed"></div>
        </div>
      </div>

      <div className="w-full max-w-6xl relative z-10 mt-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary_yellow via-yellow-500 to-primary_yellow bg-clip-text animate-gradient-x tracking-wide text-center text-primary_yellow">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="mt-4 text-gray-300 text-lg lg:text-xl animate-fade-in text-center max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn. Đừng ngần ngại
            liên hệ với chúng tôi để nhận được sự hỗ trợ tốt nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form liên hệ */}
          <div
            className="bg-primary_brown/40 backdrop-blur-xl rounded-xl p-8 shadow-[0_0_50px_rgba(255,196,4,0.1)] 
            transform transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,196,4,0.15)] 
            border border-primary_yellow/10 hover:border-primary_yellow/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="transform transition-all duration-300 hover:-translate-y-1">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3 bg-primary_brown/60 border border-gray-700 rounded-lg 
                      focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                      placeholder-gray-500 transition-all duration-300 ease-in-out
                      hover:bg-primary_brown/80 hover:border-primary_yellow/50"
                    required
                  />
                </div>
                <div className="transform transition-all duration-300 hover:-translate-y-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-primary_brown/60 border border-gray-700 rounded-lg 
                      focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                      placeholder-gray-500 transition-all duration-300 ease-in-out
                      hover:bg-primary_brown/80 hover:border-primary_yellow/50"
                    required
                  />
                </div>
              </div>
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Tiêu đề"
                  className="w-full px-4 py-3 bg-primary_brown/60 border border-gray-700 rounded-lg 
                    focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                    placeholder-gray-500 transition-all duration-300 ease-in-out
                    hover:bg-primary_brown/80 hover:border-primary_yellow/50"
                  required
                />
              </div>
              <div className="transform transition-all duration-300 hover:-translate-y-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nội dung tin nhắn"
                  rows={4}
                  className="w-full px-4 py-3 bg-primary_brown/60 border border-gray-700 rounded-lg 
                    focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                    placeholder-gray-500 transition-all duration-300 ease-in-out
                    hover:bg-primary_brown/80 hover:border-primary_yellow/50"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary_yellow text-primary_brown font-semibold py-3 rounded-lg 
                  transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                  hover:bg-primary_yellow/90 hover:shadow-lg hover:shadow-primary_yellow/20
                  disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden
                  before:absolute before:inset-0 before:bg-white/20 before:transform before:scale-x-0 
                  before:origin-right before:transition-transform before:duration-300
                  hover:before:scale-x-100 hover:before:origin-left"
              >
                <span
                  className={`inline-flex items-center gap-2 transition-all duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <Send className="w-5 h-5" />
                  Gửi tin nhắn
                </span>
                {isLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ và bản đồ */}
          <div className="space-y-8">
            <div
              className="bg-primary_brown/40 backdrop-blur-xl rounded-xl p-8 shadow-[0_0_50px_rgba(255,196,4,0.1)] 
              border border-primary_yellow/10 space-y-6"
            >
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary_yellow/10 rounded-lg group-hover:bg-primary_yellow/20 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">
                    Điện thoại
                  </h3>
                  <p className="text-gray-400">+84 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary_yellow/10 rounded-lg group-hover:bg-primary_yellow/20 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">Email</h3>
                  <p className="text-gray-400">info@amazingfood.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary_yellow/10 rounded-lg group-hover:bg-primary_yellow/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">Địa chỉ</h3>
                  <p className="text-gray-400">
                    123 Nguyễn Huệ, Quận 1, TP.HCM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="p-3 bg-primary_yellow/10 rounded-lg group-hover:bg-primary_yellow/20 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">
                    Giờ mở cửa
                  </h3>
                  <p className="text-gray-400">T2-CN: 8:00 - 22:00</p>
                </div>
              </div>
            </div>

            {/* Bản đồ với Leaflet */}
            <div className="h-[300px] bg-primary_brown/40 backdrop-blur-xl rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,196,4,0.1)] border border-primary_yellow/10">
              <MapContainer
                center={new LatLng(10.762622, 106.660172)}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={new LatLng(10.762622, 106.660172)}>
                  <Popup>
                    Amazing Food
                    <br /> 123 Nguyễn Huệ, Quận 1, TP.HCM
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

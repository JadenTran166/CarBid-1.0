import React from "react";
import { Car, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/50">
                <Car className="text-white w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">
                CarBid
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Nền tảng đấu giá và định giá xe ô tô hàng đầu Việt Nam. Chúng tôi giúp bạn bán xe nhanh nhất với giá tốt nhất thông qua quy trình minh bạch và chuyên nghiệp.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white border-none transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white border-none transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-slate-800 hover:bg-blue-600 hover:text-white border-none transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Khám phá</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Định giá xe</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Đấu giá xe</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bảng giá ô tô</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tin tức & Đánh giá</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Hỗ trợ</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Quy trình đấu giá</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Liên hệ quảng cáo</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tuyển dụng</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white">Liên hệ</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">123 Đường Láng, Đống Đa, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">1900 1234</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span className="text-slate-400">support@carbid.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-slate-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© 2024 CarBid. Tất cả quyền được bảo lưu.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300">Tiếng Việt</a>
            <a href="#" className="hover:text-slate-300">English</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

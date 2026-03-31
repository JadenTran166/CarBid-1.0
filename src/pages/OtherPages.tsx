import React from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, User, ArrowRight, Phone, Mail } from "lucide-react";
import { Label } from "@/components/ui/label";
import { MOCK_BLOGS } from "@/data/mockData";
import { IMAGES } from "@/constants/images";

export const Blog: React.FC = () => {
  const featured = MOCK_BLOGS.find(b => b.featured);
  const posts = MOCK_BLOGS.filter(b => !b.featured);

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col gap-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold text-slate-900">Khám phá & Tin tức</h1>
          <p className="text-lg text-slate-500">Cập nhật những thông tin mới nhất về thị trường ô tô Việt Nam</p>
        </div>
        <div className="relative w-full max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <Input className="h-14 pl-12 pr-4 rounded-full border-slate-200 shadow-sm" placeholder="Tìm kiếm bài viết..." />
        </div>
      </div>

      {featured && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative group cursor-pointer"
        >
          <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] blur-2xl -z-10" />
          <Card className="overflow-hidden rounded-[2.5rem] border-none shadow-xl shadow-slate-200/50">
            <div className="grid lg:grid-cols-2">
              <div className="relative aspect-[16/9] lg:aspect-auto overflow-hidden">
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-blue-600 text-white px-4 py-1.5 rounded-full shadow-lg border-none">Nổi bật</Badge>
                </div>
              </div>
              <CardContent className="p-10 lg:p-16 flex flex-col justify-center gap-6">
                <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-blue-600" /> {featured.date}</span>
                  <span className="flex items-center gap-2"><User className="w-4 h-4 text-blue-600" /> {featured.author}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">{featured.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{featured.excerpt}</p>
                <Button variant="link" className="text-blue-600 font-bold p-0 w-fit group/btn">
                  Đọc tiếp <ArrowRight className="ml-2 w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div key={post.id} whileHover={{ y: -5 }}>
            <Card className="overflow-hidden rounded-[2rem] border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-4 text-xs text-slate-400 font-bold uppercase tracking-wider">
                  <span>{post.date}</span>
                  <div className="w-1 h-1 bg-slate-300 rounded-full" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">{post.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <Button variant="ghost" className="text-blue-600 font-bold p-0 hover:bg-transparent mt-2 group/btn">
                  Đọc tiếp <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const PriceList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col gap-16">
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">Bảng giá ô tô 2024</h1>
        <p className="text-lg text-slate-500 leading-relaxed">Cập nhật giá niêm yết và giá lăn bánh mới nhất của các dòng xe phổ biến tại Việt Nam.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[
          "Toyota", "BMW", "VinFast", "Mercedes", "Hyundai", "Kia", 
          "Mazda", "Ford", "Honda", "Mitsubishi", "Lexus", "Audi"
        ].map((brand) => (
          <Card key={brand} className="group hover:shadow-lg transition-all duration-300 border-slate-100 cursor-pointer overflow-hidden rounded-2xl">
            <CardContent className="p-6 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <img 
                  src={IMAGES.brands[brand.toLowerCase() as keyof typeof IMAGES.brands] || IMAGES.brands.toyota} 
                  alt={brand} 
                  className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <span className="text-sm font-bold text-slate-700">{brand}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="rounded-[2rem] border-slate-100 shadow-sm overflow-hidden">
        <div className="p-10 flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-slate-900">Thị trường ô tô tháng 03/2024</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed flex flex-col gap-4">
            <p>Thị trường ô tô Việt Nam trong tháng 3/2024 ghi nhận sự biến động nhẹ về giá bán của nhiều dòng xe. Các hãng xe lớn như Toyota, Hyundai, và Kia tiếp tục duy trì các chương trình khuyến mại, giảm giá niêm yết để kích cầu mua sắm.</p>
            <p>Đáng chú ý, phân khúc xe điện đang có những bước tiến mạnh mẽ với sự xuất hiện của các mẫu xe mới từ VinFast và các thương hiệu quốc tế. Giá lăn bánh của xe điện hiện đang rất cạnh tranh nhờ chính sách miễn lệ phí trước bạ của Chính phủ.</p>
            <p>Dưới đây là bảng giá tham khảo cho một số dòng xe "hot" nhất hiện nay:</p>
            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li><strong>Toyota Vios:</strong> 479 - 592 triệu VNĐ</li>
              <li><strong>Hyundai Accent:</strong> 426 - 542 triệu VNĐ</li>
              <li><strong>Mazda CX-5:</strong> 749 - 999 triệu VNĐ</li>
              <li><strong>VinFast VF8:</strong> 1.090 - 1.270 triệu VNĐ</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export const Contact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col gap-16">
      <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900">Liên hệ với chúng tôi</h1>
        <p className="text-lg text-slate-500 leading-relaxed">Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy để lại thông tin hoặc liên hệ trực tiếp qua hotline.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <Card className="rounded-[2rem] border-none shadow-2xl shadow-slate-200/50 overflow-hidden">
          <CardContent className="p-10 flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-slate-900">Gửi tin nhắn cho CarBid</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <Label className="text-sm font-bold text-slate-700">Họ và tên</Label>
                <Input placeholder="Nhập họ tên" className="h-14 rounded-xl border-slate-200" />
              </div>
              <div className="flex flex-col gap-3">
                <Label className="text-sm font-bold text-slate-700">Email</Label>
                <Input placeholder="Nhập email" className="h-14 rounded-xl border-slate-200" />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <Label className="text-sm font-bold text-slate-700">Chủ đề</Label>
                <Input placeholder="Bạn cần hỗ trợ về vấn đề gì?" className="h-14 rounded-xl border-slate-200" />
              </div>
              <div className="flex flex-col gap-3 sm:col-span-2">
                <Label className="text-sm font-bold text-slate-700">Nội dung</Label>
                <textarea className="min-h-[150px] p-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" placeholder="Nhập nội dung chi tiết..." />
              </div>
            </div>
            <Button className="w-full rounded-full h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 font-bold text-lg">Gửi yêu cầu</Button>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100 flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-blue-600 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Hotline</h3>
              <p className="text-2xl font-bold text-blue-700">1900 1234</p>
              <p className="text-sm text-slate-500">Hỗ trợ 24/7 tất cả các ngày trong tuần</p>
            </div>
            <div className="bg-green-50 p-8 rounded-[2rem] border border-green-100 flex flex-col gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-green-600 shadow-sm">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Email</h3>
              <p className="text-xl font-bold text-green-700">support@carbid.vn</p>
              <p className="text-sm text-slate-500">Phản hồi trong vòng 2 giờ làm việc</p>
            </div>
          </div>

          <Card className="rounded-[2rem] border-slate-100 shadow-sm overflow-hidden h-[350px] relative">
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-slate-400">
                <Search className="w-12 h-12" />
                <span className="font-bold">Google Maps Mockup</span>
              </div>
            </div>
            <img 
              src={IMAGES.ui.showroom} 
              alt="Map" 
              className="w-full h-full object-cover opacity-50 grayscale" 
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Văn phòng CarBid</p>
                <p className="text-sm text-slate-500">123 Đường Láng, Đống Đa, Hà Nội</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

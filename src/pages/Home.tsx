import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Car, ShieldCheck, TrendingUp, Zap, ArrowRight, Star } from "lucide-react";
import { MOCK_CARS, BRANDS } from "@/data/mockData";
import { IMAGES } from "@/constants/images";

interface HomeProps {
  setActivePage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setActivePage }) => {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent blur-3xl" />
        
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100 w-fit shadow-sm">
              <Star className="w-4 h-4 fill-blue-700" />
              Nền tảng đấu giá xe số 1 Việt Nam
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Bán xe nhanh nhất <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Giá tốt nhất
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Định giá xe chính xác trong 1 phút. Kết nối hàng nghìn người mua và đại lý uy tín trên toàn quốc.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="rounded-full h-14 px-10 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-xl shadow-blue-200 border-none group"
                onClick={() => setActivePage("sell")}
              >
                Định giá xe ngay
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full h-14 px-10 text-lg border-slate-200 text-slate-700 hover:bg-slate-50"
                onClick={() => setActivePage("prices")}
              >
                Xem bảng giá xe
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">10k+</span>
                <span className="text-sm text-slate-500">Xe đã bán</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">5k+</span>
                <span className="text-sm text-slate-500">Đại lý đối tác</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                <span className="text-sm text-slate-500">Đánh giá</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-[2.5rem] blur-2xl opacity-20 -z-10 animate-pulse" />
            <img 
              src={IMAGES.hero.main} 
              alt="Car Hero" 
              className="rounded-[2rem] shadow-2xl border-8 border-white object-cover aspect-[4/3]"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            
            {/* Floating Info Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                <TrendingUp className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">Giá cao hơn 15%</p>
                <p className="text-xs text-slate-500">So với bán trực tiếp tại showroom</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-3xl font-bold text-slate-900">Thương hiệu phổ biến</h2>
            <p className="text-slate-500">Chúng tôi hỗ trợ đấu giá tất cả các dòng xe từ phổ thông đến hạng sang</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {BRANDS.map((brand) => (
              <Card key={brand.name} className="group hover:shadow-lg transition-all duration-300 border-slate-100 cursor-pointer overflow-hidden rounded-2xl">
                <CardContent className="p-6 flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <img 
                      src={brand.logo} 
                      alt={brand.name} 
                      className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all" 
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{brand.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 flex flex-col gap-16">
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-slate-900">Tại sao chọn CarBid?</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Quy trình bán xe hiện đại, minh bạch và tối ưu hóa lợi ích cho chủ xe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8 text-blue-600" />,
                title: "Nhanh chóng",
                desc: "Định giá xe trong 1 phút, bán xe trong vòng 24h sau khi kiểm định thành công.",
                color: "bg-blue-100"
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-green-600" />,
                title: "Minh bạch",
                desc: "Mọi thông tin đấu giá đều được công khai. Quy trình kiểm định 160 điểm tiêu chuẩn.",
                color: "bg-green-100"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
                title: "Giá tốt nhất",
                desc: "Hàng nghìn đại lý cùng tham gia đấu giá giúp bạn thu về số tiền cao nhất có thể.",
                color: "bg-purple-100"
              }
            ].map((feature) => (
              <motion.div 
                key={feature.title}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col gap-6"
              >
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          <div className="flex items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-slate-900">Xe đang đấu giá</h2>
              <p className="text-slate-500">Cơ hội sở hữu những mẫu xe chất lượng với mức giá hấp dẫn</p>
            </div>
            <Button variant="link" className="text-blue-600 font-bold group">
              Xem tất cả <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {MOCK_CARS.map((car) => (
              <motion.div key={car.id} whileHover={{ y: -5 }}>
                <Card className="overflow-hidden rounded-[2rem] border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={car.image} 
                      alt={car.model} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1.5 bg-blue-600 text-white text-xs font-bold rounded-full shadow-lg">
                        {car.status}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-bold text-blue-600 uppercase tracking-wider">{car.brand}</p>
                      <h3 className="text-2xl font-bold text-slate-900">{car.model} {car.year}</h3>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-4 h-4" />
                        {car.km.toLocaleString()} km
                      </div>
                      <div className="w-1 h-1 bg-slate-300 rounded-full" />
                      <div className="flex items-center gap-1.5">
                        <Car className="w-4 h-4" />
                        {car.version}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <div className="flex flex-col">
                        <span className="text-xs text-slate-400 font-medium">Giá khởi điểm</span>
                        <span className="text-xl font-bold text-slate-900">{(car.price / 1000000000).toFixed(2)} tỷ</span>
                      </div>
                      <Button size="sm" className="rounded-full bg-slate-900 hover:bg-blue-600 text-white px-6">
                        Đấu giá
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 skew-x-[-20deg] translate-x-1/2" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex flex-col gap-6 text-center lg:text-left max-w-xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Sẵn sàng bán xe của bạn với giá cao nhất?
              </h2>
              <p className="text-lg text-blue-50 leading-relaxed">
                Tham gia cùng hàng nghìn chủ xe đã tin tưởng CarBid. Quy trình nhanh gọn, an toàn và hoàn toàn miễn phí định giá.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Button 
                size="lg" 
                className="rounded-full h-16 px-12 text-lg bg-white text-blue-600 hover:bg-blue-50 shadow-xl"
                onClick={() => setActivePage("sell")}
              >
                Định giá ngay
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full h-16 px-12 text-lg border-white/30 text-white hover:bg-white/10"
              >
                Tìm hiểu thêm
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

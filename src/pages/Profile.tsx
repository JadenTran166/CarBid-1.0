import React from "react";
import { motion } from "motion/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Car, User, Settings, LogOut, TrendingUp, ShieldCheck, Edit, Trash2, ArrowRight, Bell, Mail, Phone, CheckCircle2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { MOCK_CARS } from "@/data/mockData";
import { IMAGES, getCarImage } from "@/constants/images";
import { AnimatePresence } from "motion/react";

interface ProfileProps {
  myCars: any[];
  setActivePage: (page: string) => void;
}

export const Profile: React.FC<ProfileProps> = ({ myCars, setActivePage }) => {
  const [activeTab, setActiveTab] = React.useState("overview");

  const user = {
    name: "Trần Quốc Cường",
    email: "tranquoccuong1234@gmail.com",
    avatar: "https://github.com/shadcn.png",
    phone: "0912 345 678",
    location: "Hà Nội",
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
          <div className="flex items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-blue-50 shadow-xl">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>QC</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold text-slate-900">{user.name}</h1>
              <p className="text-slate-500 flex items-center gap-2">
                <Mail className="w-4 h-4" /> {user.email}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <Badge variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100 border-none px-3 py-1">Thành viên Vàng</Badge>
                <Badge variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100 border-none px-3 py-1">Đã xác thực</Badge>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              className="rounded-full h-12 px-6 border-slate-200"
              onClick={() => setActivePage("sell")}
            >
              <TrendingUp className="mr-2 w-4 h-4" /> Định giá xe
            </Button>
            <Button 
              className="rounded-full h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200"
              onClick={() => setActivePage("sell")}
            >
              Đăng ký bán xe
            </Button>
          </div>
        </div>

        {/* Tabs Section */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-slate-100/50 p-1.5 rounded-full h-16 w-full max-w-2xl mx-auto mb-12">
            <TabsTrigger value="overview" className="rounded-full flex-1 h-full data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold text-slate-500 gap-2">
              <User className="w-4 h-4" /> Tổng quan
            </TabsTrigger>
            <TabsTrigger value="my-cars" className="rounded-full flex-1 h-full data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold text-slate-500 gap-2">
              <Car className="w-4 h-4" /> Xe của tôi
            </TabsTrigger>
            <TabsTrigger value="account" className="rounded-full flex-1 h-full data-[state=active]:bg-white data-[state=active]:shadow-md data-[state=active]:text-blue-600 font-bold text-slate-500 gap-2">
              <Settings className="w-4 h-4" /> Tài khoản
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait">
            <TabsContent value="overview">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-3 gap-8"
              >
                <Card className="md:col-span-2 rounded-[2rem] border-slate-100 shadow-sm overflow-hidden">
                  <CardHeader className="p-8 pb-4">
                    <CardTitle className="text-2xl font-bold">Chào mừng trở lại!</CardTitle>
                    <CardDescription>Bạn có 2 xe đang trong quá trình đấu giá và 1 xe chờ kiểm định.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex flex-col gap-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { label: "Tổng xe", value: "3", icon: <Car className="text-blue-600" />, color: "bg-blue-50" },
                        { label: "Đang bán", value: "2", icon: <TrendingUp className="text-green-600" />, color: "bg-green-50" },
                        { label: "Đã bán", value: "1", icon: <ShieldCheck className="text-purple-600" />, color: "bg-purple-50" },
                        { label: "Thông báo", value: "12", icon: <Bell className="text-orange-600" />, color: "bg-orange-50" },
                      ].map((stat) => (
                        <div key={stat.label} className={`${stat.color} p-6 rounded-2xl flex flex-col gap-2`}>
                          <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            {stat.icon}
                          </div>
                          <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
                          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <h3 className="text-lg font-bold">Hoạt động gần đây</h3>
                      <div className="flex flex-col gap-3">
                        {[
                          { title: "BMW 520i nhận được giá thầu mới 2.1 tỷ", time: "2 giờ trước", type: "bid" },
                          { title: "VinFast VF8 đã hoàn thành kiểm định", time: "5 giờ trước", type: "check" },
                          { title: "Đăng ký bán xe Toyota Vios thành công", time: "Hôm qua", type: "success" },
                        ].map((activity) => (
                          <div key={activity.title} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                              <div className="w-2 h-2 bg-blue-500 rounded-full" />
                              <span className="font-medium text-slate-700">{activity.title}</span>
                            </div>
                            <span className="text-xs text-slate-400">{activity.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="rounded-[2rem] border-slate-100 shadow-sm bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                  <CardHeader className="p-8">
                    <CardTitle className="text-2xl font-bold">Định giá xe của bạn</CardTitle>
                    <CardDescription className="text-slate-400">Nhận báo giá chính xác nhất từ hệ thống AI của CarBid.</CardDescription>
                  </CardHeader>
                  <CardContent className="p-8 pt-0 flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">Hoàn toàn miễn phí</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">Kết quả sau 1 phút</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium">Bảo mật thông tin</span>
                      </div>
                    </div>
                    <Button 
                      className="w-full rounded-full h-14 bg-blue-600 hover:bg-blue-700 text-white border-none group"
                      onClick={() => setActivePage("sell")}
                    >
                      Bắt đầu ngay
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            <TabsContent value="my-cars">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-col gap-8"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-slate-900">Danh sách xe ({myCars.length + MOCK_CARS.length})</h2>
                  <Button 
                    className="rounded-full bg-blue-600 text-white"
                    onClick={() => setActivePage("sell")}
                  >
                    Đăng ký bán thêm xe
                  </Button>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...MOCK_CARS, ...myCars].map((car, idx) => (
                    <Card key={`${car.id}-${idx}`} className="overflow-hidden rounded-[2rem] border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={car.image || getCarImage(car.brand, car.model)} 
                          alt={car.model} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-blue-600 text-white border-none px-4 py-1.5 rounded-full shadow-lg">
                            {car.status}
                          </Badge>
                        </div>
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                          <Button variant="secondary" size="icon" className="rounded-full bg-white text-slate-900 hover:bg-blue-600 hover:text-white">
                            <Edit className="w-5 h-5" />
                          </Button>
                          <Button variant="secondary" size="icon" className="rounded-full bg-white text-slate-900 hover:bg-red-600 hover:text-white">
                            <Trash2 className="w-5 h-5" />
                          </Button>
                        </div>
                      </div>
                      <CardContent className="p-8 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider">{car.brand}</p>
                          <h3 className="text-xl font-bold text-slate-900">{car.model} {car.year}</h3>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                          <span className="text-sm font-bold text-slate-900">{(car.price / 1000000000).toFixed(2)} tỷ</span>
                          <Button variant="ghost" size="sm" className="text-blue-600 font-bold p-0 hover:bg-transparent">
                            Chi tiết <ArrowRight className="ml-1 w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="account">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid md:grid-cols-3 gap-8"
              >
                <Card className="rounded-[2rem] border-slate-100 shadow-sm overflow-hidden">
                  <CardContent className="p-8 flex flex-col gap-6">
                    <h3 className="text-xl font-bold">Thông tin cá nhân</h3>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase">Họ và tên</Label>
                        <p className="font-bold text-slate-900">{user.name}</p>
                      </div>
                      <Separator className="bg-slate-100" />
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase">Email</Label>
                        <p className="font-bold text-slate-900">{user.email}</p>
                      </div>
                      <Separator className="bg-slate-100" />
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase">Số điện thoại</Label>
                        <p className="font-bold text-slate-900">{user.phone}</p>
                      </div>
                      <Separator className="bg-slate-100" />
                      <div className="flex flex-col gap-1.5">
                        <Label className="text-xs font-bold text-slate-400 uppercase">Địa chỉ</Label>
                        <p className="font-bold text-slate-900">{user.location}</p>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full rounded-full h-12 mt-4">Chỉnh sửa thông tin</Button>
                  </CardContent>
                </Card>

                <Card className="md:col-span-2 rounded-[2rem] border-slate-100 shadow-sm overflow-hidden">
                  <CardContent className="p-8 flex flex-col gap-8">
                    <h3 className="text-xl font-bold">Cài đặt tài khoản</h3>
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                            <Bell className="w-6 h-6" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900">Thông báo đẩy</span>
                            <span className="text-sm text-slate-500">Nhận thông báo về giá thầu mới và tin nhắn</span>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                          <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                      </div>
                      
                      <Separator className="bg-slate-100" />
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div className="flex flex-col">
                            <span className="font-bold text-slate-900">Xác thực 2 lớp</span>
                            <span className="text-sm text-slate-500">Tăng cường bảo mật cho tài khoản của bạn</span>
                          </div>
                        </div>
                        <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                        </div>
                      </div>
                      
                      <Separator className="bg-slate-100" />
                      
                      <div className="flex flex-col gap-4">
                        <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 rounded-xl py-6 gap-3">
                          <LogOut className="w-5 h-5" />
                          <span className="font-bold">Đăng xuất tài khoản</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
        
        <div className="flex justify-center">
          <Button 
            variant="ghost" 
            className="text-slate-400 hover:text-slate-900 gap-2"
            onClick={() => setActiveTab("overview")}
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Quay lại Tổng quan
          </Button>
        </div>
      </div>
    </div>
  );
};

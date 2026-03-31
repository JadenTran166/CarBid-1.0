import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Progress } from "@/components/ui/progress";
import { Car, MapPin, Camera, User, CheckCircle2, ArrowLeft, ArrowRight, Upload, X, Info, Zap, TrendingUp } from "lucide-react";
import { CarData } from "@/hooks/useCarBid";
import { IMAGES } from "@/constants/images";

interface SellCarProps {
  sellCarData: CarData;
  updateSellCarData: (data: Partial<CarData>) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  submitCar: () => void;
  resetSellFlow: () => void;
  setActivePage: (page: string) => void;
}

export const SellCar: React.FC<SellCarProps> = ({
  sellCarData,
  updateSellCarData,
  currentStep,
  setCurrentStep,
  nextStep,
  prevStep,
  submitCar,
  resetSellFlow,
  setActivePage,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [mockPrice, setMockPrice] = useState<number | null>(null);

  const progress = (currentStep / 5) * 100;

  const handleNext = async () => {
    setIsLoading(true);
    // Fake API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    setIsLoading(false);
    
    if (currentStep === 2) {
      // Calculate mock price based on brand/year/km
      const basePrice = 500000000;
      const brandMultiplier = sellCarData.brand === "BMW" ? 2.5 : sellCarData.brand === "VinFast" ? 1.5 : 1;
      const kmPenalty = parseInt(sellCarData.km || "0") * 1000;
      setMockPrice(Math.max(basePrice * brandMultiplier - kmPenalty, 100000000));
    }
    
    if (currentStep === 4) {
      submitCar();
    } else {
      nextStep();
    }
  };

  const steps = [
    { id: 1, title: "Thông tin cơ bản", icon: <Car className="w-5 h-5" /> },
    { id: 2, title: "Chi tiết xe", icon: <MapPin className="w-5 h-5" /> },
    { id: 3, title: "Hình ảnh", icon: <Camera className="w-5 h-5" /> },
    { id: 4, title: "Liên hệ", icon: <User className="w-5 h-5" /> },
    { id: 5, title: "Hoàn tất", icon: <CheckCircle2 className="w-5 h-5" /> },
  ];

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-slate-900">Thông tin xe cơ bản</h2>
              <p className="text-slate-500">Vui lòng chọn chính xác thông tin để nhận định giá tốt nhất</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="brand" className="text-sm font-bold text-slate-700">Hãng xe</Label>
                <Select 
                  value={sellCarData.brand} 
                  onValueChange={(v) => updateSellCarData({ brand: v })}
                >
                  <SelectTrigger className="h-14 rounded-xl border-slate-200 focus:ring-blue-500">
                    <SelectValue placeholder="Chọn hãng xe" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Toyota">Toyota</SelectItem>
                    <SelectItem value="BMW">BMW</SelectItem>
                    <SelectItem value="VinFast">VinFast</SelectItem>
                    <SelectItem value="Mercedes">Mercedes-Benz</SelectItem>
                    <SelectItem value="Hyundai">Hyundai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-col gap-3">
                <Label htmlFor="model" className="text-sm font-bold text-slate-700">Dòng xe</Label>
                <Input 
                  placeholder="VD: Vios, 520i, VF8..." 
                  className="h-14 rounded-xl border-slate-200"
                  value={sellCarData.model}
                  onChange={(e) => updateSellCarData({ model: e.target.value })}
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <Label htmlFor="year" className="text-sm font-bold text-slate-700">Đời xe</Label>
                <Select 
                  value={sellCarData.year} 
                  onValueChange={(v) => updateSellCarData({ year: v })}
                >
                  <SelectTrigger className="h-14 rounded-xl border-slate-200">
                    <SelectValue placeholder="Chọn năm sản xuất" />
                  </SelectTrigger>
                  <SelectContent>
                    {[2025, 2024, 2023, 2022, 2021, 2020].map(y => (
                      <SelectItem key={y} value={y.toString()}>{y}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-col gap-3">
                <Label htmlFor="version" className="text-sm font-bold text-slate-700">Phiên bản</Label>
                <Input 
                  placeholder="VD: 1.5G, M Sport, Plus..." 
                  className="h-14 rounded-xl border-slate-200"
                  value={sellCarData.version}
                  onChange={(e) => updateSellCarData({ version: e.target.value })}
                />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-slate-900">Chi tiết xe & Vị trí</h2>
              <p className="text-slate-500">Thông tin này giúp chúng tôi ước tính giá trị thực tế của xe</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="location" className="text-sm font-bold text-slate-700">Vị trí xem xe</Label>
                <Select 
                  value={sellCarData.location} 
                  onValueChange={(v) => updateSellCarData({ location: v })}
                >
                  <SelectTrigger className="h-14 rounded-xl border-slate-200">
                    <SelectValue placeholder="Chọn tỉnh/thành phố" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Hà Nội">Hà Nội</SelectItem>
                    <SelectItem value="TP. HCM">TP. HCM</SelectItem>
                    <SelectItem value="Đà Nẵng">Đà Nẵng</SelectItem>
                    <SelectItem value="Cần Thơ">Cần Thơ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex flex-col gap-3">
                <Label htmlFor="km" className="text-sm font-bold text-slate-700">Số Km đã đi</Label>
                <Input 
                  type="number"
                  placeholder="VD: 15000" 
                  className="h-14 rounded-xl border-slate-200"
                  value={sellCarData.km}
                  onChange={(e) => updateSellCarData({ km: e.target.value })}
                />
              </div>
              
              <div className="flex flex-col gap-3 md:col-span-2">
                <Label htmlFor="plate" className="text-sm font-bold text-slate-700">Biển số xe (Tùy chọn)</Label>
                <Input 
                  placeholder="VD: 30A-123.45" 
                  className="h-14 rounded-xl border-slate-200"
                  value={sellCarData.licensePlate}
                  onChange={(e) => updateSellCarData({ licensePlate: e.target.value })}
                />
              </div>
            </div>

            {mockPrice && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-blue-700">Giá tham khảo dự kiến</p>
                    <p className="text-2xl font-bold text-blue-900">{(mockPrice / 1000000).toLocaleString()} triệu VNĐ</p>
                  </div>
                </div>
                <p className="text-xs text-blue-500 max-w-[150px] text-right">Giá thực tế có thể thay đổi sau khi kiểm định</p>
              </motion.div>
            )}
          </motion.div>
        );
      case 3:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-slate-900">Hình ảnh ngoại thất & Nội thất</h2>
              <p className="text-slate-500">Ảnh thực tế giúp tăng 80% khả năng đấu giá thành công</p>
            </div>
            
            <div className="border-2 border-dashed border-slate-200 rounded-[2rem] p-12 flex flex-col items-center justify-center gap-4 bg-slate-50/50 hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                <Upload className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-center">
                <p className="text-lg font-bold text-slate-900">Kéo thả hoặc chọn ảnh</p>
                <p className="text-sm text-slate-500">Hỗ trợ JPG, PNG (Tối đa 10 ảnh)</p>
              </div>
              <Button variant="outline" className="rounded-full px-8 mt-2">Chọn từ máy tính</Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="relative aspect-square rounded-2xl overflow-hidden group">
                  <img 
                    src={IMAGES.cars.generic} 
                    alt="Preview" 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button variant="ghost" size="icon" className="text-white hover:text-red-500">
                      <X className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 flex items-center justify-center text-slate-400">
                <Camera className="w-8 h-8" />
              </div>
            </div>
          </motion.div>
        );
      case 4:
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-8"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold text-slate-900">Thông tin liên hệ</h2>
              <p className="text-slate-500">Chúng tôi sẽ liên hệ với bạn trong vòng 30 phút</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-3">
                <Label htmlFor="name" className="text-sm font-bold text-slate-700">Họ và tên</Label>
                <Input 
                  placeholder="Nhập họ tên của bạn" 
                  className="h-14 rounded-xl border-slate-200"
                  value={sellCarData.contactName}
                  onChange={(e) => updateSellCarData({ contactName: e.target.value })}
                />
              </div>
              
              <div className="flex flex-col gap-3">
                <Label htmlFor="phone" className="text-sm font-bold text-slate-700">Số điện thoại</Label>
                <Input 
                  placeholder="VD: 0912345678" 
                  className="h-14 rounded-xl border-slate-200"
                  value={sellCarData.contactPhone}
                  onChange={(e) => updateSellCarData({ contactPhone: e.target.value })}
                />
              </div>
              
              <div className="flex flex-col gap-4 md:col-span-2">
                <Label className="text-sm font-bold text-slate-700">Mục đích của bạn</Label>
                <RadioGroup 
                  value={sellCarData.purpose} 
                  onValueChange={(v: any) => updateSellCarData({ purpose: v })}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <div className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer ${sellCarData.purpose === 'sell' ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-slate-200'}`}>
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="sell" id="sell" />
                      <Label htmlFor="sell" className="font-bold text-lg cursor-pointer">Bán xe ngay</Label>
                    </div>
                    <Zap className={`w-6 h-6 ${sellCarData.purpose === 'sell' ? 'text-blue-600' : 'text-slate-300'}`} />
                  </div>
                  
                  <div className={`flex items-center justify-between p-6 rounded-2xl border-2 transition-all cursor-pointer ${sellCarData.purpose === 'auction' ? 'border-blue-600 bg-blue-50' : 'border-slate-100 hover:border-slate-200'}`}>
                    <div className="flex items-center gap-4">
                      <RadioGroupItem value="auction" id="auction" />
                      <Label htmlFor="auction" className="font-bold text-lg cursor-pointer">Đăng ký đấu giá</Label>
                    </div>
                    <TrendingUp className={`w-6 h-6 ${sellCarData.purpose === 'auction' ? 'text-blue-600' : 'text-slate-300'}`} />
                  </div>
                </RadioGroup>
              </div>
            </div>
          </motion.div>
        );
      case 5:
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center text-center gap-8 py-12"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-green-600">
              <CheckCircle2 className="w-16 h-16" />
            </div>
            <div className="flex flex-col gap-4 max-w-md">
              <h2 className="text-4xl font-bold text-slate-900">Đăng ký thành công!</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Yêu cầu của bạn đã được tiếp nhận. Chuyên viên của CarBid sẽ liên hệ với bạn trong vòng 30 phút để sắp xếp lịch kiểm định xe.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <Button 
                className="flex-1 rounded-full h-14 bg-slate-900 text-white"
                onClick={() => setActivePage("home")}
              >
                Về trang chủ
              </Button>
              <Button 
                variant="outline" 
                className="flex-1 rounded-full h-14 border-slate-200"
                onClick={() => setActivePage("profile")}
              >
                Xem xe đã đăng ký
              </Button>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="flex flex-col gap-12">
        {/* Progress Bar */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Bước {currentStep}/5</span>
              <h1 className="text-2xl font-bold text-slate-900">{steps[currentStep - 1].title}</h1>
            </div>
            <div className="hidden md:flex items-center gap-4">
              {steps.map((step) => (
                <div 
                  key={step.id} 
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${currentStep === step.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : currentStep > step.id ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`}
                >
                  {currentStep > step.id ? <CheckCircle2 className="w-3 h-3" /> : step.icon}
                  {step.title}
                </div>
              ))}
            </div>
          </div>
          <Progress value={progress} className="h-3 rounded-full bg-slate-100" />
        </div>

        {/* Content */}
        <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              {renderStep()}
            </AnimatePresence>
            
            {currentStep < 5 && (
              <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-100">
                <Button 
                  variant="ghost" 
                  className="rounded-full px-8 h-12 font-bold text-slate-500 hover:bg-slate-100"
                  onClick={prevStep}
                  disabled={currentStep === 1 || isLoading}
                >
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Quay lại
                </Button>
                
                <div className="flex items-center gap-4">
                  {currentStep === 3 && (
                    <Button 
                      variant="ghost" 
                      className="rounded-full px-8 h-12 font-bold text-slate-400"
                      onClick={nextStep}
                      disabled={isLoading}
                    >
                      Bỏ qua
                    </Button>
                  )}
                  <Button 
                    className="rounded-full px-10 h-14 font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 min-w-[160px]"
                    onClick={handleNext}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                      />
                    ) : (
                      <>
                        {currentStep === 4 ? "Hoàn tất đăng ký" : "Tiếp tục"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

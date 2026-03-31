import { IMAGES } from "@/constants/images";

export const MOCK_CARS = [
  {
    id: "1",
    brand: "BMW",
    model: "520i",
    year: 2025,
    version: "M Sport",
    price: 2139000000,
    km: 0,
    location: "Hà Nội",
    status: "Đang đấu giá",
    image: IMAGES.cars.bmw520i,
  },
  {
    id: "2",
    brand: "VinFast",
    model: "VF8",
    year: 2024,
    version: "Plus",
    price: 1270000000,
    km: 5000,
    location: "TP. HCM",
    status: "Chờ kiểm định",
    image: IMAGES.cars.vf8,
  },
  {
    id: "3",
    brand: "Toyota",
    model: "Vios",
    year: 2023,
    version: "1.5G",
    price: 592000000,
    km: 15000,
    location: "Đà Nẵng",
    status: "Đã bán",
    image: IMAGES.cars.vios,
  },
];

export const MOCK_BLOGS = [
  {
    id: "1",
    title: "Kinh nghiệm mua xe cũ không bị 'hớ'",
    excerpt: "Những điều cần lưu ý khi kiểm tra xe đã qua sử dụng để tránh mua phải xe tai nạn, ngập nước.",
    date: "2024-03-25",
    author: "Admin",
    image: IMAGES.blog.experience,
    featured: true,
  },
  {
    id: "2",
    title: "Thị trường ô tô Việt Nam 2024: Xe điện lên ngôi?",
    excerpt: "Phân tích xu hướng chuyển dịch từ xe xăng sang xe điện tại thị trường Việt Nam.",
    date: "2024-03-20",
    author: "Chuyên gia",
    image: IMAGES.blog.market,
  },
  {
    id: "3",
    title: "Đánh giá chi tiết VinFast VF7: Đối thủ xứng tầm",
    excerpt: "Trải nghiệm thực tế mẫu xe điện mới nhất của VinFast trong phân khúc C-SUV.",
    date: "2024-03-15",
    author: "Reviewer",
    image: IMAGES.blog.review,
  },
];

export const BRANDS = [
  { name: "Toyota", logo: IMAGES.brands.toyota },
  { name: "BMW", logo: IMAGES.brands.bmw },
  { name: "VinFast", logo: IMAGES.brands.vinfast },
  { name: "Mercedes", logo: IMAGES.brands.mercedes },
  { name: "Hyundai", logo: IMAGES.brands.hyundai },
  { name: "Kia", logo: IMAGES.brands.kia },
  { name: "Mazda", logo: IMAGES.brands.mazda },
  { name: "Ford", logo: IMAGES.brands.ford },
];

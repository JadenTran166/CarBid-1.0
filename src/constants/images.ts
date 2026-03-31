/**
 * Centralized image configuration for CarBid
 * Using high-quality automotive images from Unsplash
 */

export const IMAGES = {
  // Hero Section
  hero: {
    porsche: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
    ferrari: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1920&q=80",
    lamborghini: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1920&q=80",
    main: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVJ7qqCgUxecj0wwaFn1l9m76UQGI9hIMCO2CaoOf3EjJe2XZ7kBQfMCDkGNJGi96Dgo6onbe5hnEFqN_0XKWCaV8m_XLp_YG7h7_-9bv1MpfprKSaptfixXRmbPE4Zra0hHZ-lnf07yvsaonOKkyS2qcZD4LTsGZD1SDVSaHTwORDMqaHbpTn2Q-WCt-9IDmeR3Vv-fX6KONceBe3Cw57PACI3AaliZgn5wLlfI6XObXoWQmJuVnwKxoB7NhxeTPWIHa0_3gRgXNa", // Cinematic supercar
  },

  // Brands (Vibe images)
  brands: {
    toyota: "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=400&q=80",
    bmw: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=400&q=80",
    vinfast: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=400&q=80", // EV vibe
    mercedes: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=400&q=80",
    hyundai: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=400&q=80",
    kia: "https://images.unsplash.com/photo-1623161464004-37568393666b?auto=format&fit=crop&w=400&q=80",
    mazda: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=400&q=80",
    ford: "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&w=400&q=80",
  },

  // Car Models
  cars: {
    bmw520i: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    vf8: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80", // Modern EV
    vios: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80", // Generic sedan
    generic: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80",
  },

  // Blog & News
  blog: {
    experience: "https://images.unsplash.com/photo-1562141961-b5d1856660f3?auto=format&fit=crop&w=800&q=80", // Showroom
    market: "https://images.unsplash.com/photo-1530046339160-ce3e5b0c7a2f?auto=format&fit=crop&w=800&q=80", // Inspection/Market
    review: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80", // Car review
  },

  // Features & Process
  features: {
    fast: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80", // Handover
    transparent: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80", // Detailed car
    bestPrice: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80", // Auction/Bidding vibe
  },

  // UI & Placeholders
  ui: {
    emptyCar: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=400&q=80", // Clean car shot
    showroom: "https://images.unsplash.com/photo-1562141961-b5d1856660f3?auto=format&fit=crop&w=1920&q=80",
    team: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80", // Professional service
  }
};

/**
 * Helper to get car image by brand or model
 */
export const getCarImage = (brand: string, model?: string) => {
  const b = brand.toLowerCase();
  const m = model?.toLowerCase() || "";
  
  if (m.includes("520i")) return IMAGES.cars.bmw520i;
  if (m.includes("vf8")) return IMAGES.cars.vf8;
  if (m.includes("vios")) return IMAGES.cars.vios;
  
  if (b === "bmw") return IMAGES.cars.bmw520i;
  if (b === "vinfast") return IMAGES.cars.vf8;
  if (b === "toyota") return IMAGES.cars.vios;
  
  return IMAGES.cars.generic;
};

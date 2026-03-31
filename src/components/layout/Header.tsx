import React from "react";
import { Car, User, Phone, BookOpen, LayoutDashboard, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activePage, setActivePage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navItems = [
    { id: "home", label: "Trang chủ", icon: <Car className="w-4 h-4" /> },
    { id: "sell", label: "Bán xe", icon: <LayoutDashboard className="w-4 h-4" /> },
    { id: "prices", label: "Bảng giá", icon: <Search className="w-4 h-4" /> },
    { id: "blog", label: "Khám phá", icon: <BookOpen className="w-4 h-4" /> },
    { id: "contact", label: "Liên hệ", icon: <Phone className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => setActivePage("home")}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <Car className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600 tracking-tight">
            CarBid
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activePage === item.id ? "secondary" : "ghost"}
              className={`rounded-full px-4 ${activePage === item.id ? "bg-blue-50 text-blue-700 hover:bg-blue-100" : "text-slate-600 hover:text-blue-600"}`}
              onClick={() => setActivePage(item.id)}
            >
              <span className="flex items-center gap-2">
                {item.label}
              </span>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full text-slate-600 hover:bg-slate-100"
            onClick={() => setActivePage("profile")}
          >
            <User className="w-5 h-5" />
          </Button>
          <Button 
            className="hidden sm:flex rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-md shadow-blue-200 border-none px-6"
            onClick={() => setActivePage("sell")}
          >
            Định giá ngay
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden rounded-full"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activePage === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start rounded-xl py-6"
                  onClick={() => {
                    setActivePage(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="flex items-center gap-3 text-lg">
                    {item.icon}
                    {item.label}
                  </span>
                </Button>
              ))}
              <Button 
                className="w-full rounded-xl py-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white mt-2"
                onClick={() => {
                  setActivePage("sell");
                  setIsMenuOpen(false);
                }}
              >
                Định giá xe ngay
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

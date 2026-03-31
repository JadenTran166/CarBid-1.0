/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";
import { SellCar } from "@/pages/SellCar";
import { Profile } from "@/pages/Profile";
import { Blog, PriceList, Contact } from "@/pages/OtherPages";
import { useCarBid } from "@/hooks/useCarBid";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activePage, setActivePage] = useState(() => {
    const saved = localStorage.getItem("carbid_active_page");
    return saved || "home";
  });

  const {
    sellCarData,
    updateSellCarData,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    submitCar,
    myCars,
    resetSellFlow,
  } = useCarBid();

  useEffect(() => {
    localStorage.setItem("carbid_active_page", activePage);
    window.scrollTo(0, 0);
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home setActivePage={setActivePage} />;
      case "sell":
        return (
          <SellCar 
            sellCarData={sellCarData}
            updateSellCarData={updateSellCarData}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            nextStep={nextStep}
            prevStep={prevStep}
            submitCar={submitCar}
            resetSellFlow={resetSellFlow}
            setActivePage={setActivePage}
          />
        );
      case "profile":
        return <Profile myCars={myCars} setActivePage={setActivePage} />;
      case "blog":
        return <Blog />;
      case "prices":
        return <PriceList />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header activePage={activePage} setActivePage={setActivePage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

import { useState, useEffect } from "react";

export type CarData = {
  brand: string;
  model: string;
  year: string;
  version: string;
  location: string;
  km: string;
  licensePlate: string;
  images: string[];
  contactName: string;
  contactPhone: string;
  purpose: "sell" | "auction";
};

export const useCarBid = () => {
  const [sellCarData, setSellCarData] = useState<CarData>(() => {
    const saved = localStorage.getItem("carbid_sell_data");
    return saved ? JSON.parse(saved) : {
      brand: "",
      model: "",
      year: "",
      version: "",
      location: "",
      km: "",
      licensePlate: "",
      images: [],
      contactName: "",
      contactPhone: "",
      purpose: "sell",
    };
  });

  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem("carbid_current_step");
    return saved ? parseInt(saved) : 1;
  });

  const [myCars, setMyCars] = useState(() => {
    const saved = localStorage.getItem("carbid_my_cars");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("carbid_sell_data", JSON.stringify(sellCarData));
  }, [sellCarData]);

  useEffect(() => {
    localStorage.setItem("carbid_current_step", currentStep.toString());
  }, [currentStep]);

  useEffect(() => {
    localStorage.setItem("carbid_my_cars", JSON.stringify(myCars));
  }, [myCars]);

  const updateSellCarData = (data: Partial<CarData>) => {
    setSellCarData(prev => ({ ...prev, ...data }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const submitCar = () => {
    const newCar = {
      ...sellCarData,
      id: Math.random().toString(36).substr(2, 9),
      status: "Chờ kiểm định",
      date: new Date().toISOString(),
    };
    setMyCars(prev => [...prev, newCar]);
    setCurrentStep(5);
  };

  const resetSellFlow = () => {
    setSellCarData({
      brand: "",
      model: "",
      year: "",
      version: "",
      location: "",
      km: "",
      licensePlate: "",
      images: [],
      contactName: "",
      contactPhone: "",
      purpose: "sell",
    });
    setCurrentStep(1);
  };

  return {
    sellCarData,
    updateSellCarData,
    currentStep,
    setCurrentStep,
    nextStep,
    prevStep,
    submitCar,
    myCars,
    resetSellFlow,
  };
};

"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import type { Product } from "../data/products";

type LastViewedContextType = {
  lastViewedProduct: Product | null;
  setLastViewedProduct: (product: Product) => void;
};

const LastViewedContext = createContext<LastViewedContextType | undefined>(
  undefined
);

export const LastViewedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lastViewedProduct, setLastViewedProduct] = useState<Product | null>(
    null
  );

  useEffect(() => {
    const storedProduct = localStorage.getItem("lastViewedProduct");
    if (storedProduct) {
      setLastViewedProduct(JSON.parse(storedProduct));
    }
  }, []);

  const updateLastViewedProduct = (product: Product) => {
    setLastViewedProduct(product);
    localStorage.setItem("lastViewedProduct", JSON.stringify(product));
  };

  return (
    <LastViewedContext.Provider
      value={{
        lastViewedProduct,
        setLastViewedProduct: updateLastViewedProduct,
      }}
    >
      {children}
    </LastViewedContext.Provider>
  );
};

export const useLastViewed = () => {
  const context = useContext(LastViewedContext);
  if (context === undefined) {
    throw new Error("useLastViewed must be used within a LastViewedProvider");
  }
  return context;
};

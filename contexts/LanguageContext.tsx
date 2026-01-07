"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type LearningLanguage = "japanese" | "english";

interface LanguageContextType {
  language: LearningLanguage;
  setLanguage: (language: LearningLanguage) => void;
  getLanguageName: () => string;
  getLanguageLabel: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LearningLanguage>("japanese");

  const getLanguageName = () => {
    return language === "japanese" ? "일본어" : "영어";
  };

  const getLanguageLabel = () => {
    return language === "japanese" ? "日本語" : "English";
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLanguageName, getLanguageLabel }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

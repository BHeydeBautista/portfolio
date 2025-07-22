"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/i18n";

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (
    key: string,
    options?: { returnObjects?: boolean }
  ): string | string[] => {
    const keys = key.split(".");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = translations[language];

    for (const k of keys) {
      if (value && k in value) {
        value = value[k];
      } else {
        console.warn(`Missing translation for key: ${key}`);
        return options?.returnObjects ? [] : key;
      }
    }

    if (options?.returnObjects && Array.isArray(value)) {
      return value;
    }

    if (options?.returnObjects && !Array.isArray(value)) {
      console.warn(`Expected array but got:`, value);
      return [];
    }

    return value;
  };

  return { t };
};

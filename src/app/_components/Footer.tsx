"use client";

import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null;

  return (
    <footer className="bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="text-center sm:text-left">
          <h3 className="text-2xl font-bold text-amber-500 dark:text-amber-400 mb-4">
            {t("companyName")}
          </h3>
          <p className="text-sm leading-relaxed">{t("companyDescription")}</p>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("quickLinks.title")}
          </h4>
          <ul className="space-y-2 text-sm">
            {["about", "services", "listings", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-amber-500 dark:hover:text-amber-400 transition"
                >
                  {t(`quickLinks.${link}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("contact.title")}
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <MapPin className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              {t("contact.address")}
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Phone className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              {t("contact.phone")}
            </li>
            <li className="flex items-center justify-center sm:justify-start gap-2">
              <Mail className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              {t("contact.email")}
            </li>
          </ul>
        </div>

        <div className="text-center sm:text-left">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {t("socials.title")}
          </h4>
          <div className="flex justify-center sm:justify-start space-x-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-amber-500 dark:hover:bg-amber-400 transition"
                aria-label={Icon.name}
              >
                <Icon className="w-5 h-5 text-gray-900 dark:text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-300 dark:border-gray-700 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} {t("bottomText")}
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";

const FindHome = () => {
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    sortBy: "",
    bedrooms: "",
    baths: "",
    minPrice: "",
    maxPrice: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching with filters:", filters);
  };

  const t = useTranslations("SearchSection");

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f9f7f3] to-[#f4efe8] dark:from-[#0a0a0f] dark:to-[#12131a] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08)_0%,_transparent_80%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-amber-600 dark:text-amber-400"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("subtitle")}
        </motion.p>

        <motion.form
          onSubmit={handleSearch}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 bg-white/90 dark:bg-[#14161e]/90 backdrop-blur-md shadow-lg rounded-3xl p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("location")}
            </label>
            <input
              type="text"
              name="location"
              placeholder={t("placeholders.location")}
              value={filters.location}
              onChange={handleChange}
              className="w-full dark:placeholder:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("type")}
            </label>
            <select
              name="type"
              value={filters.type}
              onChange={handleChange}
              className="w-full dark:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            >
              <option value="">{t("any")}</option>
              <option value="house">{t("options.house")}</option>
              <option value="condo">{t("options.condo")}</option>
              <option value="apartment">{t("options.apartment")}</option>
              <option value="lot">{t("options.lot")}</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("sortBy")}
            </label>
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleChange}
              className="w-full p-3 dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            >
              <option value="">{t("options.default")}</option>
              <option value="price_low_high">{t("options.priceLowHigh")}</option>
              <option value="price_high_low">{t("options.priceHighLow")}</option>
              <option value="newest">{t("options.newest")}</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("bedrooms")}
            </label>
            <input
              type="number"
              name="bedrooms"
              placeholder={t("placeholders.any")}
              min="0"
              value={filters.bedrooms}
              onChange={handleChange}
              className="w-full dark:placeholder:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("baths")}
            </label>
            <input
              type="number"
              name="baths"
              placeholder={t("placeholders.any")}
              min="0"
              value={filters.baths}
              onChange={handleChange}
              className="w-full dark:placeholder:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("minPrice")}
            </label>
            <input
              type="number"
              name="minPrice"
              placeholder={t("placeholders.min")}
              min="0"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-full dark:placeholder:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
              {t("maxPrice")}
            </label>
            <input
              type="number"
              name="maxPrice"
              placeholder={t("placeholders.max")}
              min="0"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full dark:placeholder:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
            />
          </div>

          <div className="flex items-end">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              <Search className="w-5 h-5" /> {t("searchNow")}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default FindHome;

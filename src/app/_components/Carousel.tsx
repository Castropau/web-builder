"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

const Carousel = () => {
  const images = [
    "/images/c1.webp",
    "/images/c2.webp",
    "/images/c3.webp",
    "/images/c4.webp",
    "/images/c5.webp",
    "/images/c6.webp",
    "/images/c7.webp",


  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);
const t = useTranslations("CarouselSection");
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#f4efe8] to-[#f9f7f3] dark:from-[#0c0e16] dark:to-[#0a0a0f] py-20">
      <div className="max-w-6xl mx-auto relative px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-amber-600 dark:text-amber-400">
            {t("h1")}
        </h2>

        <div className="relative h-[420px] md:h-[520px] rounded-3xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[current]}
                alt={`Property ${current + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 dark:bg-black/40" />
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 left-6 bg-white/70 dark:bg-black/50 p-3 rounded-full hover:bg-amber-400 hover:text-white transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 right-6 bg-white/70 dark:bg-black/50 p-3 rounded-full hover:bg-amber-400 hover:text-white transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === current
                    ? "bg-amber-500 w-6"
                    : "bg-white/70 dark:bg-gray-400 hover:bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;

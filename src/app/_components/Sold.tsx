"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const Sold = () => {
    const t = useTranslations("StepsSection");
  const steps = [
    {
      title: t("steps.0.title"),
      description: t("steps.0.description"),
      image: "/images/pic1.webp",
    },
    {
      title: t("steps.1.title"),
      description: t("steps.1.description"),
      image: "/images/pic2.webp",
    },
    {
      title: t("steps.2.title"),
      description: t("steps.2.description"),
      image: "/images/pic33.webp",
    },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#faf7f2] to-[#f4efe8] dark:from-[#0b0e13] dark:to-[#080a0d] text-gray-900 dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <h2 className="text-4xl md:text-5xl uppercase font-extrabold text-center mb-20 text-amber-600 dark:text-amber-400">
            {t("h2")}
        </h2>

        <div className="space-y-32">
          {steps.map((step, i) => {
            const isOdd = i % 2 !== 0;

            const fadeDirection: Variants = {
              hidden: { opacity: 0, x: isOdd ? 150 : -150 },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.9, ease: "easeOut" },
              },
            };

            return (
              <motion.div
                key={i}
                className={`flex flex-col md:flex-row items-center gap-16 ${
                  isOdd ? "md:flex-row-reverse" : ""
                }`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeDirection}
              >
                <motion.div
                  variants={fadeDirection}
                  className="relative w-full md:w-1/2 h-80 sm:h-96 md:h-[480px] rounded-3xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)]"
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </motion.div>

                <motion.div
                  variants={fadeDirection}
                  className="w-full md:w-1/2 space-y-6 text-center md:text-left"
                >
                  <div className="flex items-center justify-center md:justify-start gap-4">
                   
                    <h3 className="text-2xl md:text-3xl font-semibold leading-snug text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
                    {step.description}
                  </p>
                  
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sold;

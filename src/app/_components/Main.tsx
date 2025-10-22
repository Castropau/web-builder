"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const Main = () => {
      const t = useTranslations("HomePage");

  const leftVariant: Variants = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant: Variants = {
    hidden: { opacity: 0, rotateY: -90 },
    visible: {
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full h-screen bg-gradient-to-b from-[#f1f1f1] to-[#655757] dark:from-[#1c1f23] dark:to-[#0a0a0a] text-black dark:text-white flex items-center justify-center px-6 text-center">
      <div className="max-w-2xl flex flex-col items-center space-y-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={leftVariant}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
           {t("h1")}, 
            <span className="text-teal-600 dark:text-teal-400">
              {t("title")}
            </span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("p")}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={rightVariant}
        >
          <a
            href="#contact"
            className="mt-6 inline-block text-xl bg-teal-600 hover:bg-teal-500 text-white py-3 px-6 rounded-full transition duration-300"
          >
            {t("button1")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Main;

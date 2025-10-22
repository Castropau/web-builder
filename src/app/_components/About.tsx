"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  if (!isClient) return null; 

  return (
    <section className="relative w-full py-28 bg-gradient-to-b from-[#ffffff] to-[#f7f5f2] dark:from-[#0c0f16] dark:to-[#0a0d12] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(234,179,8,0.12)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center px-6 z-10">
        <motion.div
          className="flex flex-col items-center space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
         
          <div className="flex justify-center items-center">
  <div className="relative w-56 sm:w-72 md:w-80 lg:w-[26rem] h-56 sm:h-72 md:h-80 lg:h-[26rem] rounded-full overflow-hidden border-6 sm:border-8 border-amber-500 shadow-[0_0_60px_rgba(245,158,11,0.3)]">
    <Image
      src="/images/profile.webp"
      alt="Marci Metzger Realtor"
      width={320}
      height={320}
      className="object-cover w-full h-full"
      priority
    />
  </div>
</div>

          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              {t("name")}
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide">
              {t("title")}
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 dark:text-gray-200 font-semibold mt-2">
              📞 {t("phone")}
            </p>
          </div>

          <div className="w-24 sm:w-32 h-[3px] bg-amber-500 rounded-full mt-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default About;

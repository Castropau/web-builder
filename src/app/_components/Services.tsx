"use client";
import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { Home, Building, Handshake, DollarSign } from "lucide-react";
import { useTranslations } from "next-intl";

const Services = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };
const t = useTranslations("ServicesSection");

  const services = [
    {
      title: t("services.0.title"),
      icon: <Handshake className="w-10 h-10 text-amber-500" />,
      description: t("services.0.description"),
      image: "/images/services1.webp",
    },
    {
      title: t("services.1.title"),
      icon: <Building className="w-10 h-10 text-amber-500" />,
      description: t("services.1.description"),
      image: "/images/services2.webp",
    },
    {
      title: t("services.2.title"),
      icon: <DollarSign className="w-10 h-10 text-amber-500" />,
      description: t("services.2.description"),
      image: "/images/services3.webp",
    },
  ];
// const t = useTranslations("ServicesSection");
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#f9f7f3] to-[#f4efe8] dark:from-[#0c0e16] dark:to-[#0a0a0f] text-gray-900 dark:text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.07)_0%,_transparent_80%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-amber-600 dark:text-amber-400 mb-14 tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
            {t("h2")}
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/90 dark:bg-[#14161e]/90 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_40px_rgba(245,158,11,0.25)] transition-all duration-500 text-center flex flex-col backdrop-blur-sm border border-amber-100/20"
            >
              <div className="relative w-full h-56 md:h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-8 flex flex-col items-center">
                <div className="mb-5 bg-amber-100 dark:bg-amber-500/10 p-4 rounded-full shadow-inner">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

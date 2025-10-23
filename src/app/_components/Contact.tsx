"use client";
import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const Contact = () => {
  const t = useTranslations("Contact");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.7, ease: "easeOut" },
    }),
  };

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      titleKey: "cards.call.title",
      descriptionKey: "cards.call.description",
      valueKey: "cards.call.tel",
      link: "tel:(206) 919-6886",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      titleKey: "cards.visit.title",
      descriptionKey: "cards.visit.description",
      valueKey: "cards.visit.address",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      titleKey: "cards.email.title",
      descriptionKey: "cards.email.description",
      valueKey: "cards.email.email",
      link: "mailto:marcimetzger@gmail.com",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f9f7f3] to-[#f4efe8] dark:from-[#0a0a0f] dark:to-[#12131a] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(245,158,11,0.07)_0%,_transparent_80%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-amber-600 dark:text-amber-400 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("title")}
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {t("subtitle")}
        </motion.p>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {contactMethods.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-md p-10 hover:shadow-xl transition-all duration-500 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="bg-amber-100 dark:bg-amber-800/40 p-4 rounded-full">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t(item.titleKey)}
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {t(item.descriptionKey)}
              </p>

              
              {item.link ? (
                <a
                  href={item.link}
                  className="mt-3 block text-amber-600 dark:text-amber-400 font-medium hover:underline"
                >
                  {t(item.valueKey)}
                </a>
              ) : (
                <p className="mt-3 text-amber-600 dark:text-amber-400 font-medium">
                  {t(item.valueKey)}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Office Hours */}
        <motion.div
          className="mt-20 flex flex-col md:flex-row items-center justify-between gap-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl p-10 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-4">
            <div className="bg-amber-100 dark:bg-amber-800/40 p-4 rounded-full">
              <Clock className="text-amber-600 dark:text-amber-400 w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {t("officeHours.title")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t("officeHours.openDaily")}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {t("officeHours.openToday")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-20 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md p-10 text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            {t("form.title")}
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                {t("form.name")}
              </label>
              <input
                type="text"
                className="w-full dark:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
                placeholder={t("form.placeholderName")}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                {t("form.email")}
              </label>
              <input
                type="email"
                className="w-full dark:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
                placeholder={t("form.placeholderEmail")}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                {t("form.message")}
              </label>
              <textarea
                className="w-full dark:text-white p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent dark:bg-gray-800 focus:border-amber-500 focus:ring-amber-500 outline-none transition"
                placeholder={t("form.placeholderMessage")}
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              {t("form.button")}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

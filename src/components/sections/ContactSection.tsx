"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_INFO, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

export function ContactSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          company: data.get("company"),
          email: data.get("email"),
          phone: data.get("phone"),
          volume: data.get("volume"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        toast.success(t(UI.contact.toasts.success));
        form.reset();
      } else {
        toast.error(t(UI.contact.toasts.error));
      }
    } catch {
      toast.error(t(UI.contact.toasts.networkError));
    } finally {
      setLoading(false);
    }
  };

  const volumeValues = ["", "1-50", "50-200", "200-500", "500-2000", "2000+"];

  return (
    <section id="contact" className="section-padding bg-white">
      <Container>
        <SectionHeading
          badge={t(UI.contact.badge)}
          title={t(UI.contact.title)}
          subtitle={t(UI.contact.subtitle)}
        />

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-xl font-bold text-navy-800 mb-6">
                {t(UI.contact.infoTitle)}
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: t(UI.contact.phoneLabel), value: CONTACT_INFO.phone },
                  { icon: Mail, label: t(UI.contact.emailLabel), value: CONTACT_INFO.email },
                  { icon: MapPin, label: t(UI.contact.addressLabel), value: t(CONTACT_INFO.address) },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm font-semibold text-gray-700 mt-0.5">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy-800 rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-2">{t(UI.contact.hoursTitle)}</h4>
              <div className="space-y-1.5 text-sm text-gray-300">
                {UI.contact.hours.map((h, i) => (
                  <p key={i}>{t(h)}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <CheckCircle size={56} className="text-green-500 mb-4" />
                <h3 className="text-xl font-bold text-navy-800 mb-2">
                  {t(UI.contact.form.successTitle)}
                </h3>
                <p className="text-gray-500">
                  {t(UI.contact.form.successText)}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-medium text-orange-600 hover:text-orange-700"
                >
                  {t(UI.contact.form.sendAnother)}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t(UI.contact.form.fullName)}
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder={t(UI.contact.form.fullNamePlaceholder)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t(UI.contact.form.company)}
                    </label>
                    <input
                      name="company"
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder={t(UI.contact.form.companyPlaceholder)}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t(UI.contact.form.email)}
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder={t(UI.contact.form.emailPlaceholder)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      {t(UI.contact.form.phone)}
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                      placeholder={t(UI.contact.form.phonePlaceholder)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t(UI.contact.form.volume)}
                  </label>
                  <select
                    name="volume"
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                  >
                    {UI.contact.form.volumeOptions.map((opt, i) => (
                      <option key={i} value={volumeValues[i]}>{t(opt)}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {t(UI.contact.form.message)}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all resize-none"
                    placeholder={t(UI.contact.form.messagePlaceholder)}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 disabled:opacity-50"
                >
                  <Send size={16} />
                  {loading ? t(UI.contact.form.submitting) : t(UI.contact.form.submit)}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

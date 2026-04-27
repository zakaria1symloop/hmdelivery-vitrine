"use client";

import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { HERO_SLIDES, COMPANY, UI } from "@/lib/constants";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Search,
  Package,
  Truck,
  MapPin,
  Shield,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle,
  Clock,
  AlertCircle,
  Loader2,
} from "lucide-react";

function getStatusColor(status: string) {
  if (status === "delivered" || status === "return_delivered") return "text-green-600 bg-green-50";
  if (status === "in_transit" || status === "return_in_transit") return "text-purple-600 bg-purple-50";
  if (status === "out_for_delivery") return "text-orange-600 bg-orange-50";
  if (status.includes("failed") || status === "cancelled") return "text-red-600 bg-red-50";
  if (status === "pending") return "text-gray-600 bg-gray-50";
  return "text-blue-600 bg-blue-50";
}

function getStatusIcon(status: string) {
  if (status === "delivered" || status === "return_delivered") return CheckCircle;
  if (status.includes("transit") || status === "out_for_delivery") return Truck;
  if (status.includes("failed") || status === "cancelled") return AlertCircle;
  return Clock;
}

interface TrackingResult {
  success: boolean;
  message?: string;
  package?: {
    tracking_number: string;
    status: string;
    sender_name?: string;
    recipient_name?: string;
    recipient_phone?: string;
    origin_wilaya?: string;
    destination_wilaya?: string;
    created_at?: string;
    updated_at?: string;
    delivery_type?: string;
    status_history?: Array<{
      status: string;
      created_at: string;
      notes?: string;
    }>;
  };
}

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [trackingId, setTrackingId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrackingResult | null>(null);
  const [showModal, setShowModal] = useState(false);
  const { locale, t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = HERO_SLIDES[current];
  const statusLabels = UI.statusLabels[locale];

  const handleTrack = async (e?: FormEvent) => {
    if (e) e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setResult(null);
    setShowModal(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"}/track/${encodeURIComponent(trackingId.trim())}`
      );
      const data = await res.json();

      if (res.ok && data.success && data.data) {
        const d = data.data;
        setResult({
          success: true,
          package: {
            tracking_number: d.tracking_number,
            status: d.status,
            recipient_name: d.recipient_name,
            destination_wilaya: d.destination?.wilaya,
            created_at: d.created_at,
            status_history: d.history?.map((h: { status: string; date: string; comment?: string }) => ({
              status: h.status,
              created_at: h.date,
              notes: h.comment,
            })),
          },
        });
      } else {
        setResult({
          success: false,
          message: data.message || (locale === "ar" ? "الطرد غير موجود. تحقق من رقم التتبع." : "Colis introuvable. Verifiez votre numero de suivi."),
        });
      }
    } catch {
      setResult({
        success: false,
        message: locale === "ar" ? "خطأ في الاتصال. يرجى المحاولة لاحقًا." : "Erreur de connexion. Veuillez reessayer plus tard.",
      });
    } finally {
      setLoading(false);
    }
  };

  const pkg = result?.package;
  const StatusIcon = pkg ? getStatusIcon(pkg.status) : Clock;

  return (
    <section
      id="accueil"
      className="relative pt-32 lg:pt-36 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 end-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 start-0 w-[500px] h-[500px] bg-navy-800/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center min-h-[calc(100vh-80px)] py-10 lg:py-0">
          {/* Left: Text */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${current}-${locale}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-800 leading-tight">
                  {t(slide.title)}
                </h1>
                <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                  {t(slide.description)}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Tracking search bar */}
            <form onSubmit={handleTrack} className="mt-8 flex items-center bg-white rounded-full shadow-xl border border-gray-200 p-1.5 max-w-lg">
              <Search size={20} className="ms-4 text-gray-400 flex-shrink-0" />
              <input
                type="text"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
                placeholder={t(UI.hero.trackingPlaceholder)}
                className="flex-1 px-4 py-3 text-sm bg-transparent border-0 outline-none text-gray-700 placeholder-gray-400"
              />
              <button
                type="submit"
                disabled={loading || !trackingId.trim()}
                className="px-6 py-3 text-sm font-semibold text-white bg-orange-500 rounded-full hover:bg-orange-600 transition-colors flex-shrink-0 disabled:opacity-50"
              >
                {loading ? "..." : t(UI.hero.trackBtn)}
              </button>
            </form>

            {/* CTA buttons */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={COMPANY.loginUrl}
                className="px-6 py-3 text-sm font-semibold text-white bg-navy-800 rounded-full hover:bg-navy-900 transition-colors"
              >
                {t(UI.hero.becomeSeller)}
              </a>
              <a
                href="#services"
                className="px-6 py-3 text-sm font-semibold text-navy-800 border-2 border-navy-800 rounded-full hover:bg-navy-800 hover:text-white transition-all"
              >
                {t(UI.hero.ourServices)}
              </a>
            </div>

            {/* Carousel indicators */}
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() =>
                  setCurrent((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
                }
                className="p-1.5 rounded-full border border-gray-300 text-gray-400 hover:text-navy-800 hover:border-navy-800 transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {HERO_SLIDES.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length)}
                className="p-1.5 rounded-full border border-gray-300 text-gray-400 hover:text-navy-800 hover:border-navy-800 transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Right: Visual illustration */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-800/5 to-orange-500/10 rounded-full scale-110" />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative bg-white rounded-3xl shadow-2xl p-8 mx-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center">
                    <Truck size={28} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy-800">{COMPANY.name}</p>
                    <p className="text-xs text-gray-400">{t(UI.hero.deliveryInProgress)}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Package, label: t(UI.hero.packageCollected), status: "done", color: "bg-green-500" },
                    { icon: Truck, label: t(UI.hero.inTransit), status: "active", color: "bg-orange-500" },
                    { icon: MapPin, label: t(UI.hero.delivery), status: "pending", color: "bg-gray-300" },
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="relative">
                        <div className={`w-8 h-8 rounded-full ${step.color} flex items-center justify-center`}>
                          <step.icon size={14} className="text-white" />
                        </div>
                        {step.status === "active" && (
                          <div className="absolute inset-0 w-8 h-8 rounded-full bg-orange-500 animate-ping opacity-25" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${step.status === "pending" ? "text-gray-400" : "text-gray-700"}`}>
                          {step.label}
                        </p>
                      </div>
                      {step.status === "done" && <span className="text-xs font-medium text-green-600">{t(UI.hero.done)}</span>}
                      {step.status === "active" && <span className="text-xs font-medium text-orange-600">{t(UI.hero.inProgress)}</span>}
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -end-2 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield size={16} className="text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{t(UI.hero.secure)}</p>
                  <p className="text-[10px] text-gray-400">{t(UI.hero.guaranteed)}</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -start-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-2"
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin size={16} className="text-orange-600" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">{t(UI.hero.wilayas58)}</p>
                  <p className="text-[10px] text-gray-400">{t(UI.hero.nationalCoverage)}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60V20C240 0 480 0 720 20C960 40 1200 40 1440 20V60H0Z" fill="white" />
        </svg>
      </div>

      {/* Tracking Result Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-navy-800 rounded-xl flex items-center justify-center">
                    <Package size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-800">{t(UI.hero.trackingTitle)}</h3>
                    <p className="text-xs text-gray-400">{trackingId}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal content */}
              <div className="p-5 overflow-y-auto max-h-[calc(85vh-80px)]">
                {loading ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <Loader2 size={40} className="text-orange-500 animate-spin" />
                    <p className="mt-4 text-sm text-gray-500">{t(UI.hero.searching)}</p>
                  </div>
                ) : result && !result.success ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4">
                      <AlertCircle size={32} className="text-red-500" />
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">{t(UI.hero.notFound)}</h4>
                    <p className="text-sm text-gray-500 max-w-xs">{result.message}</p>
                  </div>
                ) : pkg ? (
                  <div className="space-y-6">
                    {/* Status badge */}
                    <div className="text-center">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(pkg.status)}`}>
                        <StatusIcon size={16} />
                        {statusLabels[pkg.status] || pkg.status}
                      </div>
                    </div>

                    {/* Package info */}
                    <div className="grid grid-cols-2 gap-4">
                      {pkg.recipient_name && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{t(UI.hero.recipient)}</p>
                          <p className="text-sm font-semibold text-gray-800 mt-1">{pkg.recipient_name}</p>
                        </div>
                      )}
                      {pkg.recipient_phone && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{t(UI.hero.phone)}</p>
                          <p className="text-sm font-semibold text-gray-800 mt-1">{pkg.recipient_phone}</p>
                        </div>
                      )}
                      {pkg.origin_wilaya && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{t(UI.hero.origin)}</p>
                          <p className="text-sm font-semibold text-gray-800 mt-1">{pkg.origin_wilaya}</p>
                        </div>
                      )}
                      {pkg.destination_wilaya && (
                        <div>
                          <p className="text-xs text-gray-400 uppercase tracking-wider">{t(UI.hero.destination)}</p>
                          <p className="text-sm font-semibold text-gray-800 mt-1">{pkg.destination_wilaya}</p>
                        </div>
                      )}
                    </div>

                    {/* Status history timeline */}
                    {pkg.status_history && pkg.status_history.length > 0 && (
                      <div>
                        <h4 className="text-sm font-bold text-navy-800 mb-3">{t(UI.hero.history)}</h4>
                        <div className="space-y-0">
                          {pkg.status_history.map((entry, i) => (
                            <div key={i} className="flex gap-3">
                              <div className="flex flex-col items-center">
                                <div className={`w-3 h-3 rounded-full flex-shrink-0 ${i === 0 ? "bg-orange-500" : "bg-gray-300"}`} />
                                {i < pkg.status_history!.length - 1 && (
                                  <div className="w-0.5 h-full bg-gray-200 min-h-[32px]" />
                                )}
                              </div>
                              <div className="pb-4">
                                <p className={`text-sm font-medium ${i === 0 ? "text-navy-800" : "text-gray-600"}`}>
                                  {statusLabels[entry.status] || entry.status}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {new Date(entry.created_at).toLocaleDateString(locale === "ar" ? "ar-DZ" : "fr-FR", {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                                {entry.notes && (
                                  <p className="text-xs text-gray-500 mt-0.5">{entry.notes}</p>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

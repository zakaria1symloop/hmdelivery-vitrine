import {
  Package,
  Truck,
  MapPin,
  Shield,
  Clock,
  Headphones,
  BarChart3,
  Smartphone,
  Globe,
  CreditCard,
  RotateCcw,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { T } from "@/contexts/LanguageContext";

// Navigation
export const NAV_LINKS = [
  { label: { fr: "Accueil", ar: "الرئيسية" } as T, href: "#accueil" },
  { label: { fr: "Services", ar: "الخدمات" } as T, href: "#services" },
  { label: { fr: "Fonctionnalites", ar: "المميزات" } as T, href: "#fonctionnalites" },
  { label: { fr: "Contact", ar: "اتصل بنا" } as T, href: "#contact" },
];

// Company name
export const COMPANY = {
  name: "HM Pro Delivery",
  shortName: "HM Pro",
  loginUrl: "https://hmprodelivery.ecotrack.dz/login",
};

// Hero carousel slides
export const HERO_SLIDES = [
  {
    title: { fr: "Livraison rapide et fiable partout en Algerie", ar: "توصيل سريع وموثوق في جميع أنحاء الجزائر" } as T,
    description: {
      fr: "HM Pro Delivery assure vos livraisons a travers les 58 wilayas avec un suivi en temps reel et une equipe jeune et dynamique.",
      ar: "HM Pro Delivery تضمن توصيل طرودكم عبر 58 ولاية مع تتبع فوري وفريق شاب وديناميكي.",
    } as T,
    cta: { fr: "Suivre mon colis", ar: "تتبع طردي" } as T,
    ctaSecondary: { fr: "Devenir vendeur", ar: "كن بائعًا" } as T,
  },
  {
    title: { fr: "Suivi en temps reel de vos expeditions", ar: "تتبع شحناتك في الوقت الفعلي" } as T,
    description: {
      fr: "Suivez chaque etape de votre colis depuis la collecte jusqu'a la livraison. Notifications instantanees a chaque mise a jour.",
      ar: "تابع كل مرحلة من مراحل طردك من الاستلام حتى التوصيل. إشعارات فورية عند كل تحديث.",
    } as T,
    cta: { fr: "Suivre mon colis", ar: "تتبع طردي" } as T,
    ctaSecondary: { fr: "Nos services", ar: "خدماتنا" } as T,
  },
  {
    title: { fr: "Livraison securisee et garantie", ar: "توصيل آمن ومضمون" } as T,
    description: {
      fr: "Vos colis sont entre de bonnes mains. Emballage securise, transport soigne et livraison confirmee avec preuve.",
      ar: "طرودكم في أيدٍ أمينة. تغليف آمن، نقل دقيق وتوصيل مؤكد مع إثبات.",
    } as T,
    cta: { fr: "Demander un devis", ar: "طلب عرض أسعار" } as T,
    ctaSecondary: { fr: "En savoir plus", ar: "اعرف أكثر" } as T,
  },
];

// Stats
export const STATS = [
  { value: 58, label: { fr: "Wilayas couvertes", ar: "ولاية مغطاة" } as T, suffix: "" },
  { value: 1541, label: { fr: "Communes desservies", ar: "بلدية مخدومة" } as T, suffix: "+" },
  { value: 10000, label: { fr: "Colis livres / mois", ar: "طرد يُسلّم / شهر" } as T, suffix: "+" },
  { value: 98, label: { fr: "Taux de satisfaction", ar: "نسبة الرضا" } as T, suffix: "%" },
];

// Services
export interface Service {
  icon: LucideIcon;
  title: T;
  description: T;
}

export const SERVICES: Service[] = [
  {
    icon: Truck,
    title: { fr: "Livraison a domicile", ar: "التوصيل إلى المنزل" },
    description: {
      fr: "Livraison porte-a-porte dans toutes les wilayas. Express ou standard selon vos besoins.",
      ar: "توصيل من الباب إلى الباب في جميع الولايات. سريع أو عادي حسب احتياجاتكم.",
    },
  },
  {
    icon: Package,
    title: { fr: "Livraison point relais", ar: "التوصيل لنقاط الاستلام" },
    description: {
      fr: "Reseau de points relais pour une livraison flexible. Le client recupere son colis quand il le souhaite.",
      ar: "شبكة نقاط استلام لتوصيل مرن. يستلم العميل طرده متى شاء.",
    },
  },
  {
    icon: RotateCcw,
    title: { fr: "Gestion des retours", ar: "إدارة المرتجعات" },
    description: {
      fr: "Processus de retour simplifie. Collecte, transit retour et remise a l'expediteur en toute transparence.",
      ar: "عملية إرجاع مبسطة. جمع، نقل عكسي وإعادة للمرسل بكل شفافية.",
    },
  },
  {
    icon: CreditCard,
    title: { fr: "Paiement a la livraison", ar: "الدفع عند الاستلام" },
    description: {
      fr: "Encaissement COD securise. Remise rapide des fonds aux vendeurs avec rapports detailles.",
      ar: "تحصيل الدفع عند الاستلام بشكل آمن. تحويل سريع للأموال للبائعين مع تقارير مفصلة.",
    },
  },
  {
    icon: Headphones,
    title: { fr: "Centre d'appels", ar: "مركز الاتصال" },
    description: {
      fr: "Confirmation de commande, coordination avec les clients et gestion des reclamations par notre equipe.",
      ar: "تأكيد الطلبات، التنسيق مع العملاء وإدارة الشكاوى من قبل فريقنا.",
    },
  },
  {
    icon: Globe,
    title: { fr: "Solutions E-commerce", ar: "حلول التجارة الإلكترونية" },
    description: {
      fr: "Integration avec votre boutique en ligne. API, plugins et tableau de bord pour gerer vos expeditions.",
      ar: "تكامل مع متجرك الإلكتروني. واجهة برمجة، إضافات ولوحة تحكم لإدارة شحناتك.",
    },
  },
];

// Features (detailed)
export interface Feature {
  icon: LucideIcon;
  title: T;
  description: T;
}

export const FEATURES: Feature[] = [
  {
    icon: MapPin,
    title: { fr: "Suivi GPS en temps reel", ar: "تتبع GPS في الوقت الفعلي" },
    description: {
      fr: "Localisez vos colis et chauffeurs en direct sur la carte. Estimations de livraison precises.",
      ar: "حدد موقع طرودك وسائقيك مباشرة على الخريطة. تقديرات توصيل دقيقة.",
    },
  },
  {
    icon: Shield,
    title: { fr: "Livraison securisee", ar: "توصيل آمن" },
    description: {
      fr: "Preuve de livraison electronique, signature du destinataire et photos de confirmation.",
      ar: "إثبات توصيل إلكتروني، توقيع المستلم وصور تأكيد.",
    },
  },
  {
    icon: Clock,
    title: { fr: "Livraison express", ar: "توصيل سريع" },
    description: {
      fr: "Service de livraison le jour meme ou le lendemain pour les envois urgents.",
      ar: "خدمة توصيل في نفس اليوم أو اليوم التالي للشحنات العاجلة.",
    },
  },
  {
    icon: Smartphone,
    title: { fr: "Application mobile", ar: "تطبيق الهاتف" },
    description: {
      fr: "Suivez vos colis, gerez vos envois et recevez les notifications depuis votre telephone.",
      ar: "تابع طرودك، أدر شحناتك واستقبل الإشعارات من هاتفك.",
    },
  },
  {
    icon: BarChart3,
    title: { fr: "Tableau de bord vendeur", ar: "لوحة تحكم البائع" },
    description: {
      fr: "Statistiques detaillees, rapports financiers et suivi des performances en un coup d'oeil.",
      ar: "إحصائيات مفصلة، تقارير مالية ومتابعة الأداء بنظرة واحدة.",
    },
  },
  {
    icon: Users,
    title: { fr: "Equipe dediee", ar: "فريق مخصص" },
    description: {
      fr: "Un conseiller dedie pour chaque client professionnel. Support prioritaire et personnalise.",
      ar: "مستشار مخصص لكل عميل محترف. دعم أولوي وشخصي.",
    },
  },
  {
    icon: CreditCard,
    title: { fr: "Paiement flexible", ar: "دفع مرن" },
    description: {
      fr: "COD, virement, CCP et BaridiMob. Multiples options de paiement pour vous et vos clients.",
      ar: "الدفع عند الاستلام، تحويل، CCP و BaridiMob. خيارات دفع متعددة لك ولعملائك.",
    },
  },
  {
    icon: Package,
    title: { fr: "Emballage professionnel", ar: "تغليف احترافي" },
    description: {
      fr: "Service d'emballage sur demande pour proteger vos produits fragiles durant le transport.",
      ar: "خدمة تغليف عند الطلب لحماية منتجاتك الهشة أثناء النقل.",
    },
  },
];

// How it works (for sellers)
export const HOW_IT_WORKS = [
  {
    step: 1,
    title: { fr: "Inscrivez-vous", ar: "سجّل حسابك" } as T,
    description: {
      fr: "Creez votre compte vendeur en quelques clics et accedez a votre espace de gestion.",
      ar: "أنشئ حساب البائع الخاص بك بنقرات قليلة وادخل إلى لوحة التحكم.",
    } as T,
  },
  {
    step: 2,
    title: { fr: "Deposez vos colis", ar: "أودع طرودك" } as T,
    description: {
      fr: "Deposez vos colis dans l'un de nos points de collecte ou demandez un ramassage a domicile.",
      ar: "أودع طرودك في إحدى نقاط الجمع لدينا أو اطلب الاستلام من المنزل.",
    } as T,
  },
  {
    step: 3,
    title: { fr: "On s'occupe du reste", ar: "نتكفل بالباقي" } as T,
    description: {
      fr: "Nous assurons le transport, le suivi et la livraison. Suivez tout en temps reel.",
      ar: "نتولى النقل والتتبع والتوصيل. تابع كل شيء في الوقت الفعلي.",
    } as T,
  },
  {
    step: 4,
    title: { fr: "Recevez vos fonds", ar: "استلم أموالك" } as T,
    description: {
      fr: "Recevez le montant COD rapidement apres livraison. Rapports financiers detailles.",
      ar: "استلم مبلغ الدفع عند الاستلام بسرعة بعد التوصيل. تقارير مالية مفصلة.",
    } as T,
  },
];

// Pricing
export interface PricingTier {
  name: T;
  price: T;
  period: T;
  description: T;
  features: T[];
  highlighted: boolean;
  cta: T;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: { fr: "Particulier", ar: "فردي" },
    price: { fr: "350 DA", ar: "350 د.ج" },
    period: { fr: "/ colis", ar: "/ طرد" },
    description: { fr: "Pour les envois occasionnels entre wilayas.", ar: "للشحنات العرضية بين الولايات." },
    features: [
      { fr: "Livraison a domicile", ar: "توصيل إلى المنزل" },
      { fr: "Suivi en temps reel", ar: "تتبع في الوقت الفعلي" },
      { fr: "Paiement a la livraison", ar: "الدفع عند الاستلام" },
      { fr: "Notification SMS", ar: "إشعارات SMS" },
      { fr: "Support par telephone", ar: "دعم عبر الهاتف" },
    ],
    highlighted: false,
    cta: { fr: "Envoyer un colis", ar: "إرسال طرد" },
  },
  {
    name: { fr: "Vendeur", ar: "بائع" },
    price: { fr: "250 DA", ar: "250 د.ج" },
    period: { fr: "/ colis", ar: "/ طرد" },
    description: { fr: "Pour les e-commercants et vendeurs en ligne.", ar: "لأصحاب التجارة الإلكترونية والبائعين عبر الإنترنت." },
    features: [
      { fr: "Tarifs preferentiels", ar: "أسعار تفضيلية" },
      { fr: "Tableau de bord complet", ar: "لوحة تحكم كاملة" },
      { fr: "Ramassage a domicile", ar: "استلام من المنزل" },
      { fr: "Gestion des retours", ar: "إدارة المرتجعات" },
      { fr: "COD avec remise rapide", ar: "دفع عند الاستلام مع تحويل سريع" },
      { fr: "API & integrations", ar: "واجهة برمجة وتكاملات" },
      { fr: "Support prioritaire", ar: "دعم أولوي" },
    ],
    highlighted: true,
    cta: { fr: "Devenir vendeur", ar: "كن بائعًا" },
  },
  {
    name: { fr: "Entreprise", ar: "مؤسسة" },
    price: { fr: "Sur mesure", ar: "حسب الطلب" },
    period: { fr: "", ar: "" },
    description: { fr: "Pour les grandes entreprises a volume eleve.", ar: "للمؤسسات الكبيرة ذات الحجم العالي." },
    features: [
      { fr: "Tarifs negocies", ar: "أسعار تفاوضية" },
      { fr: "Compte dedie", ar: "حساب مخصص" },
      { fr: "Ramassage planifie", ar: "استلام مجدول" },
      { fr: "Facturation mensuelle", ar: "فوترة شهرية" },
      { fr: "API personnalisee", ar: "واجهة برمجة مخصصة" },
      { fr: "Gestionnaire de compte", ar: "مدير حساب" },
      { fr: "SLA garanti", ar: "اتفاقية مستوى خدمة مضمونة" },
    ],
    highlighted: false,
    cta: { fr: "Nous contacter", ar: "تواصل معنا" },
  },
];

// Coverage
export const WILAYAS = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Bejaia",
  "Biskra", "Bechar", "Blida", "Bouira", "Tamanrasset", "Tebessa",
  "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel",
  "Setif", "Saida", "Skikda", "Sidi Bel Abbes", "Annaba", "Guelma",
  "Constantine", "Medea", "Mostaganem", "M'Sila", "Mascara", "Ouargla",
  "Oran", "El Bayadh", "Illizi", "Bordj Bou Arreridj", "Boumerdes",
  "El Tarf", "Tindouf", "Tissemsilt", "El Oued", "Khenchela",
  "Souk Ahras", "Tipaza", "Mila", "Ain Defla", "Naama", "Ain Temouchent",
  "Ghardaia", "Relizane", "El M'Ghair", "El Meniaa", "Ouled Djellal",
  "Bordj Badji Mokhtar", "Beni Abbes", "Timimoun", "Touggourt",
  "Djanet", "In Salah", "In Guezzam",
];

// Contact
export const CONTACT_INFO = {
  email: "contact@hmprodelivery.com",
  phone: "+213 (0) 778 789 784",
  address: { fr: "Setif, Algerie", ar: "سطيف، الجزائر" } as T,
};

// Footer
export const FOOTER = {
  description: {
    fr: "HM Pro Delivery est votre partenaire de livraison de confiance en Algerie. Rapidite, fiabilite et couverture nationale.",
    ar: "HM Pro Delivery شريككم الموثوق للتوصيل في الجزائر. سرعة، موثوقية وتغطية وطنية.",
  } as T,
  columns: [
    {
      title: { fr: "Services", ar: "الخدمات" } as T,
      links: [
        { label: { fr: "Livraison a domicile", ar: "التوصيل إلى المنزل" } as T, href: "#services" },
        { label: { fr: "Livraison point relais", ar: "التوصيل لنقاط الاستلام" } as T, href: "#services" },
        { label: { fr: "Solutions E-commerce", ar: "حلول التجارة الإلكترونية" } as T, href: "#services" },
        { label: { fr: "Gestion des retours", ar: "إدارة المرتجعات" } as T, href: "#services" },
      ],
    },
    {
      title: { fr: "Entreprise", ar: "المؤسسة" } as T,
      links: [
        { label: { fr: "A propos", ar: "من نحن" } as T, href: "#" },
        { label: { fr: "Carrieres", ar: "وظائف" } as T, href: "#" },
        { label: { fr: "Contact", ar: "اتصل بنا" } as T, href: "#contact" },
      ],
    },
    {
      title: { fr: "Support", ar: "الدعم" } as T,
      links: [
        { label: { fr: "Centre d'aide", ar: "مركز المساعدة" } as T, href: "#" },
        { label: { fr: "Conditions d'utilisation", ar: "شروط الاستخدام" } as T, href: "#" },
        { label: { fr: "Politique de confidentialite", ar: "سياسة الخصوصية" } as T, href: "#" },
        { label: { fr: "FAQ", ar: "الأسئلة الشائعة" } as T, href: "#faq" },
      ],
    },
  ],
  copyright: {
    fr: `\u00A9 ${new Date().getFullYear()} HM Pro Delivery. Tous droits reserves.`,
    ar: `\u00A9 ${new Date().getFullYear()} HM Pro Delivery. جميع الحقوق محفوظة.`,
  } as T,
};

// UI strings used across components
export const UI = {
  navbar: {
    login: { fr: "Connexion", ar: "تسجيل الدخول" } as T,
    becomeSeller: { fr: "Devenir vendeur", ar: "كن بائعًا" } as T,
  },
  hero: {
    trackingPlaceholder: { fr: "Entrez votre numero de suivi...", ar: "أدخل رقم التتبع..." } as T,
    trackBtn: { fr: "Suivre", ar: "تتبع" } as T,
    becomeSeller: { fr: "Devenir vendeur", ar: "كن بائعًا" } as T,
    ourServices: { fr: "Nos services", ar: "خدماتنا" } as T,
    deliveryInProgress: { fr: "Livraison en cours...", ar: "جاري التوصيل..." } as T,
    packageCollected: { fr: "Colis collecte", ar: "تم جمع الطرد" } as T,
    inTransit: { fr: "En transit", ar: "في الطريق" } as T,
    delivery: { fr: "Livraison", ar: "التوصيل" } as T,
    done: { fr: "Termine", ar: "مكتمل" } as T,
    inProgress: { fr: "En cours", ar: "قيد التنفيذ" } as T,
    secure: { fr: "Securise", ar: "آمن" } as T,
    guaranteed: { fr: "100% garanti", ar: "مضمون 100%" } as T,
    wilayas58: { fr: "58 Wilayas", ar: "58 ولاية" } as T,
    nationalCoverage: { fr: "Couverture nationale", ar: "تغطية وطنية" } as T,
    trackingTitle: { fr: "Suivi de colis", ar: "تتبع الطرد" } as T,
    searching: { fr: "Recherche en cours...", ar: "جاري البحث..." } as T,
    notFound: { fr: "Colis introuvable", ar: "الطرد غير موجود" } as T,
    recipient: { fr: "Destinataire", ar: "المستلم" } as T,
    phone: { fr: "Telephone", ar: "الهاتف" } as T,
    origin: { fr: "Origine", ar: "المصدر" } as T,
    destination: { fr: "Destination", ar: "الوجهة" } as T,
    history: { fr: "Historique", ar: "السجل" } as T,
  },
  statusLabels: {
    fr: {
      pending: "En attente",
      operator_accepted: "Accepte par operateur",
      ready_for_dispatch: "Pret pour expedition",
      in_transit: "En transit",
      arrived_destination: "Arrive a destination",
      ready_for_client_pickup: "Pret pour retrait",
      ready_for_local_pickup: "Pret pour ramassage local",
      picked_up: "Ramasse",
      out_for_delivery: "En cours de livraison",
      delivered: "Livre",
      failed_delivery: "Echec de livraison",
      cancelled: "Annule",
      return_to_sp_pending: "Retour chauffeur vers SP",
      returned: "Retourne",
      return_ready_shipment: "Retour pret expedition",
      return_in_transit: "Retour en transit",
      return_arrived_origin: "Retour arrive origine",
      return_out_delivery: "Retour en livraison",
      return_delivered: "Retour livre",
    } as Record<string, string>,
    ar: {
      pending: "قيد الانتظار",
      operator_accepted: "مقبول من المشغل",
      ready_for_dispatch: "جاهز للإرسال",
      in_transit: "في الطريق",
      arrived_destination: "وصل للوجهة",
      ready_for_client_pickup: "جاهز للاستلام",
      ready_for_local_pickup: "جاهز للاستلام المحلي",
      picked_up: "تم الاستلام",
      out_for_delivery: "قيد التوصيل",
      delivered: "تم التوصيل",
      failed_delivery: "فشل التوصيل",
      cancelled: "ملغي",
      return_to_sp_pending: "إرجاع السائق لنقطة الخدمة",
      returned: "مرتجع",
      return_ready_shipment: "مرتجع جاهز للشحن",
      return_in_transit: "مرتجع في الطريق",
      return_arrived_origin: "مرتجع وصل للمصدر",
      return_out_delivery: "مرتجع قيد التوصيل",
      return_delivered: "مرتجع تم التسليم",
    } as Record<string, string>,
  },
  services: {
    badge: { fr: "Nos Services", ar: "خدماتنا" } as T,
    title: { fr: "Des solutions de livraison completes", ar: "حلول توصيل شاملة" } as T,
    subtitle: {
      fr: "Du ramassage a la livraison, nous gerons tout pour vous avec fiabilite et rapidite.",
      ar: "من الاستلام إلى التوصيل، نتولى كل شيء من أجلكم بموثوقية وسرعة.",
    } as T,
  },
  features: {
    badge: { fr: "Fonctionnalites", ar: "المميزات" } as T,
    title: { fr: "Pourquoi choisir HM Pro Delivery ?", ar: "لماذا تختار HM Pro Delivery؟" } as T,
    subtitle: {
      fr: "Des outils modernes pour une livraison efficace et une experience client exceptionnelle.",
      ar: "أدوات حديثة لتوصيل فعال وتجربة عملاء استثنائية.",
    } as T,
    bullets: [
      { fr: "Fiable et rapide", ar: "موثوق وسريع" } as T,
      { fr: "Suivi en temps reel", ar: "تتبع في الوقت الفعلي" } as T,
      { fr: "Support 24/7", ar: "دعم على مدار الساعة" } as T,
    ],
  },
  howItWorks: {
    badge: { fr: "Comment ca marche", ar: "كيف يعمل" } as T,
    title: { fr: "Simple, rapide et efficace", ar: "بسيط، سريع وفعّال" } as T,
    subtitle: {
      fr: "Commencez a expedier vos colis en 4 etapes simples.",
      ar: "ابدأ بشحن طرودك في 4 خطوات بسيطة.",
    } as T,
  },
  coverage: {
    badge: { fr: "Couverture", ar: "التغطية" } as T,
    title: { fr: "Couverture nationale — 58 wilayas", ar: "تغطية وطنية — 58 ولاية" } as T,
    subtitle: {
      fr: "Nous livrons partout en Algerie. Chaque wilaya, chaque commune.",
      ar: "نوصل في كل مكان في الجزائر. كل ولاية، كل بلدية.",
    } as T,
    stats: [
      { value: "58", label: { fr: "Wilayas", ar: "ولاية" } as T },
      { value: "1 541+", label: { fr: "Communes", ar: "بلدية" } as T },
      { value: "100%", label: { fr: "Du territoire", ar: "من التراب الوطني" } as T },
    ],
  },
  pricing: {
    badge: { fr: "Tarifs", ar: "الأسعار" } as T,
    title: { fr: "Des tarifs adaptes a vos besoins", ar: "أسعار تناسب احتياجاتكم" } as T,
    subtitle: {
      fr: "Que vous soyez particulier, vendeur en ligne ou entreprise, nous avons le forfait ideal pour vous.",
      ar: "سواء كنت فردًا، بائعًا عبر الإنترنت أو مؤسسة، لدينا العرض المثالي لك.",
    } as T,
    popular: { fr: "Le plus populaire", ar: "الأكثر شعبية" } as T,
    footer: {
      fr: "Tous les prix incluent la TVA. Facturation mensuelle, sans engagement.",
      ar: "جميع الأسعار تشمل الضريبة. فوترة شهرية، بدون التزام.",
    } as T,
  },
  contact: {
    badge: { fr: "Contact", ar: "اتصل بنا" } as T,
    title: { fr: "Contactez-nous", ar: "تواصل معنا" } as T,
    subtitle: {
      fr: "Vous avez des questions ou souhaitez devenir partenaire ? Ecrivez-nous !",
      ar: "لديك أسئلة أو ترغب في أن تصبح شريكًا؟ اكتب لنا!",
    } as T,
    infoTitle: { fr: "Nos coordonnees", ar: "معلومات الاتصال" } as T,
    phoneLabel: { fr: "Telephone", ar: "الهاتف" } as T,
    emailLabel: { fr: "Email", ar: "البريد الإلكتروني" } as T,
    addressLabel: { fr: "Adresse", ar: "العنوان" } as T,
    hoursTitle: { fr: "Horaires d'ouverture", ar: "ساعات العمل" } as T,
    hours: [
      { fr: "Dimanche - Jeudi : 08h00 - 17h00", ar: "الأحد - الخميس: 08:00 - 17:00" } as T,
      { fr: "Samedi : 08h00 - 12h00", ar: "السبت: 08:00 - 12:00" } as T,
      { fr: "Vendredi : Ferme", ar: "الجمعة: مغلق" } as T,
    ],
    form: {
      fullName: { fr: "Nom complet *", ar: "الاسم الكامل *" } as T,
      fullNamePlaceholder: { fr: "Votre nom", ar: "اسمك" } as T,
      company: { fr: "Entreprise", ar: "المؤسسة" } as T,
      companyPlaceholder: { fr: "Nom de votre entreprise", ar: "اسم مؤسستك" } as T,
      email: { fr: "Email *", ar: "البريد الإلكتروني *" } as T,
      emailPlaceholder: { fr: "vous@email.com", ar: "you@email.com" } as T,
      phone: { fr: "Telephone *", ar: "الهاتف *" } as T,
      phonePlaceholder: { fr: "0555 123 456", ar: "0555 123 456" } as T,
      volume: { fr: "Volume mensuel estime", ar: "الحجم الشهري المقدر" } as T,
      volumeOptions: [
        { fr: "Selectionnez un volume", ar: "اختر الحجم" } as T,
        { fr: "Moins de 50 colis / mois", ar: "أقل من 50 طرد / شهر" } as T,
        { fr: "50 a 200 colis / mois", ar: "50 إلى 200 طرد / شهر" } as T,
        { fr: "200 a 500 colis / mois", ar: "200 إلى 500 طرد / شهر" } as T,
        { fr: "500 a 2 000 colis / mois", ar: "500 إلى 2000 طرد / شهر" } as T,
        { fr: "Plus de 2 000 colis / mois", ar: "أكثر من 2000 طرد / شهر" } as T,
      ],
      message: { fr: "Message", ar: "الرسالة" } as T,
      messagePlaceholder: { fr: "Comment pouvons-nous vous aider ?", ar: "كيف يمكننا مساعدتك؟" } as T,
      submit: { fr: "Envoyer le message", ar: "إرسال الرسالة" } as T,
      submitting: { fr: "Envoi en cours...", ar: "جاري الإرسال..." } as T,
      successTitle: { fr: "Merci pour votre message !", ar: "شكرًا على رسالتك!" } as T,
      successText: { fr: "Notre equipe vous contactera dans les 24 heures.", ar: "سيتواصل فريقنا معك خلال 24 ساعة." } as T,
      sendAnother: { fr: "Envoyer un autre message", ar: "إرسال رسالة أخرى" } as T,
    },
    toasts: {
      success: { fr: "Demande envoyee avec succes !", ar: "تم إرسال الطلب بنجاح!" } as T,
      error: { fr: "Erreur lors de l'envoi. Veuillez reessayer.", ar: "خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى." } as T,
      networkError: { fr: "Erreur reseau. Veuillez reessayer.", ar: "خطأ في الشبكة. يرجى المحاولة مرة أخرى." } as T,
    },
  },
  cta: {
    title: { fr: "Pret a expedier avec", ar: "مستعد للشحن مع" } as T,
    subtitle: {
      fr: "Rejoignez des centaines de vendeurs qui font confiance a {name} pour leurs livraisons.",
      ar: "انضم إلى مئات البائعين الذين يثقون بـ {name} لتوصيلاتهم.",
    } as T,
    startNow: { fr: "Commencer maintenant", ar: "ابدأ الآن" } as T,
    callUs: { fr: "Appelez-nous", ar: "اتصل بنا" } as T,
  },
};

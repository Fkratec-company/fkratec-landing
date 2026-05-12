export type Lang = "ar" | "en";

export type SiteStrings = {
  nav: Record<"home" | "about" | "services" | "why" | "process" | "technologies" | "contact" | "letsTalk", string>;
  hero: {
    badge: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: { kicker: string; heading: string };
  aboutPoints: { title: string; text: string }[];
  services: { lead: string; heading: string; items: { title: string; text: string }[] };
  why: { heading: string; lead: string; bullets: string[] };
  process: { heading: string; steps: string[] };
  testimonials: { heading?: string; items: { quote: string; name: string; role: string }[] };
  tech: { heading: string; lead: string };
  contact: {
    ctaTitle: string;
    ctaLine: string;
    sendEmail: string;
    formTitle: string;
    phName: string;
    phPhone: string;
    phEmail: string;
    phMessage: string;
    submit: string;
    sending: string;
    cardEmail: string;
    cardPhone: string;
    cardLocation: string;
    locationValue: string;
  };
  footer: { tagline: string; quick: string; connect: string; rights: string };
  analytics: { revenue: string; overview: string; live: string; growing: string; usersNote: string };
  toast: { formError: string; success: string; fail: string };
  stats: { value: number; suffix: string; label: string }[];
  a11y: { menu: string; toggleLang: string; toggleTheme: string; testimonialDot: string };
};

export const siteCopy: Record<Lang, SiteStrings> = {
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      why: "لماذا نحن",
      process: "العملية",
      technologies: "التقنيات",
      contact: "تواصل",
      letsTalk: "نتحدث",
    },
    hero: {
      badge: "نبني المستقبل، معًا",
      titleBefore: "نبني",
      titleHighlight: "منتجات رقمية",
      titleAfter: "تنمو معك.",
      subtitle:
        "FkraTec تصمم وتطوّر منتجات رقمية عالية الجودة — من الفكرة إلى الإطلاق — بأسلوب عصري، أداء قوي، وتجربة مستخدم تضاهي أفضل الشركات العالمية.",
      ctaPrimary: "ابدأ مشروعك",
      ctaSecondary: "استكشف الخدمات",
    },
    about: {
      kicker: "عن FkraTec",
      heading: "نحوّل الأفكار إلى حلول رقمية قوية",
    },
    aboutPoints: [
      { title: "حلول مبتكرة", text: "تفكير منتج يحوّل التعقيد إلى تجارب أنيقة وواضحة." },
      { title: "بنية قابلة للتوسع", text: "أنظمة مصممة لتنمو مع الزيارات والفرق وأهداف العمل." },
      { title: "تقنيات حديثة", text: "أفضل المكدسات مع الأداء والأمان وتجربة المطوّر." },
      { title: "موجهون بالنتائج", text: "إطلاق سريع ومخرجات قابلة للقياس، لا أرقام زائفة." },
    ],
    services: {
      heading: "ماذا نقدّم",
      lead: "خدمات متكاملة لتغطية دورة حياة المنتج — من التصميم إلى السحابة.",
      items: [
        { title: "تطوير الويب", text: "مواقع وتطبيقات ويب سريعة ولوحات تحكم وتجارب تزيد التحويل." },
        { title: "تطبيقات الجوال", text: "تجارب جوال بإحساس أصلي، حركة ناعمة وتفاعل قوي." },
        { title: "تصميم الواجهات", text: "واجهات أنيقة، أنظمة تصميم، ونماذج تفاعلية توحّد الفريق." },
        { title: "حلول الذكاء الاصطناعي", text: "مساعدين، أتمتة، وسير عمل ذكية بقيمة عملية حقيقية." },
        { title: "منصات SaaS", text: "من الفوترة والصلاحيات إلى التحليلات وبنية تدعم عدة عملاء." },
        { title: "السحابة والباكند", text: "واجهات برمجة موثوقة، بيانات، وبنية سحابية تُعتمد عليها." },
      ],
    },
    why: {
      heading: "لماذا تختارنا",
      lead: "نمزج السرعة والجودة — فريق واحد يغطي المنتج والتصميم والهندسة بمعايير عالمية.",
      bullets: [
        "هندسة حديثة وقابلة للتوسع",
        "التزام بالمواعيد مع معالم واضحة",
        "تواصل شفاف وعروض أسبوعية",
        "أمان أولًا على كامل المكدس",
      ],
    },
    process: {
      heading: "عمليتنا البسيطة",
      steps: ["اكتشاف", "تخطيط", "تصميم", "تطوير", "تسليم"],
    },
    testimonials: {
      items: [
        {
          quote:
            "بصراحة FkraTec فهموا فكرتنا بسرعة وحولوها لمنتج مرتب وجاهز للإطلاق. التفاصيل والحركة والأداء فرقوا معنا كثير.",
          name: "عبدالله العتيبي",
          role: "مؤسس شركة ناشئة",
        },
        {
          quote: "أكثر شي أعجبنا إن الفريق واضح في التواصل، سريع في التعديل، ويعطيك حلول عملية تناسب السوق السعودي.",
          name: "نورة القحطاني",
          role: "مديرة منتج",
        },
      ],
    },
    tech: {
      heading: "التقنيات التي نستخدمها",
      lead: "نبني بأدوات حديثة موثوقة — من الواجهة إلى السحابة.",
    },
    contact: {
      ctaTitle: "لديك مشروع في بالك؟",
      ctaLine: "لنحققه معًا.",
      sendEmail: "راسلنا بالبريد",
      formTitle: "أرسل تفاصيل مشروعك",
      phName: "الاسم الكامل *",
      phPhone: "رقم الجوال",
      phEmail: "البريد الإلكتروني *",
      phMessage: "رسالتك أو وصف المشروع *",
      submit: "إرسال",
      sending: "جاري الإرسال...",
      cardEmail: "البريد",
      cardPhone: "الجوال",
      cardLocation: "الموقع",
      locationValue: "الرياض، المملكة العربية السعودية",
    },
    footer: {
      tagline: "استوديو منتجات رقمية يبني تجارب عصرية بأداء عالٍ وهوية بصرية قوية.",
      quick: "روابط سريعة",
      connect: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
    },
    analytics: {
      revenue: "الإيرادات",
      overview: "نظرة تحليلات",
      live: "مباشر",
      growing: "نمو يومي",
      usersNote: "+2.4k مستخدم نشط هذا الأسبوع",
    },
    toast: {
      formError: "يرجى تعبئة الاسم والبريد ورسالة المشروع بشكل صحيح.",
      success: "تم الإرسال بنجاح. سنتواصل معك قريبًا.",
      fail: "تعذر الإرسال حاليًا. حاول مرة أخرى.",
    },
    stats: [
      { value: 36, suffix: "+", label: "منتج وتجربة رقمية" },
      { value: 4, suffix: "x", label: "أسرع من قوالب الإطلاق التقليدية" },
      { value: 99, suffix: "%", label: "تركيز على الأداء وتجربة المستخدم" },
    ],
    a11y: { menu: "القائمة", toggleLang: "تبديل اللغة", toggleTheme: "تبديل الوضع", testimonialDot: "شهادة رقم" },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      why: "Why Us",
      process: "Process",
      technologies: "Technologies",
      contact: "Contact",
      letsTalk: "Let's Talk",
    },
    hero: {
      badge: "Building the future, together",
      titleBefore: "We build",
      titleHighlight: "Digital Products",
      titleAfter: "that scale.",
      subtitle:
        "FkraTec designs and ships high-quality digital products, from idea to launch, with modern craft, strong performance, and UX that rivals the best global teams.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Explore services",
    },
    about: {
      kicker: "About FkraTec",
      heading: "We turn ideas into powerful digital solutions",
    },
    aboutPoints: [
      { title: "Innovative Solutions", text: "Product thinking that turns complex problems into elegant experiences." },
      { title: "Scalable Architecture", text: "Systems engineered to grow with traffic, teams, and business ambition." },
      { title: "Modern Technologies", text: "Best-in-class stacks with performance, security, and DX at the core." },
      { title: "Results Driven", text: "Shipping fast with measurable outcomes, not vanity metrics." },
    ],
    services: {
      heading: "What we do",
      lead: "End-to-end product coverage—from design to the cloud.",
      items: [
        { title: "Web Development", text: "High-performance web apps, dashboards, and marketing sites built to convert." },
        { title: "Mobile App Development", text: "Native-feel mobile products with polished motion and offline-ready UX." },
        { title: "UI/UX Design", text: "Cinematic interfaces, design systems, and prototypes that align teams." },
        { title: "AI Solutions", text: "Practical AI features: assistants, automation, and intelligent workflows." },
        { title: "SaaS Platforms", text: "End-to-end SaaS: billing, auth, analytics, and multi-tenant foundations." },
        { title: "Cloud & Backend", text: "Resilient APIs, data pipelines, and cloud infrastructure you can trust." },
      ],
    },
    why: {
      heading: "Why choose us",
      lead: "We combine speed and quality—one team covering product, design, and engineering to global standards.",
      bullets: [
        "Modern & scalable engineering",
        "On-time delivery with clear milestones",
        "Transparent communication & weekly demos",
        "Security-first mindset across the stack",
      ],
    },
    process: {
      heading: "Our simple process",
      steps: ["Discover", "Plan", "Design", "Develop", "Deliver"],
    },
    testimonials: {
      items: [
        {
          quote:
            "FkraTec transformed our vision into a polished product. The attention to motion, detail, and performance is outstanding.",
          name: "Ahmed Abdrabou",
          role: "CEO",
        },
        {
          quote: "Professional communication, fast iterations, and a team that truly understands product and engineering together.",
          name: "Sara Almutairi",
          role: "Product Lead",
        },
      ],
    },
    tech: {
      heading: "Technologies we use",
      lead: "We build with modern, dependable tools—from UI to cloud.",
    },
    contact: {
      ctaTitle: "Have a project in mind?",
      ctaLine: "Let's make it happen.",
      sendEmail: "Send us an email",
      formTitle: "Tell us about your project",
      phName: "Full name *",
      phPhone: "Phone",
      phEmail: "Email *",
      phMessage: "Your message *",
      submit: "Send",
      sending: "Sending...",
      cardEmail: "Email",
      cardPhone: "Phone",
      cardLocation: "Location",
      locationValue: "Riyadh, Saudi Arabia",
    },
    footer: {
      tagline: "A digital product studio crafting premium experiences with performance and strong visual identity.",
      quick: "Quick Links",
      connect: "Let's Connect",
      rights: "All rights reserved.",
    },
    analytics: {
      revenue: "Revenue",
      overview: "Analytics Overview",
      live: "Live",
      growing: "Growing Everyday",
      usersNote: "+2.4k active users this week",
    },
    toast: {
      formError: "Please fill name, valid email, and message.",
      success: "Message sent. We'll get back to you soon.",
      fail: "Could not send right now. Please try again.",
    },
    stats: [
      { value: 36, suffix: "+", label: "Digital products and launch experiences" },
      { value: 4, suffix: "x", label: "Faster than traditional launch cycles" },
      { value: 99, suffix: "%", label: "Focus on performance and UX quality" },
    ],
    a11y: { menu: "Menu", toggleLang: "Switch language", toggleTheme: "Toggle theme", testimonialDot: "Testimonial" },
  },
};

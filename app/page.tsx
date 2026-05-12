"use client";

import {
  ComponentType,
  FormEvent,
  ReactNode,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  CloudCog,
  Code2,
  Cpu,
  Github,
  Languages,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Palette,
  Phone,
  Rocket,
  Smartphone,
  Sparkles,
  Sun,
  Target,
  Twitter,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { siteCopy, type Lang, type SiteStrings } from "./site-copy";

type ToastState = { message: string; type: "success" | "error" };
type Theme = "dark" | "light";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const CONTACT = {
  email: "Fkratec@gmail.com",
  phone: "+966568008605",
  phoneDisplay: "+966 568 008 605",
};

const NAV_DEF: { key: keyof SiteStrings["nav"]; href: string }[] = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "why", href: "#why" },
  { key: "process", href: "#process" },
  { key: "technologies", href: "#technologies" },
  { key: "contact", href: "#contact" },
];

const ABOUT_ICONS = [Sparkles, Layers, Cpu, Target] as const;
const SERVICE_ICONS = [Code2, Smartphone, Palette, BrainCircuit, Rocket, CloudCog] as const;

const technologies: { name: string; color: string }[] = [
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Node.js", color: "#68A063" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Tailwind", color: "#38BDF8" },
  { name: "Python", color: "#FFD43B" },
  { name: "AWS", color: "#FF9900" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "PostgreSQL", color: "#336791" },
  { name: "Docker", color: "#2496ED" },
];

const clientComments: Record<Lang, string[]> = {
  ar: [
    "شغل مرتب وسريع من أول اجتماع إلى الإطلاق",
    "فريق يفهم المنتج والسوق السعودي قبل كتابة الكود",
    "التصميم نظيف والحركة تعطي إحساس احترافي",
    "التواصل واضح والتسليم كان على الموعد",
    "حوّلوا الفكرة إلى منتج جاهز للنمو",
    "اهتمام ممتاز بالأداء وتجربة المستخدم",
  ],
  en: [
    "Clear communication from the first call to launch",
    "A team that understands product before writing code",
    "Clean design with motion that feels premium",
    "Fast iterations and reliable delivery",
    "They turned the idea into a scalable product",
    "Excellent focus on performance and user experience",
  ],
};

const BRAND = "kratec";

function FkratecBrand({ size = "nav", animateIntro = false }: { size?: "nav" | "hero" | "footer"; animateIntro?: boolean }) {
  const id = useId().replace(/:/g, "");
  const gradId = `kratec-mark-${id}`;
  const textControls = useAnimation();
  const markClass = size === "hero" ? "h-12 w-[3.9rem] sm:h-[4.25rem] sm:w-[5.35rem]" : size === "footer" ? "h-11 w-[4.2rem]" : "h-10 w-[3.9rem]";
  const textClass =
    size === "hero"
      ? "text-[2.05rem] font-black tracking-[-0.075em] sm:text-[3.55rem]"
      : size === "footer"
        ? "text-3xl font-black tracking-[-0.075em]"
        : "text-2xl font-black tracking-[-0.075em] sm:text-[2rem]";
  const travel = size === "hero" ? -96 : size === "footer" ? -72 : -64;

  const hideWordmark = () => {
    void textControls.start({
      x: travel,
      opacity: 0,
      scale: 0.44,
      filter: "blur(4px) drop-shadow(0 0 24px rgba(0,223,154,0.45))",
      transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
    });
  };

  const showWordmark = () => {
    void textControls.start({
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px) drop-shadow(0 0 0 rgba(0,223,154,0))",
      transition: { type: "spring", stiffness: 260, damping: 22 },
    });
  };

  return (
    <motion.div
      initial={animateIntro ? { opacity: 0, y: 14 } : undefined}
      animate={animateIntro ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      dir="ltr"
      className="inline-flex items-center gap-1.5 sm:gap-2"
      onHoverStart={hideWordmark}
      onHoverEnd={showWordmark}
    >
      <motion.svg
        viewBox="0 0 96 76"
        className={`${markClass} shrink-0 cursor-pointer overflow-visible fkratec-logo-glow`}
        aria-label="Animate kratec logo mark"
        role="img"
        whileHover={{
          rotate: [0, -2, 2, 0],
          scale: 1.08,
          filter: "drop-shadow(0 0 24px rgba(0,223,154,0.5))",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.35 }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00ff9d" />
            <stop offset="55%" stopColor="#00df9a" />
            <stop offset="100%" stopColor="#00b8a9" />
          </linearGradient>
        </defs>
        <rect x="33" y="4" width="45" height="19" rx="2.4" fill={`url(#${gradId})`} />
        <rect x="6" y="25" width="25" height="20" rx="2" fill={`url(#${gradId})`} />
        <path fill={`url(#${gradId})`} d="M31 43.8C37.7 34 55.1 31.4 91 37.9C80.3 53.2 58.1 60.4 31 57.5V43.8Z" />
        <path fill={`url(#${gradId})`} d="M0 72C4 56 16.1 45.8 36.6 43.8C30.1 51.7 27.2 61.1 26.6 72H0Z" />
      </motion.svg>
      <motion.span
        animate={textControls}
        className={`origin-left select-none leading-none text-white ${textClass}`}
      >
        {BRAND}
      </motion.span>
    </motion.div>
  );
}

function WaveBackdrop() {
  const rows = 8;
  return (
    <div className="wave-backdrop pointer-events-none fixed inset-x-0 bottom-0 z-[1] h-[min(45vh,420px)] overflow-hidden">
      <motion.div
        className="absolute -left-[8%] bottom-0 h-full w-[116%]"
        animate={{ x: ["0%", "-2.5%", "0%"] }}
        transition={{ duration: 42, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="wave-lines h-full w-full opacity-75" viewBox="0 0 1200 360" preserveAspectRatio="none">
          {Array.from({ length: rows }, (_, i) => {
            const y0 = 48 + i * 32;
            const amp = 8 + (i % 3) * 4;
            const d = `M 0 ${y0} Q 300 ${y0 - amp} 600 ${y0 + amp * 0.5} T 1200 ${y0 - amp * 0.3}`;
            return (
              <path
                key={i}
                d={d}
                fill="none"
                stroke={`rgba(0, 223, 154, ${0.055 + (i % 4) * 0.025})`}
                strokeWidth={0.55}
              />
            );
          })}
        </svg>
      </motion.div>
      <div className="wave-fade absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/82 to-transparent" />
      <div className="wave-glow absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_100%,rgba(0,223,154,0.06),transparent_58%)]" />
    </div>
  );
}

function MagneticLink({
  children,
  href,
  className = "",
}: {
  children: ReactNode;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });
  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        setXY({ x: (e.clientX - r.left - r.width / 2) * 0.12, y: (e.clientY - r.top - r.height / 2) * 0.16 });
      }}
      onMouseLeave={() => setXY({ x: 0, y: 0 })}
      animate={{ x: xy.x, y: xy.y }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function SectionReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 44, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => {
        const startedAt = performance.now();
        const duration = 1100;
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(value * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

function ServiceCard({
  title,
  text,
  Icon,
}: {
  title: string;
  text: string;
  Icon: ComponentType<{ className?: string }>;
}) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  return (
    <motion.article
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        setTilt({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 16,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * -12,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 140, damping: 14 }}
      style={{ transformPerspective: 1100 }}
      className="group relative flex min-h-[10.5rem] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-[14px] [transform-style:preserve-3d]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(520px_circle_at_30%_0%,rgba(45,212,191,0.2),transparent_50%)]" />
      <div className="relative z-10 flex w-full flex-col items-start text-start">
        <motion.div
          className="mb-4 inline-flex rounded-xl border border-teal-400/35 bg-teal-400/10 p-3 text-teal-200 shadow-[0_0_24px_rgba(45,212,191,0.25)] transition-transform duration-300 group-hover:scale-105"
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-zinc-400">{text}</p>
      </div>
    </motion.article>
  );
}

function HeroPortal() {
  const dots = useMemo(() => {
    const count = 28;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const radius = 132 + (i % 4) * 4;
      const size = 2 + (i % 3);
      return { angle, radius, size, delay: i * 0.035 };
    });
  }, []);

  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-lg items-center justify-center">
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(139,92,246,0.35),transparent_55%),radial-gradient(circle_at_50%_60%,rgba(45,212,191,0.22),transparent_50%)]"
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <motion.div
        className="relative aspect-square w-[min(92vw,400px)]"
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="heroRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <motion.g style={{ transformOrigin: "100px 100px" }} animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 32, ease: "linear" }}>
            <circle cx="100" cy="100" r="78" fill="none" stroke="url(#heroRingGrad)" strokeWidth="1.2" strokeDasharray="6 10" opacity="0.85" />
          </motion.g>
        </svg>

        {dots.map((d, i) => {
            const x = Math.cos(d.angle) * d.radius;
            const y = Math.sin(d.angle) * d.radius;
            const px = `${x.toFixed(2)}px`;
            const py = `${y.toFixed(2)}px`;
            const sz = `${d.size}px`;
            const half = `${-d.size / 2}px`;
            return (
              <motion.span
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full bg-gradient-to-br from-teal-300 to-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.75)]"
                style={{
                  width: sz,
                  height: sz,
                  marginLeft: half,
                  marginTop: half,
                  transform: `translate(${px}, ${py})`,
                }}
                initial={false}
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.15, 0.85] }}
                transition={{ duration: 2.1 + (i % 5) * 0.12, repeat: Infinity, delay: d.delay }}
              />
            );
          })}

        <div className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center px-4">
          <motion.div
            initial={{
              width: "6rem",
              height: "6rem",
              borderRadius: 999,
              opacity: 0,
              scale: 0.76,
              rotate: -10,
              clipPath: "circle(48% at 50% 50%)",
            }}
            animate={{
              width: ["6rem", "6rem", "25rem", "25rem", "25rem"],
              height: ["6rem", "6rem", "8rem", "8rem", "8rem"],
              borderRadius: ["999px", "999px", "28px", "28px", "28px"],
              opacity: 1,
              scale: [0.76, 1.08, 1, 1.02, 1],
              rotate: [-10, 8, 0, 0],
              clipPath: [
                "circle(48% at 50% 50%)",
                "circle(48% at 50% 50%)",
                "circle(150% at 22% 50%)",
                "circle(150% at 22% 50%)",
                "circle(150% at 22% 50%)",
              ],
            }}
            transition={{
              duration: 3,
              times: [0, 0.38, 0.72, 0.88, 1],
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex max-w-[86vw] items-center justify-center overflow-hidden border border-white/10 bg-black/35 px-5 py-5 shadow-[0_0_50px_rgba(0,223,154,0.2),0_0_100px_rgba(0,184,169,0.12)] backdrop-blur-xl sm:px-7 sm:py-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 1.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <FkratecBrand size="hero" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="pointer-events-none absolute -bottom-8 left-1/2 w-[125%] max-w-2xl -translate-x-1/2">
        <svg className="w-full opacity-90" viewBox="0 0 800 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWave" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="0.35" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            fill="none"
            stroke="url(#heroWave)"
            strokeWidth="2"
            d="M0,70 C120,20 240,120 360,60 S600,100 800,40"
            initial={{ pathLength: 0, opacity: 0.5 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          />
          <path fill="none" stroke="url(#heroWave)" strokeWidth="1" opacity="0.45" d="M0,90 C140,50 260,110 400,75 S620,95 800,65" />
        </svg>
      </div>
    </div>
  );
}

function FloatingAnalytics({ labels }: { labels: SiteStrings["analytics"] }) {
  const card = "rounded-2xl border border-white/10 bg-white/[0.05] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-[16px]";
  return (
    <div className="relative mx-auto min-h-[390px] w-full max-w-[34rem] overflow-hidden sm:min-h-[420px] lg:max-w-none lg:overflow-visible">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute right-3 top-2 z-20 w-[38%] min-w-[8rem] max-w-[10.5rem] sm:right-8 sm:top-0 sm:w-[34%] lg:-right-2 lg:-top-4 lg:w-[36%] ${card}`}
      >
        <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">{labels.revenue}</p>
        <p className="mt-1 text-2xl font-bold text-teal-300">$48,840</p>
        <div className="mt-3 flex h-10 items-end gap-1">
          {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-teal-500/20 to-teal-400/80"
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              style={{ height: `${h}%`, minHeight: 4 }}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className={`relative z-10 mx-auto mt-20 w-[92%] max-w-md sm:mt-16 ${card}`}
      >
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-200/90">{labels.overview}</p>
          <span className="rounded-full bg-teal-500/15 px-2 py-0.5 text-[10px] text-teal-200">{labels.live}</span>
        </div>
        <div className="mt-4 h-32 w-full overflow-hidden rounded-xl bg-gradient-to-b from-white/[0.06] to-transparent">
          <svg viewBox="0 0 400 120" className="h-full w-full">
            <defs>
              <linearGradient id="glowLine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            <motion.path
              fill="none"
              stroke="url(#glowLine)"
              strokeWidth="2.5"
              d="M0,90 C60,20 120,110 180,40 S320,100 400,25"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8 }}
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className={`absolute bottom-4 left-3 z-20 w-[50%] min-w-[10rem] max-w-[13rem] sm:left-6 lg:bottom-0 lg:left-0 lg:w-[52%] ${card}`}
      >
        <p className="text-[10px] font-medium uppercase tracking-widest text-zinc-500">{labels.growing}</p>
        <div className="mt-3 flex -space-x-2">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-8 w-8 rounded-full border-2 border-[#020617] bg-gradient-to-br from-teal-400/80 to-violet-500/80"
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-zinc-400">{labels.usersNote}</p>
      </motion.div>
    </div>
  );
}

function CubeScene() {
  const icons = [Code2, Smartphone, CloudCog, BrainCircuit];
  const r = 118;
  return (
    <div className="relative flex min-h-[320px] items-center justify-center">
      <motion.div
        className="absolute h-64 w-64 rounded-full border border-dashed border-white/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute left-1/2 top-1/2 h-0 w-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          {icons.map((Icon, i) => {
            const angle = (i / icons.length) * Math.PI * 2;
            const x = Math.cos(angle) * r;
            const y = Math.sin(angle) * r;
            return (
              <div
                key={i}
                className="absolute flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                style={{ left: x, top: y }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="rounded-xl border border-teal-400/30 bg-black/50 p-2 text-teal-200 shadow-[0_0_20px_rgba(45,212,191,0.2)] backdrop-blur-md"
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <motion.div
        className="relative z-10 h-36 w-36 [transform-style:preserve-3d]"
        animate={{ rotateX: [12, 18, 12], rotateY: [18, -12, 18] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformPerspective: 900 }}
      >
        <div className="absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-br from-teal-400/25 via-white/10 to-violet-500/25 shadow-[0_0_60px_rgba(45,212,191,0.35)] backdrop-blur-md [transform:translateZ(40px)]" />
        <div className="absolute inset-2 flex items-center justify-center rounded-xl bg-black/40">
          <motion.img
            src="/ekratec-logo.svg"
            alt={BRAND}
            className="h-12 w-32 object-contain"
            draggable={false}
            whileHover={{ scale: 1.04, filter: "drop-shadow(0 0 18px rgba(0,223,154,0.42))" }}
          />
        </div>
      </motion.div>
    </div>
  );
}

function TestimonialAvatar({ index }: { index: number }) {
  const isAlt = index % 2 === 1;

  return (
    <div className="relative h-16 w-16 overflow-hidden rounded-full border border-teal-400/30 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 shadow-[0_0_28px_rgba(45,212,191,0.22)]">
      <svg viewBox="0 0 80 80" className="h-full w-full" aria-hidden>
        <defs>
          <linearGradient id={`avatar-bg-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isAlt ? "#f0abfc" : "#67e8f9"} />
            <stop offset="100%" stopColor={isAlt ? "#2dd4bf" : "#a78bfa"} />
          </linearGradient>
        </defs>
        <rect width="80" height="80" fill={`url(#avatar-bg-${index})`} opacity="0.9" />
        <circle cx="40" cy="32" r="15" fill="#f8fafc" />
        <path d="M14 77c4.5-18 16-27 26-27s21.5 9 26 27H14Z" fill="#f8fafc" />
        <path d={isAlt ? "M25 31c4-14 23-17 31-4-5-4-18-5-31 4Z" : "M24 28c5-13 25-14 32 1-9-4-21-4-32-1Z"} fill="#0f172a" opacity="0.85" />
        <circle cx="34" cy="34" r="1.8" fill="#0f172a" />
        <circle cx="46" cy="34" r="1.8" fill="#0f172a" />
        <path d="M34 42c4 3 8 3 12 0" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("ar");
  const [theme, setTheme] = useState<Theme>("dark");
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 720], [0, 92]);
  const heroParallaxScale = useTransform(scrollY, [0, 720], [1, 0.92]);
  const t = siteCopy[lang];
  const testimonialItems = t.testimonials.items;
  const testimonialCount = testimonialItems.length;

  useEffect(() => {
    const stored = localStorage.getItem("ekratec-lang");
    if (stored === "ar" || stored === "en") setLang(stored);
    const storedTheme = localStorage.getItem("fkratec-theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ekratec-lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    localStorage.setItem("fkratec-theme", theme);
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroDone(true), 1450);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    setTestimonialIndex(0);
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "services", "why", "process", "technologies", "contact"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.28 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (testimonialCount < 2) return;
    const interval = setInterval(() => setTestimonialIndex((i) => (i + 1) % testimonialCount), 6000);
    return () => clearInterval(interval);
  }, [testimonialCount]);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    if (!form.fullName || !ok || !form.message) {
      setToast({ type: "error", message: t.toast.formError });
      setTimeout(() => setToast(null), 4000);
      return;
    }
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fail");
      setToast({ type: "success", message: t.toast.success });
      setForm({ fullName: "", email: "", phone: "", message: "" });
    } catch {
      setToast({ type: "error", message: t.toast.fail });
    } finally {
      setLoading(false);
      setTimeout(() => setToast(null), 4000);
    }
  };

  const arrowFlip = lang === "ar" ? "rotate-180" : "";

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      lang={lang}
      data-theme={theme}
      className={`theme-${theme} relative min-h-screen overflow-x-hidden transition-colors duration-700 ${
        theme === "dark" ? "bg-[#020617] text-zinc-100" : "bg-[#f6f0e6] text-slate-950"
      }`}
    >
      <AnimatePresence>
        {!introDone && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#020617]"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 18 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-6 shadow-[0_0_90px_rgba(0,223,154,0.28)] backdrop-blur-xl"
            >
              <FkratecBrand size="hero" animateIntro />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <WaveBackdrop />
      <div className="relative z-10">
      <div className="ambient-gradient pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,223,154,0.08),transparent),radial-gradient(ellipse_55%_35%_at_100%_0%,rgba(0,184,169,0.06),transparent)]" />
      <div className="ambient-grid pointer-events-none fixed inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_48px] opacity-[0.07]" />

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled ? "border-white/10 bg-[#020617]/80 py-3 backdrop-blur-xl" : "border-transparent bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 lg:gap-4 lg:px-8">
          <a href="#home" className="shrink-0">
            <FkratecBrand />
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {NAV_DEF.map((item) => {
              const id = item.href.slice(1);
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition ${isActive ? "text-white" : "text-zinc-500 hover:text-white"}`}
                >
                  {t.nav[item.key]}
                  {isActive && (
                    <motion.span layoutId="navline" className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-teal-400 to-violet-400" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => setLang((l) => (l === "ar" ? "en" : "ar"))}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-teal-400/35 hover:text-white"
              aria-label={t.a11y.toggleLang}
            >
              <Languages className="h-4 w-4 text-teal-300" />
              <span>{lang === "ar" ? "EN" : "عربي"}</span>
            </button>
            <button
              type="button"
              onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
              className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-zinc-300 transition hover:border-teal-400/35 hover:text-white"
              aria-label={t.a11y.toggleTheme}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={theme}
                  initial={{ rotate: -45, opacity: 0, scale: 0.8 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 45, opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "dark" ? <Moon className="h-4 w-4 text-teal-300" /> : <Sun className="h-4 w-4 text-amber-400" />}
                </motion.span>
              </AnimatePresence>
              <span>{theme === "dark" ? "Dark" : "Light"}</span>
            </button>
            <div className="hidden lg:block">
              <MagneticLink
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-transparent bg-gradient-to-r from-emerald-400/15 to-teal-500/15 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_22px_rgba(0,223,154,0.2)] [background-clip:padding-box] ring-1 ring-[#00df9a]/45 ring-offset-2 ring-offset-[#020617] transition hover:shadow-[0_0_32px_rgba(0,255,157,0.35)]"
              >
                {t.nav.letsTalk}
              </MagneticLink>
            </div>
            <button
              type="button"
              className="rounded-lg border border-white/10 p-2 lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={t.a11y.menu}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-b border-white/10 bg-[#020617]/95 backdrop-blur-xl lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {NAV_DEF.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-3 text-sm text-zinc-300 hover:bg-white/5 hover:text-white"
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 rounded-full bg-gradient-to-r from-teal-500 to-violet-500 px-4 py-3 text-center text-sm font-semibold text-black"
                  onClick={() => setMenuOpen(false)}
                >
                  {t.nav.letsTalk}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Hero */}
      <section id="home" className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pt-36">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-zinc-400 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            {t.hero.badge}
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.titleBefore}{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titleAfter}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">{t.hero.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <MagneticLink
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_rgba(45,212,191,0.35)]"
            >
              {t.hero.ctaPrimary} <ArrowRight className={`h-4 w-4 ${arrowFlip}`} />
            </MagneticLink>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-teal-400/40 hover:bg-white/[0.06]"
            >
              {t.hero.ctaSecondary} <ArrowRight className={`h-4 w-4 opacity-70 ${arrowFlip}`} />
            </a>
          </div>
        </motion.div>

        <motion.div style={{ y: heroParallaxY, scale: heroParallaxScale }}>
          <HeroPortal />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
          <SectionReveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00df9a]/90">{t.about.kicker}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.5rem] lg:leading-tight">
              {t.about.heading}
            </h2>
            <ul className="mt-10 space-y-5">
              {t.aboutPoints.map((p, i) => {
                const Icon = ABOUT_ICONS[i];
                return (
                  <li key={p.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-teal-400/25 bg-teal-400/10 text-teal-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{p.title}</p>
                      <p className="mt-1 text-sm text-zinc-500">{p.text}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </SectionReveal>
          <SectionReveal>
            <FloatingAnalytics labels={t.analytics} />
          </SectionReveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionReveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.services.heading}</h2>
            <p className="mt-3 max-w-xl text-zinc-400">{t.services.lead}</p>
          </div>
        </SectionReveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s, i) => {
            const Icon = SERVICE_ICONS[i];
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <ServiceCard title={s.title} text={s.text} Icon={Icon} />
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why choose */}
      <section id="why" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.why.heading}</h2>
            <p className="mt-4 text-zinc-400">{t.why.lead}</p>
            <ul className="mt-8 space-y-4">
              {t.why.bullets.map((line) => (
                <li key={line} className="flex items-start gap-3 text-sm text-zinc-300">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {t.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md"
                >
                  <p className="text-3xl font-black tracking-tight text-white">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-500">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
          <SectionReveal>
            <CubeScene />
          </SectionReveal>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.process.heading}</h2>
        </SectionReveal>
        <div className="mt-14 overflow-x-auto pb-3">
          <div className="relative flex min-w-[720px] items-start justify-between gap-2 pt-8 lg:min-w-0">
            <div className="absolute left-[8%] right-[8%] top-3 hidden h-px border-t border-dotted border-teal-300/25 lg:block" />
            {t.process.steps.map((step, i) => (
              <div key={`${step}-${i}`} className="relative flex flex-1 flex-col items-center">
                <span className="absolute -top-[1.55rem] z-10 hidden h-3 w-3 rounded-full border border-teal-300/50 bg-[#020617] shadow-[0_0_18px_rgba(45,212,191,0.45)] lg:block" />
                <div className="relative z-10 flex flex-col items-center text-center">
                  <span className="text-4xl font-black leading-none text-white/15 sm:text-5xl">{String(i + 1).padStart(2, "0")}</span>
                  <p className="mt-1 text-sm font-semibold text-white">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials + logos */}
      <section className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_80px_rgba(0,0,0,0.5)] backdrop-blur-[18px] sm:p-10">
            <AnimatePresence mode="wait">
              {testimonialItems.map((item, idx) =>
                idx === testimonialIndex ? (
                  <motion.div key={item.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
                    <p dir={lang === "ar" ? "rtl" : "ltr"} className="text-center text-lg leading-relaxed text-zinc-200 sm:text-xl">“{item.quote}”</p>
                    <div className="mt-8 flex flex-col items-center gap-3">
                      <TestimonialAvatar index={idx} />
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-sm text-zinc-500">{item.role}</p>
                    </div>
                  </motion.div>
                ) : null,
              )}
            </AnimatePresence>
            <div className="mt-8 flex justify-center gap-2">
              {testimonialItems.map((_, d) => (
                <button
                  key={d}
                  type="button"
                  aria-label={`${t.a11y.testimonialDot} ${d + 1}`}
                  onClick={() => setTestimonialIndex(d)}
                  className={`h-2 rounded-full transition-all ${testimonialIndex === d ? "w-8 bg-teal-400" : "w-2 bg-zinc-600"}`}
                />
              ))}
            </div>
          </div>
        </SectionReveal>

        <div className="marquee-wrapper mt-14">
          <div className="marquee-track items-center gap-10 py-2">
            {[...clientComments[lang], ...clientComments[lang]].map((comment, i) => (
              <span
                key={`${comment}-${i}`}
                dir={lang === "ar" ? "rtl" : "ltr"}
                className="mx-8 inline-flex items-center gap-3 text-base font-semibold tracking-tight text-zinc-600 sm:text-lg"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.6)]" />
                {comment}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section id="technologies" className="relative mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{t.tech.heading}</h2>
          <p className="mt-3 text-zinc-500">{t.tech.lead}</p>
        </SectionReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
          {technologies.map((tech) => (
            <motion.span
              key={tech.name}
              whileHover={{ y: -4, scale: 1.03 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: tech.color }} />
              {tech.name}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Contact CTA + form */}
      <section id="contact" className="relative mx-auto max-w-7xl px-5 pb-8 pt-10 lg:px-8">
        <SectionReveal>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 backdrop-blur-xl sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">{t.contact.ctaTitle}</h2>
              <p className="mt-2 text-lg text-teal-200/90">{t.contact.ctaLine}</p>
            </div>
            <a
              href={`mailto:${CONTACT.email}`}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 px-8 py-3.5 text-sm font-semibold text-black shadow-[0_0_40px_rgba(45,212,191,0.35)] transition hover:brightness-110 lg:mt-0"
            >
              <Mail className="h-4 w-4" />
              {t.contact.sendEmail}
            </a>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { icon: Mail, label: t.contact.cardEmail, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
            { icon: Phone, label: t.contact.cardPhone, value: CONTACT.phoneDisplay, href: `tel:${CONTACT.phone}` },
            { icon: MapPin, label: t.contact.cardLocation, value: t.contact.locationValue, href: "https://maps.google.com/?q=Riyadh%2C%20Saudi%20Arabia" },
          ].map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noreferrer" : undefined}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-teal-400/20 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(45,212,191,0.08)] backdrop-blur-md"
            >
              <c.icon className="h-6 w-6 text-teal-300" />
              <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">{c.label}</p>
              <p className="mt-2 text-sm font-medium text-white">{c.value}</p>
            </motion.a>
          ))}
        </div>

        <form onSubmit={onSubmit} className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8 lg:max-w-3xl">
          <p className="text-sm font-semibold text-white">{t.contact.formTitle}</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input
              value={form.fullName}
              onChange={(e) => setForm((p) => ({ ...p, fullName: e.target.value }))}
              placeholder={t.contact.phName}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-teal-400/30 focus:ring-2"
            />
            <input
              value={form.phone}
              onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
              placeholder={t.contact.phPhone}
              className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-teal-400/30 focus:ring-2"
            />
          </div>
          <input
            value={form.email}
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
            placeholder={t.contact.phEmail}
            className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-teal-400/30 focus:ring-2"
          />
          <textarea
            value={form.message}
            onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
            rows={5}
            placeholder={t.contact.phMessage}
            className="mt-4 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm outline-none ring-teal-400/30 focus:ring-2"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-violet-500 py-3 text-sm font-semibold text-black disabled:opacity-60 sm:w-auto sm:px-10"
          >
            {loading ? t.contact.sending : t.contact.submit}
            {!loading && <ArrowRight className={`h-4 w-4 ${arrowFlip}`} />}
          </button>
        </form>
      </section>

      <footer className="border-t border-white/10 bg-black/40 py-12 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-3 lg:px-8">
          <div>
            <FkratecBrand size="footer" />
            <p className="mt-4 max-w-xs text-sm text-zinc-500">{t.footer.tagline}</p>
            <div className="mt-6 flex gap-3">
              <a href="#" className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="rounded-lg border border-white/10 p-2 text-zinc-400 hover:text-white" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.footer.quick}</p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-500">
              {NAV_DEF.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-teal-300">
                    {t.nav[n.key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{t.footer.connect}</p>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>{CONTACT.email}</li>
              <li>{CONTACT.phoneDisplay}</li>
              <li>{t.contact.locationValue}</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 px-5 pt-8 text-center text-xs text-zinc-600 lg:px-8">
          © {new Date().getFullYear()} {BRAND}. {t.footer.rights}
        </div>
      </footer>

      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className={`fixed bottom-6 right-6 z-[100] max-w-sm rounded-xl border px-5 py-3 text-sm backdrop-blur-xl ${
              toast.type === "success"
                ? "border-emerald-400/30 bg-emerald-500/15 text-emerald-100"
                : "border-rose-400/30 bg-rose-500/15 text-rose-100"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

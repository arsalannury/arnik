import { useState } from "react";
import "../styles/globals.css";
import {
  ArrowRight,
  Instagram,
  Globe,
  Camera,
  Sparkles,
  Palette,
  Menu,
  X,
  Zap,
  Star,
  Mail,
  Link2,
} from "lucide-react";
import { PROCESS, SERVICES, TESTIMONIALS } from "./constants/mockData";

const NAV_LINKS = ["خدمات", "رزومه", "مراحل", "درباره ما"];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="bg-black text-white min-h-screen overflow-x-hidden"
        style={{ fontFamily: "Vazir" }}
      >
        {/* ──────────────────── NAV ──────────────────── */}
        <nav
          className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10"
          style={{
            background: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="btn-primary w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <span>
                  <Zap size={15} className="text-white" />
                </span>
              </div>
              <span
                className="font-display text-white font-semibold tracking-wider"
                style={{ fontSize: "0.8rem", letterSpacing: "0.15em" }}
              >
                اَرنیک
              </span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-link text-sm tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="text-sm text-white/50 hover:text-white/90 transition-colors px-4 py-2"
              >
                ارتباط با ما
              </a>
              <button className="btn-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full">
                <span>درخواست پروژه</span>
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-white/60 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile drawer */}
          {menuOpen && (
            <div className="md:hidden border-t border-white/8 py-5 flex flex-col gap-5">
              {NAV_LINKS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-white/60 hover:text-white transition-colors text-sm tracking-wide"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="btn-primary text-white text-sm font-semibold px-5 py-3 rounded-full mt-1 text-center">
                <span>درخواست پروژه</span>
              </button>
            </div>
          )}
        </nav>

        {/* ──────────────────── HERO ──────────────────── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
          {/* Dot grid */}
          <div className="dot-grid absolute inset-0 pointer-events-none" />

          {/* Orbs */}
          <div
            className="orb"
            style={{
              width: 700,
              height: 700,
              top: "-200px",
              left: "-250px",
              background: "rgba(74,108,247,0.16)",
            }}
          />
          <div
            className="orb"
            style={{
              width: 600,
              height: 600,
              bottom: "-150px",
              right: "-200px",
              background: "rgba(139,92,246,0.18)",
              animationDelay: "3.5s",
            }}
          />
          <div
            className="orb"
            style={{
              width: 350,
              height: 350,
              top: "40%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: "rgba(74,108,247,0.08)",
              animationDelay: "6s",
            }}
          />

          {/* Spinning rings */}
          <div
            className="ring-spin absolute rounded-full"
            style={{
              width: 560,
              height: 560,
              top: "50%",
              left: "50%",
              border: "1px solid rgba(74,108,247,0.12)",
              transformOrigin: "center center",
            }}
          />
          <div
            className="ring-spin-rev absolute rounded-full"
            style={{
              width: 760,
              height: 760,
              top: "50%",
              left: "50%",
              border: "1px solid rgba(139,92,246,0.07)",
              transformOrigin: "center center",
            }}
          />

          {/* Floating geometric elements */}
          <div
            className="float-el absolute"
            style={
              {
                "--rot": "12deg",
                top: "22%",
                right: "11%",
                width: 64,
                height: 64,
                border: "1px solid rgba(74,108,247,0.3)",
                borderRadius: 14,
                animationDelay: "0s",
              } as React.CSSProperties
            }
          />
          <div
            className="float-el absolute rounded-full"
            style={{
              top: "35%",
              right: "7%",
              width: 28,
              height: 28,
              background: "linear-gradient(135deg,#4a6cf7,#8b5cf6)",
              opacity: 0.65,
              animationDelay: "2s",
            }}
          />
          <div
            className="float-el absolute"
            style={
              {
                "--rot": "45deg",
                bottom: "30%",
                left: "9%",
                width: 44,
                height: 44,
                border: "1px solid rgba(139,92,246,0.3)",
                borderRadius: 8,
                animationDelay: "1.5s",
              } as React.CSSProperties
            }
          />
          <div
            className="float-el absolute rounded-full"
            style={{
              top: "30%",
              left: "13%",
              width: 18,
              height: 18,
              background: "rgba(74,108,247,0.6)",
              animationDelay: "4s",
            }}
          />
          <div
            className="float-el absolute"
            style={
              {
                "--rot": "-12deg",
                bottom: "22%",
                right: "15%",
                width: 36,
                height: 36,
                border: "1px solid rgba(74,108,247,0.2)",
                borderRadius: 8,
                animationDelay: "3s",
              } as React.CSSProperties
            }
          />

          {/* Hero content */}
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 glass px-4 py-2 rounded-full mb-10">
              <div
                className="w-1.5 h-1.5 rounded-full bg-blue-400"
                style={{ animation: "orbPulse 2s ease-in-out infinite" }}
              />
              <span
                className="text-white/55 tracking-widest uppercase font-medium"
                style={{ fontSize: "0.68rem" }}
              >
                استدیو خلاقیت
              </span>
            </div>

            {/* Headline */}
            <h1
              className="hero-headline font-display font-black text-white leading-tight mb-6"
              style={{
                fontSize: "clamp(2.75rem, 7vw, 6rem)",
                letterSpacing: "-0.025em",
                lineHeight: 1.04,
              }}
            >
              ایده هات رو به
              <br />
              <span className="gradient-text">تجربه تبدیل کن</span>
            </h1>

            {/* Sub */}
            <p
              className="text-white/45 max-w-lg mx-auto mb-10 leading-relaxed"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.125rem)" }}
            >
              استدیو خلاقیت اَرنیک از طریق استراتژی، طراحی و اجرای مبتنی بر هوش
              مصنوعی، حضوری فراموش‌ نشدنی در دنیای دیجیتال برای شما رقم خواهد زد
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary text-white font-semibold px-8 py-4 rounded-full flex items-center gap-2 text-sm tracking-wide">
                <span className="flex items-center gap-2">
                  درخواست پروژه <ArrowRight size={15} />
                </span>
              </button>
              <button className="glass text-white/70 hover:text-white font-medium px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 hover:border-white/20 hover:bg-white/8">
                نمونه کار ها
              </button>
            </div>

            {/* Stats */}
            <div className="mt-20 flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {[
                { value: "10+", label: "تجربه موفق" },
                // { value: "$40M+", label: "Revenue Generated" },
                { value: "1 سال", label: "حضور در مارکت" },
                { value: "98%", label: "رضایت مشتری" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="font-display font-extrabold gradient-text"
                    style={{ fontSize: "1.75rem" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-white/35 uppercase tracking-widest mt-1 font-medium"
                    style={{ fontSize: "0.65rem" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom fade */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, transparent, #000)",
            }}
          />
        </section>

        {/* ──────────────────── SERVICES ──────────────────── */}
        <section id="services" className="py-32 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <p className="text-white/40 max-w-sm leading-relaxed text-sm md:text-right">
                از هویت برند تا محتوای هوشمند؛ ما تمام مسیر خلاقیت دیجیتال شما
                را می‌سازیم تا کسب‌وکارتان رشد کند
              </p>

              <div>
                <span
                  className="font-display gradient-text-subtle uppercase tracking-widest font-semibold block mb-4"
                  style={{
                    fontSize: "0.65rem",
                    fontFamily: "Vazir",
                    textAlign: "right",
                  }}
                >
                  ما چه کاری میکنیم
                </span>
                <h2
                  className="font-display font-extrabold text-white leading-tight"
                  style={{
                    fontSize: "clamp(1.875rem, 4vw, 3rem)",
                    letterSpacing: "-0.02em",
                    textAlign: "right",
                  }}
                >
                  تمام خدمات
                  <br />
                  اَرنیک در یک قاب
                </h2>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES.map((svc, i) => {
                const Icon = svc.icon;
                return (
                  <div
                    key={svc.number}
                    className={`glass-card rounded-2xl p-8 group relative overflow-hidden text-right ${
                      i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                    }`}
                  >
                    {/* Number watermark */}
                    <span
                      className="font-display font-black text-white/4 select-none absolute -left-3 -top-4 leading-none"
                      style={{ fontSize: "6rem" }}
                    >
                      {svc.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="service-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ml-auto"
                      style={{
                        background: "rgba(74,108,247,0.1)",
                        border: "1px solid rgba(74,108,247,0.15)",
                      }}
                    >
                      <Icon size={20} className="text-blue-400" />
                    </div>

                    {/* Tag */}
                    <div className="mb-3">
                      <span
                        className="text-blue-400/70 font-medium uppercase tracking-widest"
                        style={{ fontSize: "0.6rem" }}
                      >
                        {svc.tag}
                      </span>
                    </div>

                    <h3
                      className="text-white font-semibold mb-3 leading-snug"
                      style={{ fontSize: "1.05rem" }}
                    >
                      {svc.title}
                    </h3>
                    <p className="text-white/40 leading-relaxed text-sm">
                      {svc.desc}
                    </p>

                    {/* Arrow */}
                    <div className="mt-6 flex items-center justify-end gap-1.5 text-blue-400/50 group-hover:text-blue-400 transition-colors duration-300">
                      <span className="text-xs font-medium uppercase tracking-wider">
                        بیشتر
                      </span>
                      <ArrowRight
                        size={12}
                        className="transform group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ──────────────────── PROCESS ──────────────────── */}
        <section
          id="process"
          className="py-32 px-6 md:px-10 relative overflow-hidden"
        >
          <div
            className="orb absolute"
            style={{
              width: 500,
              height: 500,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: "rgba(74,108,247,0.07)",
              animationDelay: "2s",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 text-center">
              <span
                className="font-display gradient-text-subtle tracking-widest block mb-4"
                style={{ fontSize: "0.65rem" }}
              >
                ما چگونه کار میکنیم؟
              </span>
              <h2
                className="font-display font-extrabold text-white leading-tight"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                از ایده پردازی
                <span className="gradient-text"> تا اجرای کامل</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Connecting line — desktop only */}
              <div className="hidden lg:block absolute top-14 left-0 right-0 h-px process-line opacity-30" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                {PROCESS.map((step, i) => (
                  <div key={step.number} className="relative text-right">
                    {/* Number node */}
                    <div className="flex lg:flex-col items-start gap-6 lg:gap-0">
                      <div className="flex-shrink-0 relative">
                        <div
                          className="w-12 h-12 lg:mb-8 rounded-full flex items-center justify-center relative z-10"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(74,108,247,0.25), rgba(139,92,246,0.15))",
                            border: "1px solid rgba(74,108,247,0.4)",
                          }}
                        >
                          <span
                            className="font-display font-bold gradient-text"
                            style={{ fontSize: "0.72rem" }}
                          >
                            {step.number}
                          </span>
                        </div>
                      </div>

                      <div className="pt-1 lg:pt-0">
                        <div
                          className="font-display font-black text-white/6 select-none leading-none -mb-4 hidden lg:block"
                          style={{ fontSize: "5rem" }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <h3
                          className="font-display font-bold text-white mb-2"
                          style={{ fontSize: "1.1rem" }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-white/40 leading-relaxed text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────── ABOUT ──────────────────── */}
        <section
          id="about"
          className="py-32 px-6 md:px-10"
          style={{ background: "rgba(255,255,255,0.015)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-16 items-center">
              <div>
                <span
                  className="font-display gradient-text-subtle text-right tracking-widest font-semibold block mb-6"
                  style={{ fontSize: "0.65rem" }}
                >
                  ما که هستیم؟
                </span>
                <h2
                  className="font-display font-extrabold text-white leading-tight mb-8 text-right"
                  style={{
                    fontSize: "clamp(1.875rem, 3.5vw, 2.75rem)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  ما برندهای دیجیتالی می‌سازیم
                  <br />
                  که{" "}
                  <span className="gradient-text text-right">
                    توجه‌ها را جلب می‌کنند
                  </span>
                  <br />و کسب‌وکارها را رشد می‌دهند
                </h2>
                <p
                  className="text-white/45 leading-relaxed mb-6 text-right"
                  style={{ fontSize: "1rem" }}
                >
                  اَرنیک یک استدیو خلاقیت نتیجه محوره که هدف اصلیش کمک به کسب و
                  کار های خورد و بزرگ در راستای بهبود وضعیت کاری و دیده شدن
                  اونهاست ما معتقدیم در دنیای پر هیاهوی امروز, برای دیده و شنیده
                  شدن باید اقدام کرد تا شانس موفقیت بیشتر و بیشتر شود
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────── TESTIMONIALS ──────────────────── */}
        <section className="py-32 px-6 md:px-10 relative overflow-hidden">
          <div
            className="orb absolute"
            style={{
              width: 600,
              height: 600,
              top: "50%",
              right: "-200px",
              transform: "translateY(-50%)",
              background: "rgba(139,92,246,0.08)",
              animationDelay: "1s",
            }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-16 text-center">
              <span
                className="font-display gradient-text-subtle uppercase tracking-widest font-semibold block mb-4"
                style={{ fontSize: "0.65rem" }}
              >
                رضایت همراهان
              </span>
              <h2
                className="font-display font-extrabold text-white leading-tight"
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 3rem)",
                  letterSpacing: "-0.02em",
                }}
              >
                کسب و کار های که به ما اعتماد کردند
                <br />
                <span className="gradient-text">.هیچ وقت پشیمان نمیشوند</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.author}
                  className="testimonial-card rounded-2xl p-8"
                >
                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className="fill-blue-400 text-blue-400"
                      />
                    ))}
                  </div>

                  {/* Quote mark */}
                  <div
                    className="font-display font-black text-white/6 leading-none mb-4 select-none"
                    style={{ fontSize: "5rem", lineHeight: 0.8 }}
                  >
                    &ldquo;
                  </div>

                  <p className="text-white/60 leading-relaxed mb-8 text-sm">
                    {t.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white"
                      style={{
                        background: `linear-gradient(135deg, ${t.color}, #8b5cf6)`,
                        fontSize: "0.7rem",
                      }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">
                        {t.author}
                      </div>
                      <div className="text-white/35 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──────────────────── FINAL CTA ──────────────────── */}
        <section id="contact" className="py-10 px-6 md:px-10 pb-32">
          <div className="max-w-7xl mx-auto">
            <div
              className="cta-glow rounded-3xl p-12 md:p-20 relative overflow-hidden text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,108,247,0.12) 0%, rgba(139,92,246,0.08) 50%, rgba(74,108,247,0.06) 100%)",
                border: "1px solid rgba(74,108,247,0.2)",
              }}
            >
              {/* Background orb */}
              <div
                className="orb absolute"
                style={{
                  width: 500,
                  height: 500,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  background: "rgba(74,108,247,0.12)",
                  animationDelay: "0s",
                }}
              />

              {/* Dot grid inside CTA */}
              <div className="dot-grid absolute inset-0 opacity-40 rounded-3xl pointer-events-none" />

              <div className="relative z-10">
                <span
                  className="font-display gradient-text-subtle uppercase tracking-widest font-semibold block mb-6"
                  style={{ fontSize: "0.65rem" }}
                >
                  بریم برای شروع؟
                </span>
                <h2
                  className="font-display font-extrabold text-white leading-tight mb-6"
                  style={{
                    fontSize: "clamp(2rem, 5vw, 3.75rem)",
                    letterSpacing: "-0.025em",
                  }}
                >
                  آماده ساختن یه محصول
                  <br />
                  <span className="gradient-text">فوق العاده هستی؟</span>
                </h2>
                <p
                  className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed"
                  style={{ fontSize: "1rem" }}
                >
                  درباره پروژه‌تون برامون بگید؛ تا ۲۴ ساعت بعد باهاتون تماس
                  می‌گیریم. بدون پیچوندن و حرف‌های کلیشه‌ای؛ فقط یه گفت‌وگوی
                  واقعی درباره چیزی که می‌خواید بسازید
                </p>

                {/* Email row */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-8">
                  <div
                    className="flex-1 w-full flex items-center gap-3 px-5 py-4 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Mail size={15} className="text-white/30 flex-shrink-0" />
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-transparent text-white placeholder-white/25 text-sm flex-1 outline-none"
                    />
                  </div>
                  <button className="btn-primary text-white font-semibold px-7 py-4 rounded-full text-sm whitespace-nowrap w-full sm:w-auto">
                    <span>ارسال</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──────────────────── FOOTER ──────────────────── */}
        <footer
          className="border-t px-6 md:px-10 py-16"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          <div className="max-w-7xl mx-auto">
            {/* Bottom bar */}
            <div
              className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
            >
              <p className="text-white/25 text-xs">
                &copy; {new Date().getFullYear()} تمامی حقوق برای اَرنیک استدیو
                محفوظ میباشد
              </p>
              <div className="flex items-center gap-6">
                {[
                  { Icon: Instagram, label: "Instagram" },
                  { Icon: Globe, label: "Website" },
                  { Icon: Link2, label: "LinkedIn" },
                ].map(({ Icon, label }) => (
                  <button
                    key={label}
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/40 hover:text-white transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <>
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
              { value: "6 yrs", label: "حضور در مارکت" },
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
    </>
  );
};

export default Hero;

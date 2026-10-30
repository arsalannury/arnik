import { PROCESS } from "../constants/content";

const Process = () => {
  return (
    <>
      <section
        id="مراحل"
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
    </>
  );
};

export default Process;

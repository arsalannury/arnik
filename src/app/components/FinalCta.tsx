import { Mail } from "lucide-react";

const FinalCta = () => {
  return (
    <>
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
                آماده همکاری جدید هستی؟
              </span>
              <h2
                className="font-display font-extrabold text-white leading-tight mb-6"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.75rem)",
                  letterSpacing: "-0.025em",
                }}
              >
                ما برای کمک به رشد کسب و کار شما
                <br />
                <span className="gradient-text">هیجان زده ایم</span>
              </h2>
              <p
                className="text-white/45 max-w-md mx-auto mb-10 leading-relaxed"
                style={{ fontSize: "1rem" }}
              >
                از کسب و کار خودتون به ما بگید و نیازتون رو با ما در میون بزارید. کمتر از ۲۴ ساعت بعد با شما ارتباط میگیریم
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
                  <span>! شروع کن</span>
                </button>
              </div>

              <p className="text-white/25 text-xs">
               بهترین نتیجه رشد شما، کسب اعتبار ماست
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default FinalCta;

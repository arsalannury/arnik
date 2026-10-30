import { Star } from "lucide-react";
import { TESTIMONIALS } from "../constants/content";

const Testimonials = () => {
  return (
    <>
      <section
        id="رزومه"
        className="py-32 px-6 md:px-10 relative overflow-hidden"
      >
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
              از دیدگاه شما
            </span>
            <h2
              className="font-display font-extrabold text-white leading-tight"
              style={{
                fontSize: "clamp(1.875rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              نتیجه اعتماد به ما
              <br />
              <span className="gradient-text">همکاری بلند مدت است</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className="testimonial-card rounded-2xl p-8">
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

                <p className="text-white/60 leading-relaxed mb-8 text-sm text-right">
                  {t.quote}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 justify-end">
                  <div>
                    <div className="text-white font-semibold text-sm text-right">
                      {t.author}
                    </div>
                    <div className="text-white/35 text-xs">{t.role}</div>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-display font-bold text-white"
                    style={{
                      background: `linear-gradient(135deg, ${t.color}, #8b5cf6)`,
                      fontSize: "0.7rem",
                    }}
                  >
                    {t.initials}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;

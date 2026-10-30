import { ArrowRight } from "lucide-react";
import { SERVICES } from "../constants/content";

const Services = () => {
  return (
    <>
      <section id="خدمات" className="py-32 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <p className="text-white/40 max-w-sm leading-relaxed text-sm md:text-right">
              از هویت برند تا محتوای هوشمند؛ ما تمام مسیر خلاقیت دیجیتال شما را
              می‌سازیم تا کسب‌وکارتان رشد کند
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
    </>
  );
};

export default Services;

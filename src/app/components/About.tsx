import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="py-32 px-6 md:px-10"
        style={{ background: "rgba(255,255,255,0.015)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Right: stats cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  value: "150+",
                  label: "Brands served across 12 countries",
                  accent: "#4a6cf7",
                },
                {
                  value: "400M",
                  label: "People reached through our content",
                  accent: "#8b5cf6",
                },
                {
                  value: "$40M+",
                  label: "Direct revenue attributed to our work",
                  accent: "#8b5cf6",
                },
                {
                  value: "98%",
                  label: "Client retention rate year over year",
                  accent: "#4a6cf7",
                },
              ].map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-7">
                  <div
                    className="font-display font-extrabold mb-2 leading-none"
                    style={{
                      fontSize: "2.25rem",
                      color: stat.accent,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {stat.value}
                  </div>
                  <p className="text-white/40 text-xs leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Left: statement */}
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
                Axiom is a creative studio obsessed with one thing: results. We
                combine the strategic rigour of a consultancy with the craft of
                a design-led agency — and the velocity of AI-powered tooling.
              </p>
              <p className="text-white/35 leading-relaxed text-sm">
                Founded in 2018, we have grown brands across 12 countries,
                produced content seen by over 400 million people, and helped
                founders turn creative investment into compounding commercial
                returns.
              </p>

              <div className="mt-10 flex items-center gap-4">
                <button className="btn-primary text-white text-sm font-semibold px-6 py-3.5 rounded-full">
                  <span>Our Philosophy</span>
                </button>
                <button className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5">
                  Meet the team <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

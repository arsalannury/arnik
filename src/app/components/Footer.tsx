import { Zap, Link2, Globe,Instagram } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer
        className="border-t px-6 md:px-10 py-16"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="btn-primary w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span>
                    <Zap size={15} className="text-white" />
                  </span>
                </div>
                <span
                  className="font-display text-white font-semibold tracking-wider"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.15em" }}
                >
                  AXIOM
                </span>
              </div>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                Premium creative studio helping ambitious brands grow through
                strategy, design, and AI-powered execution.
              </p>
              {/* Socials */}
              <div className="flex items-center gap-4 mt-6">
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

            {/* Services */}
            <div>
              <h4
                className="text-white/50 uppercase tracking-widest font-medium mb-5"
                style={{ fontSize: "0.6rem" }}
              >
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  "Social Media",
                  "Web Design",
                  "Content Production",
                  "Brand Identity",
                  "AI Solutions",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-white/40 hover:text-white transition-colors text-sm"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4
                className="text-white/50 uppercase tracking-widest font-medium mb-5"
                style={{ fontSize: "0.6rem" }}
              >
                Company
              </h4>
              <ul className="space-y-3">
                {["About", "Portfolio", "Process", "Contact", "Careers"].map(
                  (s) => (
                    <li key={s}>
                      <a
                        href={`#${s.toLowerCase()}`}
                        className="text-white/40 hover:text-white transition-colors text-sm"
                      >
                        {s}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-white/25 text-xs">
              &copy; {new Date().getFullYear()} Axiom Studio. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy Policy", "Terms of Service"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/25 hover:text-white/60 transition-colors text-xs"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

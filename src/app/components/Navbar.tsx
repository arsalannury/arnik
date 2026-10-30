import { Zap } from "lucide-react";
import { NAV_LINKS } from "../constants/content";
import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
const logoWhite = new URL(
  "../../assets/images/logo-white.webp",
  import.meta.url,
).href;

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
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
          <img src={logoWhite} alt="logo-main" className="w-32 h-25" />
          {/* <div className="flex items-center gap-2.5">
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
          </div> */}

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
              <span>ورود / ثبت نام</span>
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
              <span>ورود / ثبت نام</span>
            </button>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;

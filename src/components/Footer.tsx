
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0E0B3D] text-white">
      <div className="container-custom py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <a href="#" className="text-3xl font-bold mb-6 inline-block">
              Presently
            </a>
            <p className="text-white/60 mb-4">
              Colombo, Sri Lanka
            </p>
            <div className="space-y-2">
              <p>
                <span className="text-white/60">Phone: </span>
                <a href="tel:+94706304241" className="text-emerald-400 hover:text-emerald-300">
                  +94 (70) 630 4241
                </a>
              </p>
              <p>
                <span className="text-white/60">Email: </span>
                <a href="mailto:presently@gmail.com" className="text-emerald-400 hover:text-emerald-300">
                  presently.coach@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="grid grid-cols-2 gap-8">
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-white/60 hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-white/60 hover:text-white transition-colors">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-white/60 hover:text-white transition-colors">
                    Features
                  </a>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <a href="#team" className="text-white/60 hover:text-white transition-colors">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-white/60 hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-white/60 hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <a
              target="_blank"
              href="https://www.instagram.com/presently_app/"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/presently-app"
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-white/60 text-sm">
            © 2025 <span className="text-white">Presently</span>. All Rights Reserved |{" "}
            <span className="text-white/40">
              Designed & Developed By{" "}
              <a href="#team" className="text-emerald-400 hover:text-emerald-300">
                Team Presently
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

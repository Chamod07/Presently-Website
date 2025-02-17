
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 gradient-bg">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary inline-block mb-4">
              AI-Powered Presentation Skills
            </span>
            <h1 className="heading mb-6">
              Master Public Speaking with{" "}
              <span className="text-primary">Presently</span>
            </h1>
            <p className="subheading mb-8 text-balance">
              Transform your speaking and presentation skills with real-time AI feedback,
              personalized coaching, and interactive practice sessions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105"
              >
                Request Demo <ArrowRight size={20} />
              </a>
              <a
                href="#features"
                className="border border-primary/20 hover:border-primary/40 px-8 py-3 rounded-full transition-all"
              >
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 float" />
            <div className="absolute inset-0 grid place-items-center">
              <div className="w-3/4 aspect-[4/3] bg-white rounded-xl shadow-2xl transform -rotate-6 float" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

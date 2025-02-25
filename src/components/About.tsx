
import { motion } from "framer-motion";
import { Users, BarChart2, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-b from-primary/5 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary inline-block mb-4">
              About Us
            </span>
            <h2 className="heading mb-6">Revolutionizing Public Speaking Training</h2>
            <p className="text-muted-foreground mb-8">
              Presently combines cutting-edge AI technology with proven pedagogical methods
              to create a personalized learning experience that adapts to your unique needs
              and goals.
            </p>
            <div className="grid sm:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-xl mb-1">10+</h4>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="text-center">
                <BarChart2 className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-xl mb-1">90%</h4>
                <p className="text-sm text-muted-foreground">Success Rate</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <h4 className="font-semibold text-xl mb-1">1+</h4>
                <p className="text-sm text-muted-foreground">Industry Awards</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person using Presently"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


import { motion } from "framer-motion";
import { Mic, Brain, Activity, Video, UserCheck, BarChart } from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Real-time Voice Analysis",
    description:
      "Get instant feedback on your pace, tone, and vocal clarity while speaking.",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description:
      "Advanced AI algorithms analyze your performance and provide personalized improvement suggestions.",
  },
  {
    icon: Activity,
    title: "Progress Tracking",
    description:
      "Monitor your improvement over time with detailed analytics and performance metrics.",
  },
  {
    icon: Video,
    title: "Video Recording",
    description:
      "Record and review your presentations with AI-enhanced feedback on body language.",
  },
  {
    icon: UserCheck,
    title: "Expert Coaching",
    description:
      "Access virtual coaching sessions tailored to your specific needs and goals.",
  },
  {
    icon: BarChart,
    title: "Performance Analytics",
    description:
      "Comprehensive reports and analytics to track your progress and identify areas for improvement.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-32 bg-gradient-to-b from-white to-primary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary inline-block mb-4">
            Features
          </span>
          <h2 className="heading mb-4">Everything you need to excel</h2>
          <p className="subheading max-w-2xl mx-auto">
            Our comprehensive suite of features is designed to transform you into a
            confident and skilled presenter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 hover:scale-[1.02] transition-transform"
            >
              <div className="flex gap-6 items-start">
                <div className="p-4 rounded-xl bg-primary/10">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

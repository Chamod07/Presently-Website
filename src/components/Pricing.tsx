import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Premium",
    description: "Advanced features for serious presenters",
    price: "$4.99",
    period: "/per month",
    features: [
      "Unlimited sessions",
      "Unlimited recording time per session",
      "Advanced voice & body language analysis",
    ],
    buttonText: "Become an Early Supporter",
    popular: false,
  },
  {
    name: "Free",
    description: "Basic features for individuals getting started",
    price: "$0",
    period: "/forever",
    features: [
      "Includes all the core features",
      "Limited number of sessions",
      "Limited recording time per session",
      "Basic voice and body language analysis",
    ],
    buttonText: "Start For Free",
    popular: true,
  },

  {
    name: "Enterprise",
    description: "Custom solutions for educational institutions",
    price: "Custom Pricing",
    period: "",
    features: [
      "Everything in Premium plan",
      "Includes Administrative dashboards",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-32 bg-gradient-to-b from-primary/5 to-white"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary inline-block mb-4">
            Pricing
          </span>
          <h2 className="heading mb-4">Choose Your Plan</h2>
          <p className="subheading max-w-2xl mx-auto">
            Simple, transparent pricing options designed to support your
            presentation skills journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg relative bg-white"
                  : "border-border bg-white/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full bg-primary text-white text-sm font-medium">
                  Popular Choice
                </div>
              )}
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground mb-1">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="rounded-full p-1 bg-primary/10">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <button
                  className={`w-full py-3 rounded-lg transition-colors ${
                    plan.popular
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

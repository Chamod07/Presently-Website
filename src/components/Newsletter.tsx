
import { motion } from "framer-motion";
import { useState } from "react";
import { Send } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your Mailchimp integration logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1000);
  };

  return (
    <section className="py-20 bg-primary/5">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Stay Updated with Presently
          </h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest updates, tips, and resources
            on public speaking and presentation skills.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;

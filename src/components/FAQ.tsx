
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is Presently?",
    answer: "Presently is an AI-powered speaking and presentation skills development app designed to help students and professionals improve their public speaking abilities through real-time feedback and analysis.",
  },
  {
    question: "Who can use Presently?",
    answer: "Presently is designed for students, professionals, public speakers, and anyone looking to improve their presentation and communication skills.",
  },
  {
    question: "Why is Presently needed in the training sector?",
    answer: "Traditional presentation training methods lack real-time feedback and personalized coaching. Presently uses AI to provide instant analysis and actionable insights, making skill development more efficient and effective.",
  },
  {
    question: "How does Presently help in presentation improvement?",
    answer: "Presently analyzes your voice modulation, pace, body language, and content delivery in real-time, providing instant feedback and personalized suggestions for improvement.",
  },
  {
    question: "Is Presently cloud-based?",
    answer: "Yes, Presently is a cloud-based application that can be accessed from any device. This ensures your practice sessions and progress are always available wherever you are.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="text-primary">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Here are some of the most frequently asked questions about Presently. If you
              have any other queries, feel free to contact us!
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-sm border p-6"
              >
                <button 
                  className="w-full flex items-start justify-between text-left group"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex gap-4 w-full">
                    <HelpCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div className="w-full">
                      <div className="flex justify-between items-center">
                        <h3 className="font-medium text-lg group-hover:text-primary transition-colors">
                          {faq.question}
                        </h3>
                        <ChevronDown 
                          className={`w-5 h-5 text-primary transition-transform ${
                            openIndex === index ? "rotate-180" : ""
                          }`} 
                        />
                      </div>
                      {openIndex === index && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-muted-foreground mt-2"
                        >
                          {faq.answer}
                        </motion.p>
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

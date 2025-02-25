
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Chamod Karunathilake",
    role: "Project Lead",
    image: "",
    linkedin: "https://linkedin.com/in/chamod-karunathilake",
  },
  {
    name: "Akila Pramod",
    role: "Machine Learning Developer",
    image: "",
    linkedin: "https://www.linkedin.com/in/m-d-a-pramod",
  },
  {
    name: "Gajitha Suweeraka",
    role: "Mobile Developer",
    image: "public/team/Gajitha.jpg",
    linkedin: "https://www.linkedin.com/in/gajitha-suweeraka-4b49092a1",
  },
  {
    name: "Odara Gunasekara",
    role: "Backend Developer",
    image: "public/team/Odara.jpg",
    linkedin: "https://www.linkedin.com/in/odara-gunasekara-b5aaa5306",
  },
  {
    name: "Steve Wanigasekara",
    role: "Backend Developer",
    image: "public/team/Steve.jpg",
    linkedin: "https://www.linkedin.com/in/steve-chrishane",
  },
  {
    name: "Dinuka Sithuranga",
    role: "Mobile Developer",
    image: "public/team/Dinuka.jpg",
    linkedin: "https://www.linkedin.com/in/dinuka-sithuranga",
  },
];

const Team = () => {
  return (
    <section id="team" className="py-32">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary inline-block mb-4">
            Our Team
          </span>
          <h2 className="heading mb-4">Meet the Experts</h2>
          <p className="subheading max-w-2xl mx-auto">
            Our diverse team of experts is dedicated to revolutionizing public speaking
            training through innovative AI technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="relative mb-6 aspect-square rounded-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:scale-110 transition-transform"
                    >
                      <Linkedin size={32} />
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

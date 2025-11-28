import { motion } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      year: "2024 - Present",
      role: "Senior Video Editor",
      company: "TechMedia Studio",
      description: "Leading post-production for major gaming channels and tech reviews."
    },
    {
      year: "2022 - 2024",
      role: "Freelance Environment Artist",
      company: "Indie Game Devs",
      description: "Designed 3D assets and levels for upcoming indie titles using Unreal Engine."
    },
    {
      year: "2020 - 2022",
      role: "Content Creator",
      company: "Self-Employed",
      description: "Grew a YouTube channel to 50k+ subscribers focusing on VFX tutorials."
    }
  ];

  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-16 text-center"
        >
          Journey
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="md:flex items-start justify-between group">
                {/* Timeline Line for Mobile */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border md:hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
                </div>

                <div className="md:w-1/3 mb-2 md:mb-0 md:text-right md:pr-12">
                  <span className="text-accent font-mono font-medium">{exp.year}</span>
                </div>
                
                {/* Desktop Dot */}
                <div className="hidden md:block absolute left-1/3 top-2 w-3 h-3 -ml-1.5 rounded-full bg-accent ring-4 ring-background" />
                
                <div className="md:w-2/3 md:pl-12">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h3>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-muted-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

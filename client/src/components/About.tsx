import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import avatar from "@assets/generated_images/minimalist_futuristic_avatar.png";

export default function About() {
  const skills = [
    "Unreal Engine", "Blender", "Adobe Premiere Pro", "After Effects", 
    "AI Tools", "Game Engines", "DaVinci Resolve", "Sound Design", "VFX"
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 md:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-accent/20 rounded-3xl rotate-6 blur-2xl" />
              <img 
                src={avatar} 
                alt="Yaseen Shaikh" 
                className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a creative visionary specializing in high-impact visual storytelling. With a deep understanding of both technical tools and artistic direction, I bridge the gap between raw footage and immersive experiences.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Whether it's editing cinematic game trailers, leveraging AI for next-gen content creation, or designing breathtaking 3D environments, I bring a futuristic and polished edge to every project.
            </p>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground/80">My Arsenal</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-normal bg-background/50 hover:bg-accent/10 hover:text-accent transition-colors cursor-default border-border/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

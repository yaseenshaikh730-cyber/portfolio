import { motion } from "framer-motion";
import { Video, Wand2, Gamepad2, Cuboid as Cube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Video className="w-10 h-10 text-accent" />,
      title: "Video Editing",
      description: "Professional cutting, color grading, and sound design for high-retention content."
    },
    {
      icon: <Wand2 className="w-10 h-10 text-accent" />,
      title: "AI Video Creation",
      description: "Leveraging cutting-edge AI models to generate unique visuals and video assets."
    },
    {
      icon: <Gamepad2 className="w-10 h-10 text-accent" />,
      title: "Game Footage Editing",
      description: "Cinematic montages and trailers that capture the excitement of gameplay."
    },
    {
      icon: <Cube className="w-10 h-10 text-accent" />,
      title: "Environment Design",
      description: "Building immersive 3D worlds and levels using Unreal Engine and Blender."
    }
  ];

  return (
    <section id="services" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">What I Do</h2>
          <p className="text-muted-foreground text-lg">Specialized services for the digital age.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-lg hover:shadow-accent/5 transition-all duration-300">
                <CardContent className="p-8 flex flex-col items-center text-center h-full">
                  <div className="mb-6 p-4 rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

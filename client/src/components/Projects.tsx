import { motion } from "framer-motion";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Projects() {
  const projects = [
    {
      title: "Cyberpunk City Cinematic",
      category: "Environment Design",
      image: "https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=1000&auto=format&fit=crop",
      tools: ["Unreal Engine 5", "Blender"],
      description: "A real-time rendered futuristic cityscape featuring dynamic lighting and volumetric fog."
    },
    {
      title: "Apex Legends Montage",
      category: "Game Video Editing",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
      tools: ["Premiere Pro", "After Effects"],
      description: "High-energy gameplay montage synced to music with custom VFX and transitions."
    },
    {
      title: "AI Generated Commercial",
      category: "AI Video Creation",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
      tools: ["Midjourney", "Runway Gen-2"],
      description: "Conceptual brand film created entirely using generative AI tools and voice synthesis."
    }
  ];

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Featured Works</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my best projects across editing, design, and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="overflow-hidden rounded-2xl bg-secondary/50 border border-border/50 h-full flex flex-col">
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-black/40 backdrop-blur-[2px]">
                    <Button variant="secondary" className="rounded-full gap-2">
                      View Project <ExternalLink size={16} />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="text-xs font-medium text-accent mb-2 block uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i} variant="outline" className="text-[10px] font-normal">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}

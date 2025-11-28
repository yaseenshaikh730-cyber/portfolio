import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroBg from "@assets/generated_images/abstract_digital_waves_background.png";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/30 dark:bg-background/70 z-10" />
        <img
          src={heroBg}
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-20" />
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6 border border-accent/20 backdrop-blur-sm">
            Available for Hire
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tighter mb-6">
            Yaseen Shaikh
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light mb-2">
            Game Video Editor | AI Video Creator | Environment Designer
          </p>
          <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10">
            “Crafting immersive visuals and digital experiences.”
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="rounded-full h-12 px-8 text-base font-medium group">
              View Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-12 px-8 text-base font-medium bg-background/50 backdrop-blur-sm hover:bg-accent/5 hover:text-accent border-input hover:border-accent/50 transition-all">
              Hire Me
            </Button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

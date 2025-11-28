import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">Let's create together.</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Have a project in mind? Looking for a partner to bring your vision to life? Drop me a line.
            </p>

            <div className="space-y-6">
              <a href="mailto:hello@yaseenshaikh.com" className="flex items-center gap-4 text-xl font-medium hover:text-accent transition-colors">
                <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-accent">
                  <Mail size={20} />
                </div>
                hello@yaseenshaikh.com
              </a>
              
              <div className="pt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Connect</h3>
                <div className="flex gap-4">
                  {[Linkedin, Youtube, Github, Instagram].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white hover:border-accent transition-all duration-300">
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card p-8 rounded-3xl border border-border/50 shadow-xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium ml-1">Name</label>
                  <Input id="name" placeholder="John Doe" className="bg-background/50 border-border/50 focus:bg-background" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium ml-1">Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50 border-border/50 focus:bg-background" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium ml-1">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="bg-background/50 border-border/50 focus:bg-background" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium ml-1">Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-border/50 focus:bg-background resize-none" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-xl text-base">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

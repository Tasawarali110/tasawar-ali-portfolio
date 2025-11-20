import { motion } from 'motion/react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block mb-4 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-400 text-sm">Data Science Graduate • Available for Hire</span>
          </motion.div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl text-white mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block"
            >
              Tasawar Ali
            </motion.span>
          </h1>

          <motion.p
            className="text-2xl md:text-3xl text-blue-400 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Data Science Graduate | AI & Machine Learning Specialist
          </motion.p>

          <motion.p
            className="text-lg text-slate-300 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            A highly motivated Data Science graduate with expertise in machine learning, NLP, and reinforcement learning. 
            Building intelligent systems that transform complex data into actionable insights and real-world solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
            >
              View My Projects
              <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg"
              onClick={scrollToContact}
            >
              <Download className="mr-2" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/Tasawarali110"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/tasawar-ali-878497218"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:alitasawar605@gmail.com"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
            <motion.div
              className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

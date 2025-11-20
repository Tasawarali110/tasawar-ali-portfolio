import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(59, 130, 246) 1px, transparent 1px),
                            linear-gradient(to bottom, rgb(59, 130, 246) 1px, transparent 1px)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl blur-2xl" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576936422505-18d321d54d40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjBjb2Rpbmd8ZW58MXx8fHwxNzYzNDA5NDQwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                className="relative rounded-2xl shadow-2xl w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm <span className="text-blue-400">Tasawar Ali</span>, a highly motivated and resilient Data Science graduate 
              with a passion for transforming complex data into actionable insights. I believe data science is more than just 
              models and algorithms—it's about solving real-world problems and creating meaningful impact.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              From developing an <span className="text-blue-400">AI-powered chatbot for seaport container inspection training</span> to 
              building <span className="text-blue-400">Reinforcement Learning models for cryptocurrency market prediction</span>, 
              I thrive on challenges that push the boundaries of what's possible with machine learning and NLP.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I graduated with a <span className="text-blue-400">Bachelor of Computer Science with Honours (Major in Data Science)</span> from 
              <span className="text-blue-400"> Albukhary International University</span>, Malaysia. My thesis focused on creating 
              HarborHelper, an AI chatbot for training seaport operators—demonstrating my ability to lead projects from conception to completion.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              Beyond technical skills, I'm a collaborative problem-solver with proven leadership experience through volunteer work 
              teaching coding to rural communities and serving on the Student Representative Council. I bring a strong, service-oriented 
              mindset and adaptability to every challenge.
            </p>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-blue-400">Available for full-time opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {[
            { label: 'Projects Completed', value: '10+' },
            { label: 'Technologies Mastered', value: '25+' },
            { label: 'Languages Spoken', value: '6' },
            { label: 'Countries Connected', value: '56+' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-blue-400 mb-2">{stat.value}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

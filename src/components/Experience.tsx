import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { experience, certifications } from '../data/portfolio-data';

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 bg-slate-950 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white mb-4">
            Experience & Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Leadership roles, volunteer work, and professional development
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl text-white mb-8">Work Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 md:mb-0">
                    <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-2xl text-white mb-1">{exp.title}</h4>
                      <p className="text-lg text-blue-400 mb-2">{exp.company}</p>
                      <div className="flex flex-wrap gap-4 text-slate-400 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {exp.current && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-green-400 text-sm">Current</span>
                    </div>
                  )}
                </div>
                
                <p className="text-slate-300 mb-4">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-400">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications & Awards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl text-white mb-8">Certifications & Awards</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-white mb-1">{cert.title}</h4>
                    <p className="text-sm text-blue-400 mb-2">{cert.issuer}</p>
                    <p className="text-sm text-slate-400 mb-2">{cert.date}</p>
                    <p className="text-sm text-slate-300">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface SkillCategory {
  [category: string]: Array<{ name: string; level: number }>;
}

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [skills, setSkills] = useState<SkillCategory>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-d2736b77/skills`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error('Error fetching skills:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchSkills();
  }, []);

  // Prepare data for radar chart
  const radarData = Object.entries(skills).map(([category, skillList]) => ({
    category: category.replace(' & ', '\n'),
    value: Math.round(
      skillList.reduce((acc, skill) => acc + skill.level, 0) / skillList.length
    )
  }));

  return (
    <section id="skills" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit honed through academic projects and real-world applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Radar Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8"
          >
            <h3 className="text-2xl text-white mb-6 text-center">Skill Proficiency Overview</h3>
            {!loading && radarData.length > 0 && (
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#334155" />
                  <PolarAngleAxis 
                    dataKey="category" 
                    tick={{ fill: '#94a3b8', fontSize: 12 }}
                  />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#94a3b8' }} />
                  <Radar
                    name="Proficiency"
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#3b82f6"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            )}
          </motion.div>

          {/* Tech Stack Icons/Badges */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-6">Core Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python', 'R', 'SQL', 'Java', 'PyTorch', 'TensorFlow', 'Keras',
                  'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Matplotlib', 
                  'Geoplotlib', 'ggplot2', 'Plotly', 'Power BI', 'Tableau',
                  'HTML', 'Git', 'GPT-3', 'GPT-4'
                ].map((tech, index) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 hover:bg-blue-500/20 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl text-white mb-6">Specializations</h3>
              <div className="space-y-4">
                {[
                  { name: 'Machine Learning & Deep Learning', icon: '🤖' },
                  { name: 'Natural Language Processing', icon: '📝' },
                  { name: 'Reinforcement Learning (PPO)', icon: '🎯' },
                  { name: 'Computer Vision', icon: '👁️' },
                  { name: 'Data Visualization & BI', icon: '📊' },
                  { name: 'Sentiment Analysis & Text Classification', icon: '💬' }
                ].map((spec, index) => (
                  <motion.div
                    key={spec.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors"
                  >
                    <span className="text-2xl">{spec.icon}</span>
                    <span className="text-lg">{spec.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Skills Grid */}
        {!loading && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {Object.entries(skills).map(([category, skillList], categoryIndex) => (
              <div
                key={category}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-8"
              >
                <h3 className="text-xl text-white mb-6">{category}</h3>
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-300">{skill.name}</span>
                        <span className="text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{
                            duration: 1,
                            delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}

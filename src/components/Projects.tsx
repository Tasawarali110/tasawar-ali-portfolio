import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Github, ExternalLink, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ProjectVisualization } from './ProjectVisualization';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  outcome: string;
  visualizationData: any;
  githubUrl: string | null;
  liveUrl: string | null;
  views: number;
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-d2736b77/projects`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  const handleProjectClick = async (project: Project) => {
    // Increment view count
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d2736b77/projects/${project.id}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        }
      );
      const updatedProject = await response.json();
      setSelectedProject(updatedProject);
    } catch (error) {
      console.error('Error fetching project details:', error);
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6" />
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Real-world data science solutions demonstrating end-to-end ML pipelines, 
            interactive visualizations, and production-ready deployments
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-slate-400">Loading projects...</div>
        ) : (
          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="grid lg:grid-cols-2 gap-8 p-8">
                  {/* Project Details */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-3xl text-white group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400">
                          <Eye className="w-4 h-4" />
                          <span className="text-sm">{project.views}</span>
                        </div>
                      </div>
                      <p className="text-lg text-slate-300">{project.description}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-blue-400 mb-2 uppercase tracking-wider">Challenge</h4>
                      <p className="text-slate-300">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-green-400 mb-2 uppercase tracking-wider">Technical Solution</h4>
                      <p className="text-slate-300">{project.solution}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-purple-400 mb-2 uppercase tracking-wider">Outcome</h4>
                      <p className="text-slate-300">{project.outcome}</p>
                    </div>

                    <div>
                      <h4 className="text-sm text-slate-400 mb-3 uppercase tracking-wider">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-blue-500/30 text-blue-400 bg-blue-500/5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4 pt-4">
                      {project.githubUrl && (
                        <Button
                          variant="outline"
                          className="border-slate-700 hover:border-blue-500 hover:bg-blue-500/10"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button
                          className="bg-blue-600 hover:bg-blue-700"
                          asChild
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Visualization */}
                  <div className="flex items-center justify-center">
                    <div className="w-full bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                      <ProjectVisualization data={project.visualizationData} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 mb-6">
            Want to see more? Check out my GitHub for additional projects and contributions.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
            asChild
          >
            <a href="https://github.com/Tasawarali110" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

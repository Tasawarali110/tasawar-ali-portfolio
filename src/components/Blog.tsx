import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Clock, ArrowRight, Eye } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  tags: string[];
  views: number;
}

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-d2736b77/blog`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // Get all unique tags
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section id="blog" className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white mb-4">
            Technical Blog & Notes
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Deep dives into data science concepts, project learnings, and technical explorations
          </p>
        </motion.div>

        {/* Tag Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
            className={selectedTag === null ? "bg-blue-600" : "border-slate-700"}
          >
            All Posts
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className={selectedTag === tag ? "bg-blue-600" : "border-slate-700"}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        {loading ? (
          <div className="text-center text-slate-400">Loading blog posts...</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-slate-900/50 backdrop-blur border-slate-800 hover:border-blue-500/50 transition-all duration-300 h-full flex flex-col group">
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {post.views} views
                      </div>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-blue-400 transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 text-base leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-purple-500/30 text-purple-400 bg-purple-500/5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full justify-between text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {filteredPosts.length === 0 && !loading && (
          <div className="text-center text-slate-400 py-12">
            No posts found for the selected tag.
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8"
        >
          <h3 className="text-2xl text-white mb-4">
            Want to stay updated?
          </h3>
          <p className="text-slate-400 mb-6">
            I regularly write about data science, machine learning, and software development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Subscribe to Newsletter
            </Button>
            <Button size="lg" variant="outline" className="border-slate-700">
              View All Articles
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-d2736b77/contact`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        }
      );

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl opacity-10" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-white mb-4">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6" />
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just chatting about data science and technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl text-white mb-6">Get in Touch</h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Whether you have a question about my projects, want to discuss a potential 
                opportunity, or just want to connect—I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:alitasawar605@gmail.com"
                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-lg">alitasawar605@gmail.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/tasawar-ali-878497218"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-300 hover:text-blue-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">LinkedIn</div>
                  <div className="text-lg">tasawar-ali-878497218</div>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 text-slate-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Phone</div>
                  <div className="text-lg">+60 112 145 0810</div>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-4 text-slate-300"
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Location</div>
                  <div className="text-lg">Alor Setar, Kedah, Malaysia</div>
                </div>
              </motion.div>
            </div>

            <div className="pt-8">
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 className="text-white text-lg mb-2">Currently Available</h4>
                <p className="text-slate-400">
                  I'm actively seeking full-time opportunities in Data Science, Machine Learning, 
                  or Full-Stack Development roles. Open to remote and hybrid positions.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="bg-slate-950/50 backdrop-blur border border-slate-800 rounded-2xl p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-slate-300 mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-slate-300 mb-2">
                  Your Email *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-slate-300 mb-2">
                  Your Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>

              <p className="text-sm text-slate-400 text-center">
                I'll get back to you within 24-48 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                Tasawar Ali
              </span>
            </h3>
            <p className="text-slate-400">
              Data Science Graduate specializing in AI, Machine Learning, and NLP. Building intelligent systems that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-slate-400 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/Tasawarali110"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tasawar-ali-878497218"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:alitasawar605@gmail.com"
                className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Tasawar Ali. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

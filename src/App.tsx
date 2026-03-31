import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Home, User, FolderOpen, Mail, Github, Linkedin, 
  Send, ExternalLink, Code, Calendar, MapPin,
  ChevronDown, Menu, X, Download
} from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  demoLink?: string;
  codeLink?: string;
  image?: string;
}

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'Python', level: 80 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Docker', level: 70 },
];

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 2,
    title: 'AI Content Generator',
    description: 'Web application powered by GPT models for generating marketing content, blog posts, and social media captions.',
    technologies: ['React', 'Python', 'FastAPI', 'OpenAI'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, Kanban boards, and team messaging.',
    technologies: ['Next.js', 'Socket.io', 'MongoDB', 'Tailwind'],
    demoLink: '#',
    codeLink: '#',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Interactive data visualization platform with customizable charts, export capabilities, and multi-user support.',
    technologies: ['React', 'D3.js', 'Node.js', 'Redis'],
    demoLink: '#',
    codeLink: '#',
  },
];

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Send, href: '#', label: 'Telegram' },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const sections = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 overflow-x-hidden">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="animated-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 p-2 bg-cyan-500/20 rounded-lg lg:hidden backdrop-blur-md border border-cyan-500/30"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
      </motion.button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg lg:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`text-2xl font-semibold transition-colors ${
                  activeSection === section.id 
                    ? 'text-cyan-400 neon-text' 
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.label}
              </motion.button>
            ))}
          </nav>
        </motion.div>
      )}

      {/* Desktop Layout */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - Avatar & Name */}
        <motion.aside
          className="lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-80 flex flex-col items-center justify-center p-6 lg:p-8"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          >
            {/* Neon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-500 blur-2xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            {/* Avatar container */}
            <motion.div
              className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-cyan-500/50 neon-border"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 flex items-center justify-center">
                <span className="text-5xl lg:text-6xl font-bold text-white">A</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-2xl lg:text-3xl font-bold text-white mb-2 neon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Alex Developer
          </motion.h1>

          {/* Title */}
          <motion.p
            className="text-cyan-400 text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Full Stack Developer
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full bg-slate-800/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-col gap-2 w-full max-w-xs">
            {sections.map((section, idx) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeSection === section.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 neon-border'
                    : 'text-slate-400 hover:text-cyan-300 hover:bg-slate-800/50'
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + idx * 0.1 }}
              >
                <section.icon className="w-5 h-5" />
                <span className="font-medium">{section.label}</span>
              </motion.button>
            ))}
          </nav>
        </motion.aside>

        {/* Main Content */}
        <main className="lg:ml-80 flex flex-col">
          {/* Home Section */}
          <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center px-6 py-20 lg:py-0"
          >
            <motion.div
              className="text-center max-w-3xl"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
            >
              <motion.p
                className="text-cyan-400 text-lg mb-4 tracking-wider uppercase"
                variants={itemVariants}
              >
                Welcome to my portfolio
              </motion.p>
              <motion.h2
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
                variants={itemVariants}
              >
                Building Digital
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 neon-text">
                  Experiences
                </span>
              </motion.h2>
              <motion.p
                className="text-slate-400 text-lg lg:text-xl mb-8 max-w-2xl mx-auto"
                variants={itemVariants}
              >
                I'm a passionate full-stack developer creating modern web applications 
                with cutting-edge technologies. Let's build something amazing together.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Projects
                </motion.button>
                <motion.button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-slate-800/50 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all neon-border"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get In Touch
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="absolute bottom-10"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-cyan-400/50" />
            </motion.div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="min-h-screen px-6 py-20 lg:py-0"
          >
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <User className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white">About Me</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Bio Card */}
                <motion.div
                  className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20 backdrop-blur-sm"
                  whileHover={{ borderColor: 'rgba(34, 211, 238, 0.4)' }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Who I Am</h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    I'm a full-stack developer with over 5 years of experience building 
                    web applications. I specialize in creating performant, user-friendly 
                    solutions using modern technologies.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    When I'm not coding, you can find me exploring new technologies, 
                    contributing to open-source projects, or sharing knowledge with 
                    the developer community.
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-2 text-slate-400 mb-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>Available for freelance</span>
                    </div>
                  </div>
                </motion.div>

                {/* Skills Card */}
                <motion.div
                  className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20 backdrop-blur-sm"
                  whileHover={{ borderColor: 'rgba(34, 211, 238, 0.4)' }}
                >
                  <h3 className="text-xl font-semibold text-white mb-4">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill, idx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-300">{skill.name}</span>
                          <span className="text-cyan-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Resume Download */}
              <motion.div
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20"
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Download Resume</h3>
                    <p className="text-slate-400">Get a detailed overview of my experience and skills</p>
                  </div>
                  <motion.button
                    className="flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="min-h-screen px-6 py-20 lg:py-0"
          >
            <motion.div
              className="max-w-6xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <FolderOpen className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Projects</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    className="group p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20 backdrop-blur-sm overflow-hidden"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
                  >
                    {/* Project Image Placeholder */}
                    <motion.div
                      className="h-40 mb-4 rounded-lg bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 flex items-center justify-center overflow-hidden"
                      whileHover={{ scale: 1.02 }}
                    >
                      <Code className="w-16 h-16 text-cyan-400/30" />
                    </motion.div>

                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                      {project.demoLink && (
                        <motion.a
                          href={project.demoLink}
                          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </motion.a>
                      )}
                      {project.codeLink && (
                        <motion.a
                          href={project.codeLink}
                          className="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors"
                          whileHover={{ x: 3 }}
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm font-medium">View Code</span>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="min-h-screen px-6 py-20 lg:py-0"
          >
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Mail className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl lg:text-4xl font-bold text-white">Get In Touch</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Contact Form */}
                <motion.div
                  className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20 backdrop-blur-sm"
                  whileHover={{ borderColor: 'rgba(34, 211, 238, 0.4)' }}
                >
                  <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Name</label>
                      <motion.input
                        type="text"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                        whileFocus={{ borderColor: 'rgb(34, 211, 238)' }}
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Email</label>
                      <motion.input
                        type="email"
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                        whileFocus={{ borderColor: 'rgb(34, 211, 238)' }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-sm mb-2">Message</label>
                      <motion.textarea
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors h-32 resize-none"
                        whileFocus={{ borderColor: 'rgb(34, 211, 238)' }}
                        placeholder="Your message..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </motion.button>
                  </form>
                </motion.div>

                {/* Contact Info */}
                <div className="space-y-6">
                  <motion.div
                    className="p-6 rounded-2xl bg-slate-800/30 border border-cyan-500/20 backdrop-blur-sm"
                    whileHover={{ borderColor: 'rgba(34, 211, 238, 0.4)' }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                    <div className="space-y-4">
                      <motion.a
                        href="mailto:hello@example.com"
                        className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <div className="p-3 rounded-lg bg-cyan-500/10">
                          <Mail className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Email</p>
                          <p className="font-medium">hello@example.com</p>
                        </div>
                      </motion.a>
                      <motion.a
                        href="#"
                        className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <div className="p-3 rounded-lg bg-cyan-500/10">
                          <Send className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Telegram</p>
                          <p className="font-medium">@alexdev</p>
                        </div>
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-4">Let's Connect</h3>
                    <p className="text-slate-400 mb-6">
                      I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>
                    <div className="flex gap-3">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          className="p-3 rounded-lg bg-slate-800/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="py-8 px-6 border-t border-slate-800/50">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                © 2024 Alex Developer. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                Built with React & Next.js
              </p>
            </div>
          </footer>
        </main>
      </div>

      <style>{`
        .animated-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            -45deg,
            #0f172a,
            #1e3a5f,
            #164e63,
            #1e3a8a,
            #3b0764,
            #1e1b4b
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .neon-text {
          text-shadow: 
            0 0 10px rgba(34, 211, 238, 0.5),
            0 0 20px rgba(34, 211, 238, 0.3),
            0 0 30px rgba(34, 211, 238, 0.2);
        }

        .neon-border {
          box-shadow: 
            0 0 10px rgba(34, 211, 238, 0.3),
            inset 0 0 10px rgba(34, 211, 238, 0.1);
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #0f172a;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #3b82f6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #22d3ee, #60a5fa);
        }
      `}</style>
    </div>
  );
}

export default App;

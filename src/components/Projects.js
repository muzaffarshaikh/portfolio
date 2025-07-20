import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Star, TrendingUp, Zap, Shield } from 'lucide-react';
import { projects } from '../mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    'all',
    'Backend Architecture',
    'Real-time Systems', 
    'API Design',
    'Microservices',
    'Serverless',
    'Machine Learning',
    'SaaS Architecture'
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => 
        project.category.some(cat => cat === selectedCategory)
      );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const getMetricIcon = (key) => {
    const iconMap = {
      performance: TrendingUp,
      scale: Zap,
      uptime: Shield,
      latency: TrendingUp,
      throughput: Zap,
      reliability: Shield
    };
    return iconMap[key] || Star;
  };

  const getCardBgClass = (bgColor) => {
    const colorMap = {
      'mid-blue': 'from-blue-500/20 to-blue-600/10 border-blue-500/20',
      'mid-purple': 'from-purple-500/20 to-purple-600/10 border-purple-500/20',
      'light-yellow': 'from-yellow-400/20 to-yellow-500/10 border-yellow-400/20',
      'mid-green': 'from-green-500/20 to-green-600/10 border-green-500/20',
      'mid-orange': 'from-orange-500/20 to-orange-600/10 border-orange-500/20',
      'light-pink': 'from-pink-400/20 to-pink-500/10 border-pink-400/20'
    };
    return colorMap[bgColor] || 'from-primary/10 to-primary/5 border-primary/20';
  };

  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/5">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <span className="service-button bg-primary/10 text-primary border-primary/20">
              Portfolio
            </span>
            <h2 className="section-heading">
              Featured Projects
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              A collection of backend systems, APIs, and infrastructure projects that showcase 
              my expertise in building scalable, high-performance applications.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`service-button transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-secondary/20 text-foreground border-border hover:border-primary/20 hover:bg-primary/10'
                }`}
              >
                {category === 'all' ? 'All Projects' : category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className={`relative bg-gradient-to-br ${getCardBgClass(project.bgColor)} border rounded-xl p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden`}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="bg-primary/10 border border-primary/20 rounded-full p-2">
                        <Star className="w-4 h-4 text-primary" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="body-medium text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2">
                      {project.category.map((cat, catIndex) => (
                        <span
                          key={catIndex}
                          className="service-button bg-background/50 text-foreground border-border text-xs"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-foreground flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-primary" />
                          Performance Metrics
                        </h4>
                        <div className="space-y-2">
                          {Object.entries(project.metrics).map(([key, value]) => {
                            const IconComponent = getMetricIcon(key);
                            return (
                              <div key={key} className="flex items-center justify-between text-sm">
                                <span className="flex items-center gap-2 text-muted-foreground">
                                  <IconComponent className="w-3 h-3" />
                                  {key.charAt(0).toUpperCase() + key.slice(1)}
                                </span>
                                <span className="font-mono text-primary">{value}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-xs px-2 py-1 bg-background/30 text-muted-foreground rounded border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-background/30 text-muted-foreground rounded border border-border/50">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={false}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">
              Interested in seeing more of my work?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/alexmorgan"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button group"
              >
                <Github className="w-4 h-4 mr-2" />
                <span>View GitHub Profile</span>
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="cta-button cta-button-outline"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Request Case Studies
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
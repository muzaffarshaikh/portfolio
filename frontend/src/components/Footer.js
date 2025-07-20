import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo, socialLinks } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const getSocialIcon = (iconName) => {
    const icons = {
      github: Github,
      linkedin: Linkedin,
      twitter: Mail,
      mail: Mail
    };
    return icons[iconName] || Mail;
  };

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

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="py-16"
        >
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-display font-bold text-foreground">
                  {personalInfo.name}
                </h3>
                <p className="text-primary font-medium">
                  {personalInfo.title}
                </p>
                <p className="body-medium text-muted-foreground max-w-md">
                  {personalInfo.tagline}
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="w-4 h-4" />
                  <a href={`mailto:${personalInfo.email}`} className="text-sm">
                    {personalInfo.email}
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="w-4 h-4" />
                  <a href={`tel:${personalInfo.phone}`} className="text-sm">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = getSocialIcon(social.icon);
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="social-icon-link bg-secondary/10 hover:bg-primary/10 hover:border-primary/20"
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="sr-only">{social.platform}</span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-foreground">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="font-semibold text-foreground">Services</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>Backend Development</li>
                <li>API Design & Development</li>
                <li>Cloud Architecture</li>
                <li>Database Optimization</li>
                <li>System Integration</li>
                <li>Performance Tuning</li>
                <li>Technical Consultation</li>
                <li>Code Review</li>
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-border my-12"
          />

          {/* Bottom Footer */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-sm text-muted-foreground">
                Available for new opportunities
              </div>
              
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary/10 hover:bg-primary/20 p-2 rounded-full border border-primary/20 hover:border-primary/40 transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 text-primary" />
              </motion.button>
            </div>
          </motion.div>

          {/* Status Indicator */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-700 dark:text-green-400">
                Currently accepting new projects
              </span>
            </div>
          </motion.div>

          {/* Technical Stack Badge */}
          <motion.div 
            variants={itemVariants}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-4 text-xs text-muted-foreground">
              <span>Built with:</span>
              <div className="flex items-center gap-3">
                <span className="service-button bg-background text-foreground border-border">
                  React
                </span>
                <span className="service-button bg-background text-foreground border-border">
                  Tailwind CSS
                </span>
                <span className="service-button bg-background text-foreground border-border">
                  Framer Motion
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
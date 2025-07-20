import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo, socialLinks } from '../mock';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Backend Engineer",
    "Cloud Architect", 
    "System Designer",
    "API Developer",
    "DevOps Engineer"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole(prev => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
        damping: 12,
      },
    },
  };

  const roleVariants = {
    enter: {
      y: 30,
      opacity: 0,
    },
    center: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -30,
      opacity: 0,
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div 
            className="order-2 lg:order-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-mono tracking-wide">{personalInfo.location}</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight">
                <span className="block text-foreground">
                  {personalInfo.name.split(' ')[0]}
                </span>
                <span className="block bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {personalInfo.name.split(' ')[1]}
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl text-muted-foreground">Senior</p>
                <div className="relative h-12 overflow-hidden">
                  <motion.div
                    key={currentRole}
                    variants={roleVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center"
                  >
                    <h2 className="text-3xl lg:text-4xl font-display font-semibold text-primary">
                      {roles[currentRole]}
                    </h2>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.p 
              variants={itemVariants}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="cta-button cta-button-large group"
                onClick={() => {
                  const element = document.querySelector('#projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a
                href="/resume.pdf"
                download
                className="cta-button cta-button-outline group"
              >
                <Download className="w-4 h-4 mr-2" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-6"
            >
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon === 'github' ? Github : 
                                   link.icon === 'linkedin' ? Linkedin : 
                                   link.icon === 'mail' ? Mail : Github;
                
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-link group"
                  >
                    <IconComponent className="w-6 h-6 transition-transform group-hover:scale-110" />
                    <span className="sr-only">{link.platform}</span>
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Avatar/Image */}
          <motion.div 
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="relative mt-8 lg:mt-0">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-4">
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="w-full h-full rounded-full object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <span className="text-xs font-mono tracking-wide">SCROLL DOWN</span>
          <div className="w-px h-12 bg-border"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
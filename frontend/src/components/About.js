import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Cloud, Database, Award, Users } from 'lucide-react';
import { personalInfo, certifications } from '../mock';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "8+ Years Experience",
      description: "Building scalable backend systems and APIs"
    },
    {
      icon: Server,
      title: "Microservices Expert",
      description: "Architecting distributed systems at scale"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "AWS & Cloudflare infrastructure specialist"
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Optimizing databases for performance"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Mentoring developers and leading projects"
    },
    {
      icon: Award,
      title: "Industry Certified",
      description: "AWS, Kubernetes, and Google Cloud certified"
    }
  ];

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
        damping: 12,
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
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/10">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <span className="service-button bg-primary/10 text-primary border-primary/20">
              About Me
            </span>
            <h2 className="section-heading">
              Crafting Robust Backend Solutions
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              {personalInfo.bio}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="card-heading text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="body-small text-muted-foreground">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Professional Certifications
              </h3>
              <p className="body-medium text-muted-foreground">
                Continuously learning and staying current with industry standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-lg p-6 text-center space-y-3 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">
                    {cert.name}
                  </h4>
                  <p className="body-small text-muted-foreground">
                    {cert.issuer}
                  </p>
                  <p className="text-xs font-mono text-primary">
                    Earned {cert.date}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6 bg-card border border-border rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Ready to Build Something Amazing?
            </h3>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how I can help architect and build your next backend system.
              From MVP to enterprise scale, I've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-button">
                Start a Conversation
              </button>
              <button className="cta-button cta-button-outline">
                View My Projects
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
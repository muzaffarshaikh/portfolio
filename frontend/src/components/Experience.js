import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink, ChevronRight } from 'lucide-react';
import { experience } from '../mock';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  };

  return (
    <section id="experience" className="py-20 lg:py-32 bg-background">
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
              Experience
            </span>
            <h2 className="section-heading">
              Professional Journey
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              Building scalable backend systems and leading engineering teams across multiple industries.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="timeline-line hidden lg:block"></div>
            
            {/* Experience Cards */}
            <motion.div variants={containerVariants} className="space-y-12 lg:space-y-16">
              {experience.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                  className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden lg:flex flex-col items-center">
                    <div className="timeline-dot"></div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-card border border-border rounded-xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300">
                    <div className="space-y-6">
                      {/* Header */}
                      <div className="space-y-3">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                          <div className="space-y-1">
                            <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                              {job.position}
                            </h3>
                            <h4 className="text-lg font-medium text-primary">
                              {job.company}
                            </h4>
                          </div>
                          
                          <div className="flex flex-col sm:items-end gap-2">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm font-mono">{job.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="w-4 h-4" />
                              <span className="text-sm">{job.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <p className="body-medium text-muted-foreground">
                          {job.description}
                        </p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-4">
                        <h5 className="font-semibold text-foreground flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 text-primary" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-3">
                          {job.achievements.map((achievement, achIndex) => (
                            <motion.li
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: achIndex * 0.1 }}
                              className="flex items-start gap-3 text-muted-foreground"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Technologies Used</h5>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={techIndex}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="service-button bg-secondary/20 text-foreground border-border hover:border-primary/20 hover:bg-primary/10"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 lg:p-12 border border-border"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Want to Know More About My Experience?
            </h3>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              I'd love to discuss how my background in building scalable systems 
              can contribute to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-button group">
                <span>Download Full Resume</span>
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="cta-button cta-button-outline">
                Schedule a Call
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
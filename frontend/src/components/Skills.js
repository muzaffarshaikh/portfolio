import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Wrench, Star, TrendingUp, Clock } from 'lucide-react';
import { skills } from '../mock';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');
  
  const skillCategories = [
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'frameworks', name: 'Frameworks', icon: Wrench },
    { id: 'databases', name: 'Databases', icon: Database },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud }
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
        damping: 15,
      },
    },
  };

  const skillBarVariants = {
    hidden: { scaleX: 0 },
    visible: (level) => ({
      scaleX: level / 100,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: 0.2,
      },
    }),
  };

  const getSkillIcon = (level) => {
    if (level >= 90) return <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />;
    if (level >= 80) return <TrendingUp className="w-4 h-4 text-green-500" />;
    return <Clock className="w-4 h-4 text-blue-500" />;
  };

  const getSkillLevel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Proficient';
    return 'Intermediate';
  };

  const getSkillColor = (level) => {
    if (level >= 90) return 'from-yellow-500 to-yellow-600';
    if (level >= 80) return 'from-green-500 to-green-600';
    if (level >= 70) return 'from-blue-500 to-blue-600';
    return 'from-gray-400 to-gray-500';
  };

  return (
    <section id="skills" className="py-20 lg:py-32 bg-background">
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
              Technical Skills
            </span>
            <h2 className="section-heading">
              Technologies & Expertise
            </h2>
            <p className="body-large text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, from programming languages 
              to cloud platforms, with years of hands-on experience in each.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                      : 'bg-card text-foreground border-border hover:border-primary/20 hover:bg-primary/5'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {skills[activeCategory]?.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getSkillIcon(skill.level)}
                      <h3 className="text-lg font-semibold text-foreground">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">
                        {getSkillLevel(skill.level)}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {skill.years}+ years
                      </div>
                    </div>
                  </div>

                  {/* Skill Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Proficiency</span>
                      <span className="text-sm font-mono text-foreground">{skill.level}%</span>
                    </div>
                    <div className="skill-bar bg-secondary/30 rounded-full overflow-hidden">
                      <motion.div
                        className={`skill-progress bg-gradient-to-r ${getSkillColor(skill.level)} h-full rounded-full`}
                        variants={skillBarVariants}
                        initial="hidden"
                        animate="visible"
                        custom={skill.level}
                        style={{ transformOrigin: 'left' }}
                      />
                    </div>
                  </div>

                  {/* Experience Badge */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-xs text-muted-foreground">
                      {skill.years === 1 ? '1 year' : `${skill.years} years`} of experience
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            <div className="text-center space-y-3 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-primary/20">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
            <div className="text-center space-y-3 p-6 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-600">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-3 p-6 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-xl border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            variants={itemVariants}
            className="text-center space-y-6 bg-card border border-border rounded-2xl p-8 lg:p-12"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
              Always Learning, Always Growing
            </h3>
            <p className="body-large text-muted-foreground max-w-2xl mx-auto">
              The tech landscape evolves rapidly, and I'm committed to staying at the forefront. 
              Currently exploring Rust, WebAssembly, and advanced Kubernetes patterns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="cta-button"
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Let's Build Something Together
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
import React from 'react';
import { useInView } from 'react-intersection-observer';
import SkillBar from './SkillBar';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    { name: ' C++', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Jupyter Notebook', level: 75 },
    { name: 'Machine Learning', level: 80 },
    { name: 'NumPy, Pandas', level: 85 },
    { name: 'Matplotlib, Seaborn', level: 79 },
    { name: 'Kaggle', level: 99 },
    { name: 'Version Control', level: 89 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {skills.map((skill, index) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              delay={index * 200}
              animate={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
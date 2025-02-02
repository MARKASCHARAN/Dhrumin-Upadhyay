import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'ML Image Classifier',
      description: 'A deep learning model for image classification using TensorFlow',
      technologies: ['Python', 'TensorFlow', 'OpenCV'],
      github: 'https://github.com/username/project1',
      demo: 'https://demo.project1.com',
      image: 'public/assets/hq720.jpg',
    },
    {
      title: 'Data Analysis Dashboard',
      description: 'Interactive dashboard for visualizing complex datasets',
      technologies: ['Python', 'Pandas', 'Plotly'],
      github: 'https://github.com/username/project3',
      demo: 'https://demo.project3.com',
      image: 'public/assets/images.jpeg',
    },
    {
      title: 'Supervised Learning',
      description: 'Interactive dashboard for visualizing complex datasets',
      technologies: ['Python', 'Pandas', 'Plotly'],
      github: 'https://github.com/username/project3',
      demo: 'https://demo.project3.com',
      image: 'public/assets/images (1).jpeg',
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
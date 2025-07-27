import {useState} from 'react';
import Project from '../data/projects.json';
import ProjectDetails from './projectDetails';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Experience() { 
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [project, setProject] = useState<{
    id: number;
    title: string;
    image: string;
    purpose: string;
    features: string;
    results: string;
    links?: { name: string; url: string }[] | undefined;
    technologies: string[];
  } | null>(null);

  const getProjectDetails = (projectId: Number) => {
    const selectedProject = Project.find((p: { id: Number; }) => p.id === projectId);
    if (selectedProject) {
      setProject(selectedProject);
  
    } else {
      console.error('Project not found');
  }}

  if (project) {
    return (
      <ProjectDetails
        {...project}
        links={project.links || []}
        onClose={() => setProject(null)}
        onNext={() => getProjectDetails(project.id + 1)}
        onPrevious={() => getProjectDetails(project.id - 1)}
      />
    );
  }

  return (
    <div className="experience" id="experience">
      <hr />
        <motion.h2
            initial={{ x: "-500px" }}
            animate={isInView ? { x: "0px" } : {}}
            transition={{ duration: 0.8 }}
        >Projects</motion.h2>
      <section className="expGrid"  ref={ref}>
        <motion.div className="item1"
          initial= {{scale: 0.8}}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.75, delay: 1.75, ease: "easeInOut" }}
        >
          <h3>Dreamers' Mothers in Action</h3>
          <button onClick={() => getProjectDetails(1)}>Learn More</button>
        </motion.div>
        <motion.div className="item2"
          initial= {{scale: 0.8}}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.75, delay: 2.25, ease: "easeInOut" }}
        >
          <h3>Lunita Hermosa</h3>
          
          <button onClick={() => getProjectDetails(2)}>Learn More</button>
        </motion.div>
        <motion.div className="item3"
          initial= {{scale: 0.8}}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.75, delay: 2.75, ease: "easeInOut" }}
        >
          <h3>CSS Art</h3>
          
          <button onClick={() => getProjectDetails(3)}>Learn More</button>
        </motion.div>
        <motion.div className="item4"
          initial= {{scale: 0.8}}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.75, delay: 3.25, ease: "easeInOut" }}
        >
          <h3>Logo Generator</h3>
          
          <button onClick={() => getProjectDetails(4)}>Learn More</button>
        </motion.div>
        <motion.div className="item5"
          initial= {{scale: 0.8}}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.75, delay: 3.75, ease: "easeInOut"}}
        >
          <h3>Expense Tracking Application</h3>
          <button onClick={() => getProjectDetails(5)}>Learn More</button>
        </motion.div>
      </section>
    </div>
  )
}
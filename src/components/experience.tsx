import ProjectDetails from './projectDetails';
import { motion } from 'framer-motion';
import { useGalleryStore } from '../store';

export default function Experience() { 
  	const {projects, project, setProject, onClose, onNext, onPrevious} = useGalleryStore()

	if (project) {    
		return (
			<ProjectDetails
			{...project}
			links={project.links || []}
			onClose={onClose}
			onNext={onNext}
			onPrevious={onPrevious}
			/>
		);
	}

	const listVariant = {
		hidden: {opacity: 0},
		visible: {opacity: 1}
	}

  return (
		<div className="experience" id="experience">
		<hr />
		<motion.h2 initial={{ x: "-500px" }} whileInView={{ x: "0px" }} transition={{ duration: 0.8 }} viewport={{ once: true, amount: 0.5 }}>My Projects</motion.h2>

		<motion.section className="expGrid" initial="hidden" whileInView="visible" transition={{staggerChildren: 0.3}}>
		{
			projects.map(( projectItem ) => (
				<motion.div key={projectItem.id} className={`expItem ${projectItem.id % 5 === 0 ? "expandGrid" : ""}`} variants={listVariant}>
					<img src={projectItem.image} alt={projectItem.title} />
					<h3>{projectItem.title}</h3>
					<button onClick={() => setProject(projectItem.id)}>Learn More</button>
				</motion.div>
			))
		}
		</motion.section>
		</div>
	)
}
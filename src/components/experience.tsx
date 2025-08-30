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
		<h2>My Projects</h2>

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
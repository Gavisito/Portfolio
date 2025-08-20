import { FaArrowLeft, FaArrowRight, FaRegWindowClose } from "react-icons/fa";

interface Project {
	id: number;
	title: string;
	purpose: string;
	features: string;
	results: string
	image: string;
	links: { name: string; url: string }[] | undefined;
	technologies: string[];
}

interface ProjectDetailsProps extends Project {
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
}

export default function ProjectDetails(project: ProjectDetailsProps) {
	return (
		<article className="projectDetails" id='projectDetails'>
			<hr />
			<nav className="navigationButtons">
				<button className="closeButton" onClick={project.onClose}> <FaRegWindowClose className="icon"/> <span>Close</span> </button>
				<button className="prevButton" onClick={project.onPrevious}> <FaArrowLeft className="icon"/> </button>
				<button className="nextButton" onClick={project.onNext}> <FaArrowRight className="icon"/> </button>
			</nav>

			<h2>{project.title}</h2>
			<section className="projectContent">
				<div className="projectImage">
					<img src={project.image} alt={project.title} loading="lazy" decoding="async" />
					<div className="links" style={{marginBottom: '2rem'}}>
						{
							project.links && project.links.map((link, index) => (
								<a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
									{link.name}
								</a>
							))
						}
					</div>
				</div>
				<div className="details">
					<section>
						<h3>Purpose</h3>
						<p>{project.purpose}</p>
					</section>
					<section>
						<h3>Features</h3>
						<p>{project.features}</p>
					</section>
					<section>
					<h3>Results</h3>
						<p>{project.results}</p>
					</section>
					<section>
						<h3>Technologies Used:</h3>
						<ul className="technologies">
							{project.technologies.map((tech, index) => (
							<li key={index}>{tech}</li>
							))}
						</ul>
					</section>
				</div>
			</section>
			<hr />
		</article>
	)
}
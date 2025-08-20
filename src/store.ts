import {create} from "zustand"
import Project from "./data/projects.json";

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

interface GalleryState {
	projects: typeof Project
	project: (typeof Project)[number] | null;
	currentIndex: number | null;
	numProjects: number;
	setProject: (projectId: number) => void;
	onClose: () => void;
	onNext: () => void;
	onPrevious: () => void;
}


export const useGalleryStore = create<GalleryState>((set, get) => ({
	projects: Project,
	project: null,
	currentIndex: null,
	numProjects: Project.length,

	setProject: (projectId: number) => {
		const {projects} = get()
		const selectedProjectIndex = projects.findIndex((p: { id: Number; }) => p.id === projectId);
		if (selectedProjectIndex !== null) {
			set({
				currentIndex: selectedProjectIndex, 
				project: projects[selectedProjectIndex]
			})
		} else {
			console.log("Project not found!")
		}
	},

	onClose: () => {
		set({
			currentIndex: null, 
			project: null
		})
	},

	onNext: () => {
		const {projects, project, currentIndex, numProjects} = get()
		if (project && currentIndex !== null) {
			// Project[((currentIndex + 1) % numProjects)].id)
			const nextProject =  ((currentIndex + 1) % numProjects)
			set({
				currentIndex: nextProject,
				project: projects[nextProject]
			})
		} else {
			console.log("Error: No Project found or selected")
		}
	},

	onPrevious: () => {
		const {projects, project, currentIndex, numProjects} = get()
		if (project && currentIndex !== null) {
			//Project[((currentIndex - 1 + numProjects ) % numProjects)].id)
			const previousProject = ((currentIndex - 1 + numProjects ) % numProjects)
			set({
				currentIndex: previousProject,
				project: projects[previousProject]
			})

		} else {
			console.log("Error: No Project found or selected")
		}
	}

}))
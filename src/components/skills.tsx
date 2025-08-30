import type { IconType } from "react-icons";
import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaNodeJs, FaSass, FaPython, FaWix, FaGit, FaGithub, FaNpm} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss, SiChartdotjs, SiExpress, SiMysql, SiPostman, SiContentful, SiVercel, SiVite, SiAdobelightroom} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { motion } from 'framer-motion'

//import Spline from '@splinetool/react-spline';
const icons: Record<string, IconType> = {
    HTML: FaHtml5,
    CSS: FaCss3,
    Sass: FaSass,
    Tailwind: SiTailwindcss,
    FramerMotion: TbBrandFramerMotion,
    JavaScript: FaJsSquare,
    TypeScript: SiTypescript,
    React: FaReact,
    NextJS: SiNextdotjs,
    Node: FaNodeJs,
    Express: SiExpress,
    ChartJs: SiChartdotjs,
    Python: FaPython,
    MySQL: SiMysql,
    MongoDB: SiMongodb,
    Git: FaGit,
    Github: FaGithub,
    Vercel: SiVercel,
    NPM: FaNpm,
    Vite: SiVite,
    Wix: FaWix,
    Postman: SiPostman,
    Contentful: SiContentful,
    Lightroom: SiAdobelightroom,
}

export default function Skills() {

    const itemVariants = {
        hidden: {opacity: 0, scale: 0.5, rotate: "-40deg"},
        visible: {opacity: 1, scale: 1, rotate: "0deg"},
    }

    return (
        <section className="skills" id='skills'>
        
            <div className="topBar"></div>

            <h2>My Skills</h2>

            <motion.p initial={{ x: "-800px" }} animate={{ x: "0px" }} transition={{ duration: 1.1 }}>
                Here is a brief overview of my skills
            </motion.p>
            <motion.ul initial="hidden" whileInView="visible" transition={{staggerChildren: 0.2, type: "spring"}}>
                {
                    Object.entries(icons).map(([name, Icon], index) => (
                        <motion.li key={index} variants={itemVariants}>
                            <Icon className="logo"/> <span>{name}</span>
                        </motion.li>
                    ))
                }
            </motion.ul>
        </section>
    );
}
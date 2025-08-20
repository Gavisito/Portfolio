import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaNodeJs, FaSass, FaPython, FaWix, FaGit, FaGithub, FaNpm} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss, SiChartdotjs, SiExpress, SiMysql, SiPostman, SiContentful, SiVercel, SiVite, SiAdobelightroom} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { motion } from 'framer-motion'

//import Spline from '@splinetool/react-spline';


export default function Skills() {

    const itemVariants = {
        hidden: {opacity: 0, scale: 0.5, rotate: "-40deg"},
        visible: {opacity: 1, scale: 1, rotate: "0deg"},
    }

    return (
        <section className="skills" id='skills'>
        
            <div className="topBar"></div>

            <motion.h2
                initial={{ x: "-300px" }}
                animate={{ x: "0px" }}
                transition={{ duration: 1.1 }}
            >My Skills</motion.h2>

            <motion.p
                initial={{ x: "-800px" }}
                animate={{ x: "0px" }}
                transition={{ duration: 1.1 }}
            >Here is a brief overview of my skills</motion.p>
            <motion.ul initial="hidden" whileInView="visible" transition={{staggerChildren: 0.2, type: "spring"}}>
                <motion.li variants={itemVariants}>
                    <FaJsSquare className="logo"/> JavaScript
                </motion.li>
                <motion.li variants={itemVariants}>
                    <FaReact className="logo"/> React.js
                </motion.li>
                <motion.li variants={itemVariants}>
                    <FaCss3 className="logo"/> CSS3
                </motion.li>
                <motion.li variants={itemVariants}>
                    <FaHtml5 className="logo"/> HTML5
                </motion.li>

                <motion.li variants={itemVariants}>
                    <FaNodeJs className="logo"/> Node.js
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiMongodb className="logo"/> MongoDB
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiTypescript className="logo"/> Typescript
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiNextdotjs className="logo"/> Next.js
                </motion.li>
                <motion.li variants={itemVariants} >
                    <FaSass className="logo"/> Sass
                </motion.li>
                
                <motion.li variants={itemVariants}>
                    <SiTailwindcss className="logo"/> Tailwind CSS
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiChartdotjs className="logo"/> Chart.js
                </motion.li>
                <motion.li variants={itemVariants}>
                    <FaPython className="logo"/> Python
                </motion.li>

                <motion.li variants={itemVariants}>
                    <SiExpress className="logo"/> Express.js
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiMysql className="logo"/> MySQL
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiPostman className="logo"/> Postman
                </motion.li>

                <motion.li variants={itemVariants}>
                    <FaWix className="logo"/> Wix
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiContentful className="logo"/> Contentful
                </motion.li>
                <motion.li variants={itemVariants}>
                    <FaGit className="logo"/> Git
                </motion.li>

                <motion.li variants={itemVariants}>
                    <FaGithub className="logo"/> Github
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiVercel className="logo"/> Vercel
                </motion.li>
                <motion.li variants={itemVariants}>
                    <FaNpm className="logo"/> NPM
                </motion.li>

                <motion.li variants={itemVariants}>
                    <SiVite className="logo"/> Vite.js
                </motion.li>
                <motion.li variants={itemVariants}>
                    <TbBrandFramerMotion className="logo"/> Framer Motion
                </motion.li>
                <motion.li variants={itemVariants}>
                    <SiAdobelightroom className="logo"/> Adobe Lightroom
                </motion.li>
            </motion.ul>
        </section>
    );
}
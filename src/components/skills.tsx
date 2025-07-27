import { FaReact, FaJsSquare, FaCss3, FaHtml5, FaNodeJs, FaSass, FaPython, FaWix, FaGit, FaGithub, FaNpm} from "react-icons/fa";
import { SiMongodb, SiTypescript, SiNextdotjs, SiTailwindcss, SiChartdotjs, SiExpress, SiMysql, SiPostman, SiContentful, SiVercel, SiVite, SiAdobelightroom} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

import { useRef } from "react";
import { motion, useInView } from 'framer-motion'

//import Spline from '@splinetool/react-spline';


export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px"  });


    return (
        <section className="skills" id='skills' ref={ref}>
        
            <div className="topBar"></div>

            <motion.h2
                initial={{ x: "-300px" }}
                animate={isInView ? { x: "0px" } : {}}
                transition={{ duration: 1.1 }}
            >Skills</motion.h2>

            <motion.p
                initial={{ x: "-800px" }}
                animate={isInView ? { x: "0px" } : {}}
                transition={{ duration: 1.1 }}
            >Here is a brief overview of my skills</motion.p>
            <ul>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.75 }}
                >
                    <FaJsSquare className="logo"/> JavaScript
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.78 }}
                >
                    <FaReact className="logo"/> React.js
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.80 }}
                >
                    <FaCss3 className="logo"/> CSS3
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.82 }}
                >
                    <FaHtml5 className="logo"/> HTML5
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.84 }}
                >
                    <FaNodeJs className="logo"/> Node.js
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.86 }}
                >
                    <SiMongodb className="logo"/> MongoDB
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.88 }}
                >
                    <SiTypescript className="logo"/> Typescript
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.90 }}
                >
                    <SiNextdotjs className="logo"/> Next.js
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.92 }}
                >
                    <FaSass className="logo"/> Sass
                </motion.li>
                
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.94 }}
                >
                    <SiTailwindcss className="logo"/> Tailwind CSS
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.96 }}
                >
                    <SiChartdotjs className="logo"/> Chart.js
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 0.98 }}
                >
                    <FaPython className="logo"/> Python
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.00 }}
                >
                    <SiExpress className="logo"/> Express.js
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.02 }}
                >
                    <SiMysql className="logo"/> MySQL
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.04 }}
                >
                    <SiPostman className="logo"/> Postman
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.06 }}
                >
                    <FaWix className="logo"/> Wix
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.08 }}
                >
                    <SiContentful className="logo"/> Contentful
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.10 }}
                >
                    <FaGit className="logo"/> Git
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.14 }}
                >
                    <FaGithub className="logo"/> Github
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.16 }}
                >
                    <SiVercel className="logo"/> Vercel
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.18 }}
                >
                    <FaNpm className="logo"/> NPM
                </motion.li>

                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.20 }}
                >
                    <SiVite className="logo"/> Vite.js
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.22 }}
                >
                    <TbBrandFramerMotion className="logo"/> Framer Motion
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1.1, delay: 1.22 }}
                >
                    <SiAdobelightroom className="logo"/> Adobe Lightroom
                </motion.li>
            </ul>
        </section>
    );
}
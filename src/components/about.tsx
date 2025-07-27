import GradPic from '/images/gradPic.jpeg';
import P1 from '/images/p1.jpeg';
import P2 from '/images/p2.jpeg';
import P3 from '/images/p3.jpeg';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';



export default function About() {
  const aboutRef = useRef(null);
  const aboutIsInView = useInView(aboutRef, { once: true });

  const faqRef = useRef(null);
  const faqIsInView = useInView(faqRef, { once: true });

  return (
    <section className="about" id='about'>
      <h2>About Me</h2>
      <div className="aboutContent">
        <div className="aboutImages">
          <div className='carousel'>
              <figure>
                <img src={GradPic}alt="Anthony Gavidia Vasquez Graduation Picture" className="aboutImage" loading="lazy" decoding="async"/>   
                <figcaption>Crossing the Stage, Building the Future</figcaption>
              </figure> 
              <figure>
                <img src={P1}alt="Anthony Gavidia Vasquez Graduation Picture" className="aboutImage" loading="lazy" decoding="async"/>   
                <figcaption> Finding Focus in Quiet Moments </figcaption>
              </figure> 
              <figure>
                <img src={P2}alt="Anthony Gavidia Vasquez Graduation Picture" className="aboutImage" loading="lazy" decoding="async"/>   
                <figcaption> Self-Reflection Is Part of the Code </figcaption>
              </figure> 
              <figure>
                <img src={P3}alt="Anthony Gavidia Vasquez Graduation Picture" className="aboutImage" loading="lazy" decoding="async"/>   
                <figcaption>Stylin’ Like My CSS Grid</figcaption>
              </figure>
          </div>
        </div>
        <div className="aboutDetails">
          <motion.section ref={aboutRef}
            initial={{ opacity: 0, y: 20 }}
            animate={aboutIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75, ease: 'easeInOut' }}>
            <section>
               <h3>Introduction</h3>
              <p>My name is Anthony, but like to go by Gavi. Im a Front-End focused Developer with Back-End capabilities.</p>
              <p>I graduated from George Mason University with a Bachelor degree in Information Technology with a dual concentration in 
                Database Programming and Web Application Development.
              </p>
              <p>
                During my time at George Mason University, I have taken courses that have developed my interest and knowledge in Front End Development,
                UI / UX Design, Website Development, and related expertise. I have also had the opportunity to work on various projects that have allowed me to apply my skills in real-world scenarios.
              </p>

            </section>
            <section>
                <h3>Mission Statement</h3>
                <p>My mission for the industry is creating user friendly interface that not only look amazing,
                  but make the application easily accessible to those with specific needs to rightfully experience it as intended.</p>
                <p>Additionally, I would love to work on projects that have an humanitarian aspect to them such as Non-Profit 
                  Organizations and / or Mom and Pop shops as a way to give back to the community.</p>
            </section>
          </motion.section>
          <hr style={{ margin: "2rem 0", color: "#ffd828" }} />
          <motion.section ref={faqRef}
            initial={{ opacity: 0, y: 20 }}
            animate={faqIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}>
            <h3>Frequently Asked Questions</h3>
            <p>Here are some common questions I get asked about my work and background.</p>
            <details>
              <summary>Who am I?</summary>
              <h4>Here are some facts and interests about me</h4>
              <ul>
                <li>Im Salvadoran 🇸🇻</li>
                <li>I love Lego</li>
                <li>Stitch is my spirit animal</li>
                <li>I love taking walks in nature and water</li>
                <li>My favourite food is Pomodoro Pasta</li>
              </ul>
            </details>
            <details>
              <summary>What Kind of Work Have I Done?</summary>
              <p>I’ve built a variety of front-end projects that focus on clean design, smooth user experience, 
                and modern web practices. Whether it’s a personal tool or a community-driven app, 
                I love crafting interfaces that feel natural and purposeful.</p>
              <h4>Key Highlights Include:</h4>
              <ul>
                <li>Building dynamic dashboards and CRUD applications using React, Next.js, and Tailwind CSS</li>
                <li>Integrating a variety of third party platforms such as email handles (Sender), automation platforms (Zapier), and event management platform (Eventbrite)</li>
                <li>Applying responsive design principles to create mobile-friendly interfaces</li>
                <li>Working in Agile team environments to adapt to client needs</li>
              </ul>
            </details>
            <details>
              <summary>What Am I Looking For?</summary>
              <p>I hope to find a company that shares the same level of care and interest about buidling user interfaces to help me provide 
                quality service experiences on their websites for user, while, providing an environment where I can build upon my knowledge 
                and skillset to effectively make continuously improving experiences for all users </p>
            </details>
            <details>
              <summary>How Can You Contact Me?</summary>
              <p>You can contact me here:</p>
              <ul>
                <li>Email: agavivasq@gmail.com</li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/agavivasq/">agavivasq</a></li>
              </ul>
            </details>
          </motion.section>
        </div>
      </div>
    </section>
  )
}
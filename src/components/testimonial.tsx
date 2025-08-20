import { FaQuoteLeft } from "react-icons/fa6"
import { motion } from 'framer-motion'

export default function Testimonial() {

	return (
		<article className="testimonial" id='testimonial'>
			<motion.h2 initial={{ x: "-400px" }} whileInView={{ x: "0px" }} transition={{ duration: 0.8 }} >
				Word on the Street
			</motion.h2>
			<motion.div className="testimonialContent" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.75 }}>
				<figure className="testimonialItem">
					<q>Anthony's has shown great consideration for our needs and has consistently delivered high-quality work. 
					His attention to detail and ability to understand our requirements have made him an invaluable asset to our team. 
					We are grateful for his contributions in helping our organization improve our event management processes.</q>
					<br />
					<cite>- Dreamers' Mothers in Action IT Director</cite>
					<FaQuoteLeft className="quoteIcon" />
				</figure>
			</motion.div>
		</article>
	)
}
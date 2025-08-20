import Background from '/images/leather-nunchuck.png';

export default function Landing() {
	return (
		<header className="landing">
			<img src={Background} alt="Texture Leather Background Landing Page Image" className='landingBackground' loading="lazy" decoding="async"/>
			<div className="landingContent">
				<h1>Hey, I'm</h1>
				<h2>Anthony Gavidia Vasquez.</h2>
				<h3>Front-End Developer</h3>
				<p>Passionate about making aesthetically pleasing user interfaces accessible and enjoyable</p>
				<button type="button" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
			</div>
		</header>
	)
}
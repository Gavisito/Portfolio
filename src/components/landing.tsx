import Background from '/images/leather-nunchuck.png';

export default function Landing() {
  return (
    <section className="landing">
      <img src={Background} alt="Texture Leather Background Landing Page Image" className='landingBackground' loading="lazy" decoding="async"/>
      <div className="landingContent">
        <h2>Hey, I'm</h2>
        <h1>Anthony Gavidia Vasquez.</h1>
        <h3>Front-End Developer</h3>
        <p>Passionate about making aesthetically pleasing user interfaces accessible and enjoyable</p>
        <button type="button" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>Learn More</button>
      </div>
    </section>
  )
}
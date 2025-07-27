import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GrDocumentCsv } from "react-icons/gr";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "3c94139f-95df-4ee7-ab36-e61cbdea1c28");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      (event.target as HTMLFormElement).reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
      <div className="contactDetails">
        <form onSubmit={onSubmit} className="contactForm">
          <input type="hidden" name="access_key" value="3c94139f-95df-4ee7-ab36-e61cbdea1c28"></input>
          <input type="hidden" name="from_name" value="Agavivasq Portfolio"></input>
          <fieldset>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="John Doe" autoComplete="name" inputMode="text" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="john.doe@example.com" autoComplete="email" inputMode="email" required />
          </fieldset>
          <fieldset>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows={6} placeholder="Apples and bananas!" required></textarea>
          </fieldset>
          <fieldset>
            <button type="submit">Send Message</button>
          </fieldset>
          <fieldset>
            <span>{result}</span>
          </fieldset>
        </form>
        <nav className="socials">
          <ul className="social-links">
            <li><a href="https://www.linkedin.com/in/agavivasq/" target="_blank" rel="noopener noreferrer"> <FaLinkedinIn className="logo"/> </a></li>
            <li><a href="https://github.com/Gavisito" target="_blank" rel="noopener noreferrer"> <FaGithub className="logo"/> </a></li>
            <li><a href="mailto:agavivasq@gmail.com" target="_blank" rel="noopener noreferrer"> <SiGmail className="logo"/> </a></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer"> <GrDocumentCsv className="logo"/> </a></li>
          </ul>
        </nav>
      </div>
    </section>
  )
}
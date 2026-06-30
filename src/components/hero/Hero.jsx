import heroImage from "../../assets/images/hero.png";
import HeroParticles from "./HeroParticles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Hero() {
  return (
    <section id="hero">
      <HeroParticles />
      <div className="hero-inner">

        <div>
          <p className="hero-eyebrow">
            Open to Work
          </p>

          <h1 className="hero-name">
            Building production grade
            <span className="hero-animated">
              <span>CV Applications</span>
              <span>ML Pipelines</span>
              <span>RAG Systems</span>
              <span>AI Agents</span>
            </span>
          </h1>

          <p className="hero-role">
            Computer Vision & AI Engineer
          </p>

          <p className="hero-bio">
            I build fast, scalable web applications and
            intelligent systems that solve real problems.
          </p>

          {/* Buttons */}

          <div className="hero-actions">

            <a
              href="#contact"
              className="hero-btn primary"
            >
              Book a discovery call
            </a>

            <a
              href="/Muhammad Kashif Abdullah Resume.docx.pdf"
              download="Muhammad-Kashif-Abdullah-CV.pdf"
              className="hero-btn secondary"
            >
              Download CV
            </a>

          </div>

          {/* Social Icons */}

          <div className="hero-socials">

            <a
              href="https://github.com/Kashif581"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muhammad-kashif-abdullah-344978235/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="hero-avatar-wrap">

          <img
            src={heroImage}
            alt="Muhammad Kashif"
            className="avatar-circle"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;
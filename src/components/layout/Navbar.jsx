import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  "Experience",
  "Projects",
  "Skills",
  "Achievements",
  "Education",
  "Github",
  "Contact",

];

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-center">

        {/* BRAND */}
        <div className="nav-brand">

          <a
            href="#hero"
            className="nav-logo"
          >
            Muhammad Kashif Abdullah
          </a>

          <span className="nav-subtitle">
            Computer Vision Engineer - AI Engineer
          </span>

        </div>

        {/* NAV LINKS */}
        <ul className="nav-links">

          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`}>
                {link}
              </a>
            </li>
          ))}

        </ul>

        {/* SOCIALS */}
        {/* <div className="nav-icons">

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

        </div> */}

      </div>

    </nav>
  );
}
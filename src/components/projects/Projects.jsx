import SectionAvatar from "../avatar/SectionAvatar";
import projectsImg from "../../assets/images/skills.png"
import aiImg from "../../assets/images/images.png";
import scraperImg from "../../assets/images/images.png";
import ecommerceImg from "../../assets/images/images.png";
import chatImg from "../../assets/images/images.png";
import searchImg from "../../assets/images/images.png";
import taskImg from "../../assets/images/images.png";
import { FaGithub } from "react-icons/fa";
import "./Project.css"

const projects = [
  {
    image: aiImg,
    name: "AI Agents Platform",
    desc: "Multi-agent orchestration framework...",
    tags: ["Python", "LangChain", "FastAPI", "React"],
    github: "https://github.com/Kashif581/VisGuard"
  },

  {
    image: scraperImg,
    name: "DataScraper Pro",
    desc: "Scalable scraping pipeline...",
    tags: ["Python","Playwright","PostgreSQL","Docker"],
    github: "https://github.com/Kashif581/VisGuard"
  },

  {
    image: ecommerceImg,
    name: "E-Commerce Platform",
    desc: "Full-stack e-commerce...",
    tags: ["Next.js","TypeScript","Prisma","Stripe"],
    github: "https://github.com/Kashif581/VisGuard"
  },

  {
    image: chatImg,
    name: "Real-Time Chat App",
    desc: "Encrypted messaging...",
    tags: ["Go","React","WebSockets","Redis"],
    github: "https://github.com/Kashif581/VisGuard"
  },

  {
    image: searchImg,
    name: "Content Indexing Engine",
    desc: "Semantic search...",
    tags: ["Python","pgvector","OpenAI"],
    github: "https://github.com/Kashif581/VisGuard"
  },

  {
    image: taskImg,
    name: "Task Manager App",
    desc: "Cross-platform productivity...",
    tags: ["React Native","SQLite"],
    github: "https://github.com/Kashif581/VisGuard"
  }
];

export default function Projects() {
  return (
    <section id="projects">

      <div className="sec-wrap">

        <div className="">

          <p className="section-label">
            // 02 — what i've built
          </p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <div
              key={project.name}
              className="
              proj-card
              "
            >

              <div className="proj-top">

                <div className="proj-image-wrap">
                   <img
                      src={project.image}
                      alt={project.name}
                      className="proj-image"
                    />
                </div>

                <div className="proj-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-link"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

              <div className="proj-name">
                {project.name}
              </div>

              <div className="proj-desc">
                {project.desc}
              </div>

              <div className="proj-tags">

                {project.tags.map(
                  (tag) => (

                    <span
                      key={tag}
                      className="tag"
                    >
                      {tag}
                    </span>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

        <SectionAvatar
          image={projectsImg}
          text={
            <>
              6 cool projects
              <br />
              and counting! 💡
            </>
          }
        />

      </div>

    </section>
  );
}
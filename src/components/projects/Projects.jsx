import SectionAvatar from "../avatar/SectionAvatar";
import projectsImg from "../../assets/images/skills.png"
import VisGuardImg from "../../assets/images/VisGuard.png";
import LipReaderImg from "../../assets/images/LipReader.png";
import AirPointerImg from "../../assets/images/AirPointer.png";
import VisioMate from "../../assets/images/VisioMate.png";
import CheatingSurImg from "../../assets/images/Cheating_Sur.png";
import HumanActImg from "../../assets/images/Human_Act.png";
import { FaGithub } from "react-icons/fa";
import "./Project.css"

const projects = [
  {
    image: VisGuardImg,
    name: "VisGurad",
    desc: "Multi-Camera streaming tracking and detection platform...",
    tags: ["OpenCV", "YOLO26", "Roboflow", "React", "Mulvius", "HuggingFace"],
    github: "https://github.com/Kashif581/VisGuard"
  },

  {
    image: LipReaderImg,
    name: "LipReader",
    desc: "Caputre silent lip movements...",
    tags: ["OpenCV","CNN","LSTM","TensorFlow", ],
    github: "https://github.com/Kashif581/LipReader"
  },

  {
    image: AirPointerImg,
    name: "AirPointer",
    desc: "Control Cursor through hand gesture...",
    tags: ["Next.js","TypeScript","Prisma","Stripe"],
    github: "https://github.com/Kashif581/Air_Mind"
  },

  {
    image: VisioMate,
    name: "VisioMate",
    desc: "When you’re crossing the road and see a...",
    tags: ["OpenCV","YOLOv8","Gemini","Pyttsx3", "Streamlit"],
    github: "https://github.com/Kashif581/VisioMate_LabLab.ai_CO-Creating_With_GPT-5_Hackthone"
  },

  {
    image: CheatingSurImg,
    name: "Cheating Surveillance System",
    desc: "The Cheating Surveillance System is designed to...",
    tags: ["OpenCV","dlib","YOLOv8", "Roboflow"],
    github: "https://github.com/Kashif581/Cheating-Surveillance-System"
  },

  {
    image: HumanActImg,
    name: "Human Activity Recognition",
    desc: "Human Activity Recognition system which can enable companies to...",
    tags: ["CNN","LSTM", "Colab", ],
    github: "https://github.com/Kashif581/Human-Activity-Recognition-on-UCF50-dataset-using-ConvLSTM-and-LRCN-models"
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
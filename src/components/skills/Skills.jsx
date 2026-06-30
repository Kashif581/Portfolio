import { useRef } from "react";
import { motion } from "framer-motion";
import SectionAvatar from "../avatar/SectionAvatar";
import skillsImg from "../../assets/images/skills.png";
import "./Skills.css";

const skills = [
  { name: "Python", core: true },
  { name: "JavaScript", core: true },
  { name: "React", core: true },
  { name: "Docker", core: true },
  { name: "RAG" },
  { name: "Git" },
  { name: "Figma" },
  { name: "Supabase" }
];

/* fixed grid-ish starting positions so pills don't overlap and stay
   comfortably inside the (now smaller) container */
const positions = [
  { top: "14%", left: "10%" },
  { top: "14%", left: "62%" },
  { top: "44%", left: "30%" },
  { top: "44%", left: "78%" },
  { top: "74%", left: "8%" },
  { top: "74%", left: "46%" },
  { top: "26%", left: "85%" },
  { top: "60%", left: "70%" }
];

export default function Skills() {
  const containerRef = useRef(null);

  return (
    <section id="skills">
      <div className="sec-wrap">
        <p className="section-label">// 03 — tools &amp; technologies</p>

        <h2 className="section-title">
          Skills &amp; <span>Stack</span>
        </h2>

        <motion.div className="skills-blob" ref={containerRef}>
          <div className="blob glow1"></div>
          <div className="blob glow2"></div>
          <div className="grid-noise"></div>

          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className={`skill-pill ${skill.core ? "core" : ""}`}
              style={positions[i]}
              drag
              dragConstraints={containerRef}
              dragElastic={0.08}
              dragMomentum={false}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.15, cursor: "grabbing" }}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

        <SectionAvatar
          image={skillsImg}
          text={
            <>
              I know a lot of
              <br />
              cool tools! 🛠️
            </>
          }
        />
      </div>
    </section>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionAvatar from "../avatar/SectionAvatar";
import awardImg from "../../assets/images/achievements.png";
import laptopAward from "../../assets/images/PMYLS.png";
import GSCAward from "../../assets/images/GSC.png";
import "./Achievements.css";

const achievements = [
  {
    image:laptopAward,
    title: "Global Sustainability Challenge — Region Finalist",
    sub: "Sustainability 2026 · 500+ Participants",
    desc:
      "Built a conditional GAN based application in order to solve the problem of data scarcity in Agriculture domain."
  },

  {
    image:GSCAward,
    title: "Prime Minister Youth Laptop Scheme Awardee",
    sub: "PMYLS 2024",
    desc:
      "Based on overall grade awarded with laptop through PMYLS."
  },
];

export default function Achievements() {
  const [index, setIndex] = useState(0);

  const nextCard = () =>
    setIndex((prev) => (prev + 1) % achievements.length);

  const prevCard = () =>
    setIndex((prev) =>
      prev === 0 ? achievements.length - 1 : prev - 1
    );

  const item = achievements[index];

  return (
    <section id="achievements">
      <div className="sec-wrap">

        <p className="section-label">
          // 04 — milestones
        </p>

        <h2 className="section-title">
          Achievements & <span>Awards</span>
        </h2>

        <div className="stack-wrap">

          {/* Background stacked cards */}
          <div className="stack-bg stack-3" />
          <div className="stack-bg stack-2" />

          <AnimatePresence mode="wait">

            <motion.div
              key={index}
              className="ach-card"
              drag="x"
              dragConstraints={{
                left: 0,
                right: 0
              }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -120)
                  nextCard();

                if (info.offset.x > 120)
                  prevCard();
              }}
              initial={{
                opacity: 0,
                scale: 0.9,
                rotate: 5
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.92
              }}
              transition={{
                duration: 0.35
              }}
            >
              <div className="ach-icon">
                <img
                  src={item.image}
                  alt={item.title}
                  className="ach-image"
                />
              </div>

              <div className="ach-title">
                {item.title}
              </div>

              <div className="ach-sub">
                {item.sub}
              </div>

              <div className="ach-desc">
                {item.desc}
              </div>

            </motion.div>

          </AnimatePresence>

          <div className="card-indicators">
            {achievements.map((_, i) => (
              <button
                key={i}
                className={`indicator-dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to achievement ${i + 1}`}
              />
            ))}
          </div>

        </div>

        <SectionAvatar
          image={awardImg}
          text={
            <>
              Winner winner
              <br />
              chicken dinner!
            </>
          }
        />

      </div>
    </section>
  );
}
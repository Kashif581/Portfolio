import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionAvatar from "../avatar/SectionAvatar";
import awardImg from "../../assets/images/achievements.png";
import "./Achievements.css";

const achievements = [
  {
    icon: "🏆",
    title: "Global Hackathon — 1st Place",
    sub: "GrizzHacks 2023 · 500+ Participants",
    desc:
      "Built an AI-powered accessibility tool in 24 hours, winning the top prize out of 120 team submissions."
  },

  {
    icon: "🥇",
    title: "Global Hackathon — 1st Place",
    sub: "CodeStorm 2022 · International",
    desc:
      "Designed a real-time disaster response coordination platform that impressed judges with its scalability."
  },

  {
    icon: "⭐",
    title: "Open Source Contributor",
    sub: "1,200+ GitHub Stars · 21+ Repos",
    desc:
      "Maintained a popular React hooks library with over a thousand GitHub stars and active community engagement."
  },

  {
    icon: "📜",
    title: "AWS Certified Solutions Architect",
    sub: "Amazon Web Services · 2023",
    desc:
      "Earned professional certification covering scalability, reliability, and cost-optimisation on AWS."
  }
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
                {item.icon}
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

          <div className="card-indicator">
            {index + 1} / {achievements.length}
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
import SectionAvatar from "../avatar/SectionAvatar";
import experienceImg from "../../assets/images/experience.png";
import { FaBuilding } from "react-icons/fa"; 

const experience = [
  {
    role:
      "Deep Learning Intern",

    company:
      "Buildables",

    period:
      "Jun 2025 – Aug 2025",

    desc: [
      "Leveraged Selenium, Crawl4AI, and GitHub Actions to automate data scraping from PakWheels.com, reducing manual data collection by 90%.",
      "Developed a Human Activity Recognition system to provide production statistics, improve assembly quality, enforce safety, and optimize industrial processes.",
      "Build Google Calendar assistant which enables individuals to automatically schedule, update, delete and summarize upcoming events."
    ]
  },

  {
    role:
      "Data Engineering Intern",

    company:
      "Bytewise Limited",

    period:
      "May 2024 – July 2025",

    desc: [
      "Created efficient ETL pipeline for Green Taxis by using technologies such as Dbt, Neon, and SQL, which help business teams to analyze monthly revenue patterns, pickup/drop-off hotspots, and driver performance to uncover areas of optimization.",
      "Implemented a comprehensive Data Pipeline using Azure Data Factory, Databricks, PySpark, Python, and PowerBI to analyze and visualize Formula 1 race results",
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience">

      <div className="sec-wrap">

        <div className="">

          <p className="section-label">
            // 01 — work history
          </p>

          <h2 className="section-title">
            Work <span>Experience</span>
          </h2>

        </div>

        <div className="exp-list">

          {
            experience.map(
              (
                item
              ) => (

                <div
                  key={
                    item.role
                  }
                  className="
                  exp-card
                  "
                >

                  <div
                    className="
                    exp-header
                    "
                  >

                    <div>

                      <div
                        className="
                        exp-role
                        "
                      >
                        {item.role}
                      </div>

                      <div
                        className="
                        exp-company
                        "
                      >
                        <FaBuilding className="company-icon" />
                        {item.company}
                      </div>

                    </div>

                    <span
                      className="
                      exp-period
                      "
                    >
                      {item.period}
                    </span>

                  </div>

                  <ul className="exp-desc">
                    {item.desc.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>

              )
            )
          }

        </div>

        <SectionAvatar
          image={experienceImg}
          text={
            <>
              3 years climbing
              <br />
              the dev ladder! 🚀
            </>
          }
        />

      </div>

    </section>
  );
}
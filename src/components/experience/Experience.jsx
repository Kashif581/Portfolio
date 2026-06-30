import SectionAvatar from "../avatar/SectionAvatar";
import experienceImg from "../../assets/images/experience.png";
import { FaBuilding } from "react-icons/fa"; 

const experience = [
  {
    role:
      "Senior Full Stack Developer",

    company:
      "TechCorp Solutions",

    period:
      "Jan 2023 – Present",

    desc:
      "Led development of a microservices-based SaaS platform serving 50,000+ users. Architected the backend API layer using Node.js and PostgreSQL, reduced page load times by 40%, and mentored a team of 4 junior developers."
  },

  {
    role:
      "Full Stack Developer",

    company:
      "Digital Dynamics Ltd.",

    period:
      "Jun 2021 – Dec 2022",

    desc:
      "Built and maintained client web applications using React and Django REST Framework. Integrated AI/ML pipelines for automated content classification and collaborated with design teams to deliver pixel-perfect UIs."
  },

  {
    role:
      "Frontend Developer (Intern → Full-time)",

    company:
      "Startup Nexus",

    period:
      "Mar 2020 – May 2021",

    desc:
      "Started as an intern and converted to full-time within 3 months. Developed reusable React component libraries, implemented real-time features using WebSockets, and contributed to the company's open-source design system."
  }
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

                  <p
                    className="
                    exp-desc
                    "
                  >
                    {item.desc}
                  </p>

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
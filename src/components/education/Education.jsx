import SectionAvatar from "../avatar/SectionAvatar";
import educationImg from "../../assets/images/education.png"

const education = [
  {
    icon: "🎓",
    degree:
      "Bachelor of Science in Computer Science",

    school:
      "The Islamia University of Bahawalpur",

    period:
      "2022 – 2026 · GPA: 3.8 / 4.0"
  },

  {
    icon: "📘",

    degree:
      "Deep Learning Specialization",

    school:
      "Coursera · deeplearning.ai",

    period:
      "2022 · 5-course certification"
  },

  {
    icon: "📗",

    degree:
      "Full Stack Web Development Bootcamp",

    school:
      "The Odin Project",

    period:
      "2019 · Completed with distinction"
  }
];

export default function Education() {
  return (
    <section id="education">

      <div className="sec-wrap">

        <div className="">

          <p className="section-label">
            // 05 — academic background
          </p>

          <h2 className="section-title">
            Educational <span>Background</span>
          </h2>

        </div>

        <div
          className="
          edu-list
          "
        >

          {
            education.map(
              (
                item
              ) => (

                <div
                  key={
                    item.degree
                  }
                  className="
                  edu-card
                  "
                >

                  <div
                    className="
                    edu-icon
                    "
                  >
                    {item.icon}
                  </div>

                  <div>

                    <div
                      className="
                      edu-degree
                      "
                    >
                      {item.degree}
                    </div>

                    <div
                      className="
                      edu-school
                      "
                    >
                      {item.school}
                    </div>

                    <div
                      className="
                      edu-period
                      "
                    >
                      {item.period}
                    </div>

                  </div>

                </div>

              )
            )
          }

        </div>

        <SectionAvatar
          image={educationImg}
          text={
            <>
              Knowledge is
              <br />
              power!
            </>
          }
        />

      </div>

    </section>
  );
}
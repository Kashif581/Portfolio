import SectionAvatar from "../avatar/SectionAvatar";
import educationImg from "../../assets/images/education.png"

const education = [
  {
    icon: "🎓",
    degree:
      "Bachelor of Software Engineering",

    school:
      "The Islamia University of Bahawalpur",

    period:
      "2022 – 2026 · GPA: 3.74 / 4.0"
  },

  {
    icon: "📘",

    degree:
      "FSC Pre-Engineering",

    school:
      "Mudrass-Tul-Binat, Sadiqabad",

    period:
      "2020 - 2022 · Marks: 923 / 1100"
  },

  {
    icon: "📗",

    degree:
      "Matriculation",

    school:
      "Mudrass-Tul-Binat, Sadiqabad",

    period:
      "2018 - 2020 · Marks: 906 / 1100"
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
            Education & <span>Certifications</span>
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
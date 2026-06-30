import SectionAvatar from "../avatar/SectionAvatar";
import contactmeImg from "../../assets/images/contact_me.png";


export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();

    console.log("Message submitted");
  }

  return (
    <section id="contact">

      <div className="sec-wrap">

        <div className="">

          <p className="section-label">
            // 07 — get in touch
          </p>

          <h2 className="section-title">
            Let's <span>Work Together</span>
          </h2>

        </div>

        <div
          className="
          contact-inner
          "
        >

          {/* LEFT */}

          <div
            className="
            contact-text
            "
          >

            <p>

              Whether you have a project in mind,
              a job opportunity,
              or just want to say hello —
              my inbox is always open.

              I'll do my best to get back
              to you promptly.

            </p>

            <div
              className="
              contact-items
              "
            >

              {/* EMAIL */}

              <div
                className="
                contact-item
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="20"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path
                    d="
                    m3 7
                    9 6
                    9-6
                    "
                  />

                </svg>

                kashifabdullah581@gmail.com

              </div>

              {/* LOCATION */}

              <div
                className="
                contact-item
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="20"
                >

                  <path
                    d="
                    M21 10
                    c0 7-9 13-9 13
                    s-9-6-9-13
                    a9 9 0 0 1
                    18 0
                    z
                    "
                  />

                  <circle
                    cx="12"
                    cy="10"
                    r="3"
                  />

                </svg>

                Available remotely · Open to relocation

              </div>

              {/* TIME */}

              <div
                className="
                contact-item
                "
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  width="20"
                >

                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                  />

                  <path
                    d="
                    M12 6
                    v6
                    l4 2
                    "
                  />

                </svg>

                Response time:
                within 24 hours

              </div>

            </div>

          </div>

          {/* FORM */}

          <form
            className="
            contact-form
            "
            onSubmit={
              handleSubmit
            }
          >

            <div
              className="
              form-field
              "
            >

              <label>
                name
              </label>

              <input
                type="text"
                placeholder="
                Your name
                "
              />

            </div>

            <div
              className="
              form-field
              "
            >

              <label>
                email
              </label>

              <input
                type="email"
                placeholder="
                you@example.com
                "
              />

            </div>

            <div
              className="
              form-field
              "
            >

              <label>
                message
              </label>

              <textarea
                rows="5"
                placeholder="
                Tell me about your project...
                "
              />

            </div>

            <button
              type="submit"
              className="
              btn-primary
              "
            >

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >

                <line
                  x1="22"
                  y1="2"
                  x2="11"
                  y2="13"
                />

                <polygon
                  points="
                  22 2
                  15 22
                  11 13
                  2 9
                  22 2
                  "
                />

              </svg>

              Send message

            </button>

          </form>

        </div>

        <SectionAvatar
          image={contactmeImg}
          text={
            <>
              Let's build
              <br />
              something great!
            </>
          }
        />

      </div>

    </section>
  );
}
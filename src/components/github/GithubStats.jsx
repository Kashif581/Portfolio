import SectionAvatar from "../avatar/SectionAvatar";
import "./GithubStats.css";
import githubAvatar from "../../assets/images/github.png";

const stats = [
  { value: "1.2K", label: "total stars" },
  { value: "21", label: "followers" },
  { value: "60+", label: "repositories" },
  // { value: "892", label: "commits (year)" }
];

// Generate 52 weeks × 7 days
const contributions = Array.from(
  { length: 364 },
  () => Math.floor(Math.random() * 5)
);

export default function GithubStats() {
  return (
    <section id="github">
      <div className="sec-wrap">

        <div>
          <p className="section-label">
            // 06 — open source activity
          </p>

          <h2 className="section-title">
            GitHub <span>Stats</span>
          </h2>
        </div>

        <div className="stats-wrap">

          {/* HEADER */}
          <div className="stats-top">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />

            <span className="github-url">
              github.com/kashif581
            </span>
          </div>

          {/* STATS */}
          <div className="stats-grid">
            {stats.map((item) => (
              <div
                key={item.label}
                className="stat-cell"
              >
                <span className="stat-num">
                  {item.value}
                </span>

                <div className="stat-lbl">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* GITHUB CONTRIBUTION GRID */}

          <div className="contrib-wrap">

            <div className="contrib-title">
              Contribution activity
            </div>

            <div className="months">
              {[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ].map((m) => (
                <span key={m}>
                  {m}
                </span>
              ))}
            </div>

            <div className="github-grid">

              {contributions.map(
                (
                  level,
                  i
                ) => (

                  <div
                    key={i}
                    className={`cell level-${level}`}
                  />

                )
              )}

            </div>

          </div>

        </div>

        <SectionAvatar
          image={githubAvatar}
          text={
            <>
              892 commits
              <br />
              and still going!
            </>
          }
        />

      </div>
    </section>
  );
}
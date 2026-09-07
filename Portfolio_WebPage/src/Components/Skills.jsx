import { FaBriefcase } from "react-icons/fa";

function Skills() {
  return (
    <section id="skills" className="container-fluid px-4 px-md-5 py-5">

      <div className="row g-5">

        {/* SKILLS */}
        <div className="col-12 col-lg-6">

          <h4 className="fw-bold mb-4">
            My <span className="text-warning">Skills</span>
          </h4>

          <p className="mb-1">HTML & CSS</p>

          <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              style={{ width: "85%" }}
            >
              85%
            </div>
          </div>

          <p className="mb-1">JavaScript</p>

          <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              style={{ width: "75%" }}
            >
              75%
            </div>
          </div>

          <p className="mb-1">React.js</p>

          <div className="progress mb-3">
            <div
              className="progress-bar bg-warning"
              style={{ width: "80%" }}
            >
              80%
            </div>
          </div>

          <p className="mb-1">Bootstrap</p>

          <div className="progress">
            <div
              className="progress-bar bg-warning"
              style={{ width: "90%" }}
            >
              90%
            </div>
          </div>

        </div>

        {/* EXPERIENCE */}
        <div className="col-12 col-lg-6">

          <h4 className="fw-bold mb-4">
            My <span className="text-warning">Experience</span>
          </h4>

          <div className="bg-primary bg-opacity-25 rounded p-3 mb-3">

            <div className="d-flex gap-3 align-items-center">

              <FaBriefcase size={30} />

              <div>

                <h6 className="text-warning mb-1">
                  Full Stack Development Trainee
                </h6>

                <p className="small text-secondary mb-0">
                  Red & White Skill Education
                </p>

                <p className="small text-secondary mb-0">
                  2025 - Present
                </p>

              </div>

            </div>

          </div>

          <div className="bg-primary bg-opacity-25 rounded p-3">

            <div className="d-flex gap-3 align-items-center">

              <FaBriefcase size={30} />

              <div>

                <h6 className="text-warning mb-1">
                  Frontend Developer
                </h6>

                <p className="small text-secondary mb-0">
                  React.js • Bootstrap
                </p>

                <p className="small text-secondary mb-0">
                  Learning & Projects
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;
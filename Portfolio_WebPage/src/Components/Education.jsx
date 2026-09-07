function Education() {
  return (
    <section id="education" className="container-fluid px-4 px-md-5 py-5">

      <h4 className="fw-bold mb-4">
        My <span className="text-warning">Education</span>
      </h4>

      <div className="row g-4">

        <div className="col-12 col-md-6">
          <div className="card bg-dark text-white border-secondary h-100 p-3">

            <h5 className="text-warning fw-bold">
              Bachelor of Engineering
            </h5>

            <h6 className="fw-bold">
              Computer Engineering
            </h6>

            <p className="text-secondary mb-2">
              V.V.P. Engineering College, Rajkot
            </p>

            <p className="mb-0">
              Currently pursuing my engineering degree with a focus on
              programming, web development and computer science.
            </p>

          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card bg-dark text-white border-secondary h-100 p-3">

            <h5 className="text-warning fw-bold">
              Higher Secondary Education
            </h5>

            <h6 className="fw-bold">
              Science Stream
            </h6>

            <p className="text-secondary mb-2">
              Higher Secondary School
            </p>

            <p className="mb-0">
              Completed higher secondary education with a strong interest
              in mathematics, computers and technology.
            </p>

          </div>
        </div>

      </div>

    </section>
  );
}

export default Education;

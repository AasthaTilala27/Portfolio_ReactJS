function Testimonials() {
  return (
    <section
      id="testimonials"
      className="container-fluid px-4 px-md-5 py-5"
    >

      <h4 className="fw-bold mb-4">
        Testimonials
      </h4>

      <div className="row g-3">

        {/* USER 1 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4">

            <h6 className="text-warning">
              👤 USER 1
            </h6>

            <p className="small text-secondary mb-0">
              A very dedicated and creative developer who
              continuously learns and creates impressive projects.
            </p>

          </div>

        </div>

        {/* USER 2 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4">

            <h6 className="text-warning">
              👤 USER 2
            </h6>

            <p className="small text-secondary mb-0">
              Great developer with excellent skills and a
              strong passion for creating modern websites.
            </p>

          </div>

        </div>

        {/* USER 3 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4">

            <h6 className="text-warning">
              👤 USER 3
            </h6>

            <p className="small text-secondary mb-0">
              A hardworking and talented developer who always
              tries to learn new technologies.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;
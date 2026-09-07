function Hero() {
  return (
    <section className="container-fluid px-4 px-md-5 py-5">

      <div className="row align-items-center g-5 py-5">

        {/* LEFT */}
        <div className="col-12 col-lg-7 py-4">

          <p className="text-secondary fw-bold">
            FULL STACK DEVELOPER
          </p>

          <h1 className="display-4 fw-bold">
            Hi, I'm <span className="text-warning">Aastha</span> 👋
          </h1>

          <p className="text-secondary fs-5 mt-3">
            I am a passionate Computer Engineering student and Full Stack
            Development trainee who loves creating modern, responsive and
            user-friendly websites.
          </p>

          <p className="text-secondary">
            I enjoy turning ideas into beautiful digital experiences using
            HTML, CSS, JavaScript, React.js and other modern technologies.
          </p>

          <div className="d-flex flex-column flex-sm-row gap-3 mt-4">

            <a
              href="#contact"
              className="btn btn-warning px-4"
            >
              Hire Me
            </a>

            <a
              href="#"
              className="btn btn-outline-warning px-4"
            >
              Download CV
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="col-12 col-lg-5 text-center py-4">

          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80"
            alt="Aastha"
            className="img-fluid w-50 rounded-circle border border-warning p-1"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;
function Contact() {
  return (
    <section id="contact" className="container-fluid px-4 px-md-5 py-5">

      <h4 className="fw-bold mb-4">
        Contact <span className="text-warning">Me</span>
      </h4>

      <div className="row">

        <div className="col-12 col-lg-6 mb-4">
          <h2 className="fw-bold">
            Let's Work <span className="text-warning">Together</span>
          </h2>

          <p className="text-secondary">
            Have a project in mind or want to work together?
            Feel free to contact me.
          </p>

          <p>
            <strong>Email:</strong> aastha@example.com
          </p>

          <p>
            <strong>Phone:</strong> +91 00000 00000
          </p>
        </div>

        <div className="col-12 col-lg-6">

          <input
            type="text"
            className="form-control bg-dark text-white border-secondary mb-3"
            placeholder="Your Name"
          />

          <input
            type="email"
            className="form-control bg-dark text-white border-secondary mb-3"
            placeholder="Your Email"
          />

          <textarea
            className="form-control bg-dark text-white border-secondary mb-3"
            rows="5"
            placeholder="Your Message"
          ></textarea>

          <button className="btn btn-warning px-4">
            Send Message
          </button>

        </div>

      </div>

    </section>
  );
}

export default Contact;
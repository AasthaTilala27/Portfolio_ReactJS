import {
  FaHtml5,
  FaTools,
  FaMobileAlt,
  FaEnvelope,
  FaPaintBrush,
  FaLaptopCode,
} from "react-icons/fa";

function Services() {
  return (
    <section
      id="services"
      className="container-fluid px-4 px-md-5 py-5"
    >

      <h3 className="fw-bold mb-4">
        My <span className="text-warning">Services</span>
      </h3>

      <div className="row g-3">

        {/* SERVICE 1 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4 text-center h-100">

            <FaHtml5 size={45} className="mb-3" />

            <h5 className="text-warning">
              Web Development
            </h5>

            <p className="text-secondary small">
              I create modern and responsive websites using HTML,
              CSS and JavaScript.
            </p>

          </div>

        </div>

        {/* SERVICE 2 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4 text-center h-100">

            <FaTools size={45} className="mb-3" />

            <h5 className="text-warning">
              Technical Writing
            </h5>

            <p className="text-secondary small">
              I create clear and well-structured technical
              documentation and content.
            </p>

          </div>

        </div>

        {/* SERVICE 3 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4 text-center h-100">

            <FaMobileAlt size={45} className="mb-3" />

            <h5 className="text-warning">
              Mobile Development
            </h5>

            <p className="text-secondary small">
              I design responsive interfaces that work smoothly
              on mobile devices.
            </p>

          </div>

        </div>

        {/* SERVICE 4 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4 text-center h-100">

            <FaEnvelope size={45} className="mb-3" />

            <h5 className="text-warning">
              Email Development
            </h5>

            <p className="text-secondary small">
              I create clean and responsive email templates
              for different platforms.
            </p>

          </div>

        </div>

        {/* SERVICE 5 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4 text-center h-100">

            <FaPaintBrush size={45} className="mb-3" />

            <h5 className="text-warning">
              Graphic Design
            </h5>

            <p className="text-secondary small">
              I create attractive and user-friendly visual
              designs for digital products.
            </p>

          </div>

        </div>

        {/* SERVICE 6 */}
        <div className="col-12 col-sm-6 col-lg-4">

          <div className="bg-primary bg-opacity-25 rounded p-4 text-center h-100">

            <FaLaptopCode size={45} className="mb-3" />

            <h5 className="text-warning">
              UI/UX Design
            </h5>

            <p className="text-secondary small">
              I design simple and user-friendly interfaces
              for websites and applications.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;
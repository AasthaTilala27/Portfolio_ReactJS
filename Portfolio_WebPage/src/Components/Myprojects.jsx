function MyProjects() {
  return (
  
      <section id="projects" className="container-fluid px-4 px-md-5 py-5">

        <h4 className="fw-bold mb-4">
          My Latest <span className="text-warning">Projects</span>
        </h4>

        <div className="row g-4">

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card bg-primary bg-opacity-25 text-white border-0 h-100">

              <img
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/5f9127208379595.66ed72a4d314f.png"
                className="card-img-top"
                alt="Project 1"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="text-warning">Zomato Website</h6>

                <p className="card-text text-secondary small">
                  A responsive zomato website created using HTML, CSS and
                  JavaScript with product listing and shopping features.
                </p>

                <small className="text-secondary">
                  HTML • CSS • JavaScript
                </small>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card bg-primary bg-opacity-25 text-white border-0 h-100">

              <img
                src="https://tse4.mm.bing.net/th/id/OIP.cl3gL8jK9mJIJnY3zup9iQHaJO?r=0&w=600&h=747&rs=1&pid=ImgDetMain&o=7&rm=3"
                className="card-img-top"
                alt="Project 2"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="text-warning">Map Website</h6>

                <p className="card-text text-secondary small">
                  A modern map website designed with a clean layout,
                  attractive food sections and responsive design.
                </p>

                <small className="text-secondary">
                  HTML • CSS • JavaScript
                </small>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card bg-primary bg-opacity-25 text-white border-0 h-100">

              <img
                src="https://th.bing.com/th/id/OIP.ggYtwGeWSGf_yZwnQji1jAHaEK?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
                className="card-img-top"
                alt="Project 3"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="text-warning">Swiggy Website</h6>

                <p className="card-text text-secondary small">
                  A simple and user-friendly Swiggy Website application for
                  adding, completing and deleting daily tasks.
                </p>

                <small className="text-secondary">
                  HTML • CSS • JavaScript
                </small>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card bg-primary bg-opacity-25 text-white border-0 h-100">

              <img
                src="https://tse2.mm.bing.net/th/id/OIP.SJt_GZT4u5PyB6YRdV33sQHaGF?r=0&w=670&h=551&rs=1&pid=ImgDetMain&o=7&rm=3"
                className="card-img-top"
                alt="Project 4"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="text-warning">Coffee Website</h6>

                <p className="card-text text-secondary small">
                  An interactive with a Coffee Website responsive
                  interface.
                </p>

                <small className="text-secondary">
                  HTML • CSS • JavaScript
                </small>
              </div>

            </div>
          </div>


          <div className="col-12 col-sm-6 col-lg-4">
            <div className="card bg-primary bg-opacity-25 text-white border-0 h-100">

              <img
                src="https://s3-alpha.figma.com/hub/file/4323747573/a14783f4-fe49-4c87-ad29-bb97d9b612e6-cover.png"
                className="card-img-top"
                alt="Project 5"
                style={{ height: "300px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h6 className="text-warning">Bistro Bliss Website</h6>

                <p className="card-text text-secondary small">
                  A modern personal bistro bliss website created to showcase
                  foods, education, projects and experience.
                </p>

                <small className="text-secondary">
                  React.js • Bootstrap • JavaScript
                </small>
              </div>

            </div>
          </div>

        </div>

      </section>
  );
}

export default MyProjects;
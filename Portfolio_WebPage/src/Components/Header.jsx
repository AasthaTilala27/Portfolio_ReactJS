function Header() {
  return (
    <header className="container-fluid px-4 px-md-5 py-3 border-bottom border-secondary">

      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

        <h3 className="fw-bold m-0">
          AASTHA
        </h3>

        <nav>
          <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-3 gap-lg-4 m-0">

            <li>
              <a href="#services" className="text-white text-decoration-none">
                Services
              </a>
            </li>

            <li>
              <a href="#about" className="text-white text-decoration-none">
                About Me
              </a>
            </li>

            <li>
              <a href="#skills" className="text-white text-decoration-none">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="text-white text-decoration-none">
                Projects
              </a>
            </li>

            <li>
              <a href="#testimonials" className="text-white text-decoration-none">
                Testimonials
              </a>
            </li>

            <li>
              <a href="#contact" className="text-white text-decoration-none">
                Contact
              </a>
            </li>

          </ul>
        </nav>

      </div>

    </header>
  );
}

export default Header;
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ title, logo, links = [] }) => {
  const localizacao = useLocation();

  return (
    <div
      className="vh-100 d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary"
      style={{ width: "280px" }}
    >
      <Link
        to="/dashboard"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span className="bi pe-none me-2" style={{ width: "40px" }}>
          <img src={logo} alt="logo do site" style={{ width: "40px" }} />
        </span>
        <span className="fs-4">{title}</span>
      </Link>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {links.map((link, key) => (
          <li key={key} className="nav-item">
            <a
              href={link.href}
              className={`nav-link d-flex align-items-center ${
                link.href === localizacao.pathname ? "active" : ""
              }`}
            >
              {link.icon}
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Sidebar };

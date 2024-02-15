import { Dropdown } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import Banner from "../../assets/images/out-0.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");

    navigate("/");
  };

  return (
    <header className="p-3 mb-3 border-bottom bg-body-tertiary">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <span>
            <AiOutlineMenu style={{ fontSize: "24px" }} />
          </span>

          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              <a
                href="#"
                className="text-decoration-none"
                aria-expanded="false"
              >
                <img
                  src={Banner}
                  alt="imagem de perfil do usuário"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </a>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={handleLogout}>Sair</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </header>
  );
};

export { Header };

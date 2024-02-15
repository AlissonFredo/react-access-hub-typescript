import { Col, Container, Row } from "react-bootstrap";
import Banner from "../../assets/images/out-0.png";
import { Button } from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  const handleClickRegister = () => {
    navigate("/register");
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row>
        <Col md={6} className="p-3 p-md-5">
          <h1
            className="mb-4 mt-4 mt-md-0 text-center display-2 text-uppercase fw-bold"
            style={{ color: "#ea464c" }}
          >
            Access Hub
          </h1>
          <p className="mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quos
            id quia esse deserunt impedit, blanditiis animi aperiam numquam
            sapiente ipsa, quidem et earum soluta corrupti vel. Commodi, veniam
            asperiores.
          </p>

          <Row>
            <Col sm={12} md={6} className="mb-3 mb-md-0">
              <Button
                variant="third"
                title="Entrar"
                isCuston
                size="lg"
                className="w-100"
                onClick={handleClickLogin}
              />
            </Col>
            <Col sm={12} md={6}>
              <Button
                variant="third"
                title="Registrar"
                isCuston
                size="lg"
                className="w-100"
                onClick={handleClickRegister}
              />
            </Col>
          </Row>
        </Col>
        <Col md={6} className="mb-4 mb-md-0">
          <div className="d-flex justify-content-center align-align-items-center">
            <img src={Banner} alt="banner" className="img-fluid w-75" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

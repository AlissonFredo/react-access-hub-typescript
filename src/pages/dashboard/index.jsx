import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import Banner from "../../assets/images/out-0.png";
import { AiOutlineDashboard } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { Alert, Col, Row, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <div className="vh-100 d-flex">
      <Sidebar
        title="ACCESS HUB"
        logo={Banner}
        links={[
          {
            title: "Home",
            href: "/dashboard",
            icon: (
              <AiOutlineDashboard
                className="bi pe-none me-2"
                style={{ fontSize: "18px" }}
              />
            ),
          },
          {
            title: "Usuários",
            href: "#",
            icon: (
              <AiOutlineUser
                className="bi pe-none me-2"
                style={{ fontSize: "18px" }}
              />
            ),
          },
        ]}
      />
      <div className="w-100">
        <Header />
        <Container>
          <Row>
            <Col>
              <Alert variant="success">
                Seu login foi realizado com sucesso!
              </Alert>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;

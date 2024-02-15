import { Col, Container, Form, Row } from "react-bootstrap";
import Banner from "../../assets/images/out-0.png";
import { Button } from "../../components/Button";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { api } from "../../services/api";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("O campo é obrigatorio"),
    password: yup
      .string()
      .min(3, "Digite no minimo 3 caracteres")
      .required("O campo é obrigatorio"),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const handleClickTitle = () => {
    navigate("/");
  };

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(
        `users?email=${formData.email}&password=${formData.password}`
      );

      if (data.length != 0) {
        localStorage.setItem("user", data[0]);

        navigate("/dashboard");
      } else {
        alert("Email ou senha incorreto!");
      }
    } catch (error) {
      alert("Hover algum erro. Tente novamente!");
    }
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center bg-light">
      <Row>
        <Col md={6} className="mb-3 mb-md-0 mt-4 mt-md-0">
          <div className="d-flex justify-content-center align-align-items-center">
            <img src={Banner} alt="banner" className="img-fluid w-75" />
          </div>
        </Col>
        <Col md={6} className="p-3 p-md-5">
          <h1
            className="mb-4 text-center display-2 text-uppercase fw-bold"
            style={{ color: "#ea464c", cursor: "pointer" }}
            onClick={handleClickTitle}
          >
            Access Hub
          </h1>

          <Form className="mb-4">
            <Input
              label="Email"
              size="lg"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
              error={errors?.email?.message}
              onChange={(e) => setValue("email", e.target.value)}
            />

            <Input
              label="Senha"
              size="lg"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
              error={errors?.password?.message}
              onChange={(e) => setValue("password", e.target.value)}
            />
          </Form>

          <Row>
            <Col sm={12} className="mb-3 mb-md-0">
              <Button
                variant="third"
                title="Entrar"
                isCuston
                size="lg"
                className="w-100"
                onClick={handleSubmit(onSubmit)}
              />
            </Col>
            <Col sm={12} className="d-flex justify-content-around mt-3">
              <span>
                Você não tem uma conta?{" "}
                <Link to="/register">Criar sua conta</Link>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

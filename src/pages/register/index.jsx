import { yupResolver } from "@hookform/resolvers/yup";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import * as yup from "yup";
import Banner from "../../assets/images/out-0.png";
import { api } from "../../services/api";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Digite um email valido")
      .required("O campo é obrigatorio"),
    name: yup.string().required("O campo é obrigatorio"),
    password: yup
      .string()
      .min(3, "Digite no minimo 3 caracteres")
      .required("O campo é obrigatorio"),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas devem coincidir")
      .required("A confirmação de senha é obrigatória"),
  })
  .required();

const Register = () => {
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
      delete formData.confirm_password;

      const { data } = await api.post("/users", formData);

      if (data) {
        alert("Cadastro foi realizado com sucesso!");

        navigate("/login");
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
            <Row>
              <Col sm={6}>
                <Input
                  label="Nome"
                  size="lg"
                  type="text"
                  placeholder="Digite seu nome"
                  {...register("name")}
                  error={errors?.name?.message}
                  onChange={(e) => setValue("name", e.target.value)}
                />
              </Col>
              <Col sm={6}>
                <Input
                  label="Email"
                  size="lg"
                  type="email"
                  placeholder="Digite seu email"
                  {...register("email")}
                  error={errors?.email?.message}
                  onChange={(e) => setValue("email", e.target.value)}
                />
              </Col>
              <Col sm={6}>
                <Input
                  label="Senha"
                  size="lg"
                  type="password"
                  placeholder="Digite sua senha"
                  {...register("password")}
                  error={errors?.password?.message}
                  onChange={(e) => setValue("password", e.target.value)}
                />
              </Col>
              <Col sm={6}>
                <Input
                  label="Confirmar senha"
                  size="lg"
                  type="password"
                  placeholder="Confirme sua senha"
                  {...register("confirm_password")}
                  error={errors?.password?.message}
                  onChange={(e) => setValue("confirm_password", e.target.value)}
                />
              </Col>
            </Row>
          </Form>

          <Row>
            <Col sm={12} className="mb-3 mb-md-0">
              <Button
                variant="third"
                title="Registrar"
                isCuston
                size="lg"
                className="w-100"
                onClick={handleSubmit(onSubmit)}
              />
            </Col>

            <Col sm={12} className="d-flex justify-content-around mt-3">
              <span>
                Você já tem uma conta? <Link to="/login">Fazer login</Link>
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;

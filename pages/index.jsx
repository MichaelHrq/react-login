import { Button, Card, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Auth from "@/helpers/Auth";

const Home = () => {

  const {http} = Auth()

  const [submit, setSubmit] = useState({ login: "", senha: "" });

  const handleChange = (e) => {
    setSubmit({ ...submit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(submit)
  }

  return (
    <div style={{ background: "#fafafa" }}>
      <Container className="vh-100 d-flex justify-content-center align-items-center ">
        <Card className="border-0 p-4 shadow-sm" style={{ width: "300px" }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Login</Form.Label>
              <Form.Control
                className="rounded-4"
                type="text"
                placeholder="Enter login"
                onChange={handleChange}
                name="login"
                value={submit.login}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                className="rounded-4"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                name="senha"
                value={submit.senha}
              />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Button type="submit" variant="primary" className="rounded-4">
                Submit
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Home;

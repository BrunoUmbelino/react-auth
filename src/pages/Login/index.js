import React, { useContext, useState } from "react";
import { Context } from "../../Context/AuthContext";

import {
  Form,
  FormGroup,
  Input,
  Label,
  Button,
  Error,
  Container,
} from "./LoginElements";

function Login() {
  const { handleLogin, loginError } = useContext(Context);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    handleLogin(values);
  }

  return (
    <>
      {console.log(loginError)}
      <Container>
        <Form onSubmit={handleSubmit}>
          <Error>{loginError}</Error>
          <FormGroup>
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Insert your e-mail"
              required
              onChange={(e) => handleChange(e)}
              value={values.email}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Insert your password"
              required
              onChange={(e) => handleChange(e)}
              value={values.password}
            />
          </FormGroup>
          <FormGroup>
            <Button type="submit">Login</Button>
          </FormGroup>
        </Form>
      </Container>
    </>
  );
}

export default Login;

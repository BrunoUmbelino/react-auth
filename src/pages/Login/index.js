import React, { useState } from "react";
import { loginAPI } from "../../services/api";

import {
  Form,
  FormGroup,
  FormWrap,
  Input,
  Label,
  Button,
} from "./LoginElements";

function Login() {
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

    loginAPI(values);
  }

  return (
    <>
      <FormWrap>
        <Form onSubmit={handleSubmit}>
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
            <Button type="submit">Submit</Button>
          </FormGroup>
        </Form>
      </FormWrap>
    </>
  );
}

export default Login;

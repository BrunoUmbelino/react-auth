import React, { useContext } from "react";
import Button from "../../Components/Button";
import { Context } from "../../Context/AuthContext";
import * as Yup from "yup";

import {
  FormikBlok,
  FormGroup,
  FormikField,
  Label,
  FormikForm,
  Container,
  RegisterText,
  Error,
  Title,
  FormikError,
} from "./LoginElements";

function Login() {
  const { handleLogin, loginError } = useContext(Context);

  const validateLogin = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(18, "Invalid password")
      .min(8, "Invalid password")
      .required("Required"),
  });

  return (
    <>
      {console.log(loginError)}
      <Container>
        <FormikBlok
          initialValues={{ email: "", password: "" }}
          validationSchema={validateLogin}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            handleLogin(values);
          }}
        >
          <FormikForm>
            <Title>Login</Title>
            <FormGroup>
              <Error>{loginError}</Error>
              <Label htmlFor="email">E-mail</Label>
              <FormikField
                id="email"
                name="email"
                type="text"
                placeholder="Insert your E-mail"
              />
              <FormikError name="email" />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <FormikField
                id="password"
                name="password"
                type="password"
                placeholder="Insert your password"
              />
              <FormikError name="password" />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </FormikForm>
        </FormikBlok>
        <RegisterText href="/register">
          Don't have an account? register now
        </RegisterText>
      </Container>
    </>
  );
}

export default Login;

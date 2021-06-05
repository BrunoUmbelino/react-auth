import React, { useContext } from "react";
import { Context } from "../../Context/AuthContext";
import * as Yup from "yup";

import {
  FormikBlok,
  FormGroup,
  FormikField,
  Label,
  FormikForm,
  Container,
  Error,
  Title,
  FormikError,
  SpanText,
  WrapFormikError,
} from "../../Components/FormElements";
import Button from "../../Components/Button";

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
              <WrapFormikError>
                <FormikError name="email" />
              </WrapFormikError>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <FormikField
                id="password"
                name="password"
                type="password"
                placeholder="Insert your password"
              />
              <WrapFormikError>
                <FormikError name="password" />
              </WrapFormikError>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </FormikForm>
        </FormikBlok>
        <SpanText href="/register">
          Don't have an account? Register now!
        </SpanText>
      </Container>
    </>
  );
}

export default Login;

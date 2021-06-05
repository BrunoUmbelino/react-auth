import React from "react";
import register from "../../services/registerAPI";
import * as Yup from "yup";

import {
  Container,
  FormikForm,
  FormikField,
  FormGroup,
  FormikBlok,
  Label,
  Title,
  FormikError,
  SpanText,
  WrapFormikError,
} from "../../Components/FormElements";
import Button from "../../Components/Button";

function Register() {
  const validateRegister = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .max(18, "Must be 18 characters or less")
      .min(8, "Must be 8 characters or more")
      .required("Required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  });

  return (
    <>
      <Container>
        <FormikBlok
          initialValues={{ email: "", password: "", passwordConfirmation: "" }}
          validationSchema={validateRegister}
          onSubmit={(values) => {
            register(values);
          }}
        >
          <FormikForm>
            <Title>Register</Title>
            <FormGroup>
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
              <Label htmlFor="passwordConfirmation">Confirm Password</Label>
              <FormikField
                id="passwordConfirmation"
                name="passwordConfirmation"
                type="password"
                placeholder="Confirm your password"
              />
              <WrapFormikError>
                <FormikError name="passwordConfirmation" />
              </WrapFormikError>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </FormikForm>
        </FormikBlok>
        <SpanText href="/login">Return to Login Page.</SpanText>
      </Container>
    </>
  );
}

export default Register;

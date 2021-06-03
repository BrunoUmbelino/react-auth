import React from "react";

import {
  Container,
  FormikForm,
  FormikField,
  FormGroup,
  FormikBlok,
  Label,
  Title,
  LoginText,
} from "./registerElements";
import Button from "../../Components/Button";

function Register() {
  return (
    <>
      <Container>
        <FormikBlok
          initialValues={{}}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
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
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <FormikField
                id="password"
                name="password"
                type="password"
                placeholder="Insert your password"
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password2">Confirm Password</Label>
              <FormikField
                id="password2"
                name="password2"
                type="password"
                placeholder="Confirm your password"
              />
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </FormikForm>
        </FormikBlok>
        <LoginText href="/login">Return to login page</LoginText>
      </Container>
    </>
  );
}

export default Register;

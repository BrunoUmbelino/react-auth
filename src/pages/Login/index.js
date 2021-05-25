import React from "react";
import {
  Form,
  FormGroup,
  FormWrap,
  Input,
  Label,
  Button,
} from "./LoginElements";

function Login() {
  return (
    <>
      <FormWrap>
        <Form>
          <FormGroup>
            <Label>Username</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input />
          </FormGroup>
          <FormGroup>
            <Button>Submit</Button>
          </FormGroup>
        </Form>
      </FormWrap>
    </>
  );
}

export default Login;

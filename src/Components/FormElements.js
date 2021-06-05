import styled from "styled-components";
import { Form, Field, Formik, ErrorMessage } from "formik";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.span`
  color: red;
  margin: auto;
`;

export const Title = styled.h1`
  color: white;
  font-size: 1.9rem;
  margin-bottom: 10px;
`;

export const FormikBlok = styled(Formik)``;

export const FormikForm = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: #292929;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 2rem;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  color: #f53434;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: white;
  padding: 10px 0;
`;

export const FormikField = styled(Field)`
  font-size: 1.2rem;
  border-radius: 5px;
  height: 45px;
  border: none;
  padding: 10px;
`;

export const SpanText = styled.a`
  color: white;
  font-size: 1rem;
  text-decoration: none;
  margin-top: 25px;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: white;
    transition: all 0.3s ease;
  }
`;

export const FormikError = styled(ErrorMessage)``;

import styled from "styled-components";

export const FormWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4040c4, #5151c4);
`;

export const Error = styled.span`
  color: red;
`;

export const Form = styled.form`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: #292929;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
`;

export const FormGroup = styled.div`
  width: 80%;
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  margin: 10px;
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: white;
  padding: 10px 0;
`;

export const Input = styled.input`
  font-size: 0.9rem;
  border-radius: 5px;
  height: 35px;
  border: none;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: #5151c4;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: #3939a9;
  }

  &:focus {
    border: none;
  }
`;

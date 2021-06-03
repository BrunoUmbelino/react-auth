import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Error = styled.span`
  color: red;
`;

export const Form = styled.form`
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-color: #292929;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 1rem 0;
`;

export const FormGroup = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: white;
  padding: 10px 0;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  border-radius: 5px;
  height: 45px;
  border: none;
  padding: 10px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 1.4rem;
  letter-spacing: 2px;
  background-color: #5151c4;
  margin-top: 20px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: linear-gradient(90deg, #7c7cee, #2020eb);
  }

  &:focus {
    border: none;
  }
`;

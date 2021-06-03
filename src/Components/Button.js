import styled from "styled-components";

const Button = styled.button`
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

export default Button;

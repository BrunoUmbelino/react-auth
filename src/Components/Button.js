import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  font-size: 1.4rem;
  letter-spacing: 2px;
  background-color: #51c0c4;
  margin-top: 20px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    background: #51c451;
  }

  &:focus {
    border: none;
  }
`;

export default Button;

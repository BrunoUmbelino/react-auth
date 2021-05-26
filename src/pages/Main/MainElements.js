import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4040c4, #4040c4, #5151c4);
`;

export const Message = styled.h4`
  color: white;
  font-size: 2rem;
`;

export const Icon = styled.div`
  font-size: 2rem;
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
  cursor: pointer;
`;

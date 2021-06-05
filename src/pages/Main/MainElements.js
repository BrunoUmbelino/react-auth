import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Message = styled.h4`
  color: white;
  font-size: 3rem;
`;

export const Icon = styled.div`
  font-size: 2.5rem;
  position: absolute;
  top: 40px;
  right: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease;
    color: #ffffffb5;
  }
`;

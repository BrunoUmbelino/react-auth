import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: white;
  }
`;

function Loading() {
  return (
    <>
      <Container>
        <h1>LOADING...</h1>
      </Container>
    </>
  );
}

export default Loading;

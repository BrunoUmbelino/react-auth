import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #4040c4, #4040c4, #5151c4);

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

import React, { useContext } from "react";
import { Container, Icon, Message } from "./MainElements";
import { IoLogOut, IoHappy } from "react-icons/io5";
import { Context } from "../../Context/AuthContext";

function Main() {
  const { handleLogout } = useContext(Context);

  let username = localStorage
    .getItem("username")
    .replace(/(\w+)(@\w+.\w+)/, "$1");

  username = username.charAt(0).toUpperCase() + username.slice(1);

  return (
    <>
      <Container>
        <Icon>
          <IoLogOut onClick={handleLogout} />
        </Icon>
        <Message>
          Welcome {username} <IoHappy style={{ fontSize: "2.4rem" }} />
        </Message>
      </Container>
    </>
  );
}

export default Main;

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Todo() {
  const token = useContext(UserContext);

  return <div>{token}</div>;
}

export default Todo;

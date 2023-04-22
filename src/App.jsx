import { useEffect, useState } from "react";
import Greet from "./components/greet";
export default function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("https://breaknode.onrender.com/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  });
  return (
    <>
      <div>Hello World</div>
      <div>{message}</div>
      <Greet />
    </>
  );
}

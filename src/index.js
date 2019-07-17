import React, { useState, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import Row from "./row";
import { ThemeContext } from "./context";
import "./styles.css";
import "./greeting.css";

function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");
  const theme = useContext(ThemeContext);
  const width = useWindowWidth();

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleSurnameChange(e) {
    setSurname(e.target.value);
  }

  return (
    <section className={theme}>
      <Row label="Name">
        <input value={name} onChange={handleNameChange} />
      </Row>
      <Row label="Surname">
        <input value={surname} onChange={handleSurnameChange} />
      </Row>
      <Row label="Width">
        <input value={width} />
      </Row>
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Greeting />, rootElement);

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });
  return width;
}

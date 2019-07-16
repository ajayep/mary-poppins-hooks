import React, { useState, useContext } from "react";
import ReactDOM from "react-dom";
import Row from "./row";
import { ThemeContext, LocaleContext } from "./context";
import "./styles.css";
import "./greeting.css";

function Greeting(props) {
  const [name, setName] = useState("Mary");
  const [surname, setSurname] = useState("Poppins");
  const theme = useContext(ThemeContext);

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
    </section>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Greeting />, rootElement);
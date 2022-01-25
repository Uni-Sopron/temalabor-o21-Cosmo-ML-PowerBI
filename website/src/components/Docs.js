import React from "react";

import useNavbar from "../hooks/useNavbar";

import Bevezetes from "./docs/Bevezetes";
import Automl from "./docs/Automl";
import Python from "./docs/Python";
import R from "./docs/R";
import OsszesitoTablazat from "./docs/OsszesitoTablazat";
import Demo from "./docs/Demo";
import Befejezes from "./docs/Befejezes";

import styled from "styled-components";
import "../style/main_styles.css";

const StyledRef = styled.div`
  padding-top: 15%;
`;

const Docs = () => {
  const props = useNavbar();

  return (
    <div className="container">
      <StyledRef ref={props.bevezetesRef} />
      <Bevezetes />

      <StyledRef ref={props.automlRef} />
      <Automl />

      <StyledRef ref={props.pythonRef} />
      <Python />

      <StyledRef ref={props.rRef} />
      <R />

      <StyledRef ref={props.demoRef} />
      <Demo />

      <StyledRef ref={props.befejezesRef} />
      <Befejezes />

      <StyledRef ref={props.osszesitoTablazatRef} />
      <OsszesitoTablazat />
    </div>
  );
};

export default Docs;

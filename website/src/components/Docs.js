import React from "react";

import useNavbar from "../hooks/useNavbar";

import Bevezetes from "./docs/Bevezetes";
import Kovetelmenyek from "./docs/Kovetelemenyek"
import Munkamenet from "./docs/Munkamenet"
import Automl from "./docs/Automl";
import Python from "./docs/Python";
import R from "./docs/R";
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

      <StyledRef ref={props.kovetelmenyekRef} />
      <Kovetelmenyek />

      <StyledRef ref={props.munkamenetRef} />
      <Munkamenet />

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
    </div>
  );
};

export default Docs;

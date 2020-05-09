import React from "react";
import { Container } from "./styles";

const FilterButton = ({ children, removeFilter }) => {
  const remove = () => {
    removeFilter(children);
  };
  return (
    <Container>
      <span>{children}</span>
      <button onClick={remove}>X</button>
    </Container>
  );
};
export default FilterButton;

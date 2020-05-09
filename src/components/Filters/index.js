import React from "react";
import { Container, Content, ListOfFilters, Clear } from "./styles";
import FilterButton from "../FilterButton";

const Filters = ({ filters, removeFilter, clearFilters }) => {
  return (
    <Container>
      <Content>
        <ListOfFilters>
          {filters &&
            filters.map((filter) => (
              <FilterButton removeFilter={removeFilter} key={filter}>
                {filter}
              </FilterButton>
            ))}
        </ListOfFilters>
        <Clear onClick={clearFilters}>Clear</Clear>
      </Content>
    </Container>
  );
};
export default Filters;

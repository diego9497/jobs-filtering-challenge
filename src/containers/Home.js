import React, { useState } from "react";
import HomeComponent from "../components/Home";

const Home = (props) => {
  const [filters, setFilters] = useState([]);

  const addFilter = (filter) => {
    let i = filters.indexOf(filter);
    if (i !== -1) {
      return null;
    }
    setFilters([...filters, filter]);
  };

  const removeFilter = (filter) => {
    let newFilters = filters.filter((el) => el !== filter);
    setFilters(newFilters);
  };
  const clearFilters = () => {
    setFilters([]);
  };

  return (
    <HomeComponent
      filters={filters}
      addFilter={addFilter}
      removeFilter={removeFilter}
      clearFilters={clearFilters}
    />
  );
};
export default Home;

import React from "react";
import Layout from "../Layout";
import Jobs from "../../containers/Jobs";
import Filters from "../Filters";

const Index = ({ filters, addFilter, removeFilter, clearFilters }) => {
  return (
    <Layout>
      {filters.length > 0 && (
        <Filters
          filters={filters}
          clearFilters={clearFilters}
          removeFilter={removeFilter}
        />
      )}
      <Jobs filters={filters} addFilter={addFilter} />
    </Layout>
  );
};
export default Index;

import React from "react";
import JobCard from "../JobCard";
import { Container } from "./styles";
const Jobs = ({ jobs, addFilter }) => {
  return (
    <Container>
      {jobs ? (
        jobs.map((job) => (
          <JobCard {...job} addFilter={addFilter} key={job.id} />
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </Container>
  );
};
export default Jobs;

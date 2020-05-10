import React, { useState, useEffect, useMemo } from "react";
import JobsComponent from "../components/Jobs";
import data from "../../data.json";

const Jobs = ({ filters, addFilter }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs(data);
  }, []);

  useEffect(() => {
    setJobs(filterData(filters));
  }, [filters]);

  const filterData = (filters) => {
    let newData = data;
    if (filters.length === 0) {
      return data;
    } else {
      for (let i = 0; i < filters.length; i++) {
        newData = [...filterInData(newData, filters[i])];
      }
    }
    return newData;
  };

  const filterInData = (dataFiltered, filter) => {
    return dataFiltered.filter((job) => {
      let inLevel = job.level === filter;
      let inRole = job.role === filter;
      let inLang =
        job.languages && job.languages.some((lang) => lang === filter);
      let inTool = job.tools && job.tools.some((tool) => tool === filter);
      return inLevel || inRole || inLang || inTool;
    });
  };
  const ComponentMemoized = useMemo(
    () => <JobsComponent jobs={jobs} addFilter={addFilter} />,
    [jobs]
  );
  return ComponentMemoized;
};
export default Jobs;

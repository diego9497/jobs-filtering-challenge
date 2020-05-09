import React from "react";
import Badge from "../Badge";
import {
  Card,
  Logo,
  CompanyBadge,
  Info,
  Title,
  CompanyContainer,
  Resume,
} from "./styles";
const JobCard = ({
  company,
  logo,
  featured,
  new: isNew,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addFilter,
}) => {
  const addRoleFilter = () => {
    addFilter(role);
  };
  const addLevelFilter = () => {
    addFilter(level);
  };
  return (
    <Card>
      <Info>
        <Logo src={logo} alt={company} />
        <div>
          <CompanyContainer>
            <h3>{company}</h3>
            {isNew && <CompanyBadge className="light">NEW!</CompanyBadge>}
            {featured && <CompanyBadge className="dark">FEATURED</CompanyBadge>}
          </CompanyContainer>
          <Title>{position}</Title>
          <Resume>
            <span>{postedAt}</span>
            <span>{contract}</span>
            <span>{location}</span>
          </Resume>
        </div>
      </Info>
      <div>
        <Badge onClick={addRoleFilter}>{role}</Badge>
        <Badge onClick={addLevelFilter}>{level}</Badge>
        {languages &&
          languages.map((language) => (
            <Badge
              onClick={() => {
                addFilter(language);
              }}
              key={language}
            >
              {language}
            </Badge>
          ))}
        {tools &&
          tools.map((tool) => (
            <Badge
              onClick={() => {
                addFilter(tool);
              }}
              key={tool}
            >
              {tool}
            </Badge>
          ))}
      </div>
    </Card>
  );
};
export default JobCard;

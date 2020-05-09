import React from "react";
import { Button } from "./styles";
const Badge = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
export default Badge;

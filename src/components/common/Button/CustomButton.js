import React from "react";
import { Button } from "reactstrap";

const CustomButton = ({ text, style }) => {
  return <Button style={style}>{text}</Button>;
};

export default CustomButton;

import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>Global Speak School | {title}</title>
    </Helmet>
  );
};

export default Title;

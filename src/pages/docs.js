import React from "react";
import Link from "gatsby-link";
import Lincoln from 'react-lincoln'
import definition from '../spec/spec.js'

export default () => (
  <div>
      <Lincoln definition={definition} validate={true} initialSchemaTreeDepth={10} navigationMethodDisplayType="all" />
  </div>
);

import React from 'react';

const MetricData = ({ match }) => {
  const { city } = match.params;

  return (
    <div>
      <h1>Metric Details</h1>
      <h2>City: {city}</h2>
      <p>Number of views: 10</p>
    </div>
  );
};

export default MetricData;

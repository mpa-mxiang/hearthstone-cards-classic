import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MetricList = () => {
  const [metrics, setMetrics] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/air_pollution?appid=YOUR_API_KEY&country=${country}`
      );
      setMetrics(response.data.list);
    } catch (error) {
      console.error('Error fetching metrics:', error);
    }
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <h1>Air Pollution Metrics</h1>
      <label htmlFor="country">Country:</label>
      <input
        type="text"
        id="country"
        value={country}
        onChange={handleCountryChange}
      />

      <ul>
        {metrics.map((metric) => (
          <li key={metric.id}>{metric.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MetricList;

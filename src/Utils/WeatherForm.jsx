import React from 'react';
import Button from 'react-bootstrap/Button';

const WeatherForm = ({ city, handleInput, handleCityChange }) => {
  return (
    <form
      onSubmit={handleInput}
      className="d-flex justify-content-center p-4"
      style={{ width: '350px' }}
    >
      <input
        type="text"
        name="cityInput"
        value={city}
        onChange={handleCityChange}
        placeholder="Enter the city"
        className="form-control"
      />
      <div className="input-group-append">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default WeatherForm;

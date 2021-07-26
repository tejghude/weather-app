import React from "react";

import { Row, Col } from "rsuite";
import "./body.css";

export default function Mainbody(props) {
  const {
    location,
    temperature,
    description,
    region,
    country,
    wind_speed,
    pressure,
    precip,
    humidity,
    img
  } = props.weatherData;

  return (
    <div className="cont">
      <Row>
        <Col xs={24} sm={12} md={12} lg={12}>
          <div className="city">{location}</div>
          <div className="country">
            {region} , {country}
          </div>
          <div className="temp">
            {temperature} <span style={{ fontSize: "30px" }}>° C</span>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} className="rsec">
          <div className="box">
            <img src={img} alt="weather icon" className="weaicon" />
          </div>
          <br />
          {description}
        </Col>
      </Row>
      <br />
      <Row className="oinfo">
        <Col sm={12} lg={6} className="divi">
          Wind Speed
          <br /> <br />
          <div>
            <span className="val"> {wind_speed}</span>km/hr
          </div>
        </Col>

        <Col sm={12} lg={6} className="divi">
          Pressure
          <br /> <br />
          <div>
            <span className="val">{pressure}</span>millibar
          </div>
        </Col>

        <Col sm={12} lg={6} className="divi">
          Precipitation:
          <br /> <br />
          <div>
            <span className="val">{precip}</span>mm
          </div>
        </Col>

        <Col sm={12} lg={6} className="oinfoh">
          Humidity
          <br /> <br />
          <div>
            <span className="val">{humidity}</span>%
          </div>
        </Col>
      </Row>
    </div>
  );
}

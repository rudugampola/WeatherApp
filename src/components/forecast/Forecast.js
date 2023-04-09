import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemPanel,
  AccordionItemHeading,
  AccordionItemButton,
} from 'react-accessible-accordion';
import './forecast.css';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  //   console.log(forecastDays);

  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C /{' '}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>
                    Pressure
                    <img
                      className="grid-icon"
                      alt="humidity"
                      src="icons/icons8-pressure-gauge-48.png"
                    />{' '}
                  </label>
                  <label className="daily-data">{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>
                    Humidity{' '}
                    <img
                      className="grid-icon"
                      alt="humidity"
                      src="icons/icons8-humidity-48.png"
                    />{' '}
                  </label>
                  <label className="daily-data">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>
                    Clouds
                    <img
                      className="grid-icon"
                      alt="humidity"
                      src="icons/icons8-clouds-48.png"
                    />{' '}
                  </label>
                  <label className="daily-data">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>
                    Wind Speed{' '}
                    <img
                      className="grid-icon"
                      alt="wind"
                      src="icons/icons8-wind-48.png"
                    />{' '}
                  </label>
                  <label className="daily-data">{item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>
                    Sea Level
                    <img
                      className="grid-icon"
                      alt="humidity"
                      src="icons/icons8-low-tide-48.png"
                    />{' '}
                  </label>
                  <label className="daily-data">
                    {item.main.sea_level} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label>
                    Feels Like
                    <img
                      className="grid-icon"
                      alt="humidity"
                      src="icons/icons8-thermometer-48.png"
                    />{' '}
                  </label>
                  <label className="daily-data">
                    {Math.round(item.main.feels_like)}°C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;

import React from 'react';
import "./WorkSlide.css";


function WorkExperience({ logo, name, role, date, responsibilities }) {
  return (
    <div className="work-exp">
      <img
        src={logo}
        alt={name}
        className="image"
      />
      <div className="work-text">
        <div className="top-row">
          <div id="work-name">{name}</div>
        </div>
        <div id="work-role">{role}</div>
        <div id="work-date">{date}</div>
        <div className="work-content">
          {responsibilities.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;

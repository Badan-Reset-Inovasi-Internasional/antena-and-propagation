import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSatelliteDish,
  faCloudSunRain,
  faFighterJet,
  faWater,
  faHandHoldingMedical,
  faWaveSquare,
} from "@fortawesome/free-solid-svg-icons";
import outcomes from "./../../data/reset.json";

const iconMap = {
  "satellite-dish": faSatelliteDish,
  "cloud-sun-rain": faCloudSunRain,
  "fighter-jet": faFighterJet,
  water: faWater,
  "hand-holding-medical": faHandHoldingMedical,
  "wave-square": faWaveSquare,
};

function ResearchOutcomes() {
  return (
    <section className="outcomes" id="activities">
      <div className="container">
        <div className="title">
          <h4>Research Outcomes & Applications</h4>
        </div>
        <div className="description">
          <p>Exploring the Real-World Impact of Our Research</p>
        </div>
        <div className="details">
          <p>The research scope includes applications in:</p>
        </div>
        <div className="grid">
          {outcomes.map((item, idx) => (
            <div key={idx} className="card">
              <FontAwesomeIcon icon={iconMap[item.icon]} className="icon" />
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchOutcomes;

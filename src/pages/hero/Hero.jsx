import React from "react";

function Hero() {
  const handleScrollToMember = () => {
    const element = document.getElementById("member");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>Antena & Propagation Research Group</h1>
        </div>
        <div className="hero-button">
          <p>
            We focus on the design and analysis of efficient antenna systems and
            understanding how radio waves propagate. By exploring new
            technologies in propagation modeling and measurement, our research
            group contributes to the development of more optimal and robust
            wireless communication systems.
          </p>
          <button onClick={handleScrollToMember} className="btn">
            Our Member
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

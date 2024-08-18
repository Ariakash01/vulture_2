import React from "react";
import doc from "../../public/doc6.jpg";

const Hero = ({ title, imageUrl }) => {

 

 

  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h5>MEDI-HUB</h5>
        
          <p>
            medihub Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
          </p>
        </div>
        <div className="banner">
          <img src={doc} alt="hero" className="aaa animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;

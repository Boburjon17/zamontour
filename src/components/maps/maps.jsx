import React from "react";
import "./maps.scss"

const Maps = () => {
  return (
    <div className="maps-container">
      <div className="maps">
        <iframe className="iframe"
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d6275.710933220363!2d69.19658923360666!3d41.2880818866105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sTashkent%20City%20Department%20of%20Ecology%20and%20Environmental%20Protection%2C%2076R5%2B62V%2C%20100113%2C%20Tashkent!5e0!3m2!1suz!2s!4v1732873082725!5m2!1suz!2s"
          width="600"
          height="450"
          style={{border:"0"}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;

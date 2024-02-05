import React from 'react';

const GoogleMap = () => {
  return (
    <>
      <div className="container ptb-100">
        <div className="map-location">
          <iframe 
            src="https://www.google.com/maps/embed/v1/view?zoom=17&center=17.4575,78.3709&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8" 
            width="100%" 
            height="450" 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default GoogleMap;

import { useEffect } from "react";
import "./GoogleMap.css";

/* FOR USING GOOGLE MAP API UNCOMMENT THIS */
/* import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function GoogleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (

    <div className="google-map">
      <h1 className="sectionTitle">Google Map</h1>
<div className="g-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCT5xcbV5iiWedbU84Dl9ZMjN__iRlj8k0" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={27.717245} lng={85.323959} text="location" />
      </GoogleMapReact>
      </div>
    </div>
  );
}


 */

/* FOR USING GOOGLE LONGITUDE AND LATIDUGE UNCOMMENT THIS */

const GoogleMap = () => {
  useEffect(() => {
    const ifameData = document.getElementById("iframeId");
    // const lat = 27.69284;
    // const lon = 85.338374;
    const lat = 27.688354542728447;
    const lon = 85.33388159261095;
    ifameData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
  });

  return (
    <div className="google-map">
      <h1 className="sectionTitle">Google Map</h1>
      <div className="g-map">
        <iframe
          title="google map"
          id="iframeId"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

/* FOR USING SIMPLE GOOGLE MAP IFRAM HTML CODE */
/* 
const GoogleMap = () => {
  return (
    <div className="google-map">
      <h1 className="sectionTitle">Google Map</h1>
      <div className="g-map">
        <iframe
          width="810"
          height="480"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Panchakumari%20Marg,%20New%20Baneshwor&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
  );
};
*/
export default GoogleMap;

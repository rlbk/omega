import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function Maps() {
  return (
    <>
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={{
          lat: 19.01246,
          lng: 72.82846,
        }}
      />
    </>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCT5xcbV5iiWedbU84Dl9ZMjN__iRlj8k0",
})(Maps);

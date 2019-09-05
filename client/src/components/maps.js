import React, { useState } from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
} from "react-google-maps";
import * as doctorsData from "../data/better-doctor.json";
// import mapStyles from "./mapStyles";
// import Map from "./Map";

function Map() {

    const [selectDoctor, setSelectDoctor] = useState(null);

    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={{ lat: 42.360081, lng: -71.058884 }}
        >
            {doctorsData.data.map((doctor, index) => (
                <Marker
                    key={index}
                    position={{
                        lat: doctor.practices[0].lat,
                        lng: doctor.practices[0].lon
                    }}
                    onClick={(e) => {
                        console.log('doctor')
                        setSelectDoctor(doctor);
                    }}
                />
            ))}

            {selectDoctor && (
                <InfoWindow
                    position={{
                        lat: selectDoctor.practices[0].lat,
                        lng: selectDoctor.practices[0].lon
                    }}
                    onCloseClick={() => {
                        setSelectDoctor(null);
                    }}
                >
                    <div>
                        <h5>Doctor Info</h5>
                        <p>{selectDoctor.practices[0].name}</p>
                        <p> {selectDoctor.specialties[0].description}</p>
                        <p> {selectDoctor.specialties[0].actor}</p>
                        {/* <p> {selectDoctor.profile[0].bio}</p> */}
                        {/* <p>Lon: {selectDoctor.practices[0].lon}</p> */}
                    </div>
                </InfoWindow>

            )}
        </GoogleMap>
    );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapApp() {
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <WrappedMap googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
      libraries=geometry,drawing,places&key=${
                // process.env.REACT_APP_GOOGLE_KEY
                "AIzaSyA-P3ihziFeoj9j7repCs01gDNHZaMnmZ4"
                }`}

                loadingElement={<div style={{ height: `75%` }} />}
                containerElement={<div style={{ height: `75%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
}

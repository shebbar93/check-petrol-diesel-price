import { Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet'

const petrol = new Icon({
    iconUrl: '/fuel-pump.svg',
    iconSize: [25, 25]
});

const LocationMarker = ({ lat, lng, city, state, petrolPrice, dieselPrice, dieselChange, petrolChange }) => {
    return (
        <Marker position={[lat, lng]} icon={petrol}>
            <Popup>
                <div>
                    <h2>State : {state}</h2>
                    <h3>City : {city}</h3>
                    <p>Petrol : {petrolPrice} <span className={petrolChange > 0 ? "red_text" : "green_text"}> [ Change : {petrolChange} ] {petrolChange > 0 ? <span class="iconify" data-icon="bi:arrow-up" data-inline="false"></span> : <span class="iconify" data-icon="bi:arrow-down" data-inline="false"></span>} </span>  </p>
                    <p>Diesel : {dieselPrice} <span className={dieselChange > 0 ? "red_text" : "green_text"}>[ Change : {dieselChange} ] {dieselChange > 0 ? <span class="iconify" data-icon="bi:arrow-up" data-inline="false"></span> : <span class="iconify" data-icon="bi:arrow-down" data-inline="false"></span>} </span></p>
                </div>
            </Popup>
        </Marker>
    )
}

export default LocationMarker

import { MapContainer, TileLayer } from "react-leaflet";
import LocationMarker from './LocationMarker'
import CityInfo from '../CityInfo.json'

const Map = ({ eventData, center, zoom }) => {

    const markers = eventData.map((ev, index) => {
        if (CityInfo[ev.cityState]) {
            return <LocationMarker
                key={index}
                city={ev.cityState}
                state={CityInfo[ev.cityState].admin_name}
                lat={CityInfo[ev.cityState].lat}
                lng={CityInfo[ev.cityState].lng}
                dieselPrice={ev.dieselPrice}
                dieselChange={ev.dieselChange}
                petrolPrice={ev.petrolPrice}
                petrolChange={ev.petrolChange} />

        }
        return null
    })
    return (
        <div className='map'>
            <MapContainer center={[center.lat, center.lng]} zoom={zoom}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markers}
            </MapContainer>
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 28.7041,
        lng: 77.1025
    },
    zoom: 5
}
export default Map

import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const Map = () => {
  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  })

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return(
    isLoaded && <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        />
  )
}

export default Map
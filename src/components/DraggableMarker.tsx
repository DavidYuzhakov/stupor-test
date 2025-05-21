import { useMemo, useRef, useState } from 'react'
import { Marker } from 'react-leaflet'
import L from 'leaflet'

export const DraggableMarker = () => {
  const [position, setPosition] = useState({ lat: 51.505, lng: -0.1 })
  const markerRef = useRef<L.Marker | null>(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const latLng = marker.getLatLng()
          setPosition(latLng)
          console.log('New Position:', latLng)
        }
      },
    }),
    []
  )

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    />
  )
}

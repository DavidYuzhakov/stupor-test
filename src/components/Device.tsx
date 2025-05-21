import { Marker, Popup, useMap } from 'react-leaflet'
import { divIcon } from 'leaflet'
import type { IDevice } from '../models/IDevice'

interface DeviceProps {
  id: string
  name: string
  lat: number
  lon: number
  model: 'basic' | 'advanced' | 'special'
  status: 'on' | 'off'
  children?: IDevice[]
  isSmall?: boolean
}

const getModelIcon = (
  model: 'basic' | 'advanced' | 'special',
  isSmall = false
) => {
  return divIcon({
    className: `custom-marker ${model} ${isSmall ? 'small' : ''}`,
    iconSize: isSmall ? [15, 15] : [20, 20],
    html: `<div></div>`,
  })
}

export const Device = ({
  lat,
  lon,
  name,
  model,
  status,
  isSmall,
}: DeviceProps) => {
  const map = useMap()

  const dblclickHandler = () => {
    map.flyTo([lat, lon], map.getZoom() + 1)
  }
  return (
    <Marker
      position={[lat, lon]}
      eventHandlers={{ dblclick: dblclickHandler }}
      icon={getModelIcon(model, isSmall)}
    >
      <Popup>
        <ul>
          <li>Name: {name}</li>
          <li>Model: {model}</li>
          <li>Status: {status}</li>
        </ul>
      </Popup>
    </Marker>
  )
}

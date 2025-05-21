import { MapContainer, TileLayer } from 'react-leaflet'
import devices from '../data.json'
import type { IDevice } from '../models/IDevice'
import { Device } from './Device'
import React from 'react'
import { DraggableMarker } from './DraggableMarker'

export const DeviceMap = () => {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {(devices as IDevice[]).map((device) => (
        <React.Fragment key={device.id}>
          {device.children?.map((d) => (
            <Device key={d.id} {...d} isSmall />
          ))}
          <Device {...device} />
        </React.Fragment>
      ))}
      <DraggableMarker />
    </MapContainer>
  )
}

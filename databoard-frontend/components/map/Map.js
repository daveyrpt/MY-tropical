'use client';

import { useEffect, useRef, useState } from 'react';

import { MapContainer, TileLayer, Marker, Popup, GeoJSON} from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import style from '@/app/page.module.css';

import {icon} from "leaflet";


//Leaflet marker cluster section
import 'leaflet.markercluster';

import 'leaflet/dist/leaflet.css'
import 'react-leaflet-markercluster/styles'

import location_map from '@/public/location_map';

export default function Map(){


const ICON = icon({
  iconUrl: "/marker-icon-2x.png",
  iconSize: [32, 45],
  iconAnchor: [5,32],
})

    return(
        <div>
            <MapContainer 
                className ={style.map} 
                center={[3.465230, 109.925301]} 
                zoom={6} 
                scrollWheelZoom={false}
                maxZoom={10}
                minZoom={1}>
            <TileLayer
                attribution= '© OpenStreetMap'
                url ='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            
            <MarkerClusterGroup>
            {location_map.map((marker) => (
                <Marker key={marker.id} icon={ICON} position={[marker.Longitude, marker.Latitude]}>
                    <Popup>{marker.NamaTempat} <br/> {marker.Negeri}</Popup>
                </Marker>
            ))}  
            </MarkerClusterGroup>

            </MapContainer>
        </div>
    )
}
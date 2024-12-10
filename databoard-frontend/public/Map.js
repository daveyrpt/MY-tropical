'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import style from '../../app/page.module.css';

import {MarkerCluster} from 'leaflet.markercluster'

import {icon} from 'leaflet'


import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default function Map(){

const locations =[
    {id: 1, lat: 116.6276615, lng: 6.307162073, title: 'Kinabalu Geo Park'},
    {id: 2, lat: 110.3556761, lng: 1.558256253, title: 'Kuching Statue'},
    {id: 3, lat: 102.4314841, lng: 4.774511244, title: 'Taman Negara Pahang'},
    {id: 4, lat: 103.7391064, lng: 1.485229395, title: 'Taman Merdeka JB'},
];

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: markerIcon.src,
    iconRetinaUrl: markerIcon2x.src,
    shadowUrl: markerShadow.src,
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

            <Marker position={[116.6276615,6.307162073]}></Marker>
            </MapContainer>
        </div>
    )
}

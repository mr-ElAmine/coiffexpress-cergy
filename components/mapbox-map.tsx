"use client";

import Map, {
  Marker,
  NavigationControl,
  GeolocateControl,
  ScaleControl,
  LngLatBoundsLike,
} from "react-map-gl/mapbox";
import "mapbox-gl/dist/mapbox-gl.css";
import { Scissors } from "lucide-react";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const SALON = {
  longitude: 2.0758,
  latitude: 49.0386,
};

const MAP_BOUNDS: LngLatBoundsLike = [
  [2.05, 49.02],
  [2.1, 49.06],
];

export function MapboxMap() {
  if (!TOKEN) {
    return (
      <div className="w-full h-full bg-base-200 flex items-center justify-center text-neutral/40 text-sm border border-base-300">
        Carte non disponible — ajoutez votre token Mapbox dans{" "}
        <code className="bg-base-300 px-1.5 py-0.5 text-xs ml-1">
          .env.local
        </code>
      </div>
    );
  }

  return (
    <Map
      initialViewState={{
        longitude: SALON.longitude,
        latitude: SALON.latitude,
        zoom: 15.5,
        pitch: 45,
        bearing: -20,
      }}
      maxBounds={MAP_BOUNDS}
      style={{ width: "100%", height: "100%", minHeight: 400 }}
      mapStyle="mapbox://styles/mapbox/dark-v11"
      mapboxAccessToken={TOKEN}
      scrollZoom={false}
      dragRotate={true}
      cooperativeGestures
    >
      <NavigationControl
        position="top-right"
        showCompass={true}
        visualizePitch={true}
      />
      <ScaleControl position="bottom-left" unit="metric" maxWidth={80} />
      <GeolocateControl
        position="top-right"
        trackUserLocation={false}
        showUserLocation={true}
        showAccuracyCircle={true}
      />

      {/* Custom Marker */}
      <Marker
        longitude={SALON.longitude}
        latitude={SALON.latitude}
        anchor="bottom"
      >
        <div className="flex flex-col items-center group">
          <div className="relative">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg shadow-secondary/30 border-2 border-white/20 group-hover:scale-110 transition-transform">
              <Scissors className="w-5 h-5 text-white" />
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-secondary rotate-45 -z-10" />
          </div>
        </div>
      </Marker>
    </Map>
  );
}

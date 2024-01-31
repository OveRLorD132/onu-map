import { Component } from "@angular/core";

import { tileLayer, latLng, Map, Marker, icon, MapOptions, LayerGroup, layerGroup } from 'leaflet';
import { BuildingCoords } from "../..";

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent {
  options : MapOptions  = {} ;
  coordsList : Array<BuildingCoords> = [
    {
      name: 'Odesa Mechnikov National University',
      coords: {
        lat: 46.487613027354506,
        lng: 30.73116033949203
      }
    },
    {
      name: 'Odesa Mechnikov National University',
      coords: {
        lat: 46.45507017737857,
        lng: 30.75971575243398
      }
    },
  ]
  pickedCoords = 0;
  map : Map | undefined;
  layerGroup : LayerGroup = layerGroup();
  ngOnInit() {
    this.options = {
      layers: [
        tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
      zoom: 30,
      center: latLng(this.coordsList[this.pickedCoords].coords.lat, this.coordsList[this.pickedCoords].coords.lng)
    };
  }
  private setMarker() {
    if(!this.map) return;
    this.layerGroup.clearLayers();
    let marker = new Marker([this.coordsList[this.pickedCoords].coords.lat, this.coordsList[this.pickedCoords].coords.lng])
    marker.addTo(this.layerGroup);
  }
  private setMapOptions() {
    if(!this.map) return;
    this.map.options.center = this.coordsList[this.pickedCoords].coords;
    this.map.setView(this.coordsList[this.pickedCoords].coords);
  }
  onMapReady(map : Map) {
    this.map = map;
    this.layerGroup.addTo(map);
    this.setMarker();
  }
  setIndex(index : number) {
    this.pickedCoords = index;
    this.setMapOptions();
    this.setMarker();
  }
}
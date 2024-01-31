import { LatLng } from "leaflet";

interface MenuStrip {
  name : string,
  elements : Array<MenuStrip>
}

interface BuildingInfo {
  name : string,
  imageIndex : number
}

interface ImagesSet {
  [key: string] : Array<number>;
}

type ScrolledSide = 'left' | 'none' | 'right' | 'no-scroll';

type SortType = 'by-name' | 'by-order';

interface BuildingCoords {
  name : string,
  coords : LatLngLiteral
}
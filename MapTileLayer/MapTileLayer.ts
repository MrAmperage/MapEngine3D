import MapBaseLayer from '../MapBaseLayer/MapBaseLayer';
import { MapTileLayerOptions } from './MapTileLayerTypes';

export default class MapTileLayer extends MapBaseLayer {
  constructor(Id: string, Options: MapTileLayerOptions) {
    super(Id, Options);
  }
}

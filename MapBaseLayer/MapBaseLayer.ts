import MapEngine3D from '../MapEngine3D/MapEngine3D';
import { MapBaseLayerOptions } from './MapBaseLayerTypes';

/*Базовый слой для карты*/
export default abstract class MapBaseLayer {
  Id: string;
  Options: MapBaseLayerOptions;
  constructor(Id: string, Options: MapBaseLayerOptions) {
    this.Id = Id;
    this.Options = Options;
  }
  InitLayer() {}
}

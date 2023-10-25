import { MapBaseLayerOptions } from './MapBaseLayerTypes';

/*Базовый слой для карты*/
export default abstract class MapBaseLayer {
  constructor(Id: string, Options: MapBaseLayerOptions) {
    this.Id = Id;
    this.Options = Options;
  }
  private Id: string;
  private Options: MapBaseLayerOptions;

  get GetId() {
    return this.Id;
  }
  get GetOptions() {
    return this.Options;
  }
}

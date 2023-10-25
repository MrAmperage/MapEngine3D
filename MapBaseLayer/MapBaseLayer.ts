import { BaseLayerOptions } from './MapBaseLayerTypes';

/*Базовый слой для карты*/
export default abstract class MapBaseLayer {
  constructor(Id: string, Options: BaseLayerOptions) {
    this.Id = Id;
    this.Options = Options;
  }
  private Id: string;
  private Options: BaseLayerOptions;

  get GetId() {
    return this.Id;
  }
  get GetOptions() {
    return this.Options;
  }
}

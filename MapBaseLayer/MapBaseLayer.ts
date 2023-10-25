import MapEngine3D from '../MapEngine3D/MapEngine3D';
import { BaseLayerOptions } from './MapBaseLayerTypes';

/*Базовый слой для карты*/
export default abstract class MapBaseLayer {
  Id: string;
  Options: BaseLayerOptions;
  constructor(
    Id: string,
    Options: BaseLayerOptions,
    //TODO доставить сюда через DI
    private MapEngine3D: MapEngine3D
  ) {
    this.Id = Id;
    this.Options = Options;
  }
  InitLayer() {
    this.InitLayer();
  }

  private InitRender() {}
}

import { MapEngine3DOptions } from './MapEngine3DTypes';

export default class MapEngine3D {
  Options: MapEngine3DOptions;
  Container: HTMLElement;
  constructor(Container: HTMLElement | string, Options: MapEngine3DOptions) {
    this.Options = Options;
    this.InitContainer(Container);
  } /*Подготовка контейнера для карты */
  InitContainer(Container: HTMLElement | string) {
    if (Container instanceof HTMLElement) {
      this.Container = Container;
    } else {
      const ContainerObject = document.getElementById(Container);
      if (ContainerObject !== null) {
        this.Container = ContainerObject;
      } else {
        throw new Error('Не найден контейнер для карты');
      }
    }
  }

  /*Получить все слои карты */
  get GetLayers() {
    return this.Options.Layers.concat(this.Options.BaseLayer);
  }
  /*Получить только базовый слой карты */
  get GetBaseLayer() {
    return this.Options.BaseLayer;
  }

  InitLayer() {}
}

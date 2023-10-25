import { MapEngine3DOptions } from './MapEngine3DTypes';

export default class MapEngine3D {
  Options: MapEngine3DOptions;
  Container: HTMLElement;
  constructor(Container: HTMLElement | string, Options: MapEngine3DOptions) {
    MapEngine3D.InitContainer(this.Container, Container);
    this.Options = Options;
  } /*Подготовка контейнера для карты */
  static InitContainer(
    ContainerStorage: HTMLElement,
    Container: HTMLElement | string
  ) {
    if (Container instanceof HTMLElement) {
      ContainerStorage = Container;
    } else {
      const ContainerObject = document.getElementById(Container);
      if (ContainerObject !== null) {
        ContainerStorage = ContainerObject;
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

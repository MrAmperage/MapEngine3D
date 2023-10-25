import { MapEngine3DOptions } from './MapEngine3DTypes';

export default class MapEngine3D {
  Container: HTMLElement;
  constructor(Container: HTMLElement | string, Options: MapEngine3DOptions) {
    MapEngine3D.InitContainer(this.Container, Container);
  }
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
}

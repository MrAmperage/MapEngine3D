import MapBaseLayer from '../MapBaseLayer/MapBaseLayer';
import { BaseLayerOptions } from '../MapBaseLayer/MapBaseLayerTypes';
import BaseGeometry from './Geometry/BaseGeometry/BaseGeometry';

export default class MapVectorLayer extends MapBaseLayer {
  Geometries: BaseGeometry[];
  constructor(
    Id: string,
    Geometries: BaseGeometry[],
    Options: BaseLayerOptions
  ) {
    super(Id, Options);
    this.Geometries = Geometries;
  }
}

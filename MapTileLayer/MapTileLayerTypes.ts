import { MapBaseLayerOptions } from '../MapBaseLayer/MapBaseLayerTypes';

export type MapTileLayerOptions = MapBaseLayerOptions & {
  URLTemplate: string;
};

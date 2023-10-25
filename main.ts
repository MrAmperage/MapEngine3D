import MapEngine3D from '../MapEngine3D/MapEngine3D/MapEngine3D';
import MapTileLayer from './MapTileLayer/MapTileLayer';
window.onload = () => {
  const Container = document.getElementById('Map');
  const MapObect = new MapEngine3D(Container, {
    Layers: [],
    Center: [0, 0],
    BaseLayer: new MapTileLayer('TileLayer', {
      Zindex: 0,
      Zoom: 0,
      URLTemplate: '',
    }),
  });
  console.log(MapObect);
};

import { Colors, Controls } from 'flume';
import { Vector2Control } from '../controls';

const vec2 = {
  type: 'vector2',
  name: 'vector2',
  label: 'Vector 2  Value',
  color: Colors.red,
  controls: [Controls.custom({ ...Vector2Control })],
};

export default vec2;

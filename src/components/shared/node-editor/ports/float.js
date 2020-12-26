import { Colors, Controls } from 'flume';

const float = {
  type: 'float',
  name: 'float',
  label: 'Float Value',
  color: Colors.green,
  controls: [
    Controls.number({
      name: 'float',
      label: 'Float Value',
    }),
  ],
};

export default float;

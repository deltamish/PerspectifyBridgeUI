import { FlumeConfig, Colors, Controls } from 'flume';
// use builder for differnt types aka material and state manager
const config = new FlumeConfig();
config
  .addPortType({
    type: 'string',
    name: 'string',
    label: 'Text',
    color: Colors.red,
    controls: [
      Controls.text({
        name: 'string',
        label: 'Texvbvbvt',
      }),
      Controls.text({
        name: 'string2',
        label: 'Texvbvbvt',
      }),
    ],
  })
  .addNodeType({
    type: 'string',
    label: 'Text op',
    description: 'Outputs a string of text',
    inputs: (ports) => [ports.string()],
    outputs: (ports) => [ports.string()],
  });

export default config;

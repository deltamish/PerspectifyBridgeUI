import { FlumeConfig, Colors, Controls } from 'flume';
import { floatPort, vec2Port } from './ports';
import { floatNode, vornoiGeneratorNode } from './nodes';
// use builder for differnt types aka material and state manager
const config = new FlumeConfig();
config
  .addPortType(floatPort)
  .addPortType(vec2Port)
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
  .addPortType({
    type: 'string2',
    name: 'Name2',
    label: 'Text',
    color: Colors.green,
    controls: [
      Controls.text({
        name: 'string3',
        label: 'p',
      }),
      Controls.text({
        name: 'string2',
        label: 'Texvbvbvt',
      }),
    ],
  })
  .addNodeType(vornoiGeneratorNode)
  .addNodeType(floatNode)
  .addNodeType({
    type: 'string',
    label: 'Text op',
    description: 'Outputs a string of text',
    inputs: (ports) => [ports.string(), ports.string2()],
    outputs: (ports) => [ports.string()],
  });

export default config;

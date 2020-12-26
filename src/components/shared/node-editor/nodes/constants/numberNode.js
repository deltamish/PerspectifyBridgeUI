const numberNode = {
  type: 'number',
  label: 'float',
  description: 'Outputs a number value',
  initialWidth: 160,
  inputs: (ports) => [ports.float()],
  outputs: (ports) => [ports.float()],
};

export default numberNode;

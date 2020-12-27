const vornoiGenerator = {
  type: 'vornoi',
  label: 'vornoi generator',
  description: 'Outputs a vornoi texture',
  initialWidth: 160,
  inputs: (ports) => [ports.vector2({ name: 'scale', label: 'scale' })],
  outputs: (ports) => [ports.vector2({ name: 'scale', label: 'scale' })],
};

export default vornoiGenerator;

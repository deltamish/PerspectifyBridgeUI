/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react';
import { NodeEditor } from 'flume';
import config from './config';

// https://flume.dev/docs/logic-nodes
const SimpleEditor = () => {
  const [nodes, setNodes] = useState({});
  useEffect(() => {
    // eslint-disable-next-line prettier/prettier
     // console.log('Nodes changed');
    // console.log(nodes);
    const nodeJson = JSON.stringify(nodes);
    // console.log(nodeJson);
    const objectFromJSON = JSON.parse(nodeJson);
    const areequal = objectFromJSON === nodes;
    // console.log(areequal);
    // console.log(objectFromJSON);
  }, [nodes]);

  return (
    <NodeEditor
      portTypes={config.portTypes}
      nodeTypes={config.nodeTypes}
      nodes={nodes}
      onChange={setNodes}
    />
  );
};
export default SimpleEditor;

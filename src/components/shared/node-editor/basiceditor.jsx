import React from 'react';
import { NodeEditor } from 'flume';
import config from './config';

// https://flume.dev/docs/logic-nodes
const SimpleEditor = () => {
  return (
    <NodeEditor portTypes={config.portTypes} nodeTypes={config.nodeTypes} />
  );
};
export default SimpleEditor;

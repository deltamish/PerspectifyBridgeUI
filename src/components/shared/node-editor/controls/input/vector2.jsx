/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
/* eslint-disable react/react-in-jsx-scope */
import { Controls } from 'flume';
import React from 'react';
import {
  HStack,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const Vector2 = (data, onChange) => {
  return (
    <HStack spacing="12px">
      <NumberInput
        // onChange={onChange}
        defaultValue={15}
        precision={2}
        step={0.2}
        value={data.x}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Input width="48px" />
      {() => {
        // console.log('Render');
      }}
    </HStack>
  );
};
const vec2contrl = {
  name: 'vector2',
  label: 'Vector 2 Input',
  defaultValue: { x: 0, y: 0 },
  render: (data, onChange) => <Vector2 data={data} onChange={onChange} />,
};

export default vec2contrl;

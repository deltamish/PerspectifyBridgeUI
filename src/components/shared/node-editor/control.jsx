/* eslint-disable no-console */
/* eslint-disable prefer-spread */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
import React from 'react';
import { Control } from 'rete';

class MyReactControl extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {};

  componentDidMount() {
    this.setState({
      name: this.props.name,
    });
    console.log(this.props);
    this.props.putData(this.props.id, this.props.name);
  }

  onChange(event) {
    this.props.putData(this.props.id, event.target.value);
    this.props.emitter.trigger('process');
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    return (
      <input value={this.state.name} onChange={this.onChange.bind(this)} />
    );
  }
}

export class MyControl extends Control {
  constructor(emitter, key, name) {
    super(key);
    this.render = 'react';
    this.component = MyReactControl;
    this.props = {
      emitter,
      id: key,
      name,
      // eslint-disable-next-line prefer-rest-params
      putData: () => this.putData.apply(this, arguments),
    };
  }
}

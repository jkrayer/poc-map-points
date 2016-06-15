'use strict';

import React from 'react';
import PinActions from '../../actions/pins-action-creator.jsx';

export default class BtnPin extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPin = this.handleAddPin.bind(this);
    this.addPin = this.addPin.bind(this);
    this.state = {
      addPinOn: false
    };
  }
  handleAddPin () {
    let { addPinOn } = this.state;

    //ignore second click
    if (addPinOn) {
      return;
    }
    //change mouse cursor
    this.setState({
      addPinOn: true
    });
    //listen for next click event
    document.addEventListener('mousedown', this.addPin);
    //add pin at the selected location
  }
  addPin (event) {
    let pin;

    this.setState({
      addPinOn: false
    });

    if (this.props.pin) {
      pin = Object.assign({}, this.props.pin, {x: event.offsetX, y: event.offsetY});
      PinActions.update(pin);
    } else {
      pin = {
        mapId: this.props.mapId,
        x: event.offsetX,
        y: event.offsetY
      };
      PinActions.add(pin);
    }

    document.removeEventListener('mousedown', this.addPin);
  }
  render () {
    //let wrapperClass = '';
    let btnClass = '';

    if (this.state.addPinOn) {
      //wrapperClass = ' cursor-pin';
      btnClass = 'btn-state-down';
    }
    //<div className={"location-map-wrapper" + wrapperClass}>

    return (
      <button
          className={btnClass}
          onClick={this.handleAddPin}
          type="button"
      >
          {this.props.text}
      </button>
    );
  }
}

BtnPin.propTypes = {
  mapId: React.PropTypes.string,
  pin: React.PropTypes.shape({}),
  text: React.PropTypes.string.isRequired
};

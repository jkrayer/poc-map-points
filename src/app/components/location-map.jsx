'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MapActions from '../../actions/maps-action-creator.jsx';
import PinActions from '../../actions/pins-action-creator.jsx';
import PinContainer from './pin-container.jsx';
import { Link } from 'react-router';

export default class LocationMap extends React.Component {
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
    let pin = {
      mapId: this.props.locationMap._id,
      x: event.offsetX,
      y: event.offsetY
    };

    this.setState({
      addPinOn: false
    });

    PinActions.add(pin);

    document.removeEventListener('mousedown', this.addPin);
  }
  render () {
    let { imagePath, mapName } = this.props.locationMap;
    let wrapperClass = '';
    let btnClass = '';

    if (this.state.addPinOn) {
      wrapperClass = ' cursor-pin';
      btnClass = 'btn-state-down';
    }
    return (
      <div className={"location-map-wrapper" + wrapperClass}>
        <div className="control-panel">
          <Link to="/">{"Home"}</Link>
          <button
              className={btnClass}
              onClick={this.handleAddPin}
              type="button"
          >
              {"Add Pin"}
          </button>
        </div>
        <PinContainer mapId={this.props.locationMap._id} />
        <img
            alt={mapName}
            src={imagePath}
        />
      </div>
    );
  }
}

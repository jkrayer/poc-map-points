'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

export default class LocationMap extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddPin = this.handleAddPin.bind(this);
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
      addPinOn: !addPinOn
    });
    //listen for next click event
    window.addEventListener('mousedown.addPin', this.addPin);
    //add pin at the selected location
  }
  addPin (event) {
    console.log(31, event);

    //window.removeEventListener('mousedown.addPin', this.addPin);
  }
  render () {
    let { imagePath, mapName } = this.props.locationMap;
    let wrapperClass = null;
    let btnClass = null;

    if (this.state.addPinOn) {
      let wrapperClass = ' cursor-pin';
      let btnClass = 'btn-state-down';
    }

    return (
      <div className={"location-map-wrapper" + wrapperClass}>
        <div className="control-panel">
          <button
              className={btnClass}
              onClick={this.handleAddPin}
              type="button"
          >
             {"Add Pin"}
          </button>
        </div>
        <img
            alt={mapName}
            src={imagePath}
        />
      </div>
    );
  }
}

'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import MapActions from '../../actions/maps-action-creator.jsx';
import PinActions from '../../actions/pins-action-creator.jsx';
import PinContainer from './pin-container.jsx';
import BtnPin from './btn-pin.jsx';
import { Link } from 'react-router';

export default class LocationMap extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    let { imagePath, mapName } = this.props.locationMap;

    return (

      <div className="location-map-wrapper">
        <div className="control-panel">
          <Link to="/">{"Home"}</Link>
          <BtnPin text="Add Pin" mapId={this.props.locationMap._id} />
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

'use strict';

import React from 'react';
import PinActions from '../../actions/pins-action-creator.jsx';

export default class MapPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      show: false
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleToggleContent = this.handleToggleContent.bind(this);
  }
  handleBlur (event) {
    var obj = Object.assign({}, this.props, {content: this.state.content});
    PinActions.update(obj);
  }
  handleChange (event) {
    this.setState({
      content: event.target.value
    });
  }
  handleToggleContent () {
    this.setState({
      show: !this.state.show
    });
  }
  render () {
    let { x, y } = this.props;
    let pinStyle = {
      left: x,
      top: y
    };
    let contentStyle = {
      display: this.state.show ? 'block' : 'none',
      left: x,
      top: y
    };

    return (
      <div className="map-pin-wrapper">
        <div
            className="map-pin"
            onClick={this.handleToggleContent}
            style={pinStyle}
        ></div>
        <div
            className="map-pin-content"
            style={contentStyle}
        >
          <textarea
              onBlur={this.handleBlur}
              onChange={this.handleChange}
              value={this.state.content}
          >
          </textarea>
        </div>
      </div>
    );
  }
}

MapPin.propTypes = {
  _id: React.PropTypes.string,
  content: React.PropTypes.string,
  mapId: React.PropTypes.string,
  x: React.PropTypes.number,
  y: React.PropTypes.number
};

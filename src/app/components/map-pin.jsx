'use strict';

import React from 'react';
import PinActions from '../../actions/pins-action-creator.jsx';
import Marked from 'marked';

function rawMarkup (str) {
  var rawMarkup = Marked(str, {sanitize: true});
  return { __html: rawMarkup };
}

export default class MapPin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      editing: false,
      show: false
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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
  handleDelete () {
    PinActions.delete(this.props._id);
  }
  handleEdit () {
    this.setState({
      editing: !this.state.editing
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
    let content = (this.state.editing)
      ? <textarea onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.content}></textarea>
      : <div dangerouslySetInnerHTML={rawMarkup(this.state.content)} />;

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
          <div className="map-pin-controls">
            <button
                onClick={this.handleDelete}
                type="button"
            >{"Delete Pin"}
            </button>
            <button
                onClick={this.handleEdit}
                type="button"
            >{"Edit"}
            </button>
          </div>
          {content}
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

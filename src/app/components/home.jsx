'use strict';

import React from 'react';
import { Link } from 'react-router'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <ul>
        {
          this.props.maps.map( m => <li key={m._id}><Link to={'/maps/' + m.urlSafeName}>{m.mapName}</Link></li>)
        }
      </ul>
    );
  }
}

Home.propTypes = {
  maps: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};

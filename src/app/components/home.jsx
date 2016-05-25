'use strict';

import React from 'react';
import { Link } from 'react-router'
import Input from './input.jsx';
import { objectifyForm } from '../helpers/forms';
import { urlSafeString } from '../helpers/strings';
import MapActions from '../../actions/maps-action-creator.jsx';
import Delete from './delete.jsx';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    let map = objectifyForm(event.target);
    map.urlSafeName = urlSafeString(map.mapName);
    MapActions.add(map);
  }
  render () {
    let lis = this.props.maps.map( (m) => {
      return (
        <li key={m._id}>
          <Link to={'/maps/' + m._id}>{m.mapName}</Link>
          <Delete id={m._id} />
        </li>
      );
    });

    return (
      <div className="home-wrapper">
        <form onSubmit={this.handleSubmit}>
          <Input
              label={'Map Name:'}
              name={'mapName'}
          />
          <Input
              label={'Image Path:'}
              name={'imagePath'}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {lis}
        </ul>
      </div>
    );
  }
}

Home.propTypes = {
  maps: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};

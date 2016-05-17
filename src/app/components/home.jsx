'use strict';

import React from 'react';
import { Link } from 'react-router'
import Input from './input.jsx';
import { objectifyForm } from '../helpers/forms';
import { urlSafeString } from '../helpers/strings';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit (event) {
    event.preventDefault();
    let data = objectifyForm(event.target);
    data.urlSafeName = urlSafeString(data.mapName);
    //pass to server
    //optimistic updates
  }
  render () {
    let lis = this.props.maps.map( (m) => {
      return (
        <li key={m._id}>
          <Link to={'/maps/' + m.urlSafeName}>{m.mapName}</Link>
        </li>
      );
    });

    return (
      <div>
        <ul>
          {lis}
        </ul>
        <form onSubmit={this.handleSubmit}>
          <Input name={'mapName'} label={'Map Name:'} />
          <Input name={'imagePath'} label={'Image Path:'} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

Home.propTypes = {
  maps: React.PropTypes.arrayOf(
    React.PropTypes.shape({})
  )
};

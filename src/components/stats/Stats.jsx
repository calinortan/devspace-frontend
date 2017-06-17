import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Pie} from 'react-chartjs';

export default class StatsRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const options = {
      outerRadius: 300
    }
    const data = [
      {
        color: '#F7464A',
        highlight: '#FF5A5E',
        label: 'RED',
        value: 203.4
      }
    ]
    return <section className={'StatsRoute'}>
      <h2>Stats Route</h2>
      <Pie data={data} options={options} width="300" height="300"/>
    </section>
  }
}

StatsRoute.propTypes = {
  user: PropTypes.object,
  hasNewMessages: PropTypes.bool,
  hasNotifications: PropTypes.bool
}
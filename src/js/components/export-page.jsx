import { connect } from 'react-redux';
import React from 'react';

const mapStateToProps = state => ({
  rooms: state.rooms
});

const component = ({ rooms }) =>
  <pre>
    <code>
      {JSON.stringify(rooms.toJS())}
    </code>
  </pre>;

export const ExportPage = connect(mapStateToProps)(component);

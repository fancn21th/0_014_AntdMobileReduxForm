import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Register from '../Register';
import LngSwitch from '../LngSwitch';

const App = ({ store }) => (
  <Provider store={store}>
    <div style={{ padding: '0.3rem 0' }}>
      <LngSwitch />
      <Register />
    </div>
  </Provider>
)

App.propTyps = {
  store: PropTypes.object.isRequired,
}

export default App;
